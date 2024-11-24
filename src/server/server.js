const express = require("express");
const bcrypt = require("bcrypt");
const { Usuario } = require("./models"); // Modelo Sequelize
const cors = require('cors');
const app = express();

const PORT = 3000; // Porta para o backend

// Middleware CORS
app.use(cors({
  origin: 'http://localhost:4200', // URL do frontend Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Middleware para processar JSON
app.use(express.json());

// Endpoint de Cadastro de Usuário
app.post('/api/usuario', async (req, res) => {
  try {
    const { nome, telefone, email, senha, checkPassword } = req.body;

    // Validação de senha
    if (senha !== checkPassword) {
      return res.status(400).json({ error: 'As senhas não coincidem.' });
    }

    // Verificar se o email já existe
    const existingUser = await Usuario.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    // Criar usuário com hash na senha
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
    res.status(500).json({ error: 'Erro ao cadastrar usuário.', details: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
