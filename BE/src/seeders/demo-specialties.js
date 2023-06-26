'use strict';
const path = require('path')
const fs = require('fs');

const folderPath = path.join(__dirname, '../../../image_seeders/Specialties')

const toBase64 = (img) => {
  return new Promise((resolve, reject) => {
    const imagePath = path.join(folderPath, img)
    const imageBuffer = fs.readFileSync(imagePath)
    const imageBase64 = imageBuffer.toString('base64')
    if (imageBase64) {
      resolve(imageBase64)
    } else {
      reject("Error: Failed to convert image to base64")
    }
  })
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
    return queryInterface.bulkInsert('Specialties', [
      {
        id: '01',
        name: 'Cơ xương khớp',
        description: '',
        image: await toBase64('01Musculoskeletal.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '02',
        name: 'Thần kinh',
        description: '',
        image: await toBase64('02Neurology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '03',
        name: 'Tiêu hóa',
        description: '',
        image: await toBase64('03Digestion.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '04',
        name: 'Tim mạch',
        description: '',
        image: await toBase64('04Heart.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '05',
        name: 'Tai mũi họng',
        description: '',
        image: await toBase64('05Otolaryngologist.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '06',
        name: 'Y học cổ truyền',
        description: '',
        image: await toBase64('06Traditional medicine.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '07',
        name: 'Sản phụ khoa',
        description: '',
        image: await toBase64('07Obstetrics and Gynecology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '08',
        name: 'Nhi khoa',
        description: '',
        image: await toBase64('08Pediatrics.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '09',
        name: 'Da liễu',
        description: '',
        image: await toBase64('09Dermatology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '10',
        name: 'Sức khỏe tâm thần',
        description: '',
        image: await toBase64('10Mental Health.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11',
        name: 'Dị ứng - Miễn dịch',
        description: '',
        image: await toBase64('11Allergy Immunity.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '12',
        name: 'Hô hấp',
        description: '',
        image: await toBase64('12Respiratory.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '13',
        name: 'Chuyên khoa mắt',
        description: '',
        image: await toBase64('13Ophthalmology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '14',
        name: 'Thận - Tiết niệu',
        description: '',
        image: await toBase64('14Nephrology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '15',
        name: 'Nha khoa',
        description: '',
        image: await toBase64('15Dentist.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '16',
        name: 'Nội tiết',
        description: '',
        image: await toBase64('16Endocrinology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '17',
        name: 'Phục hồi chức năng',
        description: '',
        image: await toBase64('17Recovery.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '18',
        name: 'Thẩm mĩ',
        description: '',
        image: await toBase64('18Cosmetic surgery.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '19',
        name: 'Truyền nhiễm',
        description: '',
        image: await toBase64('19Infectious disease.png'),
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
