// middlewares/auth.js (legado - use authMiddleware.js)
// ATUALIZADO: Usa sistema de rotação de chaves JWT
const jwtKeyRotation = require('../utils/jwtKeyRotation');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido!' });
  }

  try {
    const decoded = jwtKeyRotation.verify(token);
    req.user = decoded;
    req.usuario = { id: decoded.id };
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido!' });
  }
};
