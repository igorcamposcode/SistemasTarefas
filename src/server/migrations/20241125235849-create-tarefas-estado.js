'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tarefasestado', {
      idtarefa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tarefa',
          key: 'id',
        },
        primaryKey: true,
      },
      idusuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
        primaryKey: true,
      },
      idestado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estado',
          key: 'id',
        },
        primaryKey: true,
      },
      dthrinicio: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
      },
      dthrfim: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('tarefasestado');
  },
};
