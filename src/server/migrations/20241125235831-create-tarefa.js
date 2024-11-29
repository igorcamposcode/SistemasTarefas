'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tarefa', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      idusuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      idmae: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tarefa',
          key: 'id',
        },
      },
      idprioridade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'prioridade',
          key: 'id',
        },
      },
      titulo: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      dthrinicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dthrfim: {
        type: Sequelize.DATE,
      },
      descricao: {
        type: Sequelize.TEXT,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('tarefa');
  },
};
