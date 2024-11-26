'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Documentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      idtarefa: {
        type: Sequelize.INTEGER
      },
      idusuario: {
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      caminho: {
        type: Sequelize.STRING
      },
      extensao: {
        type: Sequelize.STRING
      },
      tamanho: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Documentos');
  }
};