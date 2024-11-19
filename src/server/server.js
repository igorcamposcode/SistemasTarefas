const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("./models"); // Modelo Sequelize

const app = express();
const PORT = 3306;

// Middleware para processar JSON
app.use(express.json());

// Endpoint para Cadastro
app.post("/api/auth/register", async (req, res) => {
  try {
    const { nome, telefone, email, senha, checkPassword } = req.body;

    // Verificar se as senhas coincidem
    if (senha !== checkPassword) {
      return res.status(400).json({ error: "As senhas não coincidem" });
    }

    // Verificar se o email já está em uso
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "E-mail já cadastrado!" });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Criar o usuário no banco de dados
    const newUser = await User.create({
      nome,
      telefone,
      email,
      senha: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "Usuário cadastrado com sucesso!", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao cadastrar usuário", details: error.message });
  }
});

// Iniciar o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
