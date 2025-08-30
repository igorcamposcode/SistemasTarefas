export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  // Configurações de timeout
  httpTimeout: 10000, // 10 segundos
  // Configurações de retry
  maxRetries: 3,
  retryDelay: 1000, // 1 segundo
};
