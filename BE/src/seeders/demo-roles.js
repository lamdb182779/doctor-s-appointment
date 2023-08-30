/** @type {import("sequelize-cli").Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert("People", [{
         *   name: "John Doe",
         *   isBetaMember: false
         * }], {});
        */
        return queryInterface.bulkInsert("Roles", [
            {
                id: 1,
                role: "Admins"
            },
            {
                id: 2,
                role: "Doctors",
            },
            {
                id: 3,
                role: "Staffs"
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete("People", null, {});
         */
        return queryInterface.bulkDelete("Roles", null, {})
    }
};
