'use strict';

const { up } = require("./20241127162231-populate-estado");

module.exports = {
   async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'prioridade',
      [
        { nome: 'Muito alta' },
        { nome: 'Alta' },
        { nome: 'Média' },
        { nome: 'Baixa' },
        { nome: 'Muito baixa' },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('prioridade', null, {});
  },
};
