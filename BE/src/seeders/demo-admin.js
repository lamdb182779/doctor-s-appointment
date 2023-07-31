'use strict';

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
    return queryInterface.bulkInsert('Admins', [{
      id: '01',
      name: 'Đặng Bảo Lâm',
      phoneNumber: '033xxxxx33',
      email: 'lamxxxxxx79@gmail.com',
      address: '67/34/14 Lê Thanh Nghị, Đồng Tâm, Hai Bà Trưng, Hà Nội',
      username: 'admin',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Admins', null, {})
  }
};
