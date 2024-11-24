const { Sequelize } = require('sequelize');
const config = require('./config/config.json'); // Importa o arquivo config.json

// Ambiente de desenvolvimento
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Inicializa o Sequelize
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  logging: false,
});

module.exports = sequelize;
