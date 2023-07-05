'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10)
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
    return queryInterface.bulkInsert('Accounts', [
      {
        username: 'admin',
        password: bcrypt.hashSync('admin', salt),
        role: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'loanntk0001',
        password: bcrypt.hashSync('loanntk0001', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'ngocnv0002',
        password: bcrypt.hashSync('ngocnv0002', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tridm0003',
        password: bcrypt.hashSync('tridm0003', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'nghiapt0004',
        password: bcrypt.hashSync('nghiapt0004', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hunghq0005',
        password: bcrypt.hashSync('hunghq0005', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'doanhnv0006',
        password: bcrypt.hashSync('doanhnv0006', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hungnt0007',
        password: bcrypt.hashSync('hungnt0007', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hungkd0008',
        password: bcrypt.hashSync('hungkd0008', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lieunv0009',
        password: bcrypt.hashSync('lieunv0009', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'thyttm0010',
        password: bcrypt.hashSync('thyttm0010', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'quyethv',
        password: bcrypt.hashSync('quyethv', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'anhlt0012',
        password: bcrypt.hashSync('anhlt0012', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'thongnv0013',
        password: bcrypt.hashSync('thongnv0013', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'vanntt0014',
        password: bcrypt.hashSync('vanntt0014', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lieuntb',
        password: bcrypt.hashSync('lieuntb', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tuocnn0016',
        password: bcrypt.hashSync('tuocnn0016', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'quynhnv0017',
        password: bcrypt.hashSync('quynhnv0017', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'vietnl0018',
        password: bcrypt.hashSync('vietnl0018', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'maiptb0019',
        password: bcrypt.hashSync('maiptb0019', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tuyetntt0020',
        password: bcrypt.hashSync('tuyetntt0020', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'anntt0021',
        password: bcrypt.hashSync('anntt0021', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lynv0022',
        password: bcrypt.hashSync('lynv0022', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'phannn0023',
        password: bcrypt.hashSync('phannn0023', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'nhanvtt0024',
        password: bcrypt.hashSync('nhanvtt0024', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'duonglh0025',
        password: bcrypt.hashSync('duonglh0025', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'truongbp0026',
        password: bcrypt.hashSync('truongbp0026', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tungpq0027',
        password: bcrypt.hashSync('tungpq0027', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hungnp0028',
        password: bcrypt.hashSync('hungnp0028', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'phuongvtt0029',
        password: bcrypt.hashSync('phuongvtt0029', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'chuongld0030',
        password: bcrypt.hashSync('chuongld0030', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'minhnt0031',
        password: bcrypt.hashSync('minhnt0031', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'dungltn0032',
        password: bcrypt.hashSync('dungltn0032', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'anhntm0033',
        password: bcrypt.hashSync('anhntm0033', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'chaubtk0034',
        password: bcrypt.hashSync('chaubtk0034', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hieult0035',
        password: bcrypt.hashSync('hieult0035', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tamtth0036',
        password: bcrypt.hashSync('tamtth0036', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'phuocpv0037',
        password: bcrypt.hashSync('phuocpv0037', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'huenb0038',
        password: bcrypt.hashSync('huenb0038', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tainx0039',
        password: bcrypt.hashSync('tainx0039', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lieuntl0040',
        password: bcrypt.hashSync('lieuntl0040', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'havt0041',
        password: bcrypt.hashSync('havt0041', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'thanhnt0042',
        password: bcrypt.hashSync('thanhnt0042', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hongdtt0043',
        password: bcrypt.hashSync('hongdtt0043', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'linhnt0044',
        password: bcrypt.hashSync('linhnt0044', salt),
        role: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'tamhv0045',
        password: bcrypt.hashSync('tamhv0045', salt),
        role: 2,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Accounts', null, {})
  }
};
