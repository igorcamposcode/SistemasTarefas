const jwtKeyRotation = require('../utils/jwtKeyRotation');

exports.autenticarToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token de autenticação não fornecido." });
  }
  try {
    const decoded = jwtKeyRotation.verify(token);
    req.usuario = { id: decoded.id };

    // Em produção, não aceitamos tokens antigos: force re-autenticação
    if (process.env.NODE_ENV === 'production' && decoded._from_previous_key) {
      // Não fornecer detalhes sensíveis na resposta
      return res.status(401).json({ error: 'Token expirado ou inválido. Refaça o login.' });
    }

    // Em ambientes não-produtivos, sinalizamos que o token pode ser renovado
    if (decoded._from_previous_key) {
      res.setHeader('X-Token-Refresh-Available', 'true');
    }

    next();
  } catch (error) {
    console.error("Erro ao autenticar token:", error.message);
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
};
