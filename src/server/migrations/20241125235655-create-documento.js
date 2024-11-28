'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('documento', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
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
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      caminho: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      extensao: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tamanho: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('documento');
  },
};
