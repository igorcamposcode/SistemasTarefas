/**
 * Script de Teste: Sistema de Rotação JWT
 *
 * Demonstra como o sistema funciona:
 * - Emissão de tokens
 * - Validação com chaves múltiplas
 * - Renovação de tokens antigos
 *
 * Uso:
 *   node test-jwt-rotation.js
 */

require('dotenv').config();

const jwtKeyRotation = require('./utils/jwtKeyRotation');
const jwt = require('jsonwebtoken');

// Teste 1: Status da Rotação (informação interna - não exibida)
const status = jwtKeyRotation.getRotationStatus();

// Teste 2: Emitir Token
const payloadNovo = { id: 123, email: 'usuario@example.com' };
const tokenNovo = jwtKeyRotation.sign(payloadNovo);

//  Validar Token Novo
try {
  jwtKeyRotation.verify(tokenNovo);
} catch (error) {
  console.error(`Erro: ${error.message}`);
}

//  Simular Token Antigo (emitido com chave anterior)
const payloadAntigo = { id: 456, email: 'antigo@example.com' };
const tokenAntigo = jwt.sign(payloadAntigo, process.env.JWT_SECRET_PREVIOUS, { expiresIn: '3h' });

//  Validar Token Antigo
try {
  const decodedAntigo = jwtKeyRotation.verify(tokenAntigo);
  if (decodedAntigo._from_previous_key) {
    // Indicar que renovação é possível (processo não exibido)
  }
} catch (error) {
  console.error(`Erro: ${error.message}`);
}

//  Renovação de Token Antigo
try {
  const decodedAntigo = jwtKeyRotation.verify(tokenAntigo);
  const tokenRenovado = jwtKeyRotation.sign({ id: decodedAntigo.id, email: decodedAntigo.email });
  try {
    jwtKeyRotation.verify(tokenRenovado);
  } catch (err) {
    console.error(`Erro: ${err.message}`);
  }
} catch (error) {
  console.error(`Erro: ${error.message}`);
}

//  Token Inválido
try {
  jwtKeyRotation.verify('token.invalido.aqui');
} catch (error) {
  // comportamento esperado: rejeição
}

// O script de teste executa ações; saídas foram suprimidas para limpeza.
