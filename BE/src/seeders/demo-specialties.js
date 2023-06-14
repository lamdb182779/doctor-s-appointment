'use strict';
const path = require('path')
const imgPath = '../../../image'
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
        image: path.join(imgPath, '01 - Musculoskeletal'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '02',
        name: 'Thần kinh',
        description: '',
        image: path.join(imgPath, '02 - Neurology'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '03',
        name: 'Tiêu hóa',
        description: '',
        image: path.join(imgPath, '03 - Digestion'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '04',
        name: 'Tim mạch',
        description: '',
        image: path.join(imgPath, '04 - Heart'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '05',
        name: 'Tai mũi họng',
        description: '',
        image: path.join(imgPath, '05 - Otolaryngologist'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '06',
        name: 'Y học cổ truyền',
        description: '',
        image: path.join(imgPath, '06 - Traditional medicine'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '07',
        name: 'Sản phụ khoa',
        description: '',
        image: path.join(imgPath, '07 - Obstetrics and Gynecology'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '08',
        name: 'Nhi khoa',
        description: '',
        image: path.join(imgPath, '08 - Pediatrics'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '09',
        name: 'Da liễu',
        description: '',
        image: path.join(imgPath, '09 - Dermatology'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '10',
        name: 'Sức khỏe tâm thần',
        description: '',
        image: path.join(imgPath, '10 - Mental Health'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11',
        name: 'Dị ứng - Miễn dịch',
        description: '',
        image: path.join(imgPath, '11 - Allergy Immunity'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '12',
        name: 'Hô hấp',
        description: '',
        image: path.join(imgPath, '12 - Respiratory'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '13',
        name: 'Chuyên khoa mắt',
        description: '',
        image: path.join(imgPath, '13 - Ophthalmology'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '14',
        name: 'Thận - Tiết niệu',
        description: '',
        image: path.join(imgPath, '14 - Nephrology'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '15',
        name: 'Nha khoa',
        description: '',
        image: path.join(imgPath, '15 - Dentist'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '16',
        name: 'Nội tiết',
        description: '',
        image: path.join(imgPath, '16 - Endocrinology'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '17',
        name: 'Phục hồi chức năng',
        description: '',
        image: path.join(imgPath, '17 - Recovery'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '18',
        name: 'Thẩm mĩ',
        description: '',
        image: path.join(imgPath, '18 - Cosmetic surgery'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '19',
        name: 'Truyền nhiễm',
        description: '',
        image: path.join(imgPath, '19 - Infectious disease'),
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
