'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'estado',
      [
        { nome: 'Aberto' },
        { nome: 'Em andamento' },
        { nome: 'Pausado' },
        { nome: 'Concluído' },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('estado', null, {});
  },
};
