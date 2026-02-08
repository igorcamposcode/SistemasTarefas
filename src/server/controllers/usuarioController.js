const bcrypt = require('bcrypt');
const { Usuario } = require('../models');

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, telefone, email, senha, checkPassword } = req.body;
    if (senha !== checkPassword) {
      return res.status(400).json({ error: "As senhas não coincidem." });
    }
    const existingUser = await Usuario.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "E-mail já cadastrado." });
    }
    const novoUsuario = await Usuario.create({
      nome,
      telefone,
      email,
      senha: await bcrypt.hash(senha, 10),
    });
    res.status(201).json({ message: "Usuário criado com sucesso.", usuario: novoUsuario });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
};

exports.buscarUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    if (parseInt(id) !== req.usuario.id) {
      return res.status(403).json({ error: "Sem permissão para acessar este usuário." });
    }
    const usuario = await Usuario.findByPk(id, { attributes: ['id', 'nome', 'email', 'telefone'] });
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizarUsuario = async (req, res) => {
  try {
    // O ID do usuário é obtido a partir do token de autenticação (pelo middleware autenticarToken)
    const { nome, telefone, email } = req.body;
    const idUsuario = req.usuario.id; // O middleware anexa o payload do usuário (que contém o 'id') a req.usuario

    if (!nome || !telefone || !email) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    // O método update do Sequelize retorna um array com o número de linhas afetadas.
    const [numLinhasAtualizadas] = await Usuario.update({ nome, telefone, email }, { where: { id: idUsuario } });

    if (numLinhasAtualizadas === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro interno ao atualizar usuário.' });
  }
};

exports.deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    if (parseInt(id) !== req.usuario.id) {
      return res.status(403).json({ error: "Sem permissão para excluir este usuário." });
    }
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }
    await usuario.destroy();
    res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário." });
  }
};
