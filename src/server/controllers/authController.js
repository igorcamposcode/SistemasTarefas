const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
const SECRET_KEY = "ci@tarefassystem2024b";

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "Senha inválida." });
    }
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET_KEY, { expiresIn: "2h" });
    res.status(200).json({ message: "Login bem-sucedido.", token });
  } catch (error) {
    console.error("Erro ao efetuar login:", error);
    res.status(500).json({ error: "Erro ao efetuar login.", details: error.message });
  }
};

exports.recuperarSenha = async (req, res) => {
  try {
    const { email, senha, checkPassword } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: "E-mail não cadastrado." });
    }
    if (senha !== checkPassword) {
      return res.status(400).json({ error: "As senhas não coincidem." });
    }
    const senhaHash = await bcrypt.hash(senha, 10);
    await Usuario.update({ senha: senhaHash }, { where: { email } });
    res.status(200).json({ message: "Senha atualizada com sucesso." });
  } catch (error) {
    console.error("Erro ao recuperar senha:", error);
    res.status(500).json({ error: "Erro ao atualizar senha.", details: error.message });
  }
};
