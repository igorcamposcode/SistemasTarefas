'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estado', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('estado');
  },
};
