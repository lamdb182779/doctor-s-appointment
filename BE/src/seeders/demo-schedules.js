'use strict';

const moment = require('moment');

const appointments = [];

const startOfWeekNextWeek = moment().add(1, 'weeks').startOf('isoWeek')

for (let doctorId = 1; doctorId <= 85; doctorId++) {
    const paddedDoctorId = doctorId.toString().padStart(4, '0');
    for (let i = 0; i < 7; i++) {
        const date = moment(startOfWeekNextWeek).add(i, 'days');

        for (let hour = 0; hour < 16; hour++) {
            const time = hour.toString().padStart(2, '0');

            const appointment = {
                id: date.format('DDMMYYYY') + time + paddedDoctorId,
                maxNumber: 3,
                currentNumber: 0,
                date: new Date(date.format('YYYY-MM-DD')),
                time: time,
                doctorId: paddedDoctorId,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            appointments.push(appointment);
        }
    }
}

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
        return queryInterface.bulkInsert('Schedules', appointments);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('Schedules', null, {})
    }
};