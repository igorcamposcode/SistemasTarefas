'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tarefasestado', {
      idtarefa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'tarefa',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idusuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'usuario',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idestado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'estado',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      dthrinicio: {
        type: Sequelize.DATE,
        primaryKey: true,
        allowNull: false,
      },
      dthrfim: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tarefasestado');
  },
};
