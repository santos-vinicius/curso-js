/** @type {import('sequelize-cli').Migration} */

const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'John Doe',
        email: 'johndoe@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz Teste',
        email: 'luiz@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Helena',
        email: 'helena@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {

  },
};
