'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {
      idusuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.CHAR(13),
        allowNull: true,
      },
      email: {
        type: Sequelize.CHAR(255),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.CHAR(15),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('usuario');
  },
};
