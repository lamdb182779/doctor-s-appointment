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
        description: `**Khám và điều trị**
-   Gout, viêm khớp dạng thấp, viêm đa khớp, viêm gân        
-   Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ
-   Tràn dịch khớp gối, tràn dịch khớp háng, tràn dịch khớp khủy, tràn dịch khớp vai
-   Loãng xương, đau nhức xương, viêm xương, gai xương
-   Viêm cơ, teo cơ, chứng đau mỏi cơ, yếu cơ, Loạn dưỡng cơ
-   Các chấn thương về cơ, xương, khớp
-   ...`,
        image: await toBase64('01Musculoskeletal.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '02',
        name: 'Thần kinh',
        description: `**Khám và điều trị**
-   Bại Não, chấn thương đầu, dây thần kinh
-   Đau đầu, chóng mặt, buồn nôn, bệnh Pakison, bệnh tiền đình
-   Bị co cơ, căng dây thần kinh, động kinh, có những cơn vãng ý thức
-   Bị tê bì nửa mặt, chèn dây thần kinh, bồn chồn, lo lắng, hồi hộp, chân tay run
-   Có dấu hiệu tăng động, co rút cổ, đau đầu với mặt, chân tay, vã mồ hôi
-   ...`,
        image: await toBase64('02Neurology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '03',
        name: 'Tiêu hóa',
        description: `**Khám và điều trị**
-   Ăn uống kém, không ngon, rối loạn tiêu hóa, táo bón, trĩ
-   Nhiễm vi khuẩn HP (Helicobacter pylori)
-   Nội soi dạ dày, đại tràng, tiêu hóa
-   Buồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi, co thắt thực quản, hội chứng ruột kích thích
-   Đau bụng, dạ dày, đại tràng, thượng vị
-   Viêm đại tràng, dạ dày, tá tràng, ung thư dạ dày, u nang tuyến tụy
-   Bệnh lý về gan, mật
-   ...`,
        image: await toBase64('03Digestion.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '04',
        name: 'Tim mạch',
        description: `**Khám và điều trị**
-   Khó thở, đau ngực, đau tim, tăng huyết áp, hạ huyết áp
-   Rối loạn mỡ máu, cao huyết áp, chóng mặt
-   Bệnh van tim (Hẹp hở van tim), hẹp động mạch chủ, giãn tĩnh mạch chân
-   Cảm giác hồi hộp, tim đập nhanh
-   Tim bẩm sinh, có tiền sử bệnh tim to, tiền sử tai biến, đã đặt stent tim, nong động mạch vành
-   ...`,
        image: await toBase64('04Heart.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '05',
        name: 'Tai mũi họng',
        description: `**Khám và điều trị**
-   Ù tai, đau tai, chảy máu tai, thủng màng nhĩ, điếc đột ngột, viêm tai giữa
-   Amidan, V.A
-   Viêm xoang, nghẹt mũi, hay bị chảy máu cam
-   Đau cổ họng, khó nuốt, ho kéo dài
-   Ngủ ngáy
-   ...`,
        image: await toBase64('05Otolaryngologist.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '06',
        name: 'Y học cổ truyền',
        description: `**Khám và điều trị**
-   Bệnh lý thần kinh: đau đầu, mất ngủ, suy nhược thần kinh...
-   Bệnh lý cơ xương khớp: đau mỏi tay chân, thoái hóa khớp, viêm khớp...
-   Bệnh lý tim mạch: Tăng huyết áp, huyết áp thấp, đau thắt ngực...
-   Bệnh lý đường tiêu hóa: đau bụng, rối loạn chức năng tiêu hóa...
-   ...`,
        image: await toBase64('06Traditional medicine.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '07',
        name: 'Sản phụ khoa',
        description: `**Khám và điều trị**
-   Rối loạn kinh nguyệt, chậm kinh, đau bụng kinh
-   Tắc hai vòi trứng, đa nang buồng trứng, chụp vòi trứng
-   Khám hiếm muộn, vô sinh
-   Khám Phụ Khoa, kiểm tra phụ khoa
-   Khám thai sản
-   Khám tiền hôn nhân, tiền sinh
-   Loạn dưỡng vú, rong kinh kéo dài, u xơ tử cung, viêm lộ tuyến
-   Thai lưu
-   ...`,
        image: await toBase64('07Obstetrics and Gynecology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '08',
        name: 'Nhi khoa',
        description: `**Khám và điều trị**
-   Bệnh lý sơ sinh
-   Bệnh tiêu hóa
-   Bệnh tuần hoàn
-   Bệnh hô hấp
-   Bệnh huyết học
-   Bệnh thận tiết niệu
-   Bệnh thần kinh
-   Bệnh ngoài da
-   Bệnh xương khớp
-   ...`,
        image: await toBase64('08Pediatrics.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '09',
        name: 'Da liễu',
        description: `**Khám và điều trị**
-   Bệnh vẩy nến, Da khô, Ngứa da
-   Rám tàn nhang
-   Mụn cóc sinh dục
-   Nấm cơ thể, nấm da đầu, nấm móng tay, móng chân
-   Rụng tóc, hói đầu
-   Viêm da dị ứng, Viêm da tiếp xúc, Viêm da tiết bã, viêm nang lông, xơ cứng bì
-   Zona thần kinh
-   ...`,
        image: await toBase64('09Dermatology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '10',
        name: 'Sức khỏe tâm thần',
        description: `**Bác sĩ khám -Tư vấn - Điều trị**
-   Mất ngủ, Rối loạn giấc ngủ
-   Trầm cảm, Căng thẳng, stress
-   Tâm thần phân liệt, Bệnh hoang tưởng
-   Rối loạn cảm xúc , Rối loạn căng thẳng sau chấn thương tâm lý 
-   Rối loạn lo âu, Rối loạn lưỡng cực, Rối loạn nhân cách
-   Tư vấn và tạo điều kiện cho bệnh nhân tái thích ứng xã hội
        
**Một số triệu chứng, biểu hiện**
-   Ảo giác, Hoang tưởng, Nói cười một mình
-   Bi quan, Bồn chồn, Buồn rầu, Hoảng hốt
-   Khó tập trung tâm trí, Nhầm lẫn tư duy
-   Lo âu, Lo lắng
-   Rối loạn giấc ngủ
-   Sợ hãi, Sợ một mình, Sợ nơi đông người
-   Xa lánh mọi người, Ý nghĩ kì lạ`,
        image: await toBase64('10Mental Health.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11',
        name: 'Dị ứng - Miễn dịch',
        description: `**Dị ứng**
-   Dị ứng thuốc, Phản ứng quá mẫn với Vacxin
-   Hen phế quản
-   Mày đay, Dị ứng thức ăn, Dị ứng do côn trùng đốt
-   Viêm mũi dị ứng, Viêm kết mạc dị ứng, Viêm da cơ địa
        
**Miễn dịch**
-   Lupus ban đỏ hệ thống, Xơ cứng bì hệ thống
-   Viêm da cơ, viêm đa cơ, Bệnh mô liên kết hỗn hợp
-   Hội chứng kháng Phospholipid
-   Viêm mạch Schoenlein-Henoch, Viêm gan tự miễn`,
        image: await toBase64('11Allergy Immunity.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '12',
        name: 'Hô hấp',
        description: `**Khám và điều trị**
-   Lao
-   Lao kháng thuốc
-   Hen
-   COPD
-   Các bệnh Phổi nghề nghiệp
-   Các bệnh hô hấp`,
        image: await toBase64('12Respiratory.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '13',
        name: 'Chuyên khoa mắt',
        description: `**Các bệnh về mắt**
-   Tật khúc xạ
-   Cận thị
-   Nhược thị
-   Viễn thị
-   Lão thị
-   Loạn thị
        
**Các rối loạn về mắt**
-   Hội chứng khô mắt
-   Rối loạn ở hốc mắt
-   Rối loạn tuyến lệ
-   Tăng nhãn áp
        
**Các bệnh lí khác về mắt**
-   Lác mắt
-   Viêm giác mạc
-   Đục thủy tinh thể
-   Dịch kính võng mạc
-   Bong võng mạc
-   Bệnh thoái hóa hoàng điểm tuổi già`,
        image: await toBase64('13Ophthalmology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '14',
        name: 'Thận - Tiết niệu',
        description: `**Khám và điều trị**
-   Các bệnh về tiền liệt tuyến, phì đại tiền liệt tuyến, đi tiểu ra máu
-   Thận đa nang, viêm đài bể thận, u nang thận, áp xe quanh thận
-   Ung thư tuyến tiền liệt
-   Viêm bàng quang 
-   Tiểu không tự chủ 
-   Ung thư bàng quang 
-   Sỏi bàng quang, sỏi thận
-   Vôi hóa tuyến tiền liệt`,
        image: await toBase64('14Nephrology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '15',
        name: 'Nha khoa',
        description: `**Khám và điều trị**
-   Nhổ răng
-   Hàn răng, điều trị tủy
-   Điều trị viêm nha chu
-   Bọc răng sứ, dán sứ Veneer
-   Làm răng giả
-   Niềng răng (nắn chỉnh răng)`,
        image: await toBase64('15Dentist.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '16',
        name: 'Nội tiết',
        description: `**Khám và điều trị**
-   Bướu cổ, cường cận giáp
-   Đái tháo đường
-   Suy giáp, cường giáp, suy tuyến yên,u tuyến yên
-   Tăng đường huyết bệnh tiểu đường
-   Tiền tiểu đường, tiểu đường, tiểu đường tuýp 1, 2
-   Ung thư tuyến giáp`,
        image: await toBase64('16Endocrinology.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '17',
        name: 'Phục hồi chức năng',
        description: `**Phục hồi chức năng cho người lớn**
-   Điều trị nội khoa
-   Các bệnh lý thần kinh trung ương
-   Phục hồi chức năng sau chấn thương chỉnh hình

**Phục hồi chức năng cho trẻ em**
-   Âm ngữ trị liệu cho trẻ chậm phát triển trí tuệ, chậm nói, nói ngọng, nói lắp, các loại nói khó, tự kỷ, tăng động, giảm chú ý
-   Khám, điều trị bàn chân bẹt, chân khoèo, chân chữ O, chữ X, dị tật bẩm sinh về vận động, điều trị trẻ bị vẹo cột sống
-   Điều trị trật khớp háng, điều trị trẻ vẹo cổ, thắt lưng
-   Mất giọng, khàn tiếng sau cắt, phẫu thuật thanh quản, giọng nhi hoá, rối loạn giọng, thất ngôn sau tai biến mạch máu não
-   Điều trị trẻ mắc Down, chữa trẻ chậm phát triển trí tuệ `,
        image: await toBase64('17Recovery.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '18',
        name: 'Thẩm mĩ',
        description: `**Khám và điều trị**
-   Bớt sắc tố: Nốt, mảng tăng sắc tố khu trú hoặc lan tỏa trên cơ thể, bề mặt phẳng, màu nâu, đen , xanh. Không đau , không ngứa rát.
-   Nám da: Dát tăng sắc tố màu nâu, xanh đen đối xứng 2 bên mặt, bằng phẳng, bờ không đều, không teo da, không ngứa.
-   Trứng cá: Mụn nhân trắng đen, mụn viêm , mụn nang, mụn bọc
-   Sẹo lõm: Tổn thương lõm sâu xuống dưới bề mặt da, màu đậm hoặc cùng màu da, không đau. Sẹo đáy nhọn, sẹo đáy hộp, sẹo đáy tròn
-   Sẹo lồi: Tổn thương nổi gồ trên bề mặt da, không đau, màu trùng màu da hoặc đậm hơn
-   Lão hóa da: Da bị chảy xệ, trùng nhão không được săn chắc. Nhiều nếp nhăn vùng trán, đuôi mắt, rãnh mũi má`,
        image: await toBase64('18Cosmetic surgery.png'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '19',
        name: 'Truyền nhiễm',
        description: `**Khám và điều trị**
-   HIV/ AIDS
-   Sốt xuất huyết, sốt phát ban
-   Bại liệt, cúm, dại, đậu mùa, dịch hạch
-   Viêm gan virus (A,B,C,D,E)
-   Lao phổi
-   Giang mai, lậu 
-   Sởi, tả, thủy đậu, tay chân miệng, tiêu chảy cấp
-   Uốn ván, viêm màng não mô cầu`,
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
