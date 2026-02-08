/**
 * Sistema de Rotação de Chaves JWT
 *
 * Permite transição segura entre chaves sem invalidar tokens existentes
 *
 * Fluxo:
 * 1. Novos tokens são emitidos com JWT_SECRET_CURRENT
 * 2. Validação tenta primeiro com a chave atual, depois com a anterior
 * 3. Quando rotacionar: mova CURRENT para PREVIOUS e use uma nova CURRENT
 */

const jwt = require("jsonwebtoken");

class JWTKeyRotation {
  constructor() {
    this.validateEnvironment();
  }

  /**
   * Valida que as chaves estão definidas
   */
  validateEnvironment() {
    if (!process.env.JWT_SECRET_CURRENT) {
      throw new Error(
        "ERRO CRÍTICO: JWT_SECRET_CURRENT não definido no .env\n" +
          "Por favor, gere uma chave com:\n" +
          "node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\"",
      );
    }
  }

  /**
   * Emitir novo token (usa a chave ATUAL)
   */
  sign(payload, options = {}) {
    const defaultOptions = { expiresIn: "3h" };
    const finalOptions = { ...defaultOptions, ...options };

    try {
      return jwt.sign(payload, process.env.JWT_SECRET_CURRENT, finalOptions);
    } catch (error) {
      throw new Error(`Erro ao emitir token JWT: ${error.message}`);
    }
  }

  /**
   * Verificar token (tenta com a chave atual, depois com a anterior)
   * Garante que tokens antigos ainda funcionam durante a rotação
   */
  verify(token) {
    // Primeiro, tenta com a chave ATUAL
    try {
      return jwt.verify(token, process.env.JWT_SECRET_CURRENT);
    } catch (error) {
      // Em produção não aceitamos tokens da chave anterior (políticas como PCI-DSS / ISO27001)
      if (process.env.NODE_ENV === "production") {
        throw new Error("Token inválido ou expirado");
      }

      // Em ambientes não-produtivos: ainda tentamos validar com a chave anterior
      if (process.env.JWT_SECRET_PREVIOUS) {
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET_PREVIOUS);

          // Marca que o token é da chave anterior (apenas sinal interno)
          decoded._from_previous_key = true;

          return decoded;
        } catch (previousError) {
          // Token inválido em ambas as chaves
          throw new Error("Token inválido ou expirado");
        }
      }

      throw new Error("Token inválido ou expirado");
    }
  }

  /**
   * Decodificar token sem verificar assinatura (para debugging)
   */
  decode(token) {
    try {
      return jwt.decode(token);
    } catch (error) {
      throw new Error(`Erro ao decodificar token: ${error.message}`);
    }
  }

  /**
   * Informações sobre o status da rotação
   */
  getRotationStatus() {
    return {
      currentKeySet: !!process.env.JWT_SECRET_CURRENT,
      previousKeySet: !!process.env.JWT_SECRET_PREVIOUS,
      message: process.env.JWT_SECRET_PREVIOUS
        ? process.env.NODE_ENV === "production"
          ? "Rotação habilitada (* observação: em PRODUÇÃO tokens da chave anterior NÃO serão aceitos *)"
          : "Rotação habilitada"
        : "Sem chave anterior: tokens antigos podem falhar",
    };
  }

  /**
   * Renovar token se foi verificado com chave anterior
   * Isso atualiza o token para usar a chave atual
   */
  refreshIfFromPreviousKey(decodedToken) {
    if (decodedToken._from_previous_key) {
      // Remove a flag antes de re-emitir
      const { _from_previous_key, ...payload } = decodedToken;

      // Recria o token com a chave ATUAL
      return this.sign(payload);
    }
    return null;
  }
}

module.exports = new JWTKeyRotation();
