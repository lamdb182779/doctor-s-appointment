"use strict";
// const path = require("path");
// const fs = require("fs");

// const folderPath = path.join(__dirname, "../../../image_seeders/Staffs")

// const toBase64 = (img) => {
//     return new Promise((resolve, reject) => {
//         const imagePath = path.join(folderPath, img)
//         const imageBuffer = fs.readFileSync(imagePath)
//         const imageBase64 = imageBuffer.toString("base64")
//         if (imageBase64) {
//             resolve(imageBase64)
//         } else {
//             reject("Error: Failed to convert image to base64")
//         }
//     })
// }

const randomPhoneNumber = () => {
    let result = "0";
    for (let i = 0; i < 9; i++) {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 10);
        result += (randomNumber + timestamp) % 10;
    }
    return result;
}

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
        return queryInterface.bulkInsert("Staffs", [
            {
                id: "001",
                name: "Đỗ Quang Sinh",
                gender: true,
                doB: new Date("2000-12-03"),
                phoneNumber: randomPhoneNumber(),
                email: "sinhdq001@gmail.com",
                address: "91 P. Khâm Thiên, Khâm Thiên, Đống Đa, Hà Nội",
                username: "sinhdq001",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "002",
                name: "Nguyễn Hải Huệ",
                gender: false,
                doB: new Date("2000-05-09"),
                phoneNumber: randomPhoneNumber(),
                email: "huenh002@gmail.com",
                address: "8 Ng. Trần Cao Vân, Phố Huế, Hai Bà Trưng, Hà Nội",
                username: "huenh002",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "003",
                name: "Lê Đình Đức",
                gender: true,
                doB: new Date("1998-09-13"),
                phoneNumber: randomPhoneNumber(),
                email: "ducld003@gmail.com",
                address: "185 Nguyễn Lương Bằng, Quang Trung, Đống Đa, Hà Nội",
                username: "ducld003",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "004",
                name: "Hoàng Thái Hồ",
                gender: true,
                doB: new Date("1999-03-15"),
                phoneNumber: randomPhoneNumber(),
                email: "hoht004@gmail.com",
                address: "55 P. Nguyễn Du, Nguyễn Du, Hoàn Kiếm, Hà Nội",
                username: "hoht004",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "005",
                name: "Vũ Hoàng Hiệp",
                gender: true,
                doB: new Date("2001-12-12"),
                phoneNumber: randomPhoneNumber(),
                email: "hiepvh005@gmail.com",
                address: "13 Ngõ 147A Tân Mai, Tương Mai, Hoàng Mai, Hà Nội",
                username: "hiepvh005",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "006",
                name: "Đặng Minh Châu",
                gender: false,
                doB: new Date("1999-01-02"),
                phoneNumber: randomPhoneNumber(),
                email: "chaudm006@gmail.com",
                address: "2V53+QR3, Trần Khát Chân, Phố Huế, Hai Bà Trưng, Hà Nội",
                username: "chaudm006",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "007",
                name: "Trần Bảo Ngọc",
                gender: false,
                doB: new Date("2001-10-19"),
                phoneNumber: randomPhoneNumber(),
                email: "ngoctb007@gmail.com",
                address: "119 P. Trần Đại Nghĩa, Bách Khoa, Hai Bà Trưng, Hà Nội",
                username: "ngoctb007",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "008",
                name: "Phạm Tùng Bạch",
                gender: true,
                doB: new Date("2001-11-10"),
                phoneNumber: randomPhoneNumber(),
                email: "bachpt008@gmail.com",
                address: "33 P. Xã Đàn, Phương Liên, Đống Đa, Hà Nội",
                username: "bachpt008",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "009",
                name: "Bùi Ngọc Anh",
                gender: false,
                doB: new Date("1998-02-11"),
                phoneNumber: randomPhoneNumber(),
                email: "anhbn009@gmail.com",
                address: "110 A7 Ng. 1A P. Tôn Thất Tùng, Kim Liên, Đống Đa, Hà Nội",
                username: "anhbn009",
                image: null,
                active: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: "010",
                name: "Dương Khắc Trung",
                gender: true,
                doB: new Date("1999-20-06"),
                phoneNumber: randomPhoneNumber(),
                email: "trungdk010@gmail.com",
                address: "288 P. Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội",
                username: "trungdk010",
                image: null,
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
         * await queryInterface.bulkDelete("People", null, {});
         */
        return queryInterface.bulkDelete("Admins", null, {})
    }
};