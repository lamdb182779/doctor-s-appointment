'use strict';
const path = require('path');
const fs = require('fs');

const folderPath = path.join(__dirname, '../../../image_seeders/Doctors')

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

const randomPhoneNumber = () => {
    let result = '0';
    for (let i = 0; i < 9; i++) {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 10);
        result += (randomNumber + timestamp) % 10;
    }
    return result;
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
        return queryInterface.bulkInsert('Doctors', [
            {
                id: '0001',
                name: 'Nguyễn Thị Kim Loan',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '01',
                clinicAddress: `**Hệ thống Y tế Thu Cúc cơ sở Thụy Khuê**        
286 Thụy Khuê, quận Tây Hồ, Hà Nội`,
                email: 'loanntk0001@gmail.com',
                username: 'loanntk0001',
                image: await toBase64('01nguyen-thi-kim-loan.jpg'),
                describe: `Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện E Hà Nội       
Được phong tặng Danh hiệu Thầy thuốc Ưu tú       
Bác sĩ khám cho người bệnh từ 16 tuổi trở lên`,
                content: `Bác sĩ Chuyên khoa II Nguyễn Thị Kim Loan
-----------------------------------------
-   Nguyên Trưởng khoa Cơ Xương Khớp và Nội tổng hợp Bệnh viện E Hà Nội
-   Được phong tặng Danh hiệu thầy thuốc Ưu tú
-   Từng là thực tập sinh tại Ucraina
-   Bác sĩ khám cho người bệnh từ 16 tuổi trở lên

### Quá trình đào tạo
-   Tốt nghiệp Đại học Y Hà Nội (1970)
-   Tốt nghiệp Bác sĩ Chuyên khoa II, Học viện Quân Y (1997)

### Quá trình công tác
-   Làm việc tại khoa cơ xương khớp và Nội tổng hợp Bệnh viện E Hà Nội
-   Nguyên Trưởng khoa cơ xương khớp và Nội tổng hợp Bệnh viện E Hà Nội

### Giải thưởng
-   Danh hiệu thầy thuốc Ưu tú
-   Chiến sĩ thi đua ngành y tế

Khám và điều trị
----------------
**Bệnh về Khớp**
-   Gout, Viêm cột sống dính khớp, thoái hóa khớp, viêm khoanh khớp vai
-   Đau khớp vai, đau vai gáy, Lupus ban đỏ, đau thắt lưng, đau xương khớp
-   Thoát vị đĩa đệm, viêm khớp

**Bệnh về Xương**
-   Loãng xương, đau nhức xương
-   Viêm xương, gai xương, vôi hóa cột sống
-   Chấn thương thể thao

**Bệnh về Cơ**
-   Chứng đau mỏi cơ
-   Yếu cơ, Loạn dưỡng cơ
-   Viêm cơ, Teo cơ

**Các triệu chứng - biểu hiện sau:**
-   Thoái hóa khớp (khớp gối, cột sống thắt lưng, cột sống cổ)
-   Loãng xương
-   Đau vai gáy, Đau thắt lưng, Đau gối, Đau háng, Đau cột sống cổ, Đau hông
-   Đau cổ chân, Đau khủy tay, Đau bàn tay, cổ tay, Đau các ngón tay
-   Đau khớp thái dương hàm
-   Đau lưng, Đau vai, Đau các ngón chân, Đau cổ chân, bàn chân
-   Đau thần kinh tọa
-   Thoát vị đĩa đệm cột sống cổ, cột sống thắt lưng
-   Đau cánh tay
-   Hội chứng vai tay, Hội chứng cổ vai cánh tay
-   Đau thần kinh liên sườn, Đau ngực, Đau sụn ức sườn,Viêm sụn ức sườn, Đau bả vai
-   Bệnh Gout
-   Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân
-   Đau nhiều khớp
-   Hoại tử vô khuẩn chỏm xương đùi, Hoại tử vô mạch
-   Đau xương bánh chè
-   Luput ban đỏ hệ thống, Lulus ban đỏ hệ thống
-   Xơ cứng bì toàn thân
-   Viêm đa cơ, Viêm da cơ, tổn thương da
-   Viêm khớp vùng chậu
-   Viêm khớp thiếu niên (đi khập khiễng)
-   Viêm khớp nhiễm khuẩn
-   Viêm màng hoạt dịch (khớp gối, háng, cổ chân, khớp khủy)
-   Viêm cột sống dính khớp
-   Loạn dưỡng cơ tiến triển`,
                active: true
            },
            {
                id: '0002',
                name: 'Nguyễn Vĩnh Ngọc',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '01',
                clinicAddress: `**Phòng khám Cơ xương khớp Bảo Ngọc**       
Số 73 ngõ 109 Hoàng Ngân - Thanh Xuân - Hà Nội`,
                email: 'ngocnv0002@gmail.com',
                username: 'ngocnv0002',
                image: await toBase64('02pgs-nguyen-vinh-ngoc.jpg'),
                describe: `Trưởng phân môn khớp, Đại học Y Hà Nội       
Nguyên Bác sĩ điều trị khoa Cơ xương khớp, Bệnh viện Bạch Mai       
Hiện đang là Phó Chủ tịch Hội khớp học Hà Nội`,
                content: `Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Vĩnh Ngọc
---------------------------------------------
-   Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Vĩnh Ngọc hiện đang là Phó Chủ tịch Hội khớp học Hà Nội
-   Trưởng phân môn khớp - Phó Trưởng bộ môn Nội tổng hợp - Đại học Y Hà Nội
-   Nguyên Bác sĩ điều trị khoa Cơ xương khớp, Bệnh viện Bạch Mai
-   Danh hiệu Thầy thuốc Ưu tú Việt Nam
-   Tham gia giảng dạy cho các Bác sĩ 15 nước cộng đồng Pháp ngữ
-   Trực tiếp giảng dạy cho các sinh viên Nga, Pháp, Úc, Thụy Điển, Ucraina, Mông Cổ bằng 3 ngôn ngữ Nga, Anh, Pháp.
-   Thành viên Hội đồng duyệt phác đồ điều trị bệnh lý Cơ Xương Khớp của Bộ Y tế và Bệnh viện Bạch Mai
-   Trao đổi kinh nghiệm và tu nghiệp tại trên 30 quốc gia trên thế giới.
-   Thường xuyên tham dự các hội nghị của Hội Thấp Khớp học Mỹ (ACR),Hội Thấp Khớp học Châu Âu (EULAR),Hội Thấp Khớp học Châu Á -Thái Bình Dương (APLAR).....

Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Vĩnh Ngọc đã từng thăm khám, tư vấn và điều trị thành công cho hàng chục nghìn bệnh nhân mắc bệnh Cơ Xương Khớp. Trong số đó có nhiều người là chính khách (Bộ trưởng, Thứ trưởng),Lãnh đạo các Tập đoàn, Doanh nhân, Anh Hùng Lao động và nhiều bệnh nhân nặng về bệnh lý Cơ Xương Khớp cả trong và ngoài nước.

Khám & điều trị các bệnh
------------------------
### 1\. Bệnh về Khớp
-   Gout, Viêm cột sống dính khớp, thoái hóa khớp, viêm khoanh khớp vai
-   Đau khớp vai, đau vai gáy, Lupus ban đỏ, đau thắt lưng, đau xương khớp
-   Thoát vị đĩa đệm, viêm khớp.

### 2\. Bệnh về Xương
-   Loãng xương, đau nhức xương
-   Viêm xương, gai xương, vôi hóa cột sống
-   Chấn thương thể thao

### 3\. Bệnh về Cơ
-   Chứng đau mỏi cơ
-   Yếu cơ, Loạn dưỡng cơ
-   Viêm cơ, Teo cơ

### Các triệu chứng - biểu hiện sau
-   Thoái hóa khớp (khớp gối, cột sống thắt lưng, cột sống cổ)
-   Loãng xương
-   Đau vai gáy, Đau thắt lưng, Đau gối, Đau háng, Đau cột sống cổ, Đau hông
-   Đau cổ chân, Đau khủy tay, Đau bàn tay, cổ tay, Đau các ngón tay
-   Đau khớp thái dương hàm
-   Đau lưng, Đau vai, Đau các ngón chân, Đau cổ chân, bàn chân
-   Đau thần kinh tọa
-   Thoát vị đĩa đệm cột sống cổ, cột sống thắt lưng
-   Đau cánh tay
-   Hội chứng vai tay, Hội chứng cổ vai cánh tay
-   Đau thần kinh liên sườn, Đau ngực, Đau sụn ức sườn,Viêm sụn ức sườn, Đau bả vai
-   Bệnh Gout
-   Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân
-   Đau nhiều khớp
-   Hoại tử vô khuẩn chỏm xương đùi, Hoại tử vô mạch
-   Đau xương bánh chè
-   Luput ban đỏ hệ thống, Lulus ban đỏ hệ thống
-   Xơ cứng bì toàn thân
-   Viêm đa cơ, Viêm da cơ, tổn thương da
-   Viêm khớp vùng chậu
-   Viêm khớp thiếu niên (đi khập khiễng)
-   Viêm khớp nhiễm khuẩn
-   Viêm màng hoạt dịch (khớp gối, háng, cổ chân, khớp khủy)
-   Viêm cột sống dính khớp
-   Loạn dưỡng cơ tiến triển
-   Hội chứng De Quervain (viêm điểm bán gân vùng trâm quay, khủy tay người chơi Tennis, khủy tay người chơi Golf)
-   Hội chứng tiền đình (kẹt cột sống cổ)
-   Teo cơ chân, tay
-   Hội chứng Sudeck (Hội chứng đau loạn dưỡng do phản xạ)
-   Hội chứng Reiter
-   Hội chứng Raynaul
-   Viêm khớp mạn tính
-   Đau thắt lưng mạn tính
-   Hội chứng thớp khớp cận ưng thư
-   Hồng ban nút, Viêm khớp vảy nến, Viêm khớp phản ứng
-   Biến dạng khớp bàn tay, bàn chân, khớp gối, đi lạch bạch, yếu cơ, đau mỏi cơ
-   Sưng khớp, nóng khớp, đỏ khớp, đau khớp
-   Đau thần kinh, đau đầu
-   Hạt Tophi
-   Dị dạng khớp, dị dạng xương
-   Teo cơ Delta
-   Viêm gân gót, Viên gân Asin, Viêm gân gan chân
-   Gai xương gót, Gai cột sống
-   Vôi hóa cột sống
-   Đau xương đòn, Đau xương sườn, Đau ngực
-   Viêm lồi cầu ngoài xương cánh tay
-   Viêm lồi cầu trong xương cánh tay
-   Viêm mỏm trâm trụ (châm trụ)
-   Viêm mỏm châm quay (châm quay)
-   Biến dạng
-   Sưng đau khớp cổ tay
-   Sưng đau khớp bàn ngón tay
-   Teo cơ mô cái
-   Hội chứng ống cổ tay
-   Hội chứng đường hầm cổ tay
-   Đau dây thần kinh giữa
-   Đau xương cụt, Đau xương cùng cụt, Đau mấu chuyển lớn
-   Teo cơ mông, teo cơ đùi, teo cẳng tay, cánh tay, teo cơ ngực, tràn dịch khớp
-   Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai
-   Viêm điểm bám gân lồi cầu trong xương đùi
-   Viêm điểm bám gân lồi cầu ngoài xương đùi
-   Viêm lồi cửa trước xương chày
-   Viêm xương, Viêm cơ
-   Bệnh OSGOODS
-   Thoái hóa sụn khớp, Rách sụn trên
-   Đau xương chày
-   Viêm khớp ngón chân cái, Viêm khớp bàn ngón chân cái
-   Bệnh hệ thống. Hội chứng Overlap
-   Đau thần kinh cánh tay, Đau thần kinh đùi bì
-   Viêm gân gấp ngón tay, Viêm gân duỗi
-   Chấn thương do thể thao
-   Rách dây chứng chéo trước, sau`,
                active: true
            },
            {
                id: '0003',
                name: 'Dương Minh Trí',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '01',
                clinicAddress: `**Phòng khám Cơ Xương Khớp Bác sĩ Dương Minh Trí**       
101 Trần Hữu Trang, Phường 10, Quận Phú Nhuận, Thành phố Hồ Chí Minh`,
                email: 'tridm0003@gmail.com',
                username: 'tridm0003',
                image: await toBase64('03duong-minh-tri.jpg'),
                describe: `Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định       
Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp       
Bác sĩ nhận khám cho bệnh nhân từ 16 tuổi trở lên`,
                content: `Thạc sĩ, Bác sĩ Chuyên khoa II Dương Minh Trí
---------------------------------------------
-   Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định
-   Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp

### Quá trình công tác
-   Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định (2010 - 2018)
-   Bác sĩ khoa Hồi sức Nội, Bệnh viện Nhân dân Gia Định (2006 - 2009)

### Quá trình đào tạo
-   Tốt nghiệp Bác sĩ chuyên khoa II, chuyên ngành Nội khoa, Đại học Y Hà Nội (2020)
-   Tốt nghiệp Thạc sĩ chuyên ngành Nội Tổng quát, Đại học Y khoa Phạm Ngọc Thạch (2014)
-   Tốt nghiệp Bác sĩ đa khoa, Đại học Y Dược TP.HCM (2006)
-   Chứng chỉ Sơ bộ Cơ xương khớp, Bệnh viện Chợ Rẫy (2014)
-   Tu nghiệp chuyên môn tại các nước Hà Lan, Úc, Bồ Đào Nha, Dubai,...

### Sách và các công trình nghiên cứu, báo cáo khoa học
-   Tỷ lệ và đặc điểm của hội chứng chuyển hóa trên bệnh nhân gút, Tạp chí y học TP Hồ Chi Minh (2020)
-   Đánh giá kết quả điều trị của Tocillizumab (Actemra) ở bệnh nhân viêm khớp dạng thấp, Tạp chí y học TP Hồ Chí Minh (2018)
-   Tiến bộ liệu pháp sinh học trong bệnh khớp học, Tạp chí y học TP Hồ Chí Minh (2016)
-   Tăng acid uric không triệu chứng, Tạp chí y học TP Hồ Chí Minh (2019)

Khám và điều trị
----------------
Bác sĩ khám và điều trị các mặt bệnh:
-   Viêm khớp, thoái hóa khớp: đau khớp, gai trong khớp,...
-   Đau gót chân, gai gót chân
-   Gai cột sống, thoái hóa cột sống: đau lưng cấp, mãn tính
-   Hội chứng ống cổ tay, đau thần kinh tọa: tê tay, tê chân,...
-   Viêm gân: ngón tay không co giãn được
-   Viêm khớp dạng thấp
-   Viêm cột sống dính khớp
-   Lupus khớp
-   Loãng xương
-   Gout
-   U hoạch dịch quanh khớp
-   Dãn tĩnh mạch chân
-   Viêm khớp vẩy nến`,
                active: true
            },
            {
                id: '0004',
                name: 'Phạm Trọng Nghĩa',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '01',
                clinicAddress: `**Phòng khám Đa khoa Quốc tế Nhân Hậu**       
522-524 Nguyễn Chí Thanh, Phường 7, Quận 10, Thành phố Hồ Chí Minh`,
                email: 'nghiapt0004@gmail.com',
                username: 'nghiapt0004',
                image: await toBase64('04bs-pham-trong-nghia.jpg'),
                describe: `Bác sĩ đang công tác tại Phòng khám Đa khoa Quốc tế Nhân Hậu       
Bác sĩ điều trị cơ xương khớp bằng các phương pháp kết hợp y học hiện đại và y học cổ truyền`,
                content: `Bác sĩ Phạm Trọng Nghĩa
-----------------------
-   Bác sĩ đang công tác tại Phòng khám Đa khoa Quốc tế Nhân Hậu
-   Bác sĩ điều trị cơ xương khớp bằng các phương pháp kết hợp y học hiện đại và y học cổ truyền

### Quá trình công tác
-   Hiện là Bác sĩ khám và điều trị tại Phòng khám Đa khoa Quốc tế Nhân Hậu (2017 - nay)
-   Bác sĩ tại Bệnh viện Phục hồi chức năng và Bệnh nghề nghiệp Quận 8 (2015 - 2017)

### Quá trình đào tạo
-   Tốt nghiệp Bác sĩ Y học cổ truyển, Đại học Y dược TP.HCM (2014)
-   Tốt nghiệp Bác sĩ chuyên ngành Nội Tổng hợp, Đại học Y dược Thái Bình (2015)

Khám và điều trị
----------------
**Bác sĩ khám và điều trị các mặt bệnh liên quan đến cơ xương khớp:**
-   Thoái hóa cột sống cổ, cột sống thắt lưng
-   Hội chứng ống cổ tay
-   Bệnh gout
-   Thoái hóa khớp
-   Viêm khớp dạng thấp`,
                active: true
            },
            {
                id: '0005',
                name: 'Hà Quốc Hùng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '01',
                clinicAddress: `**Bệnh viện Lão khoa Trung ương**       
Số 1A Phương Mai, Đống Đa, Hà Nội`,
                email: 'hunghq0005@gmail.com',
                username: 'hunghq0005',
                image: await toBase64('05thac-si-bac-si-ha-quoc-hung.jpg'),
                describe: `Gần 30 năm kinh nghiệm khám và điều trị chuyên sâu về các bệnh lý Nội khoa - Cơ xương khớp cho người cao tuổi       
Hiện đang là Trưởng khoa Khám Theo yêu cầu và Quốc tế, Bệnh viện Lão khoa Trung ương       
Nguyên giảng viên bộ môn Lão khoa, Đại học Y Hà Nội       
Bác sĩ nhận khám từ 18 tuổi trở lên`,
                content: `Bác sĩ Chuyên khoa II Hà Quốc Hùng
----------------------------------
-   Gần 30 năm kinh nghiệm khám và điều trị chuyên sâu về các bệnh lý Nội khoa - Cơ xương khớp cho người cao tuổi
-   Hiện đang là Trưởng khoa Khám Theo yêu cầu và Quốc tế, Bệnh viện Lão khoa Trung ương
-   Nguyên giảng viên bộ môn Lão khoa, Đại học Y Hà Nội
-   Bác sĩ nhận khám từ 18 tuổi trở lên

Khám và điều trị
----------------
Bác sĩ khám và điều trị chuyên sâu về các bệnh lý nội khoa cho người cao tuổi
-   Bệnh lý cơ xương khớp: loãng xương, thoái hóa khớp, thoát vị đĩa đệm,...
-   Tiêu hóa: Đau dạ dày, trào ngược dạ dày,...
-   Tim mạch: Tăng huyết áp, rối loạn chuyển hóa,...
-   Đái tháo đường
-   Parkinson
-   Tai biến mạch máu não

### Quá trình công tác
-   Giảng viên bộ môn Lão khoa, Đại học Y Hà Nội (1998 - 2006)
-   Trưởng khoa Nội tổng hợp, Bệnh viện Lão khoa Trung ương (2007 - 7/2013)
-   Trưởng khoa Khám Theo yêu cầu và Quốc tế, Bệnh viện Lão khoa Trung ương (8/2013 - nay)

### Quá trình đào tạo
-   Học Bác sĩ Đa khoa, Đại học Y Hà Nội (1987 - 1993)
-   Bác sĩ Nội trú bệnh viện, Đại học Y Hà Nội - Bệnh viện Bạch Mai (1994 - 1997)

### Chứng chỉ trong nước hoặc nước ngoài
-   Bằng Thạc sĩ Y khoa, Đại học Y Hà Nội
-   Bằng Bác sĩ Chuyên khoa I chuyên ngành Nội chung, Đại học Y Hà Nội

### Thành viên các Hội khoa học, tổ chức chuyên môn
-   Thành viên Hội Tiết niệu thận học Hà Nội

### Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình
-   Tham gia các chuyên đề sức khỏe lão khoa trên kênh VOV, VTV`,
                active: true
            },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: ,
            //     username: ,
            //     image: await toBase64(),
            //     describe: ,
            //     content: ,
            //     active: true
            // },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('Doctors', null, {})
    }
};
