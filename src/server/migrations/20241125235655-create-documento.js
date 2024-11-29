'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('documento', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idtarefa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tarefa',
          key: 'id',
        },
      },
      idusuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      Nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      Caminho: {
        type: Sequelize.CHAR(255),
        allowNull: false,
      },
      Extensao: {
        type: Sequelize.CHAR(255),
        allowNull: false,
      },
      Tamanho: {
        type: Sequelize.CHAR(255),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('documento');
  },
};
