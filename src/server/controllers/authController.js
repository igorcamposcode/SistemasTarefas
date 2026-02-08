const bcrypt = require('bcrypt');
const jwtKeyRotation = require('../utils/jwtKeyRotation');
const { Usuario } = require('../models');

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
    const token = jwtKeyRotation.sign({ id: usuario.id, email: usuario.email }, { expiresIn: "3h" });
    res.status(200).json({
      message: "Login bem-sucedido.",
      token,
      userId: usuario.id,
      success: true
    });
  } catch (error) {
    console.error("Erro ao efetuar login:", error);
    res.status(500).json({ error: "Erro interno ao efetuar login." });
  }
};

exports.cadastro = async (req, res) => {
  try {
    const { nome, email, senha, telefone } = req.body;

    // Verifica se o usuário já existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: "E-mail já cadastrado." });
    }

    // Criptografa a senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Cria o usuário
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: senhaHash,
      telefone
    });

    res.status(201).json({
      message: "Usuário cadastrado com sucesso.",
      userId: novoUsuario.id,
      success: true
    });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ error: "Erro interno ao cadastrar usuário." });
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
    res.status(500).json({ error: "Erro ao atualizar senha." });
  }
};

/**
 * Renovar Token JWT
 * Endpoint para renovar tokens com a chave anterior
 * Útil durante rotação de chaves para manter sessions ativas
 */
exports.renovarToken = (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

    if (!token) {
      return res.status(401).json({ error: 'Token não fornecido.' });
    }

    // Verifica o token (aceita chaves atual e anterior)
    const decoded = jwtKeyRotation.verify(token);

    // Gera novo token com a chave ATUAL
    const novoToken = jwtKeyRotation.sign(
      { id: decoded.id, email: decoded.email },
      { expiresIn: '3h' }
    );

    res.status(200).json({
      message: 'Token renovado com sucesso.',
      token: novoToken,
      wasFromPreviousKey: decoded._from_previous_key || false,
      success: true
    });
  } catch (error) {
    console.error('Erro ao renovar token:', error);
    res.status(401).json({ error: 'Falha ao renovar token.' });
  }
};
