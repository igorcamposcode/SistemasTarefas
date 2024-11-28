'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tarefa', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idusuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idmae: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tarefa',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      idprioridade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'prioridade',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
        allowNull: true,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tarefa');
  },
};
