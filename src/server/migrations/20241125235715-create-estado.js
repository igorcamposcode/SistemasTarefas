'use strict';

module.exports = {
  async up(queryInterface, Sequelize){
    await queryInterface.createTable('estado', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estado');
  },
};
