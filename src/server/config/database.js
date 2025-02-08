const { Sequelize } = require('sequelize');
const config = require('./config.json'); // Importa o arquivo config.json

// Define o ambiente (development, test, production)
const env = process.env.NODE_ENV || 'development';

// Carrega as configurações do ambiente atual
const dbConfig = config[env];

// Inicializa o Sequelize com as configurações
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  logging: false, // Desativa os logs do Sequelize (opcional)
});

module.exports = sequelize;
