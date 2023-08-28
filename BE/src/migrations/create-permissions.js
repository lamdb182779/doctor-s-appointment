'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', {
      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      url: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      method: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permissions');
  }
};