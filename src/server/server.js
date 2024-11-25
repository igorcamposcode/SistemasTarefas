const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { Usuario } = require("./models"); // Modelo Sequelize
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

// Rotas CRUD para o modelo Usuario

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

// 2. Listar todos os usuários (READ)
app.get('/api/usuario', async (req, res) => {
  try {
    const usuario = await Usuario.findAll();
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.', details: error.message });
  }
});

// 3. Atualizar um usuário (UPDATE)
app.put('/api/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone, email, senha } = req.body;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    usuario.nome = nome || usuario.nome;
    usuario.telefone = telefone || usuario.telefone;
    usuario.email = email || usuario.email;
    usuario.senha = senha ? await bcrypt.hash(senha, 10) : usuario.senha;

    await usuario.save();
    res.status(200).json({ message: 'Usuário atualizado com sucesso.', usuario });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário.', details: error.message });
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
