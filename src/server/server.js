const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { Usuario } = require("./models"); // Modelo Sequelize
const sequelize = require("./database"); // Conexão com o banco

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
