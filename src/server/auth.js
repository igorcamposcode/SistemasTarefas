// middlewares/auth.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'supersecretkey'; // Use a mesma chave do server.js

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido!' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Adiciona os dados do usuário à requisição
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido!' });
  }
};
