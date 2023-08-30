"use strict";
/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Appointments", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      doctorId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      patientName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      patientPhoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      patientEmail: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      time: {
        allowNull: false,
        type: Sequelize.STRING
      },
      preAppointmentId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      scheduleId: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable("Appointments");
  }
};