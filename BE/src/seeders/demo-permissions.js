"use strict";

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
        return queryInterface.bulkInsert("Permissions", [
            {
                roleId: 1,
                url: "/doctors/:id/:time",
                method: "DELETE",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/doctors",
                method: "POST",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/doctors/:id/:time",
                method: "PUT",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/self",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/self/changepw",
                method: "POST",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/staffs",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/staffs/:id/:time",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/staffs/:id/:time",
                method: "PUT",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/staffs/:id/:time",
                method: "DELETE",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/staffs",
                method: "POST",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/appointments",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/appointments",
                method: "PUT",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 2,
                url: "/appointments",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 2,
                url: "/schedules",
                method: "POST",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 3,
                url: "/appointments",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 3,
                url: "/appointments",
                method: "PUT",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 2,
                url: "/self",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 2,
                url: "/self/changepw",
                method: "POST",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 3,
                url: "/self",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 3,
                url: "/self/changepw",
                method: "POST",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 2,
                url: "/self/info",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 3,
                url: "/self/info",
                method: "GET",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                roleId: 1,
                url: "/self/info",
                method: "GET",
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
         * await queryInterface.bulkDelete("People", null, {});
         */
        return queryInterface.bulkDelete("Permissions", null, {})
    }
};
