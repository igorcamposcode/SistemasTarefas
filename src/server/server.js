const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { Usuario, Tarefa, Prioridade, Documento, Estado } = require('./models');
const sequelize = require("./database"); // Conexão com o banco
const jwt = require("jsonwebtoken")
const SECRET_KEY = 'ci@tarefassystem2024b'// Substitua por uma chave segura
const app = express();
const PORT = 3000;

// Middleware para habilitar CORS
app.use(cors({
  origin: 'http://localhost:4200', // Frontend Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware para processar JSON
app.use(express.json());

// Endpoint de login
app.post('/api/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verificar se o email existe no banco
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Comparar a senha fornecida com o hash armazenado
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha inválida.' });
    }

    // Gerar um token JWT
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      SECRET_KEY,
      { expiresIn: '2h' } // Token expira em 2 horas
    );

    res.status(200).json({
      message: 'Login bem-sucedido.',
      token,
    });
  } catch (error) {
    console.error('Erro ao efetuar login:', error);
    res.status(500).json({ error: 'Erro ao efetuar login.', details: error.message });
  }
});

function autenticarToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido.' });
    }

    req.usuario = decoded; // Dados do token disponíveis na requisição
    next();
  });
}

app.get('/api/usuario', autenticarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findAll();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.', details: error.message });
  }
});

// Endpoint para recuperação de senha
app.post('/api/recuperar-senha', async (req, res) => {
  try {
    const { email, senha, checkPassword } = req.body;

    // Verificar se o email existe no banco de dados
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: 'E-mail não cadastrado.' });
    }

    // Verificar se as senhas coincidem
    if (senha !== checkPassword) {
      return res.status(400).json({ error: 'As senhas não coincidem.' });
    }

    // Hash da nova senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Atualizar a senha no banco de dados
    await Usuario.update({ senha: senhaHash }, { where: { email } });

    res.status(200).json({ message: 'Senha atualizada com sucesso.' });
  } catch (error) {
    console.error('Erro ao recuperar senha:', error);
    res.status(500).json({ error: 'Erro ao atualizar senha.', details: error.message });
  }
});

// Rotas CRUD
// 1. Criar um novo usuário (CREATE)
app.post('/api/usuario', async (req, res) => {
  try {
    const { nome, telefone, email, senha, checkPassword } = req.body;

    // Validação de senha
    if (senha !== checkPassword) {
      return res.status(400).json({ error: 'As senhas não coincidem.' });
    }

    // Verificar se o e-mail já existe
    const existingUser = await Usuario.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    // Criar usuário com senha hashada
    const novoUsuario = await Usuario.create({
      nome,
      telefone,
      email,
      senha: await bcrypt.hash(senha, 10),
    });

    res.status(201).json({
      message: 'Usuário criado com sucesso.',
      usuario: novoUsuario,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.', details: error.message });
  }
});


// Endpoint para buscar os dados do usuário pelo ID
app.get('/api/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar usuário por ID
app.get('/api/usuario/:id', autenticarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário.', details: error.message });
  }
});

// Exemplo de autenticação (retorna ID e token)
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = 'fake-jwt-token'; // Simulação de token
    res.json({ token, userId: usuario.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/usuario/:id', verificarToken, async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.usuario; // ID do usuário obtido do token

  // Verifique se o usuário está autorizado a atualizar os dados
  if (parseInt(id) !== usuario) {
    return res.status(403).json({ message: 'Você não tem permissão para atualizar este usuário.' });
  }

  // Atualiza os dados do usuário no banco
  try {
    const usuarioAtualizado = await Usuario.update(req.body, { where: { id } });
    return res.json(usuarioAtualizado);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar usuário.' });
  }
});

// Middleware para verificar o token JWT
function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
      return res.status(401).json({ mensagem: 'Token ausente!' });
  }

  jwt.verify(token, 'ci@tarefassystem2024b', (err, decoded) => {
      if (err) {
          if (err.name === 'TokenExpiredError') {
              return res.status(403).json({ mensagem: 'Token expirado!' });
          }
          return res.status(403).json({ mensagem: 'Token inválido!' });
      }
      req.usuario = decoded.id; // Salva o ID do usuário na requisição
      next();
  });
}

// Endpoint para atualizar os dados do usuário autenticado;

// Atualizar usuário autenticado
app.put('/api/usuario/:id', autenticarToken, async (req, res) => {
  try {
    const { id } = req.usuario; // Obtém o ID do token JWT
    const { nome, telefone, email } = req.body;

    // Verifica se o usuário existe no banco
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Atualiza os dados do usuário
    await usuario.update({ nome, telefone, email });
    res.json({ message: 'Usuário atualizado com sucesso!', usuario });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
});



function verificarToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(403).json({ message: 'Token ausente. Acesso negado.' });
    }

    const token = authHeader.split(' ')[1]; // Extrair o token após "Bearer"

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido ou expirado.' });
      }

      req.usuario = decoded.id; // Salva o ID do usuário no objeto req
      next(); // Continua para o próximo middleware ou rota
    });
  } catch (error) {
    console.error('Erro ao verificar o token:', error);
    res.status(500).json({ message: 'Erro interno ao verificar o token.' });
  }
}

module.exports = verificarToken;

// 2. Listar todos os usuários (READ)
app.get('/api/usuario', async (req, res) => {
  try {
    const usuario = await Usuario.findAll();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário.', details: error.message });
  }
});

// 4. Deletar um usuário (DELETE)
 app.delete('/api/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    await usuario.destroy();
    res.status(200).json({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário.', details: error.message });
  }
});

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Banco de dados sincronizado.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.error("Erro ao sincronizar banco:", err));
