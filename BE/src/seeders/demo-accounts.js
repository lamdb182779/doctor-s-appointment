"use strict";
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT))
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
    return queryInterface.bulkInsert("Accounts", [
      {
        username: "admin",
        password: bcrypt.hashSync("admin", salt),
        roleId: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "loanntk0001",
        password: bcrypt.hashSync("loanntk0001", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ngocnv0002",
        password: bcrypt.hashSync("ngocnv0002", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tridm0003",
        password: bcrypt.hashSync("tridm0003", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "nghiapt0004",
        password: bcrypt.hashSync("nghiapt0004", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hunghq0005",
        password: bcrypt.hashSync("hunghq0005", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "doanhnv0006",
        password: bcrypt.hashSync("doanhnv0006", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hungnt0007",
        password: bcrypt.hashSync("hungnt0007", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hungkd0008",
        password: bcrypt.hashSync("hungkd0008", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "lieunv0009",
        password: bcrypt.hashSync("lieunv0009", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "thyttm0010",
        password: bcrypt.hashSync("thyttm0010", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "quyethv",
        password: bcrypt.hashSync("quyethv", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "anhlt0012",
        password: bcrypt.hashSync("anhlt0012", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "thongnv0013",
        password: bcrypt.hashSync("thongnv0013", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "vanntt0014",
        password: bcrypt.hashSync("vanntt0014", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "lieuntb",
        password: bcrypt.hashSync("lieuntb", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tuocnn0016",
        password: bcrypt.hashSync("tuocnn0016", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "quynhnv0017",
        password: bcrypt.hashSync("quynhnv0017", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "vietnl0018",
        password: bcrypt.hashSync("vietnl0018", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "maiptb0019",
        password: bcrypt.hashSync("maiptb0019", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tuyetntt0020",
        password: bcrypt.hashSync("tuyetntt0020", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "anntt0021",
        password: bcrypt.hashSync("anntt0021", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "lynv0022",
        password: bcrypt.hashSync("lynv0022", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "phannn0023",
        password: bcrypt.hashSync("phannn0023", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "nhanvtt0024",
        password: bcrypt.hashSync("nhanvtt0024", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "duonglh0025",
        password: bcrypt.hashSync("duonglh0025", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "truongbp0026",
        password: bcrypt.hashSync("truongbp0026", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tungpq0027",
        password: bcrypt.hashSync("tungpq0027", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hungnp0028",
        password: bcrypt.hashSync("hungnp0028", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "phuongvtt0029",
        password: bcrypt.hashSync("phuongvtt0029", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "chuongld0030",
        password: bcrypt.hashSync("chuongld0030", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "minhnt0031",
        password: bcrypt.hashSync("minhnt0031", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "dungltn0032",
        password: bcrypt.hashSync("dungltn0032", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "anhntm0033",
        password: bcrypt.hashSync("anhntm0033", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "chaubtk0034",
        password: bcrypt.hashSync("chaubtk0034", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hieult0035",
        password: bcrypt.hashSync("hieult0035", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tamtth0036",
        password: bcrypt.hashSync("tamtth0036", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "phuocpv0037",
        password: bcrypt.hashSync("phuocpv0037", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "huenb0038",
        password: bcrypt.hashSync("huenb0038", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tainx0039",
        password: bcrypt.hashSync("tainx0039", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "lieuntl0040",
        password: bcrypt.hashSync("lieuntl0040", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "havt0041",
        password: bcrypt.hashSync("havt0041", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "thanhnt0042",
        password: bcrypt.hashSync("thanhnt0042", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hongdtt0043",
        password: bcrypt.hashSync("hongdtt0043", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "linhnt0044",
        password: bcrypt.hashSync("linhnt0044", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tamhv0045",
        password: bcrypt.hashSync("tamhv0045", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "binhth0046",
        password: bcrypt.hashSync("binhth0046", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "chungnv0047",
        password: bcrypt.hashSync("chungnv0047", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tuannt0048",
        password: bcrypt.hashSync("tuannt0048", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hiennt0049",
        password: bcrypt.hashSync("hiennt0049", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "phinv0050",
        password: bcrypt.hashSync("phinv0050", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "khanhbv0051",
        password: bcrypt.hashSync("khanhbv0051", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "landtt0052",
        password: bcrypt.hashSync("landtt0052", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "anhlh0053",
        password: bcrypt.hashSync("anhlh0053", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "phuongda0054",
        password: bcrypt.hashSync("phuongda0054", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hongntd0055",
        password: bcrypt.hashSync("hongntd0055", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hungdk0056",
        password: bcrypt.hashSync("hungdk0056", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "loanptb0057",
        password: bcrypt.hashSync("loanptb0057", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tanpv0058",
        password: bcrypt.hashSync("tanpv0058", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hungbv0059",
        password: bcrypt.hashSync("hungbv0059", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hondv0060",
        password: bcrypt.hashSync("hondv0060", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "phonght0061",
        password: bcrypt.hashSync("phonght0061", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hanhnth0062",
        password: bcrypt.hashSync("hanhnth0062", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "huyenph0063",
        password: bcrypt.hashSync("huyenph0063", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hieuld0064",
        password: bcrypt.hashSync("hieuld0064", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "phuongtll0066",
        password: bcrypt.hashSync("phuongtll0066", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "baont0067",
        password: bcrypt.hashSync("baont0067", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "quynhnn0068",
        password: bcrypt.hashSync("quynhnn0068", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tuphm0069",
        password: bcrypt.hashSync("tuphm0069", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "trangdt0070",
        password: bcrypt.hashSync("trangdt0070", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tungdt0071",
        password: bcrypt.hashSync("tungdt0071", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hienntt0072",
        password: bcrypt.hashSync("hienntt0072", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ngocnh0073",
        password: bcrypt.hashSync("ngocnh0073", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "xuanntm0074",
        password: bcrypt.hashSync("xuanntm0074", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "langnt0075",
        password: bcrypt.hashSync("langnt0075", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "huunv0076",
        password: bcrypt.hashSync("huunv0076", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "phongdd0077",
        password: bcrypt.hashSync("phongdd0077", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "thaohb0078",
        password: bcrypt.hashSync("thaohb0078", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "harrisonmb0079",
        password: bcrypt.hashSync("harrisonmb0079", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hanhvtb0080",
        password: bcrypt.hashSync("hanhvtb0080", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "chinhvd0081",
        password: bcrypt.hashSync("chinhvd0081", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "chienlh0082",
        password: bcrypt.hashSync("chienlh0082", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "tuannq0083",
        password: bcrypt.hashSync("tuannq0083", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "cuongdd0084",
        password: bcrypt.hashSync("cuongdd0084", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "mautq0085",
        password: bcrypt.hashSync("mautq0085", salt),
        roleId: 2,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "sinhdq001",
        password: bcrypt.hashSync("sinhdq001", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "huenh002",
        password: bcrypt.hashSync("huenh002", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ducld003",
        password: bcrypt.hashSync("ducld003", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hoht004",
        password: bcrypt.hashSync("hoht004", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hiepvh005",
        password: bcrypt.hashSync("hiepvh005", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "chaudm006",
        password: bcrypt.hashSync("chaudm006", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ngoctb007",
        password: bcrypt.hashSync("ngoctb007", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "bachpt008",
        password: bcrypt.hashSync("bachpt008", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "anhbn009",
        password: bcrypt.hashSync("anhbn009", salt),
        roleId: 3,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "trungdk010",
        password: bcrypt.hashSync("trungdk010", salt),
        roleId: 3,
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
    return queryInterface.bulkDelete("Accounts", null, {})
  }
};
