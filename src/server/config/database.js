const { Sequelize } = require('sequelize');
const config = require('./config.json');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Permite sobrescrever credenciais via variáveis de ambiente (mais seguro em produção)
const dbCredentials = {
  database: process.env.DB_DATABASE || dbConfig.database,
  username: process.env.DB_USERNAME || dbConfig.username,
  password: process.env.DB_PASSWORD || dbConfig.password,
  host: process.env.DB_HOST || dbConfig.host,
  port: process.env.DB_PORT || dbConfig.port,
  dialect: dbConfig.dialect
};

const sequelize = new Sequelize(dbCredentials.database, dbCredentials.username, dbCredentials.password, {
  host: dbCredentials.host,
  dialect: dbCredentials.dialect,
  port: dbCredentials.port,
  logging: false
});

module.exports = sequelize;
