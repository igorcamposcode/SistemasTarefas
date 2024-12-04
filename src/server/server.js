const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const {
  Usuario,
  Tarefa,
  TarefasEstado,
  Prioridade,
  Documento,
  Estado,
} = require("./models");
const sequelize = require("./database"); // Conexão com o banco
const jwt = require("jsonwebtoken");
const SECRET_KEY = "ci@tarefassystem2024b"; // Substitua por uma chave segura
const app = express();
const PORT = 3000;

// Middleware para habilitar CORS
app.use(
  cors({
    origin: "http://localhost:4200", // Frontend Angular
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware para processar JSON
app.use(express.json());

// Endpoint de login
app.post("/api/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verificar se o email existe no banco
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    // Comparar a senha fornecida com o hash armazenado
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "Senha inválida." });
    }

    // Gerar um token JWT
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      SECRET_KEY,
      { expiresIn: "2h" } // Token expira em 2 horas
    );

    res.status(200).json({
      message: "Login bem-sucedido.",
      token,
    });
  } catch (error) {
    console.error("Erro ao efetuar login:", error);
    res
      .status(500)
      .json({ error: "Erro ao efetuar login.", details: error.message });
  }
});

function autenticarToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ error: "Acesso negado. Token não fornecido." });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido." });
    }

    req.usuario = decoded; // Dados do token disponíveis na requisição
    next();
  });
}

app.get("/api/usuario", autenticarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findAll();
    res.status(200).json(usuario);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuários.", details: error.message });
  }
});

// Endpoint para recuperação de senha
app.post("/api/recuperar-senha", async (req, res) => {
  try {
    const { email, senha, checkPassword } = req.body;

    // Verificar se o email existe no banco de dados
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: "E-mail não cadastrado." });
    }

    // Verificar se as senhas coincidem
    if (senha !== checkPassword) {
      return res.status(400).json({ error: "As senhas não coincidem." });
    }

    // Hash da nova senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Atualizar a senha no banco de dados
    await Usuario.update({ senha: senhaHash }, { where: { email } });

    res.status(200).json({ message: "Senha atualizada com sucesso." });
  } catch (error) {
    console.error("Erro ao recuperar senha:", error);
    res
      .status(500)
      .json({ error: "Erro ao atualizar senha.", details: error.message });
  }
});

// Rotas CRUD
// 1. Criar um novo usuário (CREATE)
app.post("/api/usuario", async (req, res) => {
  try {
    const { nome, telefone, email, senha, checkPassword } = req.body;

    // Validação de senha
    if (senha !== checkPassword) {
      return res.status(400).json({ error: "As senhas não coincidem." });
    }

    // Verificar se o e-mail já existe
    const existingUser = await Usuario.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "E-mail já cadastrado." });
    }

    // Criar usuário com senha hashada
    const novoUsuario = await Usuario.create({
      nome,
      telefone,
      email,
      senha: await bcrypt.hash(senha, 10),
    });

    res.status(201).json({
      message: "Usuário criado com sucesso.",
      usuario: novoUsuario,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao criar usuário.", details: error.message });
  }
});

// Endpoint para buscar os dados do usuário pelo ID
app.get("/api/usuario/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar usuário por ID
app.get("/api/usuario/:id", autenticarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    res.json(usuario);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuário.", details: error.message });
  }
});

// Exemplo de autenticação (retorna ID e token)
app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ error: "Credenciais inválidas." });
    }

    const token = "fake-jwt-token"; // Simulação de token
    res.json({ token, userId: usuario.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/api/usuario/:id", verificarToken, async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.usuario; // ID do usuário obtido do token

  // Verifique se o usuário está autorizado a atualizar os dados
  if (parseInt(id) !== usuario) {
    return res
      .status(403)
      .json({ message: "Você não tem permissão para atualizar este usuário." });
  }

  // Atualiza os dados do usuário no banco
  try {
    const usuarioAtualizado = await Usuario.update(req.body, { where: { id } });
    return res.json(usuarioAtualizado);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar usuário." });
  }
});

// Middleware para verificar o token JWT
function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ mensagem: "Token ausente!" });
  }

  jwt.verify(token, "ci@tarefassystem2024b", (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(403).json({ mensagem: "Token expirado!" });
      }
      return res.status(403).json({ mensagem: "Token inválido!" });
    }
    req.usuario = decoded.id; // Salva o ID do usuário na requisição
    next();
  });
}

// Endpoint para atualizar os dados do usuário autenticado

// Atualizar usuário autenticado
app.put('/api/usuario', autenticarToken, async (req, res) => {
  try {
    const { nome, telefone, email } = req.body;
    const idusuario = req.usuario; // ID do usuário autenticado

    if (!nome || !telefone || !email) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const usuario = await Usuario.update(
      { nome, telefone, email },
      { where: { id: idusuario } }
    );

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro interno ao atualizar usuário.' });
  }
});


function autenticarToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token de autenticação não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.usuario = { id: decoded.id }; // Inclui o ID do usuário
    console.log("ID do usuário autenticado:", decoded.id); // Log para depuração
    next();
  } catch (error) {
    console.error("Erro ao autenticar token:", error);
    return res.status(403).json({ error: "Token inválido ou expirado." });
  }
}


function verificarToken(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(403).json({ message: "Token ausente. Acesso negado." });
    }

    const token = authHeader.split(" ")[1]; // Extrair o token após "Bearer"

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Token inválido ou expirado." });
      }

      req.usuario = decoded.id; // Salva o ID do usuário no objeto req
      next(); // Continua para o próximo middleware ou rota
    });
  } catch (error) {
    console.error("Erro ao verificar o token:", error);
    res.status(500).json({ message: "Erro interno ao verificar o token." });
  }
}

module.exports = verificarToken;

// 2. Listar todos os usuários (READ)
app.get("/api/usuario", async (req, res) => {
  try {
    const usuario = await Usuario.findAll();
    res.status(200).json(usuario);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuário.", details: error.message });
  }
});

// 4. Deletar um usuário (DELETE)
app.delete("/api/usuario/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    await usuario.destroy();
    res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao deletar usuário.", details: error.message });
  }
});

app.get("/api/usuario/:id", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // "Bearer token"
    if (!token) {
      return res.status(401).json({ error: "Token não fornecido." });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    const usuario = await Usuario.findByPk(decoded.id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuário logado:", error);
    res.status(500).json({ error: "Erro ao buscar usuário logado." });
  }
});

const path = require("path");
const { parseISO, format } = require('date-fns');
app.post("/api/tarefa", async (req, res) => {
  try {
    const {
      idusuario,
      idprioridade,
      titulo,
      descricao,
      idestado,
      idmae,
      dthrinicio, // Data e hora de início
      dthrfim,    // Data e hora de fim
    } = req.body;

    // Validação de campos obrigatórios
    if (!idusuario || !idprioridade || !titulo || !idestado) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes." });
    }

    // Verifica e atribui `dthrinicio` para garantir que sempre tenha um valor
    const dataInicio = dthrinicio ? new Date(dthrinicio) : new Date();

    // Criação da tarefa principal
    const tarefa = await Tarefa.create({
      idusuario,
      idprioridade,
      titulo,
      descricao: descricao || null,
      idmae: idmae || null,
      dthrinicio: format(parseISO(dthrinicio), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      dthrfim: dthrfim ? format(parseISO(dthrfim), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx") : null,
    });

    // Registro do estado inicial na tabela `tarefasestado`
    const tarefaEstado = await TarefasEstado.create({
      idtarefa: tarefa.id,
      idusuario,
      idestado,
      dthrinicio: dataInicio, // Estado inicial da tarefa
    });

    // Adicionar documentos, se enviados
    if (req.files && req.files.length > 0) {
      const documentos = req.files.map((file) => ({
        idtarefa: tarefa.id,
        idusuario,
        nome: file.originalname,
        caminho: file.path,
        extensao: path.extname(file.originalname),
        tamanho: `${file.size} bytes`,
      }));

      await Documento.bulkCreate(documentos); // Adiciona documentos em lote
    }

    res.status(201).json({
      message: "Tarefa criada com sucesso!",
      tarefa,
      tarefaEstado,
    });
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    res.status(500).json({
      error: "Erro interno ao criar tarefa.",
      details: error.message,
    });
  }
});

app.get("/api/tarefa/meta", async (req, res) => {
  try {
    const prioridades = await Prioridade.findAll(); // Busca todas as prioridades
    const estados = await Estado.findAll(); // Busca todos os estados

    res.status(200).json({ prioridades, estados });
  } catch (error) {
    console.error("Erro ao carregar prioridades e estados:", error);
    res.status(500).json({ error: "Erro ao carregar prioridades e estados." });
  }
});

app.get("/api/tarefa-estados", async (req, res) => {
  try {
    const estadosRelacionados = await TarefaEstado.findAll({
      include: [
        {
          model: Estado,
          attributes: ["id", "nome"],
        },
      ],
      attributes: [
        "idestado",
        "idtarefa",
        "idusuario",
        "dthrinicio",
        "dthrfim",
      ],
    });

    res.status(200).json(estadosRelacionados);
  } catch (error) {
    console.error("Erro ao carregar estados relacionados às tarefas:", error);
    res
      .status(500)
      .json({ error: "Erro ao carregar estados relacionados às tarefas." });
  }
});

app.get("/api/prioridades", async (req, res) => {
  try {
    const prioridades = await Prioridade.findAll({
      attributes: ["id", "nome"], // Retorna apenas as colunas necessárias
    });

    res.status(200).json(prioridades);
  } catch (error) {
    console.error("Erro ao carregar prioridades:", error);
    res.status(500).json({ error: "Erro ao carregar prioridades." });
  }
});

app.get("/api/tarefa", autenticarToken, async (req, res) => {
  try {
    const idusuario = req.usuario; // ID do usuário obtido do token JWT

    const tarefas = await Tarefa.findAll({
      where: { idusuario }, // Filtra pelo usuário logado
      include: [
        {
          model: Usuario,
          as: 'Usuario', // Use o mesmo alias definido no modelo
          attributes: ['nome'], // Nome do usuário responsável
        },
        {
          model: Prioridade,
          as: "Prioridade",
          attributes: ["nome"], // Nome da prioridade
        },
        {
          model: TarefasEstado,
          as: "TarefasEstados",
          include: [
            {
              model: Estado,
              as: "Estado",
              attributes: ["nome"], // Nome do estado
            },
          ],
        },
        {
          model: Documento,
          as: "Documentos",
          attributes: ["nome", "caminho"], // Inclua os documentos
        },
        {
          model: Tarefa,
          as: "SubTarefas",
          include: [
            {
              model: Prioridade,
              as: "Prioridade",
              attributes: ["nome"],
            },
            {
              model: TarefasEstado,
              as: "TarefasEstados",
              include: [
                {
                  model: Estado,
                  as: "Estado",
                  attributes: ["nome"],
                },
              ],
            },
          ],
        },
      ],
    });

    res.status(200).json(tarefas);
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
    res.status(500).json({ error: "Erro ao carregar tarefas." });
  }
});

function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido ou expirado." });
    }

    req.usuario = decoded.id; // Adiciona o ID do usuário à requisição
    next();
  });
}

app.put("/api/tarefa/:id", async (req, res) => {
  try {
    const { id } = req.params; // ID da tarefa
    const { idprioridade, titulo, descricao, idestado, dthrfim } = req.body;

    // 1. Busca a tarefa pelo ID no banco de dados
    const tarefa = await Tarefa.findByPk(id);

    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    // 2. Atualiza os dados principais da tarefa
    await tarefa.update({
      idprioridade: idprioridade || tarefa.idprioridade,
      titulo: titulo || tarefa.titulo,
      descricao: descricao || tarefa.descricao,
      dthrfim: dthrfim ? new Date(dthrfim) : tarefa.dthrfim, // Atualiza a data/hora de finalização, se fornecida
    });

    // 3. Busca ou cria um estado na tabela TarefaEstado
    const [estadoAtual, criado] = await TarefasEstado.findOrCreate({
      where: { idtarefa: id, idestado },
      defaults: {
        idusuario: tarefa.idusuario,
        idestado,
        dthrinicio: new Date(),
        dthrfim: dthrfim ? new Date(dthrfim) : null,
      },
    });

    if (!criado) {
      // Se já existir, atualiza os campos necessários
      await estadoAtual.update({
        idestado: idestado || estadoAtual.idestado, // Atualiza o estado se fornecido
        dthrfim: dthrfim ? new Date(dthrfim) : estadoAtual.dthrfim, // Atualiza a data/hora de finalização
      });
    }

    // 4. Retorna os dados atualizados
    res.status(200).json({
      message: "Tarefa e estado atualizados com sucesso!",
      tarefa,
      estadoAtual,
    });
  } catch (error) {
    console.error("Erro ao atualizar tarefa e estado:", error);
    res.status(500).json({
      error: "Erro ao atualizar tarefa.",
      details: error.message,
    });
  }
});


app.get("/api/tarefa/subtarefa/:idUsuario", async (req, res) => {
  try {
    const { idusuario } = req.params;

    const subtarefas = await Tarefa.findAll({
      where: { idusuario: idusuario, idmae: { [sequelize.Op.ne]: null } },
      include: [
        { model: Prioridade, attributes: ["nome"] },
        { model: Estado, through: TarefasEstado, attributes: ["nome"] },
      ],
    });

    res.status(200).json(subtarefas);
  } catch (error) {
    console.error("Erro ao carregar subtarefas:", error);
    res.status(500).json({ error: "Erro ao carregar subtarefas." });
  }
});

app.delete("/api/tarefa/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Excluir estados relacionados à tarefa
    await TarefasEstado.destroy({ where: { idtarefa: id } });

    // Excluir subtarefas relacionadas
    await Tarefa.destroy({ where: { idmae: id } });

    // Excluir a tarefa principal
    const result = await Tarefa.destroy({ where: { id } });

    if (result === 0) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    res.status(200).json({ message: "Tarefa excluída com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir tarefa:", error);
    res.status(500).json({ error: "Erro ao excluir tarefa." });
  }
});

// Sub tarefas
app.post("/api/tarefa/:idmae/subtarefa", async (req, res) => {
  try {
    const { idmae } = req.params; // ID da tarefa mãe
    const { titulo, descricao, idprioridade, dthrinicio, dthrfim } = req.body;

    // Busca a tarefa mãe para obter o idusuario
    const tarefaMae = await Tarefa.findByPk(idmae);

    if (!tarefaMae) {
      return res.status(404).json({ error: "Tarefa mãe não encontrada." });
    }

    // Cria a subtarefa associada
    const subtarefa = await Tarefa.create({
      titulo,
      descricao,
      idprioridade,
      dthrinicio: dthrinicio ? new Date(dthrinicio) : null,
      dthrfim: dthrfim ? new Date(dthrfim) : null,
      idusuario: tarefaMae.idusuario, // Copia o idusuario da tarefa mãe
      idmae: tarefaMae.id, // Relaciona com a tarefa mãe
    });

    res.status(201).json({
      message: "Subtarefa criada com sucesso.",
      subtarefa,
    });
  } catch (error) {
    console.error("Erro ao criar subtarefa:", error);
    res.status(500).json({
      error: "Erro ao criar subtarefa.",
      details: error.message,
    });
  }
});

app.put('/api/tarefa/:id/subtarefa', autenticarToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, idprioridade, idestado, dthrfim } = req.body;
    const idusuario = req.usuario; // Obtém o usuário autenticado

    const subtarefa = await Tarefa.findOne({ where: { id, idusuario } });
    if (!subtarefa) {
      return res.status(404).json({ error: 'Subtarefa não encontrada ou não pertence ao usuário.' });
    }

    await subtarefa.update({
      titulo,
      descricao,
      idprioridade,
      idestado,
      dthrfim: dthrfim ? new Date(dthrfim) : subtarefa.dthrfim,
    });

    res.status(200).json({ message: 'Subtarefa atualizada com sucesso!', subtarefa });
  } catch (error) {
    console.error('Erro ao atualizar subtarefa:', error);
    res.status(500).json({ error: 'Erro ao atualizar subtarefa.' });
  }
});

// Sincronizar o banco de dados e iniciar o servidor
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Banco de dados sincronizado.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.error("Erro ao sincronizar banco:", err));
