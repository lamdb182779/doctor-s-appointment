'use strict';
const path = require('path')
const imgPath = "https://res.cloudinary.com/dnujcvcql/image/upload/v1687201496/Specialties"
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
    return queryInterface.bulkInsert('Specialties', [
      {
        id: '01',
        name: 'Cơ xương khớp',
        description: '',
        image: path.join(imgPath, '01Musculoskeletal.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '02',
        name: 'Thần kinh',
        description: '',
        image: path.join(imgPath, '02Neurology.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '03',
        name: 'Tiêu hóa',
        description: '',
        image: path.join(imgPath, '03Digestion.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '04',
        name: 'Tim mạch',
        description: '',
        image: path.join(imgPath, '04Heart.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '05',
        name: 'Tai mũi họng',
        description: '',
        image: path.join(imgPath, '05Otolaryngologist.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '06',
        name: 'Y học cổ truyền',
        description: '',
        image: path.join(imgPath, '06Traditional medicine.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '07',
        name: 'Sản phụ khoa',
        description: '',
        image: path.join(imgPath, '07Obstetrics and Gynecology.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '08',
        name: 'Nhi khoa',
        description: '',
        image: path.join(imgPath, '08Pediatrics.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '09',
        name: 'Da liễu',
        description: '',
        image: path.join(imgPath, '09Dermatology.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '10',
        name: 'Sức khỏe tâm thần',
        description: '',
        image: path.join(imgPath, '10Mental Health.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11',
        name: 'Dị ứng - Miễn dịch',
        description: '',
        image: path.join(imgPath, '11Allergy Immunity.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '12',
        name: 'Hô hấp',
        description: '',
        image: path.join(imgPath, '12Respiratory.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '13',
        name: 'Chuyên khoa mắt',
        description: '',
        image: path.join(imgPath, '13Ophthalmology.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '14',
        name: 'Thận - Tiết niệu',
        description: '',
        image: path.join(imgPath, '14Nephrology.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '15',
        name: 'Nha khoa',
        description: '',
        image: path.join(imgPath, '15Dentist.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '16',
        name: 'Nội tiết',
        description: '',
        image: path.join(imgPath, '16Endocrinology.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '17',
        name: 'Phục hồi chức năng',
        description: '',
        image: path.join(imgPath, '17Recovery.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '18',
        name: 'Thẩm mĩ',
        description: '',
        image: path.join(imgPath, '18Cosmetic surgery.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '19',
        name: 'Truyền nhiễm',
        description: '',
        image: path.join(imgPath, '19Infectious disease.PNG.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Specialties', null, {})
  }
};
