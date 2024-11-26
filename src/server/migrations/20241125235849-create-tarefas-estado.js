'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TarefasEstados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idtarefa: {
        type: Sequelize.INTEGER
      },
      idusuario: {
        type: Sequelize.INTEGER
      },
      idestado: {
        type: Sequelize.INTEGER
      },
      dthrinicio: {
        type: Sequelize.DATE
      },
      dthrfim: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('TarefasEstados');
  }
};