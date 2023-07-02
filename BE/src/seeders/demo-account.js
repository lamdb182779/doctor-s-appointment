'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10)
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Accounts', [
      {
        username: 'admin',
        password: bcrypt.hashSync('admin', salt),
        role: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'loanntk0001',
        password: bcrypt.hashSync('loanntk0001', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'ngocnv0002',
        password: bcrypt.hashSync('ngocnv0002', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tridm0003',
        password: bcrypt.hashSync('tridm0003', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'nghiapt0004',
        password: bcrypt.hashSync('nghiapt0004', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hunghq0005',
        password: bcrypt.hashSync('hunghq0005', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Accounts', null, {})
  }
};
