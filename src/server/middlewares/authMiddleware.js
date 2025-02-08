const jwt = require('jsonwebtoken');
const SECRET_KEY = "ci@tarefassystem2024b";

exports.autenticarToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token de autenticação não fornecido." });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.usuario = { id: decoded.id };
    next();
  } catch (error) {
    console.error("Erro ao autenticar token:", error);
    return res.status(403).json({ error: "Token inválido ou expirado." });
  }
};
