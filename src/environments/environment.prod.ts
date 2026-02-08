/**
 * Ambiente de produção.
 * apiUrl: use URL absoluta do backend (ex: https://api.seudominio.com/api)
 * ou '/api' para mesma origem (proxy reverso servindo API em /api).
 */
export const environment = {
  production: true,
  apiUrl: '/api',
  httpTimeout: 15000,
  maxRetries: 2,
  retryDelay: 2000,
};
