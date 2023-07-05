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
                price: `-   Chưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Siêu âm khớp 1 khớp: 264.000đ
-   Siêu âm khớp 2 khớp: 528.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
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
                price: `-   Chưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Siêu âm khớp 1 khớp: 264.000đ
-   Siêu âm khớp 2 khớp: 528.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
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
                price: `-   Chưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Siêu âm khớp 1 khớp: 264.000đ
-   Siêu âm khớp 2 khớp: 528.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
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
                price: `-   Chưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Siêu âm khớp 1 khớp: 264.000đ
-   Siêu âm khớp 2 khớp: 528.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
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
                price: `-   Chưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Siêu âm khớp 1 khớp: 264.000đ
-   Siêu âm khớp 2 khớp: 528.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
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
            {
                id: '0006',
                name: 'Nguyễn Văn Doanh',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '02',
                clinicAddress: `**Hệ thống Y tế Thu Cúc cơ sở Thụy Khuê**        
286 Thụy Khuê, quận Tây Hồ, Hà Nội`,
                email: 'doanhvn0006@gmail.com',
                username: 'doanhnv0006',
                image: await toBase64('06nguyen-van-doanh.jpg'),
                describe: `Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Thu Cúc       
Nguyên chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị Việt Xô       
Bác sĩ có 40 năm kinh nghiệm làm việc chuyên khoa Nội Thần kinh
Bác sĩ khám cho người bệnh từ 16 tuổi trở lên`,
                price: `-   Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại viBằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Chụp cắt lớp vi tính động mạch não(từ 64-128 dãy) [động mạch não -- có thuốc -- 128 dãy]: 3.636.000đ
-   Điện não đồ thường quyTheo chỉ định của bác sĩ: 360.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Tiến sĩ, Bác sĩ Nguyễn Văn Doanh
--------------------------------

-   Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Thu Cúc
-   Nguyên chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị Việt Xô
-   Bác sĩ có 40 năm kinh nghiệm làm việc chuyên khoa Nội Thần kinh
-   Bác sĩ khám cho người bệnh từ 16 tuổi trở lên

Khám và điều trị
----------------

-   Các bệnh đau đầu: Chứng đau nửa đầu, đau đầu căn nguyên mạch máu, đau đầu mạn tính hàng ngày,..
-   Bệnh đau vai gáy do thoái hóa cột sống cổ, thoát vị đĩa đệm cột sống cổ, ...
-   Đau thắt lưng hông do thoái hóa, thoát vị, đau do viêm khớp cùng chậu...
-   Rối loạn tiền đình
-   Điều trị chóng mặt do thiếu máu não
-   Tư vấn và điều trị các bệnh lý rối loạn về giấc ngủ: mất ngủ cấp tính hoặc mạn tính
-   Liệt dây 7 ngoại vi: Viêm các dây thần kinh sọ não và các dây thần kinh ngoại vi khác như hội chứng ống cổ tay, đau vai khuỷu tay do chơi thể thao
-   Liệt nửa người do nhồi máu não
-   Các bệnh lý về sa sút trí tuệ: Suy giảm nhận thức nhẹ, suy giảm trí nhớ, sa sút trí tuệ nguyên nhân mạch máu (sa sút trí tuệ sau đột quỵ),Alzheimer
-   Bệnh rối loạn vận động như bệnh Parkinson`,
                active: true
            },
            {
                id: '0007',
                name: 'Nguyễn Trọng Hưng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '02',
                clinicAddress: `**Phòng khám Đa khoa Meditec**        
52 Bà Triệu - Hoàn Kiếm - Hà Nội`,
                email: 'hungnt0007@gmail.com',
                username: 'hungnt0007',
                image: await toBase64('07pgs-nguyen-trong-hung.jpg'),
                describe: `Nguyên Trưởng khoa Tâm Thần kinh -- Bệnh viện Lão Khoa Trung ương       
Nguyên Bác sỹ Khoa Thần kinh - Bệnh viện Bạch Mai       
Bác sĩ khám cho người bệnh từ 3 tuổi trở lên`,
                price: `-   Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại viBằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Chụp cắt lớp vi tính động mạch não(từ 64-128 dãy) [động mạch não -- có thuốc -- 128 dãy]: 3.636.000đ
-   Điện não đồ thường quyTheo chỉ định của bác sĩ: 360.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Trọng Hưng
-----------------------------------------------

-   Chuyên gia đầu ngành về Thần kinh và các bệnh Lão khoa
-   Nguyên Trưởng khoa Tâm Thần kinh -- Bệnh viện Lão Khoa Trung ương
-   Bác sỹ Nội trú Chuyên nghành Thần kinh Đại học Lille -- Cộng hòa Pháp
-   Tu nghiệp chuyên sâu tại Bệnh viện Paris 6 - Cộng Hòa Pháp về Thần kinh học, Lão khoa, Lão học
-   Bác sĩ khám cho người bệnh từ 3 tuổi trở lên
-   Bác sĩ không nhận tư vấn cho người nhà khi không có bệnh nhân

### Quá trình công tác

-   Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa Thần kinh
-   Chuyên gia đầu ngành về Thần kinh và các bệnh Lão khoa
-   Nguyên Trưởng khoa Tâm Thần kinh -- Bệnh viện Lão Khoa Trung ương
-   Nguyên Bác sỹ Khoa Thần kinh - Bệnh viện Bạch Mai
-   Giảng viên Cao cấp trường Đại học Y khoa Hà Nội
-   Giám đốc Trung tâm Đào tạo -- Bệnh viện Lão Khoa Trung ương
-   Thành viên Viện Hàn Lâm Thần kinh học Hoa Kỳ
-   Phó Giáo sư Nguyễn Trọng Hưng đã tiến hành trao đổi kinh nghiệm và tu nghiệp tại nhiều quốc gia trên thế giới.
-   . Phó Giáo sư Hưng có gần 30 bài Báo cáo khoa học và Nghiên cứu được đăng trên các tạp chí uy tín trong và ngoài nước

### Quá trình đào tạo 

-   Tốt nghiệp Đại học Y Hà Nội năm 1991
-   Bác sỹ Nội trú Chuyên nghành Thần kinh Đại học Y Hà Nội.
-   Bác sỹ Nội trú Chuyên nghành Thần kinh Đại học Lille -- Cộng hòa Pháp
-   Bảo vệ luận văn Tiến sĩ Y học chuyên ngành Thần kinh tại Đại học Y Hà Nội năm 2008
-   Học hàm Phó Giáo sư -- Bộ môn Thần kinh Đại học Y Hà Nội năm 2012
-   Tu nghiệp chuyên sâu tại Bệnh viện Paris 6 - Cộng Hòa Pháp về Thần kinh học, Lão khoa, Lão học 

### Thành viên các hội khoa học

Thành viên của các hiệp hội Y khoa Quốc tế, như:

-   Viện Hàn Lâm Thần Kinh Hoa Kỳ
-   Hội Thần Kinh Học Đông Nam Á
-   Hội rối loạn vận động và Parkinson Quốc tế
-   Hội phòng chống Sa sút trí tuệ Châu Á
-   Hội Đột quỵ Quốc tế
-   Hội Thần kinh học Việt Nam

Khám & điều trị các bệnh
------------------------

-   Đau nhức đầu
-   Giảm trí nhớ, giảm tập trung, giảm chú ý
-   Mất ngủ kéo dài
-   Suy nhược thần kinh
-   Đau dây thần kinh mặt, hầu họng
-   Đau thần kinh cổ, vai, cánh tay, bàn tay
-   Đau thắt lưng - hông do bệnh lý cột sống (thoái hóa cột sống, thoát vị đĩa đệm, tổn thương dây chằng, co cứng cơ cột sống...) đau các rễ -- dây thần kinh chi dưới (gồm cả đau thần kinh tọa)
-   Rối loạn thần kinh thực vật: mệt mỏi, hồi hộp, vã mồ hôi, tụt huyết áp 
-   Các chứng lo âu, trầm cảm, rối loạn trí nhớ
-   Chứng chóng mặt, ù tai, mất thăng bằng, ngã do tổn thương hệ thống tiền đình -- thăng bằng, bệnh về thị giác, tổn thương cảm giác sâu và do các bệnh toàn thân khác (thiếu máu, tụt huyêt áp, hạ đường máu, bệnh tim mạch...)
-   Liệt hầu họng, nói khó, nuốt nghẹn, sặc, liệt mắt nhìn đôi
-   Liệt 2 chân, liệt 1/2 người
-   Vận động tay chân khó khăn, không chính xác
-   Run các chi, run toàn thân
-   Bệnh động kinh, cơn co giật, cơn mất ý thức, cơn rối loạn tâm thần
-   Bệnh Parkinson, vận động chậm chạp, cứng, run
-   Tai biến mạch máu não do huyết áp cao, đái đường, giai đoạn mới, di chứng
-   Bệnh lý thoái hóa hệ thần kinh
-   Các bệnh cơ: đau cơ, yếu cơ, teo cơ, loạn dưỡng cơ
-   Mọi chứng bệnh thần kinh khác do sang chấn, tai nạn, nhiễm trùng, nhiễm độc`,
                active: true
            },
            {
                id: '0008',
                name: 'Kiều Đình Hùng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '02',
                clinicAddress: `**Phòng khám Vietlife MRI Trần Bình Trọng**        
14 Trần Bình Trọng - Hoàn Kiếm - Hà Nội`,
                email: 'hungkd0008@gmail.com',
                username: 'hungkd0008',
                image: await toBase64('08pgskd-hung.jpg'),
                describe: `Trưởng khoa Ngoại, Bệnh viện Đại học Y Hà Nội       
Trên 20 năm kinh nghiệm công tác ở khoa Phẫu thuật thần kinh - Bệnh viện Việt Đức       
Bác sĩ nhận khám từ 15 tuổi trở lên (dưới 15 tuổi hỏi ý kiến bác sĩ)`,
                price: `-   Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại viBằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Chụp cắt lớp vi tính động mạch não(từ 64-128 dãy) [động mạch não -- có thuốc -- 128 dãy]: 3.636.000đ
-   Điện não đồ thường quyTheo chỉ định của bác sĩ: 360.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Phó Giáo sư, Tiến sĩ, Bác sĩ Kiều Đình Hùng
-------------------------------------------

-   Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên ngành thần kinh Sọ não và Cột sống.
-   Chuyên gia về các bệnh lý Thần kinh sọ não và Cột sống
-   Danh hiệu Thầy thuốc ưu tú
-   Phó Giám Đốc Trung tâm đào tạo và chuyển giao công nghệ trường Đại học Y Hà Nội
-   Trưởng khoa Ngoại Bệnh viện Đại học Y Hà Nội.
-   Trên 20 năm kinh nghiệm công tác ở khoa Phẫu thuật thần kinh - Bệnh viện Việt Đức. 
-   Tốt nghiệp loại ưu Bác sĩ nội trú với chuyên ngành phẫu thuật thần kinh cột sống năm 1990
-   Tiến sĩ Y khoa năm 2006
-   Danh hiệu Phó Giáo sư năm 2010.
-   Bác sĩ nhận khám từ 15 tuổi trở lên (dưới 15 tuổi hỏi ý kiến bác sĩ)

Khoảng thời gian từ năm 1994-1995 và năm 2000-2002 ông đã sang Pháp tu nghiệp với chuyên khoa Phẫu thuật thần kinh, cột sống.

Bên cạnh công tác quản lý và chuyên môn, Phó Giáo sư Kiều Đình Hùng thường xuyên tham gia các hội nghị, hội thảo về chuyên ngành phẫu thuật cột sống trên thế giới.

Khám & điều trị
---------------

-   Các bệnh lý về cột sống
-   Thần kinh sọ não
-   Bệnh lý Cơ Xương khớp
-   Khám, điều trị, phẫu thuật chấn thương sọ não, cột sống, tủy sống
-   Khám, điều trị, phẫu thuật thoát vị đĩa đệm cột sống cổ và thắt lưng
-   Khám, điều trị, phẫu thuật vết thương và chấn thương dây thần kinh ngoại vi
-   Khám, điều trị Hội chứng tiền đình
-   Điều trị các bệnh viêm, thoái hóa cột sống và xương khớp
-   Phẫu thuật tạo hình sọ và cột sống
-   Phẫu thuật u não và u tủy sống
-   Bệnh động kinh, mạch máu não, các bệnh về sa sút trí tuệ
-   Các bệnh lý liên quan đến tủy sống và thần kinh ngoại biên`,
                active: true
            },
            {
                id: '0009',
                name: 'Nguyễn Văn Liệu',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '02',
                clinicAddress: `**Bệnh viện Đa khoa Hồng Phát**        
Số 219 Lê Duẩn - Hai Bà Trưng - Hà Nội`,
                email: 'lieunv0009@gmail.com',
                username: 'lieunv0009',
                image: await toBase64('09pho-giao-su-nguyen-van-lieu.jpg'),
                describe: `Phó Trưởng khoa Thần kinh, Bệnh viện Bạch Mai       
Phó Chủ nhiệm Bộ môn Thần kinh, Đại học Y khoa Hà Nội       
Bác sĩ với hơn 30 năm kinh nghiệm trong nghề`,
                price: `-   Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại viBằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Chụp cắt lớp vi tính động mạch não(từ 64-128 dãy) [động mạch não -- có thuốc -- 128 dãy]: 3.636.000đ
-   Điện não đồ thường quyTheo chỉ định của bác sĩ: 360.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Phó Giáo sư - Tiến sĩ Nguyễn Văn Liệu
-------------------------------------

-   Chuyên gia đầu ngành về Thần kinh
-   Phó Trưởng khoa Thần kinh - Bệnh viện Bạch Mai 
-   Phó Chủ nhiệm Bộ môn Thần kinh - Đại học Y khoa Hà Nội
-   Bác sĩ với hơn 30 năm kinh nghiệm trong nghề

### Quá trình công tác

-   Phó chủ nhiệm Khoa Thần kinh BV Bạch Mai (2007 - nay)
-   Giảng viên cao cấp -- Đại học Y Hà Nội (2007 - nay)
-   Phó chủ nhiệm Bộ môn Thần kinh Đại học Y Hà Nội (2001- nay)
-   Giảng viên Đại học Y Hà Nội, Bệnh viện Bạch Mai (1987-2000)

### Quá trình đào tạo

-   Thần kinh học, Cộng hòa Pháp (1997 - 1998)
-   Thần kinh học, Đại học Y Hà Nội (1983 - 1996)
-   Bác sĩ đa khoa, Đại học Y Hà Nội (1977 - 1983)

### Sách và các công trình nghiên cứu, báo cáo khoa học

-   Phó Giáo sư đã có trên 30 bài báo và nhiều tài liệu sau đại học đã được xuất bản
-   Tham gia nhiều chương trình đào tạo, hội thảo trong nước và quốc tế
-   Phó Giáo sư đã hướng dẫn nhiều luận án Tiến sĩ, Thạc sĩ cho các thế hệ thầy thuốc hiện đang công tác tại nhiều bệnh viện trên cả nước.

### Khám & điều trị các bệnh

Phó Giáo sư đã thăm khám và điều trị thành công cho hàng nghìn bệnh nhân gặp các vấn đề bệnh lý về thần kinh.

Phó Giáo sư khám, điều trị các bệnh lý chuyên khoa Nội Thần kinh như:

-   Đau nhức đầu
-   Mất ngủ kéo dài
-   Suy nhược thần kinh.
-   Đau dây thần kinh mặt, hầu họng
-   Đau thần kinh cổ vai cánh tay
-   Đau thần kinh chi dưới, đau thắt lưng cùng 
-   Đau thần kinh do zona
-   Rối loạn thần kinh thực vật: mệt mỏi, hồi hộp, vã mồ hôi, tụt huyết áp 
-   Các chứng lo âu, trầm cảm, rối loạn trí nhớ
-   Chóng mặt, ù tai do hội chứng tiền đình
-   Liệt hầu họng, nói khó, nuốt nghẹn, sặc, liệt mắt nhìn đôi
-   Liệt 2 chân, liệt 1/2 người
-   Vận động tay chân khó khăn, không chính xác
-   Run các chi, run toàn thân.
-   Bệnh động kinh, cơn co giật, cơn mất ý thức, cơn rối loạn tâm thần
-   Bệnh Parkinson, vận động chậm chạp, cứng, run
-   Tai biến mạch máu não do huyết áp cao, đái đường, giai đoạn mới, di chứng.
-   Các bệnh cơ: teo cơ, bệnh nhược cơ
-   Mọi chứng bệnh thần kinh khác do sang chấn, tai nạn, nhiễm trùng, nhiễm độc.`,
                active: true
            },
            {
                id: ' 0010',
                name: `Trần Thị Mai Thy`,
                phoneNumber: randomPhoneNumber(),
                specialtyID: '02',
                clinicAddress: `**Bệnh viện Quốc tế City**        
3 Đường Số 17A, Bình Trị Đông B, Bình Tân, Thành phố Hồ Chí Minh`,
                email: 'thyttm0010@gmail.com',
                username: 'thyttm0010',
                image: await toBase64('10drtranthimaithy.jpg'),
                describe: `20 năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Thần kinh       
Từng công tác nhiều năm tại khoa Nội Thần kinh, Bệnh viện Nhân dân 115`,
                price: `-   Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
-   Tổng phân tích tế bào máu ngoại viBằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
-   Chụp cắt lớp vi tính động mạch não(từ 64-128 dãy) [động mạch não -- có thuốc -- 128 dãy]: 3.636.000đ
-   Điện não đồ thường quyTheo chỉ định của bác sĩ: 360.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Thạc sĩ, Bác sĩ Trần Thị Mai Thy
--------------------------------

-   20 năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Thần kinh
-   Từng công tác nhiều năm tại khoa Nội Thần kinh, Bệnh viện Nhân dân 115

Khám và điều trị
----------------

-   Tầm soát, phòng ngừa hoặc điều trị Tai biến mạch máu não (Đột qụy)
-   Điều trị đau đầu cấp tính và mạn tính do nhồi máu não, u não, u màng não, chảy máu não
-   Điều trị các bệnh đau đầu: Chứng đau nửa đầu, đau đầu căn nguyên mạch máu, đau đầu mạn tính
-   Điều trị chóng mặt do thiếu máu não, do rối loạn tiền đình,...
-   Khám và theo dõi điều trị bệnh lý động kinh ở người lớn
-   Tư vấn và điều trị các bệnh lý rối loạn về giấc ngủ: Mất ngủ cấp tích hoặc mạn tính
-   Điều trị bệnh lý thần kinh ngoại biên
-   Điều trị đột quỵ sớm trong những giờ đầu để phòng ngừa di chứng nặng nề

### Quá trình công tác

-   Hiện là Bác sĩ Nội Thần kinh, Bệnh viện Quốc tế City (2016 - Nay)
-   Bác sĩ điều trị khoa Nội Thần kinh, Bệnh viện Nhân dân 115 (2005 - 2016)

### Quá trình đào tạo

-   Tốt nghiệp Thạc sĩ chuyên ngành Thần kinh, Đại học Y dược TP. HCM (2013)
-   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Phạm Ngọc Thạch (2002)`,
                active: true
            },
            {
                id: '0011',
                name: 'Hà Văn Quyết',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '03',
                clinicAddress: `**Bệnh viện Ung bướu Hưng Việt**        
34 Đại Cồ Việt, Hai Bà Trưng, Hà Nội`,
                email: 'quyethv@gmail.com',
                username: 'quyethv',
                image: await toBase64('11gs-ha-van-quyet.jpg'),
                describe: `Chuyên gia trên 35 năm kinh nghiệm trong lĩnh vực bệnh lý Tiêu hóa       
Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa       
Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội
Bác sĩ khám cho người bệnh từ 3 tuổi trở lên`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm.  500.000^đ^ 
-   Nội soi dạ dày gây mê - Nội soi dạ dày công nghệ cao NBI (có mê): 2.030.000đ - 2.600.000đ 
-   Nội soi dạ dày không gây mê - Nội soi dạ dày công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ 
-   Nội soi đại tràng gây mê - Nội soi đại tràng công nghệ cao NBI (gây mê): 2.370.000đ - 2.800.000đ
-   Nội soi đại tràng không gây mê - Nội soi đại tràng công nghệ cao NBI (không mê): 1.320.000đ - 2.000.000đ
-   Nội soi thực quản gây mê - Nội soi thực quản công nghệ cao NBI (có mê): 2.030.000đ - 2.400.000đ
-   Nội soi thực quản không gây mê - Nội soi thực quản công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ

Bệnh viện có các hình thức thanh toán: Chuyển khoản, tiền mặt, thẻ tín dụng`,
                content: `Giáo sư, Tiến sĩ, Bác sĩ Hà Văn Quyết
-------------------------------------

-   Giáo sư, Tiến sỹ, Bác sĩ chuyên khoa Ngoại Tiêu hóa
-   Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa
-   Kinh nghiệm làm việc trên 35 năm trong lĩnh vực bệnh lý Tiêu hóa
-   Chuyên ngành Ngoại -- Phẫu thuật Nội soi Tiêu hóa, Ổ bụng & các bệnh lý hậu môn, trực tràng.
-   Bác sĩ Nội trú Bệnh viện Việt Đức 
-   Nguyên Chủ nhiệm Bộ môn Ngoại - Đại học Y Hà Nội 
-   Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội
-   Nguyên Phó Giám đốc Bệnh viện Việt Đức.
-   Bác sĩ khám cho người bệnh từ 3 tuổi trở lên

### **Quá trình Đào tạo**

-   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội.
-   Bác sĩ Nội trú tại các bệnh viện ở Paris, Cộng hòa Pháp
-   Thực tập sinh khoa Tiêu hóa trường Đại học Tokai, Nhật Bản
-   Tu nghiệp về chuyên khoa Tiêu hóa tại Mỹ, Singapore, Hàn Quốc 

### **Sách và các công trình nghiên cứu, báo cáo khoa học**

-   Chủ biên nhiều bộ sách giáo khoa về Ngoại khoa phẫu thuật tiêu hóa và chuyên sâu về tiêu hóa.
-   Tham gia các đề tài nghiên cứu khoa học về ung thư dạ dày, đại trực tràng; các chủ đề về bệnh lý tụy; các loại phẫu thuật nội soi, nội soi can thiệp; bệnh lý về hậu môn trực tràng. 

### **Thành viên các Hội khoa học, tổ chức chuyên môn**

-   Nguyên Tổng thư kí Hội Ngoại khoa Việt Nam 
-   Phó Chủ tịch Hội Khoa học về Hậu môn trực tràng 

### **Tham gia các chuyên đề sức khỏe **

-   Ban biên tập Tạp chí Y học thực hành
-   Ban biên tập Tạp chí Ngoại khoa
-   Ban biên tập Tạp chí Hậu môn Trực tràng

**Giáo sư Khám, điều trị các bệnh **
------------------------------------

-   Giáo sư nhận khám, điều trị các bệnh lý khó về Tiêu hóa, hậu môn, trực tràng, gan mật.

-   Trực tiếp tiến hành Nội soi tiêu hóa, dạ dày, đại tràng
-   Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng
-   Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày
-   Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa
-   Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại.

Khám và điều trị các bệnh lý dạ dày

-   Gắp dị vật đường tiêu hóa
-   Đau dạ dày
-   Chảy máu dạ dày 
-   Đau thượng vị 
-   Viêm dạ dày
-   Loét dạ dày tá tràng
-   Nhiễm Helicobacter pylori dạ dày (HP)
-   Trào ngược dạ dày thực quản (Gerd)
-   Tắc ruột 
-   Polyp dạ dày 
-   Chảy máu dạ dày 
-   Viêm dạ dày ruột Virus
-   Viêm ruột thừa
-   Polyp dạ dày
-   Ung thư dạ dày
-   Táo bón
-   Khó nuốt
-   Khó tiêu
-   Ợ nóng, Ợ chua
-   Táo bón

Bệnh lý đại tràng, trực tràng, hậu môn 

-   Hội chứng ruột kích thích (viêm đại tràng co thắt)
-   Viêm đại tràng
-   Viêm đại tràng màng giả
-   Viêm loét đại tràng
-   Bệnh trĩ, trĩ chảy máu, rò hậu môn
-   Rò hậu môn, ngứa hậu môn
-   Nứt kẽ hậu môn, đại tiện ra máu, đại tiện khó
-   Apxe hậu môn
-   Đi ngoài ra máu 

**Khám và điều trị các bệnh lý về gan, mật **

-   Viêm túi mật, sỏi mật 
-   Viêm tụy
-   Viêm xơ đường mật
-   Viêm xơ gan do rượu
-   Xơ gan
-   U gan

**Nội soi tiêu hóa **

-   Gắp dị vật đường tiêu hóa 
-   Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại
-   Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng
-   Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa
-   Khám, nội soi dạ dày 
-   Nội soi dạ dày (có gây mê)
-   Nội soi đại tràng (có gây mê)
-   Nội soi cắt polyp dạ dày
-   Nội soi cắt polyp đại trực tràng  
-   Phẫu thuật nội soi cắt u dưới niêm mạc dạ dày -- tá tràng, đại tràng
-   Phẫu thuật nội soi trào ngược dạ dày thực quản`,
                active: true
            },
            {
                id: '0012',
                name: 'Lê Tuyết Anh',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '03',
                clinicAddress: `**Phòng khám Vietlife MRI Trần Bình Trọng**        
14 Trần Bình Trọng - Hoàn Kiếm - Hà Nội`,
                email: 'anhlt0012@gmail.com',
                username: 'anhlt0012',
                image: await toBase64('12bsckii-le-tuyet-anh.jpg'),
                describe: `Nguyên bác sĩ Chuyên khoa II chuyên ngành Tiêu hóa, Bệnh viện Bạch Mai       
Hiện tại bác sĩ có lịch khám tại Phòng khám Vietlife       
Bác sĩ khám cho người bệnh từ 16 tuổi trở lên`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm.  500.000^đ^ 
-   Nội soi dạ dày gây mê - Nội soi dạ dày công nghệ cao NBI (có mê): 2.030.000đ - 2.600.000đ 
-   Nội soi dạ dày không gây mê - Nội soi dạ dày công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ 
-   Nội soi đại tràng gây mê - Nội soi đại tràng công nghệ cao NBI (gây mê): 2.370.000đ - 2.800.000đ
-   Nội soi đại tràng không gây mê - Nội soi đại tràng công nghệ cao NBI (không mê): 1.320.000đ - 2.000.000đ
-   Nội soi thực quản gây mê - Nội soi thực quản công nghệ cao NBI (có mê): 2.030.000đ - 2.400.000đ
-   Nội soi thực quản không gây mê - Nội soi thực quản công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ

Bệnh viện có các hình thức thanh toán: Chuyển khoản, tiền mặt, thẻ tín dụng`,
                content: `Bác sĩ Chuyên khoa II Lê Tuyết Anh
----------------------------------

-   Bác sĩ chuyên khoa II ( Bệnh viện Bạch Mai -- 2006)
-   Hiện tại bác sĩ có lịch khám tại Phòng khám Vietlife
-   Bác sĩ khám cho người bệnh từ 16 tuổi trở lên

Khám & điều trị
---------------

-   Chuyên gia về nội soi tiêu hóa
-   Nội soi thực quản - dạ dày
-   Nội soi đại tràng
-   Khám, tư vấn và điều trị các bệnh tiêu hóa - gan mật`,
                active: true
            },
            {
                id: '0013',
                name: 'Nguyễn Văn Thông',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '03',
                clinicAddress: `**Phòng khám Bệnh viện Đại học Y Dược 1**        
20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM`,
                email: 'thongnv0013@gmail.com',
                username: 'thongnv0013',
                image: await toBase64('13-bs-nguyen-van-thong.jpg'),
                describe: `Gần 40 năm kinh nghiệm lĩnh vực Tiêu hóa - Gan - Mật       
Bác sĩ điều trị Tiêu hóa - Gan - Mật - Bệnh viện Nhân Dân Gia Định, Bệnh viện Đại học Y Dược TP. HCM       
Giảng viên bộ môn Ngoại Tổng quát Trường Đại học Y Dược TP. HCM       
Bác sĩ nhận khám từ 15 tuổi trở lên`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm.  500.000^đ^ 
-   Nội soi dạ dày gây mê - Nội soi dạ dày công nghệ cao NBI (có mê): 2.030.000đ - 2.600.000đ 
-   Nội soi dạ dày không gây mê - Nội soi dạ dày công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ 
-   Nội soi đại tràng gây mê - Nội soi đại tràng công nghệ cao NBI (gây mê): 2.370.000đ - 2.800.000đ
-   Nội soi đại tràng không gây mê - Nội soi đại tràng công nghệ cao NBI (không mê): 1.320.000đ - 2.000.000đ
-   Nội soi thực quản gây mê - Nội soi thực quản công nghệ cao NBI (có mê): 2.030.000đ - 2.400.000đ
-   Nội soi thực quản không gây mê - Nội soi thực quản công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ

Bệnh viện có các hình thức thanh toán: Chuyển khoản, tiền mặt, thẻ tín dụng`,
                content: `Bác sĩ Chuyên khoa I Nguyễn Văn Thông
-------------------------------------

-   Gần 40 năm kinh nghiệm lĩnh vực Tiêu hóa - Gan - Mật
-   Bác sĩ điều trị Tiêu hóa - Gan - Mật - Bệnh viện Nhân Dân Gia Định, Bệnh viện Đại học Y Dược TP. HCM
-   Giảng viên bộ môn Ngoại Tổng quát Trường Đại học Y Dược TP. HCM
-   Bác sĩ nhận khám từ 15 tuổi trở lên

Khám và điều trị
----------------

-   Hội chứng ruột kích thích, trĩ nội độ I - II
-   Hội chứng trào ngược dạ dày -  thực quản
-   Viêm - loét dạ dày, tá tràng
-   Viêm gan do rượu, virus,...
-   Viêm khớp do thoái hoá
-   Rối loạn thần kinh tim
-   Rối loạn tuần hoàn não
-   Suy nhược cơ thể
-   Cao huyết áp
-   Rối loạn chuyển hoá mỡ, đạm,...

### Quá trình công tác

-   Giảng viên bộ môn Ngoại Tổng quát Trường Đại học Y Dược TP. HCM
-   Phẫu thuật viên Ngoại Tổng quát, Bác sĩ điều trị Tiêu hóa - Gan - Mật - Bệnh viện Nhân Dân Gia Định, Bệnh viện Đại học Y Dược TP. HCM (1978 - Nay)

### Quá trình đào tạo

-   Học Chuyên khoa I chuyên ngành Ngoại Tổng quát Trường Đại học Y Dược TP. HCM
-   Tốt nghiệp Bác sĩ Đa khoa Trường Đại học Y Dược TP. HCM (1977)`,
                active: true
            },
            {
                id: '0014',
                name: 'Nguyễn Thị Tuyết Vân',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '03',
                clinicAddress: `**Phòng khám Đa khoa Meditec**        
52 Bà Triệu - Hoàn Kiếm - Hà Nội`,
                email: 'vanntt0014@gmail.com',
                username: 'vanntt0014',
                image: await toBase64('14bs-tuyet-van-meditec-1.jpg'),
                describe: `Bác sĩ từng công tác tại Khoa Khám bệnh, Bệnh viện Bạch Mai       
Gần 30 năm kinh nghiệm trong lĩnh vực tiêu hóa       
Bác sĩ nhận khám cho trẻ từ 15 tuổi trở lên`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm.  500.000^đ^ 
-   Nội soi dạ dày gây mê - Nội soi dạ dày công nghệ cao NBI (có mê): 2.030.000đ - 2.600.000đ 
-   Nội soi dạ dày không gây mê - Nội soi dạ dày công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ 
-   Nội soi đại tràng gây mê - Nội soi đại tràng công nghệ cao NBI (gây mê): 2.370.000đ - 2.800.000đ
-   Nội soi đại tràng không gây mê - Nội soi đại tràng công nghệ cao NBI (không mê): 1.320.000đ - 2.000.000đ
-   Nội soi thực quản gây mê - Nội soi thực quản công nghệ cao NBI (có mê): 2.030.000đ - 2.400.000đ
-   Nội soi thực quản không gây mê - Nội soi thực quản công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ

Bệnh viện có các hình thức thanh toán: Chuyển khoản, tiền mặt, thẻ tín dụng`,
                content: `Bác sĩ Chuyên khoa II Nguyễn Thị Tuyết Vân
------------------------------------------

-   Bác sĩ từng công tác tại Khoa Khám bệnh, Bệnh viện Bạch Mai
-   Hơn 15 năm kinh nghiệm trong lĩnh vực tiêu hóa
-   Bác sĩ nhận khám cho trẻ từ 15 tuổi trở lên

### Quá trình công tác

-   Bác sĩ Khoa Khám bệnh, Bệnh viện Bạch Mai (1991 - 2005)

### Quá trình đào tạo 

-   Tốt nghiệp Bác sĩ Chuyên khoa II chuyên ngành Nội Tiêu hóa, Trường Đại học Y Hà Nội (2004)
-   Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Nội khoa, Trường Đại học Y Hà Nội (1998)
-   Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học Y Hà Nội (1991)

### Sách và công trình nghiên cứu

-   Nghiên cứu thực trạng chẩn đoán bệnh tiêu hóa tại phòng khám nội bệnh viện Bạch Mai từ tháng 8-2003 đến tháng 7-2004

Khám và điều trị 
-----------------

**Các bệnh lý thuộc dạ dày**

-   Đau dạ dày
-   Trào ngược dạ dày - thực quản
-   Viêm hang vị dạ dày
-   Viêm, loét dạ dày
-   Viêm, loét tá tràng
-   Polyp dạ dày, ung thư dạ dày ...
-   Đau thượng vị
-   Khó nuốt
-   Khó tiêu

**Các bệnh lý về ruột**

-   Hội chứng ruột kích thích
-   Bệnh lý không dung nạp lactose
-   Viêm đại tràng
-   Polyp, ung thư đại tràng ...
-   Đi ngoài ra máu
-   Nứt kẽ hậu môn, đại tiện khó

**Khám và điều trị các bệnh lý gan, mật**

-   Viêm xơ gan do rượu
-   Gan nhiễm mỡ`,
                active: true
            },
            {
                id: '0015',
                name: 'Nguyễn Thị Bạch Liễu',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '03',
                clinicAddress: `**Bệnh viện Đa khoa Chữ Thập Xanh**        
33 Nguyễn Hoàng, Nam Từ Liêm, Hà Nội`,
                email: 'lieuntb@gmail.com',
                username: 'lieuntb',
                image: await toBase64('15-bs-lieu.jpg'),
                describe: `Hơn 30 năm kinh nghiệm trong khám và điều trị các bệnh lý Tiêu hóa       
Từng công tác nhiều năm tại Bệnh viện Quân Y 103       
Nguyên giảng viên Học viện Quân Y`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm.  500.000^đ^ 
-   Nội soi dạ dày gây mê - Nội soi dạ dày công nghệ cao NBI (có mê): 2.030.000đ - 2.600.000đ 
-   Nội soi dạ dày không gây mê - Nội soi dạ dày công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ 
-   Nội soi đại tràng gây mê - Nội soi đại tràng công nghệ cao NBI (gây mê): 2.370.000đ - 2.800.000đ
-   Nội soi đại tràng không gây mê - Nội soi đại tràng công nghệ cao NBI (không mê): 1.320.000đ - 2.000.000đ
-   Nội soi thực quản gây mê - Nội soi thực quản công nghệ cao NBI (có mê): 2.030.000đ - 2.400.000đ
-   Nội soi thực quản không gây mê - Nội soi thực quản công nghệ cao NBI (không mê): 1.050.000đ - 1.600.000đ

Bệnh viện có các hình thức thanh toán: Chuyển khoản, tiền mặt, thẻ tín dụng`,
                content: `Bác sĩ Chuyên khoa II Nguyễn Thị Bạch Liễu
------------------------------------------

-   Hơn 30 năm kinh nghiệm trong khám và điều trị các bệnh lý Tiêu hóa
-   Từng công tác nhiều năm tại Bệnh viện Quân Y 103
-   Nguyên giảng viên Học viện Quân Y

Khám và điều trị
----------------

Bác sĩ khám và điều trị các bệnh lý vể Tiêu hóa:

-   Khám và điều trị các bệnh của dạ dày tá tràng như viêm loét dạ dày tá tràng, viêm loét thực quản.
-   Phát hiện ung thư dạ dày, thực quản,...
-   Khám và điều trị các bệnh của đại tràng như viêm đại tràng, bệnh trĩ, phát hiện ung thư đại tràng và thư vấn điều trị chuyên khoa.
-   Khám và điều trị bệnh xơ gan, phòng ngừa biến chứng của xơ gan, hạn chế diễn tiến nặng của xơ gan.
-   Các bệnh lý của gan, mật

### Quá trình công tác

-   Hiện là Bác sĩ khám và điều trị Nội Tiêu hóa, Bệnh viện Đa khoa Chữ Thập Xanh 
-   Bác sĩ điều trị tại Bệnh viện Quân Y 103 (1990 - 2021)
-   Giảng viên Học viện Quân Y (1990 - 2021)

### Quá trình đào tạo

-   Tốt nghiệp Bác sĩ chuyên khoa II chuyên ngành Nội Tiêu hóa, Học viện Quân Y (2010)
-   Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Nội chung, Học viện Quân Y (1996)
-   Tốt nghiệp Bác sĩ Đa khoa, Học viện Quân Y (1990)`,
                active: true
            },
            {
                id: '0016',
                name: 'Nguyễn Ngọc Tước',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '04',
                clinicAddress: `**Phòng khám Nội Tim mạch Thăng Long**        
Số 106 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội`,
                email: 'tuocnn0016@gmail.com',
                username: 'tuocnn0016',
                image: await toBase64('16pgs-nguyen-ngoc-tuoc.jpg'),
                describe: `Nguyên Phó viện trưởng Viện Tim mạch Việt Nam       
Chuyên gia đầu ngành về bệnh lý Nội tim mạch`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 350.000đ
-   Siêu âm Doppler màu tim: 350.000đ

Tại bệnh viện có thanh toán bằng hình thức tiền mặt`,
                content: `Phó Giáo sư, Tiến sĩ Nguyễn Ngọc Tước
-------------------------------------

-   Chuyên gia đầu ngành về bệnh lý Nội - Tim mạch
-   Danh hiệu Thầy thuốc Ưu tú
-   Nguyên Phó Viện trưởng Viện Tim mạch Việt Nam - Bệnh viện Bạch Mai
-   Nguyên Trưởng khoa C3 - Viện Tim Mạch Việt Nam - Bệnh viện Bạch Mai

**Phó Giáo sư khám và điều trị**
--------------------------------

**Bệnh lý Tim Mạch**

-   Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch
-   Các bệnh lý Nội Tim mạch
-   Bệnh van tim
-   Bệnh cơ tim
-   Rối loạn nhịp tim
-   Khám bệnh mạch máu ngoại biên.
-   Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.
-   Tư vấn sử dụng thuốc chống đông máu.

**Bệnh mạch vành**

-   Bệnh mạch vành
-   Bệnh hẹp mạch vành
-   Thiểu năng mạch vành
-   Xơ vữa động mạch
-   Điều trị bệnh mạch vành

***     Các triệu chứng bệnh mạch vành:***

-   Cơn đau thắt ngực là một trong các dấu hiệu hay gặp nhất.
-   Đau giữa ngực, sau xương ức hay vùng trước tim.
-   Đau có thể lan lên cổ, ra hàm, ra cánh tay, thường gặp nhất là lan ra bên trái, đôi khi đau ở vùng thượng vị.
-   Cảm giác bó chặt, thắt nghẹt, đè ép.
-   Đôi khi chỉ là cảm giác khó chịu trong ngực
-   Có trường hợp lan ra sau lưng, vùng cột sống

**Rối loạn mỡ máu**

-   Bệnh mỡ máu cao
-   Rối loạn mỡ máu
-   Tư vấn, điều trị bệnh mỡ máu
-   Rối loạn chuyển hóa
-   Dinh dưỡng cho bệnh nhân rối loạn mỡ máu.

**Huyết áp**

-   Bệnh cao huyết áp
-   Bệnh huyết áp thấp

**Các trang thiết bị hỗ trợ thăm khám, chẩn đoán**

-   Máy Siêu âm tim chuyên sâu
-   Máy chụp X.Quang tim phổi
-   Máy điện tâm đồ
-   Xét nghiệm máu (Sinh hóa, Huyết học, Đông máu, Nước tiểu)`,
                active: true
            },
            {
                id: '0017',
                name: 'Nguyễn Văn Quýnh',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '04',
                clinicAddress: `**Hệ thống Y tế Thu Cúc cơ sở Trần Duy Hưng**        
216 Trần Duy Hưng, Cầu Giấy, Hà Nội`,
                email: 'quynhnv0017@gmail.com',
                username: 'quynhnv0017',
                image: await toBase64('17nguyen-van-quynh-pgs.jpg'),
                describe: `Nguyên Phó Chủ nhiệm Bộ môn Nội tim mạch, Bệnh viện Trung ương Quân đội 108       
Chuyên gia hàng đầu về nội tim mạch với hơn 30 năm kinh nghiệm       
Bác sĩ khám cho người bệnh từ 18 tuổi trở lên`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 350.000đ
-   Siêu âm Doppler màu tim: 350.000đ

Tại bệnh viện có thanh toán bằng hình thức tiền mặt`,
                content: `Phó giáo sư, Tiến Sĩ, Thầy thuốc Nhân dân Nguyễn Văn Quýnh
----------------------------------------------------------

-   Chuyên gia hàng đầu về nội tim mạch với hơn 30 năm kinh nghiệm
-   Nguyên Chủ nhiệm khoa Nội cán bộ A1-- Bệnh viện Trung ương Quân đội 108
-   Nguyên Phó Chủ nhiệm Bộ môn Nội tim mạch Bệnh viện Trung ương Quân đội 108
-   Bác sĩ khám cho người bệnh từ 18 tuổi trở lên

### Quá trình công tác

-   Từng công tác tại Khoa Nội cán bộ, Bệnh viện Trung ương Quân đội 108
-   Từng làm việc tại Khoa tim mạch - Bệnh viện Trung ương Quân đội 108
-   Nguyên Chủ nhiệm khoa Nội cán bộ A1-- Bệnh viện Trung Ương Quân đội 108

### Quá trình đào tạo

-   Được phong tặng danh hiệu Phó giáo sư
-   Tốt nghiệp Tiến sĩ Y khoa
-   Tốt nghiệp Bác sĩ Chuyên khoa II 
-   Được phong tặng danh hiệu Thầy thuốc Nhân dân
-   Phó Giám đốc Bệnh viện Đa khoa Quốc tế Thu Cúc

Khám và điều trị
----------------

**Bệnh lý tim mạch**

-   Nhịp tim nhanh và huyết áp thấp **\
    **
-   Khám, tư vấn, điều trị chuyên sâu các bệnh về tim mạch
-   Các bệnh lý nội tim mạch
-   Rối loạn nhịp tim: Nhịp tim nhanh, nhịp tim chậm, nhịp tim thay đổi thất thường 
-   Nhồi máu cơ tim
-   Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch
-   Tư vấn sử dụng thuốc chống đông máu

**Bệnh mạch vành**

-   Bệnh lý mạch vành
-   Bệnh hẹp mạch vành
-   Thiểu năng mạch vành
-   Xơ vữa động mạch
-   Điều trị bệnh mạch vành

    *Các triệu chứng bệnh mạch vành:*

-   Cơn đau thắt ngực là một trong các dấu hiệu hay gặp nhất
-   Đau giữa ngực, sau xương ức hay vùng trước tim
-   Đau có thể lan lên cổ, ra hàm, ra cánh tay, thường gặp nhất là lan ra bên trái, đôi khi đau ở vùng thượng vị
-   Cảm giác bó chặt, thắt nghẹt, đè ép
-   Đôi khi chỉ là cảm giác khó chịu trong ngực
-   Có trường hợp lan ra sau lưng, vùng cột sống

**Rối loạn mỡ máu**

-   Bệnh mỡ máu cao
-   Tư vấn, điều trị bệnh mỡ máu
-   Rối loạn mỡ máu
-   Rối loạn chuyển hóa
-   Dinh dưỡng cho bệnh nhân rối loạn mỡ máu

**Huyết áp**

-   Bệnh cao huyết áp
-   Bệnh huyết áp thấp
-   Tư vấn điều trị bệnh huyết áp
-   Tai biến mạch máu não do cao huyết áp`,
                active: true
            },
            {
                id: '0018',
                name: 'Nguyễn Lân Việt',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '04',
                clinicAddress: `**Phòng khám Đa khoa Nhật Bản T-Matsuoka**        
Tòa nhà số 154 Nguyễn Thái Học, phường Kim Mã, Quận Ba Đình, Hà Nội`,
                email: 'vietnl0018@gmail.com',
                username: 'vietnl0018',
                image: await toBase64('18gs-ts-nguyen-lan-viet.jpg'),
                describe: `Nguyên Viện trưởng Viện Tim Mạch Quốc Gia       
Nguyên Hiệu trưởng trường Đại học Y Hà Nội       
Chủ tịch Hội Tim mạch Việt Nam`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 350.000đ
-   Siêu âm Doppler màu tim: 350.000đ

Tại bệnh viện có thanh toán bằng hình thức tiền mặt`,
                content: `Giáo sư, Tiến sĩ Nguyễn Lân Việt
--------------------------------

-   Chủ tịch Hội Tim mạch Việt Nam
-   Nguyên Hiệu trưởng trường Đại học Y Hà Nội
-   Nguyên Viện trưởng Viện Tim mạch Quốc gia
-   Phó Chủ tịch Hội đồng chuyên môn bảo vệ sức khỏe cán bộ miền Bắc trực thuộc Ban Bảo vệ sức khỏe Trung ương
-   Tổng biên tập tạp chí Tim mạch học
-   Nguyên trưởng bộ môn Tim mạch Đại học Y Hà Nội
-   Chủ tịch Hội đồng cố vấn chuyên môn Bệnh viện Đông Đô

Khám và điều trị
----------------

**Bệnh lý Tim Mạch**

-   Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch
-   Các bệnh Nội Tim mạch
-   Rối loạn mỡ máu
-   Bệnh van tim
-   Bệnh cơ tim
-   Khám bệnh mạch máu ngoại biên.
-   Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.
-   Tư vấn sử dụng thuốc chống đông máu.
-   Bệnh cao huyết áp

**Bệnh mạch vành**

-   Bệnh mạch vành
-   Bệnh hẹp mạch vành
-   Thiểu năng mạch vành
-   Xơ vữa động mạch
-   Điều trị bệnh mạch vành

**Rối loạn mỡ máu**

-   Bệnh mỡ máu cao
-   Rối loạn mỡ máu
-   Tư vấn, điều trị bệnh mỡ máu
-   Rối loạn chuyển hóa
-   Dinh dưỡng cho bệnh nhân rối loạn mỡ máu

**Quy trình cho người bệnh khám với Giáo sư, Tiến sĩ Nguyễn Lân Việt**
----------------------------------------------------------------------

**Bước 1: **Bệnh nhân đến thực hiện các dịch vụ cận lâm sàng:

-   Chụp Xquang ngực thẳng
-   Điện giải đồ (Na, K, Cl)
-   Điện tim thường
-   Định lượng Acid uric
-   Định lượng Calci toàn phần
-   Định lượng Cholesterol
-   Định lượng Creatinine
-   Định lượng Glucose máu
-   Định lượng HbA1c
-   Định lượng HDL-C (High density lipoprotein Cholesterol)
-   Định lượng LDL - C (Low density lipoprotein Cholesterol)
-   Định lượng Triglyceride
-   Định lượng Ure trong máu
-   Đo hoạt độ ALT (GPT)
-   Đo hoạt độ AST (GOT)
-   Đo hoạt độ GGT (Gama Glutamyl Transferase)
-   Siêu âm Doppler tim, màng tim qua thành ngực

**Bước 2:** Người bệnh gặp **Giáo sư, Tiến sĩ Nguyễn Lân Việt** để đọc kết quả và tư vấn điều trị.

*Ghi chú*: Bệnh nhân chỉ gặp Giáo sư, Tiến sĩ Nguyễn Lân Việt ở **Bước 2 **(sau khi đã có kết quả xét nghiệm, chụp chiếu). Bệnh nhân có kết quả cận lâm sàng dưới 1 tháng có thể dùng kết quả đó.`,
                active: true
            },
            {
                id: '0019',
                name: 'Phan Thị Bạch Mai',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '04',
                clinicAddress: `**Phòng khám Đa khoa Việt Gia**        
166 Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, TP. HCM`,
                email: 'maiptb0019@gmail.com',
                username: 'maiptb0019',
                image: await toBase64('19bach-mai.jpg'),
                describe: `Hơn 25 năm kinh nghiệm khám và điều trị về Nội khoa - Nội Tim mạch       
Nguyên Trưởng khoa Nội - Bệnh viện Củ Chi       
Hiện là Giám đốc Phòng khám kiêm Trưởng khoa Nội Phòng khám Đa khoa Việt Gia`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 350.000đ
-   Siêu âm Doppler màu tim: 350.000đ

Tại bệnh viện có thanh toán bằng hình thức tiền mặt`,
                content: `Bác sĩ Chuyên khoa I Phan Thị Bạch Mai
--------------------------------------

-   Hơn 25 năm kinh nghiệm khám và điều trị về Nội khoa - Nội Tim mạch
-   Nguyên Trưởng khoa Nội - Bệnh viện Củ Chi
-   Hiện là Giám đốc Phòng khám kiêm Trưởng khoa Nội Phòng khám Đa khoa Việt Gia
-   Bác sĩ nhận khám bệnh nhân từ 15 tuổi trở lên

Khám và điều trị
----------------

-   Nội Tim mạch
-   Nội Cơ xương khớp
-   Nội Tiêu hóa
-   Nội tiết
-   Nội Hô hấp
-   Khám sức khỏe định kỳ

### **Quá trình công tác**

-   **Giám đốc Phòng khám kiêm Trưởng khoa Nội - Phòng khám đa khoa Việt Gia (03/2022 - Nay)**
-   **Bác sĩ Nội khoa - Phòng khám Đa khoa Việt Gia (04/2009 - 02/2022)**
-   **Trưởng khoa Nội - Bệnh viện Củ Chi (1995 - 2009)**

### Quá trình đào tạo

-   Chuyên ngành Tâm thần học - Bệnh viện Tâm thần (2022)
-   Chuyên ngành Điện tim - Đại học Y dược TP. HCM (2019)
-   Bác sĩ chuyên khoa I Y học gia đình - Đại học Y Dược TP. HCM (2005)
-   Chuyên ngành Nội Tim mạch - Bệnh viện Chợ Rẫy (1999)
-   Bác sĩ Đa khoa - Đại học Y Dược TP. HCM (1995)`,
                active: true
            },
            {
                id: '0020',
                name: 'Nguyễn Thị Thông Tuyết',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '04',
                clinicAddress: `**Phòng khám Đa khoa 28B Điện Biên Phủ**        
Số 38A Trần Phú, Ba Đình, Hà Nội`,
                email: 'tuyetntt0020@gmail.com',
                username: 'tuyetntt0020',
                image: await toBase64('20bs-nguyen-thi-thong-tuyet.jpg'),
                describe: `Nguyên Phó Giám đốc Bệnh viện Quân y 354.       
Bác sĩ Chuyên khoa II Nội Tim mạch, Phòng khám 28B Điện Biên Phủ.       
Bác sĩ khám cho người bệnh từ trên 10 tuổi`,
                price: `-   Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 350.000đ
-   Siêu âm Doppler màu tim: 350.000đ

Tại bệnh viện có thanh toán bằng hình thức tiền mặt`,
                content: `Bác sĩ Chuyên khoa II Nguyễn Thị Thông Tuyết
--------------------------------------------

-   Nguyên Phó Giám đốc Bệnh viện Quân y 354.
-   Bác sĩ Chuyên khoa II Nội Tim mạch, Phòng khám 28B Điện Biên Phủ.
-   Bác sĩ khám cho người bệnh từ trên 10 tuổi.

### Quá trình công tác

-   Nguyên Bác sĩ Chuyên khoa Nội Tim mạch, Bệnh viện Quân y 354 (1978 -1999)
-   Nguyên Phó Giám đốc Bệnh viện Quân y 354

### Quá trình đào tạo

-   Tốt nghiệp Bác sĩ Đa khoa, Học viên Quân Y (1968)
-   Tốt nghiệp Bác sĩ Chuyên khoa II chuyên ngành Nội Tim mạch (1996)

### Tham gia các chuyên đề sức khỏe

-   Tư vấn về Hội chứng đau thắt lưng, Hội chứng cổ vai tay, bệnh lý Tim mạch trên báo Sức khỏe & Đời sống.

Khám và điều trị bệnh
---------------------

Bác sĩ khám và điều trị bệnh lý nội khoa nói chung và bệnh lý nội tim mạch nói riêng.

-   Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch
-   Các bệnh lý Nội Tim mạch
-   Rối loạn nhịp tim
-   Khám bệnh mạch máu ngoại biên.
-   Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.

**Rối loạn mỡ máu**

-   Bệnh mỡ máu cao
-   Rối loạn mỡ máu
-   Tư vấn, điều trị bệnh mỡ máu
-   Rối loạn chuyển hóa
-   Dinh dưỡng cho bệnh nhân rối loạn mỡ máu.

**Huyết áp**

-   Bệnh cao huyết áp
-   Bệnh huyết áp thấp`,
                active: true
            },
            {
                id: '0021',
                name: 'Nguyễn Thị Hoài An',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '05',
                clinicAddress: `**Bệnh viện Đa khoa An Việt**        
Số 1E Trường Chinh - Thanh Xuân - Hà Nội`,
                email: 'anntt0021@gmail.com',
                username: 'anntt0021',
                image: await toBase64('21pgs-nguyen-thi-hoai-an.jpg'),
                describe: `Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương       
Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương       
Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em`,
                price: `-   Khám & Nội soi Tai Mũi họngĐã bao gồm nội soi Tai Mũi họng: 400.000đ
-   Đo nhĩ lượngTheo chỉ định của bác sĩ: 150.000đ
-   Đo thính lựcTheo chỉ định của bác sĩ: 150.000đ
-   Làm thuốc tai, mũi, thanh quảnTheo chỉ định của bác sĩ: 200.000đ
-   Lấy dị vật tai: 400.000đ
-   Khí dung mũi họng (bao gồm thuốc)Theo chỉ định của bác sĩ: 60.000đ
-   Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)Theo chỉ định của bác sĩ: 100.000đ
-   Thời gian máu chảy phương pháp DukeTheo chỉ định của bác sĩ: 30.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
                content: `Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An
-----------------------------------------------

-   Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng
-   Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
-   Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương
-   Bác sĩ Nội trú chuyên ngành Tai Mũi Họng
-   Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng

Khám & điều trị
---------------

-   Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn
-   Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em
-   Nội soi Tai Mũi Họng
-   Thực hiện các qui trình kỹ thuật Tai Mũi Họng

**Các bệnh về tai**

-   Ù tai, nghe kém, điếc đột ngột
-   Chẩy mủ tai, viêm tai giữa cấp, mạn
-   Vá màng nhĩ nội soi
-   Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài

**Các bệnh mũi xoang**

-   Viêm mũi xoang dị ứng, viêm mũi vận mạch
-   Viêm mũi ngạt tắc mũi mạn tính
-   Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang
-   Nấm mũi xoang
-   Đau đầu mạn tính do mũi xoang...

**Các bệnh về họng thanh quản**

-   Ở trẻ em viêm VA, viêm mũi họng mạn tính
-   Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản....)
-   Viêm amiđan cấp, mạn
-   Nạo V.A
-   Cắt Amidan`,
                active: true
            },
            {
                id: '0022',
                name: 'Nguyễn Văn Lý',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '05',
                clinicAddress: `**Bệnh viện Đa khoa Bảo Sơn 2**        
Số 52 Nguyễn Chí Thanh - Đống Đa - Hà Nội`,
                email: 'lynv0022@gmail.com',
                username: 'lynv0022',
                image: await toBase64('22-bs-nguyen-van-ly.jpg'),
                describe: `Nguyên Trưởng khoa Tai mũi họng, Bệnh viện Trung ương quân đội 108       
Ủy viên Ban chấp hành Hội Tai Mũi Họng Việt Nam       
Bác sĩ khám từ 14 tuổi trở lên`,
                price: `-   Khám & Nội soi Tai Mũi họngĐã bao gồm nội soi Tai Mũi họng: 400.000đ
-   Đo nhĩ lượngTheo chỉ định của bác sĩ: 150.000đ
-   Đo thính lựcTheo chỉ định của bác sĩ: 150.000đ
-   Làm thuốc tai, mũi, thanh quảnTheo chỉ định của bác sĩ: 200.000đ
-   Lấy dị vật tai: 400.000đ
-   Khí dung mũi họng (bao gồm thuốc)Theo chỉ định của bác sĩ: 60.000đ
-   Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)Theo chỉ định của bác sĩ: 100.000đ
-   Thời gian máu chảy phương pháp DukeTheo chỉ định của bác sĩ: 30.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
                content: `Tiến sỹ, Bác sỹ Nguyễn Văn Lý
-----------------------------

-   Nguyên Trưởng khoa Tai Mũi Họng, Bệnh viện Trung ương quân đội 108 (2000 -- 2013)
-   Ủy viên Ban chấp hành Hội Tai Mũi Họng Việt Nam
-   Giảng viên sau đại học chuyên ngành Tai Mũi Họng -- Học viện Quân y

### Quá trình công tác

-   Bác sĩ Chuyên khoa Tai Mũi Họng, Bệnh viện Đa khoa Bảo Sơn 2
-   Nguyên Trưởng khoa Tai Mũi Họng, Bệnh viện Trung ương quân đội 108 (2000 -- 2013)
-   Chuyên viên kỹ thuật, Cục Quân y
-   Giảng viên Sau Đại học chuyên ngành Tai Mũi Họng, Học viện Quân y

### Quá trình đào tạo

-   Theo học Chuyên khoa Tai Mũi Họng, Công hòa Dân chủ Đức (1987 - 1990)
-   Học viên trường Học viện Quân Y

Khám & điều trị
---------------

Khám chuyên khoa Tai Mũi Họng

**Các bệnh về tai**

-   Ù tai, nghe kém, điếc đột ngột
-   Chẩy mủ tai, viêm tai giữa cấp, mạn.
-   Vá màng nhĩ nội soi
-   Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài

**Các bệnh mũi xoang**

-   Viêm mũi xoang dị ứng, viêm mũi vận mạch.
-   Viêm mũi ngạt tắc mũi mạn tính
-   Vêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang
-   Nấm mũi xoang
-   Đau đầu mạn tính do mũi xoang...

**Các bệnh về họng thanh quản**

-   Ở trẻ em viêm VA, viêm mũi họng mạn tính. Đặc biệt những biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản....)  nạo VA
-   Viêm amiđan cấp, mạn.`,
                active: true
            },
            {
                id: '0023',
                name: 'Nguyễn Ngọc Phấn',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '05',
                clinicAddress: `**Phòng khám Tai Mũi Họng - Bs Nguyễn Ngọc Phấn**        
116H2 phố Thành Công, Tập thể Thành Công Bắc, quận Ba Đình, Hà Nội`,
                email: 'phannn0023@gmail.com',
                username: `phannn0023`,
                image: await toBase64('23bs-nguyen-ngoc-phan.jpg'),
                describe: `Nguyên bác sĩ Tai Mũi Họng Bệnh viện Đa khoa Hồng Ngọc       
Hiện đang công tác tại Bệnh viện Đại học Y Hà Nội`,
                price: `-   Khám & Nội soi Tai Mũi họngĐã bao gồm nội soi Tai Mũi họng: 400.000đ
-   Đo nhĩ lượngTheo chỉ định của bác sĩ: 150.000đ
-   Đo thính lựcTheo chỉ định của bác sĩ: 150.000đ
-   Làm thuốc tai, mũi, thanh quảnTheo chỉ định của bác sĩ: 200.000đ
-   Lấy dị vật tai: 400.000đ
-   Khí dung mũi họng (bao gồm thuốc)Theo chỉ định của bác sĩ: 60.000đ
-   Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)Theo chỉ định của bác sĩ: 100.000đ
-   Thời gian máu chảy phương pháp DukeTheo chỉ định của bác sĩ: 30.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
                content: `Bác sĩ Chuyên khoa II Nguyễn Ngọc Phấn
--------------------------------------

-   Nguyên bác sĩ Tai Mũi Họng Bệnh viện Đa khoa Hồng Ngọc
-   Nguyên Phó trưởng khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương
-   Hiện đang công tác tại Bệnh viện Đại học Y Hà Nội

### Quá trình đào tạo

-   Tốt nghiệp chuyên khoa I Tai Mũi Họng, Đại học Y Hà Nội (1987)
-   Tốt nghiệp chuyên khoa II Tai Mũi Họng, Đại học Y Hà Nội (2008)

### Quá trình công tác

-   Hiện đang công tác tại Bệnh viện Đại học Y Hà Nội
-   Bác sĩ Phụ trách khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương.
-   Nguyên Phó trưởng khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương.
-   Bác sĩ Chuyên khoa Tai Mũi Họng, Bệnh viện Đa khoa Hồng Ngọc.
-   Bác sĩ Chuyên khoa Tai Mũi Họng, Bệnh viện Ung Bướu Hưng Việt.

### Sách về tai mũi họng 

-   Kỹ thuật mổ tai kiểu Valhassel cải tiến (2006-2008)
-   Viêm tai giữa (2010)
-   Viêm VA (2011)
-   Viêm mũi xoang (2012)
-   Trả lời triệu chứng bệnh tai mũi họng (2018)

### Thành viên các Hội khoa học, tổ chức chuyên môn

-   Hội viên hội TMH Hà Nội
-   Hội viên hội TMH Miền Nam
-   Hội viên hội TMH Việt Nam

### Tham gia các chuyên đề sức khỏe

-   Sức khỏe người cao tuổi
-   Tư vấn sức khỏe 24h

Khám và điều trị
----------------

-   Viêm mũi xoang: Ngạt mũi, chảy mũi, đờm họng,...
-   Viêm mũi xoang dị ứng: Hắt hơi , ngạt mũi, chảy mũi...
-   Viêm mũi xoang trẻ em: Ngạt mũi, chảy mũi, ho...
-   Viêm VA: Chảy mũi, ngạt mũi, ho...
-   Viêm amidan: Hay viêm họng, ho...
-   Thủng màng nhĩ ( vá nhĩ nội soi): Ù tai, nghe kém
-   Viêm tai giữa tổn thương xương con ( thay thế) xương con: Ù tai, nghe kém nặng xốp xơ tai ( phẫu thuật ),Ù tai nghe kém
-   Giảm áp dây TK VII, nối dây VII Liệt mặt....
-   Viêm tai giữa ứ dịch, xẹp nhĩ: Nghe kém, ù tai
-   U vòm
-   U hốc mũi
-   Hạt xơ dây thanh, u nang dây thanh, polyp dây thanh, ung thư dây thanh Khan tiếng, nói mệt, soi có bệnh tích
-   Ung thư vùng tai mũi họng
-   Viêm họng mạn tính Ngứa họng, ho...
-   HC trào ngược dạ dày thực quản
-   Ngủ ngáy
-   Chảy máu mũi
-   Điếc đột ngột: Ù tai nghe kém đột ngột trong vòng vài ba ngày
-   Viêm mũi sơ sinh Ngạt mũi, chảy mũi
-   Dị vật mũi, họng, thanh quản, thực quản
-   Nấm ống tai, viêm da khô ống tai, ráy tai
-   Viêm loét lưỡi, ung thư lưỡi`,
                active: true
            },
            {
                id: '0024',
                name: 'Võ Trần Thành Nhân',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '05',
                clinicAddress: `**Phòng khám Bệnh viện Đại học Y Dược 1**        
20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM`,
                email: 'nhanvtt0024@gmail.com',
                username: 'nhanvtt0024',
                image: await toBase64('24-bs-vo-tran-thanh-nhan.jpg'),
                describe: `10 năm kinh nghiệm lĩnh vực Tai mũi họng       
Hiện đang công tác tại Phòng khám Bệnh viện Đại học Y Dược 1       
Bác sĩ nhận khám từ 15 tuổi trở lên`,
                price: `-   Khám & Nội soi Tai Mũi họngĐã bao gồm nội soi Tai Mũi họng: 400.000đ
-   Đo nhĩ lượngTheo chỉ định của bác sĩ: 150.000đ
-   Đo thính lựcTheo chỉ định của bác sĩ: 150.000đ
-   Làm thuốc tai, mũi, thanh quảnTheo chỉ định của bác sĩ: 200.000đ
-   Lấy dị vật tai: 400.000đ
-   Khí dung mũi họng (bao gồm thuốc)Theo chỉ định của bác sĩ: 60.000đ
-   Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)Theo chỉ định của bác sĩ: 100.000đ
-   Thời gian máu chảy phương pháp DukeTheo chỉ định của bác sĩ: 30.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
                content: `Bác sĩ Chuyên khoa I Võ Trần Thành Nhân
---------------------------------------

-   10 năm kinh nghiệm lĩnh vực Tai Mũi Họng
-   Hiện đang công tác tại Phòng khám Bệnh viện Đại học Y Dược 1
-   Bác sĩ nhận khám từ 15 tuổi trở lên

Khám và điều trị
----------------

-   Ù tai, đau tai, chảy máu tai
-   Thủng màng nhĩ, điếc đột ngột
-   Viêm tai giữa
-   Amidan, V.A
-   Viêm xoang
-   Nghẹt mũi
-   Hay bị chảy máu cam
-   Đau cổ họng, khó nuốt
-   Ho kéo dài

### Qúa trình công tác

-   Phòng khám Bệnh viện Đại học Y Dược 1 (2019 - Nay)
-   Phòng khám Đa khoa Nhân Hậu (2018 - 2020)
-   Phòng khám Đa khoa Hồng Lạc (2013 - 2016)

### Qúa trình đào tạo 

-   Học Chuyên khoa I Đại học Y Dược TP. HCM (2016 - 2018)
-   Tốt nghiệp Bác sĩ Đại học Y Dược TP. HCM (2013)`,
                active: true
            },
            {
                id: '0025',
                name: 'Lê Hữu Dương',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '05',
                clinicAddress: `**Phòng khám Đa khoa DHA Healthcare**        
221-221 Bis Nguyễn Thị Minh Khai, P Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh`,
                email: 'duonglh0025@gmail.com',
                username: 'duonglh0025',
                image: await toBase64('25bs-huu-duong.jpg'),
                describe: `Bác sĩ chuyên khoa Tai Mũi Họng, Phòng khám Đa khoa DHA Healthcare       
Nhiều năm kinh nghiệm trong khám và điều trị chuyên khoa Tai Mũi Họng`,
                price: `-   Khám & Nội soi Tai Mũi họngĐã bao gồm nội soi Tai Mũi họng: 400.000đ
-   Đo nhĩ lượngTheo chỉ định của bác sĩ: 150.000đ
-   Đo thính lựcTheo chỉ định của bác sĩ: 150.000đ
-   Làm thuốc tai, mũi, thanh quảnTheo chỉ định của bác sĩ: 200.000đ
-   Lấy dị vật tai: 400.000đ
-   Khí dung mũi họng (bao gồm thuốc)Theo chỉ định của bác sĩ: 60.000đ
-   Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)Theo chỉ định của bác sĩ: 100.000đ
-   Thời gian máu chảy phương pháp DukeTheo chỉ định của bác sĩ: 30.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ`,
                content: `Bác sĩ chuyên khoa I Lê Hữu Dương
-------------------

-   Bác sĩ chuyên khoa Tai Mũi Họng, Phòng khám Đa khoa DHA Healthcare
-   Nhiều năm kinh nghiệm trong khám và điều trị chuyên khoa Tai Mũi Họng
-   Bác sĩ nhận khám cho trẻ em và người lớn 

### Quá trình công tác

-   Hiện là Bác sĩ chuyên khoa Tai Mũi Họng, Phòng khám Đa khoa DHA Healthcare
-   Bác sĩ điều trị tại Bệnh viện Bưu Điện TP.HCM

### Quá trình đào tạo

-   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược Cần Thơ
-   Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Tai Mũi Họng, Đại học Y dược TP.HCM

Khám và điều trị
----------------

Bác sĩ khám và điều trị:

-   Viêm mũi họng cấp: sốt, đau họng, chảy mũi
-   Viêm xoang cấp: sốt, chảy mũi xanh, đau vùng má, trán, đau đầu, nhìn mờ
-   Viêm thanh quản cấp: sốt, đau họng, khàn tiếng
-   Viêm Amidan cấp: sốt, đau họng, giọng nói thay đổi, hạch cổ
-   Viêm VA cấp: sốt, chảy mũi
-   Viêm tai giữa cấp: sốt, đau tai, chảy mũi, ho
-   Viêm ống tai ngoài: sau ngoáy tai xuất hiện đau tai, đau tăng khi nhai, ngáp, sờ tai bên bệnh thấy đầy ngay lỗ tai
-   Viêm họng mạn: hô họng, cay họng, hay đằng hắng
-   Viêm mũi xoang mạn Chảy dịch từ mũi xuống họng, ngạt mũi kéo dài, mất ngửi....
-   Viêm mũi xoang dị ứng
-   Viêm thanh quản mạn
-   ...`,
                active: true
            },
            {
                id: '0026',
                name: 'Bùi Phú Trưởng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '06',
                clinicAddress: `**Phòng khám Đông Y - Phục hồi chức năng Việt - Nga**        
Số 53, Ngõ 2, Hoàng Sâm, Nghĩa Đô, Cầu Giấy, Hà Nội`,
                email: 'truongbp0026@gmail.com',
                username: 'truongbp0026',
                image: await toBase64('26anh-bsi-truong.jpg'),
                describe: `Có thế mạnh khám và điều trị Y học cổ truyền, Chấn thương thể thao       
Hiện đang công tác tại Trung tâm điều trị kĩ thuật cao -- Viện y sinh nhiệt đới Việt Nga       
Bác sĩ nhận điều trị cho bệnh nhân từ 6 tuổi trở lên`,
                price: `Giá khám: 100.000đ`,
                content: `Bác sĩ Bùi Phú Trưởng
---------------------

-   Có thế mạnh khám và điều trị Y học cổ truyền, Chấn thương thể thao
-   Hiện đang công tác tại Trung tâm điều trị kĩ thuật cao -- Viện Y sinh nhiệt đới Việt Nga
-   Bác sĩ nhận điều trị cho bệnh nhân từ 6 tuổi trở lên

Khám và điều trị
----------------

-   Đau lưng, đau thần kinh tọa
-   Đau cổ vai gáy, hội chứng cổ vai tay
-   Chấn thương thể thao: Đau do quá tải cơ, dây chằng, các khớp. Tổn thương phần mềm trong tập luyện, thi đấu thể thao

### Quá trình công tác

-   Bác sĩ - Trung tâm điều trị kĩ thuật cao -- Viện Y sinh nhiệt đới Việt Nga (2022 - Nay)
-   Bác sĩ - Bệnh viện Y học cổ truyền Hùng Vương -- Bắc Giang (2022)
-   Bác sĩ - Trung tâm Y học thể thao Starsmec (2019 - 2022)

### Quá trình đào tạo

-   Bác sĩ Y học cổ truyền - Học viện Y dược học cổ truyền Việt Nam (2013 - 2019)`,
                active: true
            },
            {
                id: '0027',
                name: 'Phùng Quang Tùng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '06',
                clinicAddress: `**Phòng khám Đông Y - Phục hồi chức năng Việt - Nga**        
Số 53, Ngõ 2, Hoàng Sâm, Nghĩa Đô, Cầu Giấy, Hà Nội`,
                email: 'tungpq0027@gmail.com',
                username: 'tungpq0027',
                image: await toBase64('27anh-bsi-tung.jpg'),
                describe: `Hơn 10 năm kinh nghiệm lĩnh vực Y học cổ truyền       
Từng công tác tại Bệnh viện Trung ương Quân đội 108       
Bác sĩ nhận khám cho bệnh nhân từ 06 tuổi trở lên`,
                price: `Giá khám: 100.000đ`,
                content: `Bác sĩ Phùng Quang Tùng
-----------------------

-   Hơn 10 năm kinh nghiệm lĩnh vực Y học cổ truyền
-   Từng công tác tại Bệnh viện Trung ương Quân đội 108

Khám và điều trị
----------------

-   Thoát vị đĩa đệm cột sống thắt lưng: Đau thắt lưng lan xuống mông, chân kèm theo tê bì chân, đau tăng khi vận động, giảm khi nghỉ ngơi,...
-   Thoát vị đĩa đệm cột sống cổ: Đau vùng cổ gáy lan ra vai, cánh tay kèm theo tê bì dọc cánh tay, đau đầu chóng mặt, run hoặc yếu chi,...
-   Di chứng tai biến mạch máu não: Yếu nửa người sau tai biến mạch máu não, giảm hoặc mất vận động tay chân,...
-   Rối loạn chuyển hóa: Mỡ máu, tiểu đường, gout
-   Thoái hóa khớp: Đau tại các khớp kèm theo hạn chế vận động, tràn dịch khớp, sưng nề, tấy đỏ các khớp,...

### Quá trình công tác

-   Bác sĩ - Trung tâm nhiệt đới Việt - Nga, Bộ quốc phòng (2014 - Nay)
-   Bác sĩ - Bệnh viện Trung ương Quân đội 108 (2010 - 2014)

### Quá trình đào tạo

-   Bác sĩ Y học cổ truyền - Học viện Y dược học cổ truyền Việt Nam (2004 - 2010)

### **Sách và các công trình nghiên cứu, báo cáo khoa học**

-   Đánh giá hiệu quả điều trị thoát vị đĩa đệm cột sống hắt lưng bằng kết hợp sóng ngắn, xoa bóp bấm huyệt, điện châm, kéo giãn cột sống và đề xuất qui trình điều trị (2021 - 2022)
-   Nghiên cứu thăm dò tác dụng của viên nang Ích huyết minh não trên bệnh nhân thiểu năng tuần hoàn não mạn tính (2020 - 2021)
-   Đánh giá tác dụng hỗ trợ giảm đau của Bột Ngâm Chân do Trung tâm nghiên cứu điều trị kĩ thuật cao sản xuất trên bệnh nhân viem khớp dạng thấp (2018 - 2019)`,
                active: true
            },
            {
                id: '0028',
                name: 'Nguyễn Phi Hùng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '06',
                clinicAddress: `**Phòng khám Đông Y - Phục hồi chức năng Việt - Nga**        
Số 53, Ngõ 2, Hoàng Sâm, Nghĩa Đô, Cầu Giấy, Hà Nội`,
                email: 'hungnp0028@gmail.com',
                username: 'hungnp0028',
                image: await toBase64('28anh-bbsi-hung.jpg'),
                describe: `Có thế mạnh chuyên môn trong khám và điều trị Y học cổ truyền, Phục hồi chức năng       
Hiện đang công tác tại Trung tâm nhiệt đới Việt -- Nga, Bộ quốc phòng       
Bác sĩ nhận khám bệnh nhân từ 10 tuổi trở lên`,
                price: `Giá khám: 100.000đ`,
                content: `Bác sĩ Nguyễn Phi Hùng
----------------------

-   Có thế mạnh chuyên môn trong khám và điều trị Y học cổ truyền, Phục hồi chức năng
-   Hiện đang công tác tại Trung tâm nhiệt đới Việt -- Nga, Bộ quốc phòng
-   Bác sĩ nhận khám bệnh nhân từ 10 tuổi trở lên 

-   Chấn thương thể thao (gân, cơ, dây chằng): Đau sau chơi thể thao, hạn chế vận động khớp, đau cơ, co rút cơ, gân dây chằng
-   Thoát vị đĩa đệm cột sống cổ: Đau vùng cổ gáy lan ra vai và cánh tay, tê bì tay, hạn chế vận động cột sống cổ
-   Thoát vị đĩa đệm cột sống thắt lưng: Đau lưng lan xuống mông chân, đau tăng khi vận động, giảm khi nghỉ ngơi, tê bì chân, teo cơ
-   Thoái hóa khớp gối: Đau và hạn chế vận động khớp gối, sưng nề

### Quá trình công tác

-   Bác sĩ - Phòng khám Đông y & Phục hồi chức năng Việt -- Nga, Trung tâm nhiệt đới Việt -- Nga, Bộ quốc phòng (2021 - Nay)
-   Bác sĩ - Trung tâm y học thể thao STARSMEC (2017 - 2020)

### Quá trình đào tạo

-   Phục hồi chức năng - Đại học Y Hà Nội (2020)
-   Y học cổ truyền - Học viện Y dược học cổ truyền Việt - Nam (2011 - 2017)

### **Chứng chỉ trong nước hoặc nước ngoài**

-   Chứng chỉ Phục hồi chức năng - Đại học Y Hà Nội (2020)`,
                active: true
            },
            {
                id: '0029',
                name: 'Võ Thị Trúc Phương',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '06',
                clinicAddress: `**Bệnh viện Đa khoa Hồng Đức III**        
32/2 Thống Nhất, Phường 10, Q. Gò Vấp, Tp Hồ Chí Minh`,
                email: 'phuongvtt0029@gmail.com',
                username: `phuongvtt0029`,
                image: await toBase64('29dongy-ths-bsvothitrucphuong.jpg'),
                describe: `Bác sĩ có nhiều năm kinh nghiệm khám và điều trị về lĩnh vực Y học Cổ truyền       
Trưởng khoa Y học Cổ truyền, Bệnh viện Hồng Đức III`,
                price: `Giá khám: 100.000đ`,
                content: `Thạc sĩ, Bác sĩ Võ Thị Trúc Phương
----------------------------------

-   Bác sĩ có nhiều năm kinh nghiệm khám và điều trị về lĩnh vực Y học Cổ truyền
-   Trưởng khoa Y học Cổ truyền, Bệnh viện Hồng Đức III

Khám và điều trị
----------------

-   **Các vấn đề về cơ xương khớp: **
    -   Liệt thần kinh III, IV, VI
    -   Liệt dây thần kinh số VII ngoại biên, trung ương
    -   Đau khớp vai, gân cơ
    -   Hội chứng ống cổ tay, ngón tay bật
-   **Tiêu hóa gan - mật**
    -   Hỗ trợ điều trị viêm gan siêu vi
    -   Viêm đại tràng mạn
    -   Hội chứng gan nhiễm mỡ
    -   Trĩ nội
-   **Hệ hô hấp **
    -   Cảm mạo
    -   Hen suyễn
    -   Viêm phế quản mạn
-   **Sinh dục - Tiết niệu **
    -   Rối loạn cường dương
    -   U xơ tiền luyệt tuyến
    -   Rối loạn kinh nguyệt
    -   Rối loạn tiền mãn kinh
-   **Da liễu**
    -   Mụn
    -   Dị ứng
    -   Tổ đĩa
    -   Chàm
    -   Vẩy nến

### Quá trình công tác 

-   Công tác tại Bệnh viện Hồng Đức III (12/2018 - Nay)
-   Công tác tại Trung Tâm y tế Huyện Gò Công Tây - Tiền Giang (2009 - 2016)

### Quá trình đào tạo 

-   Tốt nghiệp Cao học Y học Cổ truyền (2016 - 2018)`,
                active: true
            },
            {
                id: '0030',
                name: 'Lương Đức Chương',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '06',
                clinicAddress: `**Phòng chẩn trị y học cổ truyền Tâm Minh Đường**        
138 Đường Khương Đình, Hạ Đình, Thanh Xuân, Hà Nội`,
                email: 'chuongld0030@gmail.com',
                username: 'chuongld0030',
                image: await toBase64('30bac-si-luong-duc-chuong1660813040.jpg'),
                describe: `Gần 40 năm kinh nghiệm lĩnh vực Y học cổ truyền       
Từng công tác tại Viện Y học cổ truyền Quân đội       
Bác sĩ nhận thăm khám cho bệnh nhân từ 6 tuổi trở lên`,
                price: `Giá khám: 100.000đ`,
                content: `Bác sĩ Chuyên khoa I Lương Đức Chương
-------------------------------------

-   Gần 40 năm kinh nghiệm lĩnh vực Y học cổ truyền
-   Từng công tác tại Viện Y học cổ truyền Quân đội
-   Bác sĩ nhận thăm khám cho bệnh nhân từ 6 tuổi trở lên

Khám và điều trị
----------------

-   Nhóm các bệnh về xương khớp: Đau mỏi cổ vai gáy, đau mỏi thắt lưng do thoái hóa, thoát vị đĩa đệm, đau thần kinh tọa, khớp gối, viêm khớp dạng thấp
-   Nhóm các bệnh nội khoa theo y học cổ truyền: Mất ngủ, suy nhược cơ thể, viêm phế quản mạn, viêm loét dạ dày, viêm đại tràng 
-   Nhóm bệnh sinh lý nam: Xuất tinh sớm, rối loạn cương dương, giảm ham muốn,...
-   Bệnh da liễu
-   Bệnh phụ nữ: Nấm, rối loạn kinh nguyệt,...
-   Kê đơn thuốc bồi bổ thể trạng theo yêu cầu

### Quá trình công tác

-   Bác sỹ phụ trách chuyên môn - Phòng khám Chuyên khoa Y học cổ truyền Tâm Minh Đường (2016 - Nay)
-   Thượng tá, bác sĩ quân đội - Viện Y học cổ truyền Quân đội (2010)
-   Bác sỹ khoa nội - Viện Y học cổ truyền Quân đội (1995)
-   Chủ nhiệm Quân Y - Cục doanh trại Tổng cục Hậu cần (1986)
-   Chủ nhiệm Quân Y - Sư đoàn 312, Quân khu 1 (1983)

### Quá trình đào tạo

-   Bác sĩ Chuyên khoa I, khoa Y học cổ truyền - Đại học Y Hà Nội (2002 - 2005)
-   Định hướng Y học cổ truyền - Viện Y học cổ truyền Quân đội (1985)
-   Nội khoa - Học viện Quân Y (1977 - 1983)

### Chứng chỉ trong nước hoặc nước ngoài

-   Chứng chỉ đào tạo liên tục - Sở y tế Hà Nội (2022)`,
                active: true
            },
            {
                id: '0031',
                name: 'Nguyễn Tuấn Minh',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '07',
                clinicAddress: `**Bệnh viện Phụ sản Hà Nội**        
Quận Tây Hồ, Hà Nội`,
                email: 'minhnt0031@gmail.com',
                username: 'minhnt0031',
                image: await toBase64('31nguyen-tuan-minh.jpg'),
                describe: `Nguyên Trưởng khoa Sản bệnh, Bệnh viện Phụ sản Hà Nội.       
Nguyên Phó Trường khoa phụ trách phòng Đẻ, Bệnh viện Phụ sản Hà Nội       
Bác sĩ chỉ khám và tư vấn thai, không siêu âm thai, không khám phụ khoa`,
                price: `-    Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ 
-   Tổng phân tích nước tiểu theo chỉ định của bác sĩ: 78.000đ
-   Siêu âm ổ bụng tùy vào loại thường hay 4D: 354.000đ - 440.000đ
-   Soi cổ tử cung theo chỉ định của bác sĩ: 300.000đ
-   Siêu âm đầu dò âm đạoTheo chỉ định của bác sĩ: 354.000đ
-   HPV IgG test nhanhTheo chỉ định của bác sĩ: 120.000đ
-   Siêu âm thai 3 tháng đầu (màu 4D): 400.000đ
-   Siêu âm thai 3 tháng đầu (thường): 264.000đ
-   Siêu âm thai 3 tháng giữa (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng giữa (thường): 354.000đ
-   Siêu âm thai 3 tháng cuối (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng cuối (thường): 354.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `**Bác sĩ Chuyên khoa II Nguyễn Tuấn Minh **
-------------------------------------------

-   Nguyên Trưởng khoa Sản bệnh -- Bệnh viện Phụ sản Hà Nội.
-   Nguyên Trưởng khoa Kế hoạch hóa gia đình -- Bệnh viện Phụ sản Hà Nội
-   Nguyên Phó Trường khoa phụ trách phòng Đẻ - Bệnh viện Phụ sản Hà Nội
-   Bác sĩ chỉ khám và tư vấn thai, không siêu âm thai, không khám phụ khoa

### Quá trình đào tạo

-   Tốt nghiệp Bác sĩ Chuyên khoa II Chuyên ngành Sản phụ khoa, Đại học Y Hà Nội (2006)
-   Tốt nghiệp Bác sĩ Chuyên khoa I Chuyên ngành Sản phụ khoa, Đại học Y Hà Nội (1990)
-   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội (1981)

### Quá trình công tác

-   Trưởng khoa Kế hoạch hóa gia đình, Bệnh viện Phụ sản Hà Nội (2001 -- 2017)
-   Giảng viên Chương trình sức khỏe sinh sản (2006)
-   Tham gia lớp đào tạo và là giảng viên sức khỏe sinh sản cấp tỉnh của tổ chức Parfaite.
-   Phó Trường khoa phụ trách phòng Đẻ, Bệnh viện Phụ sản Hà Nội (1997)
-   Trưởng khoa Sản bệnh, Bệnh viện Phụ sản Hà Nội (1996)
-   Chuyên gia y tế tại Angieri (1992 -- 1994)
-   Bác sĩ tại Bệnh viện Phụ sản Hà Nội (từ 1985)

Khám và điều trị
----------------

**Dịch vụ thai sản **

-   Khám thai và theo dõi thai kỳ
-   Khám sàng lọc dị tật thai nhi
-   Sàng lọc, chẩn đoán trước sinh, các bệnh lý di truyền
-   Hỗ trợ sinh sản
-   Tư vấn phẫu thuật sản khoa

**Khám & điều trị vô sinh hiếm muộn**

-   Điều trị bệnh đàn ông, bệnh xã hội và vô sinh nam, nữ
-   Khám, tư vấn và điều trị vô sinh, hiếm muộn

**Tư vấn các biện pháp kế hoạch hóa gia đình**

**Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên**

**Khám và tư vấn sức khỏe tiền hôn nhân**`,
                active: true
            },
            {
                id: '0032',
                name: 'Luyện Thị Ngọc Dung',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '07',
                clinicAddress: `**Bệnh viện Chuyên khoa Nam học & Hiếm muộn Việt Bỉ**        
23 Nguyễn Văn Trỗi, Phương Liệt, Thanh Xuân, Hà Nội`,
                email: 'dungltn0032@gmail.com',
                username: 'dungltn0032',
                image: await toBase64('32bac-si-luyen-thi-ngoc.jpg'),
                describe: `Hiện là bác sĩ khoa Sản phụ khoa - Hiếm muộn, Bệnh viện Nam học - Hiếm muộn Việt Bỉ       
Thành viên Hội Nội tiết sinh sản và Vô sinh Thành phố Hồ Chí Minh`,
                price: `-    Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ 
-   Tổng phân tích nước tiểu theo chỉ định của bác sĩ: 78.000đ
-   Siêu âm ổ bụng tùy vào loại thường hay 4D: 354.000đ - 440.000đ
-   Soi cổ tử cung theo chỉ định của bác sĩ: 300.000đ
-   Siêu âm đầu dò âm đạoTheo chỉ định của bác sĩ: 354.000đ
-   HPV IgG test nhanhTheo chỉ định của bác sĩ: 120.000đ
-   Siêu âm thai 3 tháng đầu (màu 4D): 400.000đ
-   Siêu âm thai 3 tháng đầu (thường): 264.000đ
-   Siêu âm thai 3 tháng giữa (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng giữa (thường): 354.000đ
-   Siêu âm thai 3 tháng cuối (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng cuối (thường): 354.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Bác sĩ Luyện Thị Ngọc Dung
--------------------------

-   Hiện là bác sĩ khoa Sản phụ khoa - Hiếm muộn, Bệnh viện Nam học - Hiếm muộn Việt Bỉ
-   Thành viên Hội Nội tiết sinh sản và Vô sinh Thành phố Hồ Chí Minh

### Quá trình công tác 

-   Bác sĩ khoa Sản phụ khoa - Hiếm muộn, Bệnh viện Nam học - Hiếm muộn Việt Bỉ (2016 - nay) 

### Quá trình đào tạo 

-   Thực hành lâm sàng trong Hỗ trợ sinh sản (IVF),Bệnh viện Từ Dữ (2015 - 2016) 
-   Học bác sĩ Định hướng Chuyên khoa Sản phụ khoa, trường Đại học Y Hà Nội (2014 - 2015) 
-   Học bác sĩ Đa khoa, trường Đại học Y Hà Nội (2008 - 2014) 

### Thành viên Hội khoa học, tổ chức chuyên môn 

-   Thành viên Hội Nột tiết sinh sản và Vô sinh Thành phố Hồ Chí Minh 

Khám và điều trị 
-----------------

-   Điều trị bệnh vô sinh nữ giới, nam giới 
-   Theo dõi nang tự nhiên 
-   Kích thích buồng trứng 
-   Bơm tinh trùng vào buồng tử cung IUI 
-   Thụ tinh trong ống nghiệm IVF 
-   Giảm thiểu thai 
-   Điều trị dự phòng sảy thai, lưu thai liên tiếp 
-   Chấn đoán sớm bệnh lý về thai 
-   Điều trị bệnh lý viêm nhiễm phụ khoa`,
                active: true
            },
            {
                id: '0033',
                name: 'Nguyễn Thị Mộng Anh',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '07',
                clinicAddress: `**Phòng Khám Y Cao Cầu Giấy**        
260-262 Cầu Giấy - Hà Nội`,
                email: 'anhntm0033@gmail.com',
                username: 'anhntm0033',
                image: await toBase64('33bac-si-nguyen-thi-mong-anh.jpg'),
                describe: `Thành viên Hội Sản phụ khoa Việt Nam       
Thường xuyên tham gia các Hội thảo về Sản phụ khoa trong và ngoài nước`,
                price: `-    Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ 
-   Tổng phân tích nước tiểu theo chỉ định của bác sĩ: 78.000đ
-   Siêu âm ổ bụng tùy vào loại thường hay 4D: 354.000đ - 440.000đ
-   Soi cổ tử cung theo chỉ định của bác sĩ: 300.000đ
-   Siêu âm đầu dò âm đạoTheo chỉ định của bác sĩ: 354.000đ
-   HPV IgG test nhanhTheo chỉ định của bác sĩ: 120.000đ
-   Siêu âm thai 3 tháng đầu (màu 4D): 400.000đ
-   Siêu âm thai 3 tháng đầu (thường): 264.000đ
-   Siêu âm thai 3 tháng giữa (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng giữa (thường): 354.000đ
-   Siêu âm thai 3 tháng cuối (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng cuối (thường): 354.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Bác sĩ Chuyên khoa I Nguyễn Thị Mộng Anh
----------------------------------------

-   Thành viên Hội Sản phụ khoa Việt Nam
-   Thường xuyên tham gia các Hội thảo về Sản phụ khoa trong và ngoài nước

### Quá trình công tác

-   Trưởng nhà hộ sinh quận Ba Đình, Hà Nội (1985 - 2016)

### Quá trình đào tạo

-   Tham gia các khóa đào tạo tại Viện C và bệnh viện Phụ sản Hà Nội 
-   Tốt nghiệp Bác sĩ chuyên khoa I năm 1988
-   Tốt nghiệp Đại học Y Hà Nội năm 1984

### Thành viên các Hội khoa học, tổ chức chuyên môn 

-   Thành viên Hội Sản phụ khoa Việt Nam
-   Thường xuyên tham gia các Hội thảo về sản phụ khoa trong và ngoài nước như: Hội nghị Sản phụ khoa Việt Pháp, Hội nghị Sản phụ khoa Châu Á - Thái Bình Dương

Khám và điều trị 
-----------------

-   Siêu âm thai
-   Khám thai và theo dõi thai kỳ
-   Chẩn đoán trước sinh và quản lý thai
-   Siêu âm canh trứng, sản phụ khoa đường bụng và âm đạo 
-   Khám và điều trị các bệnh lý phụ khoa
-   Điều trị lộ tuyến cổ tử cung
-   Khám, tư vấn và điều trị vô sinh hiếm muộn
-   Tư vấn các biện pháp kế hoạch hóa gia đình
-   Điều trị u nang buồng trứng, u xơ tử cung
-   Rối loạn tiền mãn kinh, mãn kinh
-   Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên 
-   Khám và tư vấn sức khỏe tiền hôn nhân`,
                active: true
            },
            {
                id: '0034',
                name: 'Bùi Thị Kim Châu',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '07',
                clinicAddress: `**Phòng Khám Đa Khoa Vigor Health**        
102A Trương Định, Phường 9, Quận 3, Thành phố Hồ Chí Minh`,
                email: 'chaubtk0034@gmail.com',
                username: 'chaubtk0034',
                image: await toBase64('34bac-si-chuyen-khoa-ii-bui-thi-kim-chau-san-phu-khoa.jpg'),
                describe: `Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Sản phụ khoa       
Hiện đang có lịch khám Phòng khám Đa khoa Vigor Health`,
                price: `-    Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ 
-   Tổng phân tích nước tiểu theo chỉ định của bác sĩ: 78.000đ
-   Siêu âm ổ bụng tùy vào loại thường hay 4D: 354.000đ - 440.000đ
-   Soi cổ tử cung theo chỉ định của bác sĩ: 300.000đ
-   Siêu âm đầu dò âm đạoTheo chỉ định của bác sĩ: 354.000đ
-   HPV IgG test nhanhTheo chỉ định của bác sĩ: 120.000đ
-   Siêu âm thai 3 tháng đầu (màu 4D): 400.000đ
-   Siêu âm thai 3 tháng đầu (thường): 264.000đ
-   Siêu âm thai 3 tháng giữa (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng giữa (thường): 354.000đ
-   Siêu âm thai 3 tháng cuối (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng cuối (thường): 354.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Bác sĩ chuyên khoa II Bùi Thị Kim Châu
--------------------------------------

-   Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Sản phụ khoa
-   Hiện đang có lịch khám Phòng khám Đa khoa Vigor Health

### Quá trình công tác

-   Hiện là Bác sĩ Sản phụ khoa, Phòng khám Đa khoa Vigor Health (2017 - nay)
-   Bác sĩ tại Bệnh viện Đa khoa Long An (1989 - nay)
-   Giảng viên Y khoa tại Trường Cao đẳng Bách Việt (2007 - 2020)
-   Giảng viên Y khoa tại Trừng Trung cấp Y tế Long An (1989 - 2020)

### Quá trình đào tạo

-   Tốt nghiệp Bác sĩ chuyên khoa II chuyên ngành Sản phụ khoa, Đại học Y khoa Phạm Ngọc Thạch (2014)
-   Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Sản phụ khoa, Đại học Y dược TP.HCM (2005)
-   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM (1989)

Khám và điều trị
----------------

**Bác sĩ khám và điều trị:**

-   Viêm âm đạo
-   Polyp cổ tử cung
-   Tầm soát ung thư cổ tử cung
-   Các bệnh phụ khoa`,
                active: true
            },
            {
                id: '0035',
                name: 'Lê Thị Hiếu',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '07',
                clinicAddress: `**Bệnh viện Chuyên khoa Nam học & Hiếm muộn Việt Bỉ**        
23 Nguyễn Văn Trỗi, Phương Liệt, Thanh Xuân, Hà Nội`,
                email: 'hieult0035@gmail.com',
                username: 'hieult0035',
                image: await toBase64('35bs-le-thi-hieu1.jpg'),
                describe: `Hơn 35 năm kinh nghiệm với các thế mạnh trong khám điều trị bệnh lý sản phụ khoa       
Phó giám đốc thường trực Bệnh viện Chuyên khoa Nam học & Hiếm muộn Việt -- Bỉ       
Nguyên Trưởng khoa Phụ sản và Phó Giám đốc Trung tâm Kế hoạch hóa gia đình, Bệnh viện Giao thông vận tải`,
                price: `-    Giá khámChưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
-   Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ 
-   Tổng phân tích nước tiểu theo chỉ định của bác sĩ: 78.000đ
-   Siêu âm ổ bụng tùy vào loại thường hay 4D: 354.000đ - 440.000đ
-   Soi cổ tử cung theo chỉ định của bác sĩ: 300.000đ
-   Siêu âm đầu dò âm đạoTheo chỉ định của bác sĩ: 354.000đ
-   HPV IgG test nhanhTheo chỉ định của bác sĩ: 120.000đ
-   Siêu âm thai 3 tháng đầu (màu 4D): 400.000đ
-   Siêu âm thai 3 tháng đầu (thường): 264.000đ
-   Siêu âm thai 3 tháng giữa (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng giữa (thường): 354.000đ
-   Siêu âm thai 3 tháng cuối (màu 4D): 450.000đ
-   Siêu âm thai 3 tháng cuối (thường): 354.000đ

Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ `,
                content: `Thạc sĩ, Bác sĩ Lê Thị Hiếu
---------------------------

-   Hơn 35 năm kinh nghiệm với các thế mạnh trong khám điều trị bệnh lý sản phụ khoa
-   Phó giám đốc thường trực Bệnh viện Chuyên khoa Nam học & Hiếm muộn Việt -- Bỉ
-   Nguyên Trưởng khoa Phụ sản và Phó Giám đốc Trung tâm Kế hoạch hóa gia đình, Bệnh viện Giao thông vận tải

Khám và điều trị
----------------

-   Khám và điều trị bệnh lý sản phụ khoa
-   Khám và điều trị bệnh lý sàn chậu
-   Khám và điều trị hiếm muộn
-   Khám sàng lọc phát hiện ung thư phụ khoa, ung thư vú
-   Khám và tư vấn kế hoạch hóa gia đình.Phẫu thuật sản phụ khoa
-   Phẫu thuật Thẩm mỹ tầng sinh môn
-   Mổ u xơ tử cung
-   Mổ u nang buồng trứng
-   Khám và điều trị lộ tuyến cổ tử cung
-   Gỡ dịch thông vòi
-   Polip tử cung
-   Vô sinh hiếm muộn
-   Điều trị lạc nội mạc tử cung
-   Sẹo xấu âm đạo
-   Chỉnh sửa, phục hồi tầng sinh môn sau sinh
-   Theo dõi nang trứng
-   Điều trị rong kinh, rong huyết, tiền mãn kinh
-   Theo dõi thai kỳ
-   Khám vú và điều trị u vú lành tính bằng hút chân không (VABB)
-   Phẫu thuật ung thư vú

### Quá trình đào tạo

-   Tốt nghiệp Thạc sĩ chuyên ngành Sản phụ khoa, Đại học Y Hà Nội (2011)
-   Tốt nghiệp trường Đại học Y Hà Nội chuyên ngành Đa khoa Ngoại Sản (1986)`,
                active: true
            },
            {
                id: '0036',
                name: 'Tống Thị Hiếu Tâm',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '08',
                clinicAddress: `**Bệnh viện Đa khoa An Việt**        
Số 1E Trường Chinh - Thanh Xuân - Hà Nội`,
                email: 'tamtth0036@gmail.com',
                username: 'tamtth0036',
                image: await toBase64('36ts-tong-thi-hieu-tam1.jpg'),
                describe: `Gần 35 năm kinh nghiệm trong lĩnh vực Nhi khoa       
Hiện đang là chủ nhiệm khoa Nhi, Bệnh viện Trung ương Quận Đội 108       
Bác sĩ nhận khám cho mọi độ tuổi`,
                price: `-    Giá khám đã bao gồm phí nhân viên hướng dẫn: 220.000đ`,
                content: `Tiến sĩ, Bác sĩ Tống Thị Hiếu Tâm
---------------------------------

-   Gần 35 năm kinh nghiệm trong lĩnh vực Nhi khoa
-   Hiện đang là chủ nhiệm khoa Nhi, Bệnh viện Trung ương Quận Đội 108
-   Bác sĩ nhận khám cho mọi độ tuổi

Nhận khám và điều trị 
----------------------

-   Bác sĩ nhận khám và điều trị bệnh lý cho trẻ em và người lớn 

    -   Bệnh lý thần kinh
    -   Hô hấp
    -   Tiêu hóa
    -   Dinh dưỡng
    -   Tiết niệu
    -   Tim mạch 

### Quá trình công tác 

-   Chủ nhiệm khoa Nhi, Bệnh viện Trung ương Quân Đội 108 (2010 - nay) 

### **Quá trình đào tạo **

-   Bác sĩ Đa khoa, Học viện Quân Y (1983-1989) 

### **Sách và các công trình nghiên cứu, báo cáo khoa học**

-   Đặc điểm lâm sàng, cận lâm sàng, nội soi phế quản ống mềm và chụp cắt lớp vi tính ở bệnh nhân lao phổi sau điều trị khỏi.
-   Nghiên cứu tình trạng thiếu máu thiếu sắt trên bệnh nhân nhi điều trị nội trú tại Khoa nhi Bệnh viện trung ương Quân đội 108.`,
                active: true
            },
            {
                id: '0037',
                name: 'Phạm Văn Phước',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '08',
                clinicAddress: `**Bệnh viện Đa khoa Tâm Trí Sài Gòn**        
171 Đường Trường Chinh, Phường Tân Thới Nhất, Quận 12, TP. Hồ Chí Minh`,
                email: 'phuocpv0037@gmail.com',
                username: 'phuocpv0037',
                image: await toBase64(`37bsi-phuoc-tamtri.jpg`),
                describe: `Nhiều năm kinh nghiệm trong lĩnh vực Chuyên khoa Nhi       
Hiện là Trưởng khoa Nhi - Bệnh viện Đa khoa Tâm Trí Sài Gòn`,
                price: `-    Giá khám đã bao gồm phí nhân viên hướng dẫn: 220.000đ`,
                content: `Bác sĩ Chuyên khoa I Phạm Văn Phước
-----------------------------------

-   Nhiều năm kinh nghiệm trong lĩnh vực Chuyên khoa Nhi
-   Hiện là Trưởng khoa Nhi - Bệnh viện Đa khoa Tâm Trí Sài Gòn

Khám và điều trị
----------------

-   Các bệnh lý hô hấp nhi
-   Bệnh nhiễm nhi: sởi, tay chân miệng, sốt xuất huyết, thuỷ đậu...
-   Bệnh lý đường tiêu hoá
-   Tư vấn dinh dưỡng
-   Các bệnh lý tim mạch trẻ em

### Quá trình công tác

-   Hiện là Trưởng khoa Nhi - Bệnh viện Đa khoa Tâm Trí Sài Gòn

### Quá trình đào tạo

-   Chuyên khoa I Nhi khoa - Đại học Y Khoa Phạm Ngọc Thạch, TP. HCM
-   Bác sĩ Y Đa khoa - Đại Học Y Dược TP. HCM

### Chứng chỉ trong nước hoặc nước ngoài

-   Chứng chỉ "Đánh giá huyết động học trong hồi sức sốc ở trẻ em" - Bệnh viện Nhi Đồng 1
-   Chứng chỉ Can thiệp ngôn ngữ trị liệu dành cho trẻ tự kỉ - Bệnh viện Nhi Đồng 1
-   Chứng chỉ An toàn tiêm chủng (HCDC)
-   Chứng chỉ DIU - Cấp cứu Nhi - Bệnh viện Nhi đồng 1, Nhi Đồng 2
-   Chứng chỉ đào tạo liên tục lớp Cấp cứu hồi sức Nhi - Bệnh viện Nhi Đồng 1
-   Chứng chỉ cấp cứu sơ nhi - nhũ nhi - trẻ em
-   Chứng chỉ thực hành cấp cứu hồi sức nhi khoa
-   Chứng nhận đào tạo liên tục: "Đánh giá huyết động học trong hồi sức sốc ở trẻ em"
-   Chứng nhận "Tư vấn truyền thông sức khỏe về nuôi con bằng sữa mẹ"
-   Chứng chỉ đào tạo liên tục: "Thiết lập tĩnh mạch trung tâm từ ngoại biên bằng phương pháp Seldinger cải tiến dưới hướng dẫn siêu âm ở trẻ em dành cho bác sĩ"`,
                active: true
            },
            {
                id: '0038',
                name: 'Nguyễn Bạch Huệ',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '08',
                clinicAddress: `**Bệnh viện Quốc tế City**        
3 Đường Số 17A, Bình Trị Đông B, Bình Tân, Thành phố Hồ Chí Minh`,
                email: 'huenb0038@gmail.com',
                username: 'huenb0038',
                image: await toBase64('38bac-si-ckii-nguyen-bach-hue.jpg'),
                describe: `Trưởng khoa Nhi & Hồi sức tích cực Sơ sinh, Bệnh viện Quốc tế City       
Hơn 30 năm công tác tại Bệnh viện Nhi đồng 1`,
                price: `-    Giá khám đã bao gồm phí nhân viên hướng dẫn: 220.000đ`,
                content: `Bác sĩ chuyên khoa II Nguyễn Bạch Huệ
-------------------------------------

-   Trưởng khoa Nhi & Hồi sức tích cực Sơ sinh, Bệnh viện Quốc tế City
-   Hơn 30 năm công tác tại Bệnh viện Nhi đồng 1

### Quá trình công tác

-   Hiện là Trưởng khoa Nhi & Hồi sức tích cực Sơ sinh, Bệnh viện Quốc tế City (2013 - nay)
-   Nguyên Trưởng khoa Hồi sức tích cực & Chống độc, Bệnh viện Nhi đồng 1 (1996 - 2013)
-   Phó khoa Cấp cứu - Hồi sức, Bệnh viện Nhi Đồng 1 (1993 - 1996)
-   Bác sĩ điều trị khoa Cấp cứu, Bệnh viện Nhi Đồng 1 (1988 - 1993)
-   Bác sĩ điều trị khoa Nội, Bệnh viện Nguyễn Tri Phương (1988)
-   Bác sĩ điều trị khoa Cấp cứu, Bệnh viện Đa khoa tỉnh Sông Bé (1984 - 1987)

### Quá trình đào tạo

-   Tốt nghiệp BSCKII chuyên ngành Nhi khoa, Đại học Y dược TPHCM (2003)
-   Tốt nghiệp BSCKI, chuyên ngành Nhi khoa, Đại học Y dược TPHCM (1993)
-   Tốt nghiệp Bác sĩ chuyên khoa Nhi, Đại học Y dược TPHCM (1983)

### Giải thưởng

-   Danh hiệu Thầy thuốc ưu tú do Chủ tịch nước trao tặng (2014)

Khám và điều trị
----------------

Bác sĩ khám và điều trị:

-   Các bệnh lý về Nhi khoa, đặc biệt là bệnh nhân nặng ở khoa Cấp cứu và khoa Hồi sức Tích cực`,
                active: true
            },
            {
                id: '0039',
                name: 'Nguyễn Xuân Tài',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '08',
                clinicAddress: `**Bệnh viện Quốc tế City**        
3 Đường Số 17A, Bình Trị Đông B, Bình Tân, Thành phố Hồ Chí Minh`,
                email: 'tainx0039@gmail.com',
                username: 'tainx0039',
                image: await toBase64('39bsck1-nguyen-xuan-tai.jpg'),
                describe: `Bác sĩ từng công tác tại Bệnh viện Nhi đồng 1, Bệnh viện Nhi đồng Thành phố       
Hiện là Bác sĩ Nhi khoa tại Bệnh viện Quốc tế City`,
                price: `-    Giá khám đã bao gồm phí nhân viên hướng dẫn: 220.000đ`,
                content: `Bác sĩ chuyên khoa I Nguyễn Xuân Tài
------------------------------------

-   Bác sĩ từng công tác tại Bệnh viện Nhi đồng 1, Bệnh viện Nhi đồng Thành phố
-   Bác sĩ Nhi khoa tại Bệnh viện Quốc tế City

### Quá trình công tác

-   Hiện là Bác sĩ Nhi khoa tại Bệnh viện Quốc tế City (2019 - nay)
-   Bác sĩ Hồi sức tích cực - chống độc Bệnh viện Nhi Đồng Thành phố (2017 - 2019)
-   Bác sĩ luân khoa Bệnh viện Nhi Đồng 1 (2015 - 2017)

### Quá trình đào tạo

-   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y khoa Phạm Ngọc Thạch (2014)
-   Tốt nghiệp BSCKI chuyên ngành Nhi khoa, Đại học Y khoa Phạm Ngọc Thạch (2018)

Khám và điều trị
----------------

Bác sĩ nhận khám và điều trị bệnh lý Nhi khoa:

-   Bệnh lý thần kinh
-   Hô hấp
-   Tiêu hóa
-   Dinh dưỡng
-   Tiết niệu
-   Tim mạch`,
                active: true
            },
            {
                id: '0040',
                name: 'Nguyễn Thị Lệ Liễu',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '08',
                clinicAddress: `**Bệnh viện Quốc tế City**        
3 Đường Số 17A, Bình Trị Đông B, Bình Tân, Thành phố Hồ Chí Minh`,
                email: 'lieuntl0040@gmail.com',
                username: 'lieuntl0040',
                image: await toBase64('40bac-si-cki-nguyen-thi-le-lieu.jpg'),
                describe: `35 năm kinh nghiệm trong lĩnh vực Nhi khoa       
Từng công tác nhiều năm tại Bệnh viện Nhi đồng 1`,
                price: `-    Giá khám đã bao gồm phí nhân viên hướng dẫn: 220.000đ`,
                content: `Bác sĩ Chuyên khoa I Nguyễn Thị Lệ Liễu
---------------------------------------

-   35 năm kinh nghiệm trong lĩnh vực Nhi khoa
-   Từng công tác nhiều năm tại Bệnh viện Nhi đồng 1

### Quá trình công tác

-   Hiện là Bác sĩ khoa Nhi, Bệnh viện Quốc tế City
-   Bác sĩ khoa Hồi sức tích cực Phẫu thuật, Bệnh viện Nhi đồng 1 (1990 - 2014)
-   Bác sĩ khoa Hồi sức tích cực Phẫu thuật Tim, Viện Tim TP.HCM (2006)
-   Bác sĩ khoa Nhi, Bệnh viện Quận 6 (1987 - 1990)

### Quá trình đào tạo

-   Tốt nghiệp Bác sĩ chuyên khoa I, Đại học Y dược TP.HCM (2002)
-   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM (1987)

Khám và điều trị
----------------

**Bác sĩ khám và điều trị bệnh lý Nhi khoa:**

-   Bệnh tiêu hóa 
-   Bệnh Nội tiết- Chuyển hóa di truyền
-   Hô hấp trẻ em
-   Truyền nhiễm
-   Bệnh Thần kinh trẻ em
-   Bệnh tim trẻ em`,
                active: true
            },
            {
                id: '0041',
                name: 'Vũ Thái Hà',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '09',
                clinicAddress: `**Phòng khám Da liễu và Thẩm mỹ Bác sĩ Thái Hà**        
Số 8 ngõ 26 Hoàng Cầu cũ (gần Ô Chợ Dừa), Đống Đa, Hà Nội`,
                email: 'havt0041@gmail.com',
                username: 'havt0041',
                image: await toBase64('41bac-si-vu-thai-ha.jpg'),
                describe: `Trưởng khoa Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương`,
                price: `-    Giá khám đã bao gồm soi da: 450.000đ`,
                content: `Tiến sĩ, Bác sĩ Vũ Thái Hà
--------------------------

-   16 năm kinh nghiệm trong chuyên ngành da liễu và laser -- phẫu thuật trong da liễu
-   10 năm kinh nghiệm nâng cơ, trẻ hóa da mặt bằng chỉ
-   15 năm kinh nghiệm trong điều trị laser và trị liệu ánh sáng cho các tăng sắc tố, trẻ hóa da, sẹo lõm, sẹo lồi.
-   15 năm kinh nghiệm trong điều trị bệnh da liễu như trứng cá, rụng tóc, vảy nến, viêm da cơ địa....
-   10 năm kinh nghiệm trong tạo hình khuôn mặt và trẻ hóa da bằng Filler, botox, 5 năm kinh nghiệm trong liệu pháp mesotherapy điều trị rám má và trẻ hóa da, thon gọn cơ thể
-   16 năm giảng dạy trong chuyên ngành Da liễu
-   Kinh nghiệm trong điều trị chống lão hóa bằng RF, HIFU

### Quá trình công tác

-   Trưởng khoa Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương (2016 - nay)
-   Phó trưởng khoa phụ trách Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương (4/2016 - 6/2016)
-   Phó trưởng khoa Phẫu thuật tạo hình và Phục hồi chức năng - Bệnh viện Da liễu Trung ương (7/2015 - 4/2016)
-   Phó trường khoa Laser phẫu thuật (D1) - Bệnh viện Da liễu Trung ương (5/2013 - 7/2015)
-   Giáo vụ bộ môn Da liễu - Đại học Y Hà Nội (6/2012 - 4/2013)
-   Bác sĩ Da liễu tại khoa Laser - phẫu thuật bệnh viện Da liễu Trung ương (từ 1/2013)
-   Giảng viện bộ môn da liễu - Trường Đại học Y Hà Nội (từ 1/2013)

### Quá trình đào tạo

-   Nghiên cứu sinh chuyên ngành Da liễu -- Đại học Y Hà Nội (2010 - 2017)
-   Thạc sĩ Da liễu -- Đại học Y Hà Nội (1999 - 2005)
-   Bác sĩ Chuyên khoa cấp I Da liễu -- Đại học Y Hà Nội (1999 - 2003)
-   Bs nội trú Da liễu -- Đại học Y Hà Nội (1999 - 2003)
-   Thực tập tại khoa Da liễu Bệnh viện Bichat -- Claude Bernard - Paris -- Pháp các bệnh da liễu, u lympho, bệnh về tóc, bệnh về móng (2009)
-   Thực tập tại khoa Da liễu Bệnh viện Sant Louis -- Paris -- Pháp bệnh về tóc, u lympho, phương pháp giảng dạy bệnh da liễu (2011)

### Chứng chỉ chuyên ngành khác

-   Chứng chỉ: Ứng dụng Laser và ánh sáng trong Da liễu do Bệnh Viện Da liễu Trung Ương cấp.
-   Chứng nhận đào tạo Laser Revlite, Picosure tại Thái Lan do giáo sư Niwat Polnikorn cấp.
-   Chứng nhận đào tạo về Botox - Filler cơ bản và nâng cao trong ngăn ngừa lão hóa khuôn mặt và tạo hình vùng mặt của Trường đại học Y Hà Nội, Trường đại học Y Mahidol Thái Lan, Bệnh viện Việt Đức và các hãng Restylen, Allergan, Pluryal, neuvia, teoxane...
-   Chứng nhận đào tạo về căng chỉ Ultra V-lift được cấp bởi giáo sư Kwon Han Jin
-   Chứng nhận đào tạo về chemical peel, chăm sóc da do Image Skincare cấp

Khám và điều trị
----------------

-   Viêm da cơ địa: Tổn thương da khô, ban đỏ kèm theo hiện tượng ngứa
-   Viêm da tiếp xúc: Tổn thương vùng bị tiếp xúc, dát đỏ, mụn nước , có thể loét , kèm ngứa
-   Viêm da dầu: Các mảng dát màu đỏ hồng, có vảy da trắng mỏng nhờn dính kèm ngứa ở nếp gấp, rãnh mũi má
-   Mày đay: Sẩn phù, ngứa, phù mạch, nguyên nhân chủ yếu do dị ứng
-   Zona: Ban đỏ, đám mụn nước ,vết loét, cảm giác ngứa rát dọc theo dây thần kinh
-   Thủy đậu: Sốt, mụn nước to dịch trong lan toàn thân , sau vỡ vảy tiết, sẹo
-   Nấm da: Mảng nổi nhẹ, có hình vòng hoặc bầu dục, có màu đỏ hoặc nâu, tróc vảy và gây ngứa
-   U mềm lây: Nốt sẩn nhỏ, lõm trung tâm, rải rác toàn thân, không ngứa, không đau
-   Viêm hạch lan tỏa
-   Bớt sắc tố: Nốt, mảng tăng sắc tố khu trú hoặc lan tỏa trên cơ thể, bề mặt phẳng, màu nâu, đen , xanh. Không đau , không ngứa rát.
-   Nám da: Dát tăng sắc tố màu nâu, xanh đen đối xứng 2 bên mặt, bằng phẳng, bờ không đều, không teo da, không ngứa.
-   Trứng cá: Mụn nhân trắng đen, mụn viêm , mụn nang, mụn bọc
-   Sẹo lõm: Tổn thương lõm sâu xuống dưới bề mặt da, màu đậm hoặc cùng màu da, không đau. Sẹo đáy nhọn, sẹo đáy hộp, sẹo đáy tròn
-   Sẹo lồi: Tổn thương nổi gồ trên bề mặt da, không đau, màu trùng màu da hoặc đậm hơn
-   Lão hóa da: Da bị chảy xệ, trùng nhão không được săn chắc. Nhiều nếp nhăn vùng trán, đuôi mắt, rãnh mũi má
-   Rụng tóc: Tóc rụng thành chỏm hoặc nhiều sợi , sợi tóc mỏng xơ dễ gãy`,
                active: true
            },
            {
                id: '0042',
                name: 'Nguyễn Tiến Thành',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '09',
                clinicAddress: `**Phòng khám Chuyên khoa Da liễu Maia&Maia**        
21 Hoàng Cầu, phường Ô Chợ Dừa, quận Đống Đa, Hà Nội`,
                email: 'thanhnt0042@gmail.com',
                username: 'thanhnt0042',
                image: await toBase64('42bs-thanh.jpg'),
                describe: `Hơn 15 năm kinh nghiệm trong chuyên khoa Da liễu và thế mạnh chính về Laser sắc tố da       
Phó Trưởng phòng Quản lý chất lượng, Bệnh viện Da liễu Trung ương       
Bác sĩ khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương`,
                price: `-    Giá khám đã bao gồm soi da: 450.000đ`,
                content: `Bác sĩ Chuyên khoa II Nguyễn Tiến Thành
---------------------------------------

-   Hơn 15 năm kinh nghiệm trong chuyên khoa Da liễu và thế mạnh chính về Laser sắc tố da
-   Phó Trưởng phòng Quản lý chất lượng, Bệnh viện Da liễu Trung ương
-   Bác sĩ khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương
-   Tham gia nhiều hoạt động báo hình và báo viết chính thống: Dân trí, Sức khoẻ đời sống, VnExpress, VTC, VTV1, VTV2, VTV3, Truyền hình Hà Nội,...

Khám và điều trị
----------------

**Điều trị các bệnh lý Da liễu, Thẩm mỹ, Laser công nghệ cao người lớn, trẻ em:**

-   Viêm da cơ địa, mày đay, nấm da, nấm móng, vảy nến,...
-   Trứng cá, thâm mụn, sẹo lõm, sẹo lồi, sẹo xấu,...
-   Zona, herpes, hạt cơm,...
-   Điều trị các bệnh lây truyền qua đường tình dục: Sùi mào gà, u mềm lây, lậu, ghẻ,...

**Thế mạnh trong điều trị thẩm mỹ nội khoa (không phẫu thuật):**

-   Rụng tóc: rụng tóc mảng, rụng tóc kiểu hói, rụng tóc toàn thể, tóc mỏng, thưa, dễ gãy, phục hồi mái tóc trở nên khoẻ mạnh,...
-   Điều trị bằng Laser công nghệ cao điều trị sắc tố: rám má, tàn nhang, bớt sắc tố, xoá xăm, trẻ hoá da (Ultherapy nâng cơ, xoá nhăn, phục hồi, căng bóng,...),rạn da bụng - chân, triệt lông

**Tạo hình khuôn mặt không xâm lấn:**

-   Nâng mũi, kéo dài cằm, thu gọn viền hàm,...
-   Đặc biệt kinh nghiệm nhiều năm trong thẩm mỹ da, phục hồi những ca bệnh biến chứng nặng do điều trị hỏng ở nhiều nơi

### Quá trình công tác

-   Phó Trưởng phòng Quản lý chất lượng, Bệnh viện Da liễu Trung ương (2022 - Nay)
-   Bác sĩ khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương (2015 - Nay)
-   Phó Trưởng khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương (2019 - 2022)
-   Phó Trưởng phòng Tổ chức cán bộ, Bệnh viện Da liễu Trung ương (2015 - 2018)
-   Bác sĩ khoa Điều trị bệnh da nữ và trẻ em, Bệnh viện Da liễu Trung ương (2010 - 2015)

### Quá trình đào tạo

-   Bác sĩ Chuyên khoa II, Trường Đại học Y Hà Nội (2017 - 2019)
-   Thạc sĩ Da liễu, Trường Đại học Y Hà Nội (2012 - 2014)

### Chứng chỉ trong nước hoặc nước ngoài

-   Ứng dụng Laser trong chuyên ngành Da liễu tại Bệnh viện Da liễu Trung ương
-   Chứng nhận đào tạo liên tục "Cập nhật mới về kĩ thuật tiêm Acid Hyaluronic trong điều trị trẻ hóa da"
-   Chứng nhận đào tạo về Botox -- Filler cơ bản và nâng cao trong ngăn ngừa lão hoá khuôn mặt và tạo hình vùng mặt của Trường Đại học Y Hà Nội và các hãng Teoxane, Juvederm, Allegen, Restylen,...
-   Chứng chỉ Căng chỉ Hội thẩm mỹ Hàn Quốc

### Sách và các công trình nghiên cứu, báo cáo khoa học

-   Luận văn Chuyên khoa II đề tài: "Kết quả điều trị rám má bằng Laser QS YAG và kết hợp bôi chế phẩm 4 -- n -butylresorcinol và Tranexamic Acid" (2019)
-   Congenital Erythropoietic Porphyria: Mutation of the Uroporphyrinogen III Cosynthase Gene in a Vietnamese Patient (2013)
-   Và nhiều nghiên cứu trong và ngoài nước

### **Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình...**

-   Tham gia nhiều hoạt động báo hình và báo viết chính thống: Dân trí, Sức khoẻ đời sống, VnExpress, VTC, VTV1, VTV2, VTV3, Truyền hình Hà Nội,...

### Thành viên các Hội khoa học, tổ chức chuyên môn

-   Hội bác sĩ Da liễu trẻ Việt Nam
-   Hội bác sĩ Da liễu Thẩm mỹ
-   Hội thầy thuốc trẻ Việt Nam
-   Hội laser và thẩm mỹ nội khoa`,
                active: true
            },
            {
                id: '0043',
                name: 'Đàm Thị Thúy Hồng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '09',
                clinicAddress: `**Phòng khám Da liễu - Thẩm mĩ H&M**        
1B, phố Thanh Nhàn, phường Quỳnh Mai, quận Hai Bà Trưng, Hà Nội`,
                email: 'hongdtt0043@gmail.com',
                username: 'hongdtt0043',
                image: await toBase64('43anh-bs-thuy-hong-hm.jpg'),
                describe: `Hơn 20 năm kinh nghiệm trong điều trị da liễu và thẩm mỹ da       
Nguyên trưởng khoa Phẫu thuật - Laser - VLTL - CSD - Bệnh viện Da liễu Hà Nội       
Bác sĩ Chuyên khoa II chuyên ngành Da liễu - Đại học Y Hà Nội`,
                price: `-    Giá khám đã bao gồm soi da: 450.000đ`,
                content: `Thạc sĩ, Bác sĩ Chuyên khoa II Đàm Thị Thúy Hồng
------------------------------------------------

-   Hơn 20 năm kinh nghiệm trong điều trị da liễu và thẩm mỹ da
-   Nguyên trưởng khoa Phẫu thuật - Laser - VLTL - CSD - Bệnh viện Da liễu Hà Nội
-   Bác sĩ Chuyên khoa II chuyên ngành Da liễu - Đại học Y Hà Nội

Khám và điều trị
----------------

-   Khám và điều trị mụn cóc, hạt cơm phẳng, u mềm lây, chứng đỏ mặt
-   Khám và điều trị trứng cá
-   Khám và điều trị u da lành tính, u da tuyến mồ hôi, u máu
-   Điều trị xạm da
-   Khám và điều trị sùi mào gà
-   Các bệnh da phổ biến: 
    -   Viêm da dầu
    -   Viêm da cơ địa
    -   Sẹo (sẹo lõm, sẹo lồi, sẹo xấu, sẹo thâm)
    -   Mắt cá, chai chân, mụn thịt
    -   Rụng tóc
    -   Nốt ruồi
    -   Viêm da tiếp xúc
    -   Vảy nến
    -   Lichen phẳng
    -   Herpes
    -   Zona
    -   Mề đay
-   Bệnh da do côn trùng và ký sinh trùng
    -   Bệnh ghẻ
    -   Sẩn ngứa cục do côn trùng
    -   Ấu trùng sán lợn dưới da
-   Các bệnh do nấm da
    -   Các bệnh nấm nông
    -   Các bệnh gây nên do nấm Candida albicans
    -   Các bệnh nấm sâu
-   Bệnh da do vi khuẩn
    -   Viêm da mủ
    -   Bệnh phong
    -   Lao da
    -   Bệnh lyme
-   Viêm da, Eczema
    -   Eczema
    -   Tổ đỉa
    -   Viêm da thần kinh
    -   Bệnh da nghề nghiệp
-   Vảy nến, bệnh có sần vảy, đỏ vảy
    -   Vảy nến
    -   Vảy nến mụn mủ
    -   Liken phẳng
    -   Vảy phấn hồng Gibert
-   Bệnh da do virut
    -   Bệnh Ecpet mảng tròn 
    -   Zona
    -   Thủy đậu
-   Bệnh niêm mạc miệng
    -   Lưỡi lông đen
    -   Lưỡi nứt
    -   Lưỡi bản đồ
    -   Bệnh áp tơ
-   Bệnh lông tóc
    -   Rụng tóc
    -   Bạch biến
-   Bệnh niêm mạc miệng
    -   Lưỡi lông đen
    -   Lưỡi nứt
    -   Lưỡi bản đồ
    -   Bệnh áp tơ
-   Bệnh tự miễn, bệnh hệ thống
    -   Lupus ban đỏ hệ thống
    -   Lupus đỏ dạng đĩa, mạn tính
    -   Bệnh rối loạn vận mạch (Raynaud)
    -   Xơ cứng bì
    -   Viêm da cơ
    -   Dọng nước tự miễn (Pemphigoid)
    -   Ly thượng bì phỏng nước bẩm sinh
-   U da ác tính, tiền ung thư
    -   Bệnh rối loạn tế bào sừng ở da tiền ung thư (Bowen)
    -   Hồng sản
    -   K tế bào đáy
    -   K tế bào gai
-   Bệnh lông tóc
    -   Rụng tóc
    -   Bạch biến
-   Bệnh lây truyền qua đường tình dục
    -   Bệnh lậu
    -   Nhiễm Chlamydia đường sinh dục
    -   Giang mai
    -   Loét hạ cam
    -   Bệnh hột xoài 
    -   Sùi mào gà
    -   Biểu hiện da niêm mạc ở bệnh nhân nhiễm HIV/AIDS
    -   Phác đồ điều trị theo hội chứng cho các bệnh lây truyền qua đường tình dục
-   Dị uống thuốc

    -   Hội chứng Stevens- Johnson và Lyell do dị ứng thuốc 
    -   Ban mày đay và phù mạch
    -   Ban đỏ nhiễm sắc cố định tái phát

### Quá trình công tác

-   Nguyên trưởng khoa Phẫu thuật -- Laser -- VLTL -- CSD -  Bệnh viện Da liễu Hà Nội
-   Giảng viên Laser thẩm mỹ Khoa Y - Đại học Quốc gia Hà Nội
-   Bác sĩ Da liễu Thẩm mỹ - Phòng khám da liễu Thẩm mỹ H&M
-   Bác sĩ Da liễu Thẩm mỹ - Thanh Hằng Beauty Medi 169 Bùi Thị Xuân (2010 - 2019)

### Quá trình đào tạo 

-   Bác sĩ Chuyên khoa II Da liễu tại Trường Đại học Y Hà Nội (2016 - 2018)
-   Học Bác sĩ Thạc sĩ Da liễu tại trường Đại học Y Hà Nội (2007 - 2009)
-   Định hướng Da liễu tại trường Đại học Y Hà Nội (1997 - 1999)
-   Tốt nghiệp trường Đại học Y Thái Bình

### Chứng chỉ trong nước hoặc nước ngoài

-   Chứng chỉ Laser thẩm mỹ của Hội Laser châu Á - Thái Bình Dương (1998)
-   Chứng chỉ Laser thẩm mỹ khoa Y trường Đại học Quốc gia Hà Nội

### Sách và các công trình nghiên cứu, báo cáo khoa học

-   Đánh giá hiệu quá rám má bằng Laser YAG phác đồ năng lượng thấp (2018 - 2019)
-   Đánh giá hiệu quả trẻ hóa da bằng Laser YAG (2017)
-   Đánh giá hiệu quả điều trị sẹo lõm bằng Laser Fractional CO2 (2016)
-   Đánh giá hiệu quả điều trị bớt Ota bằng Laser Alexandrite (2014 - 2016)
-   Đánh giá hiệu quả triệt lông bằng IPL (2015)
-   Đánh giá hiệu quả điều trị tàn nhang bằng Laser Alexandoit (2013)
-   Xác định sự hiện diện của tụ cầu vàng và đánh giá hiệu quả của Fucidin H trong viêm da cơ địa ở trẻ em (2007 - 2009)`,
                active: true
            },
            {
                id: '0044',
                name: 'Nguyễn Thùy Linh',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '09',
                clinicAddress: `**Phòng khám Da liễu Thẩm mỹ FSkin**        
224 Đường Nguyễn Lân, Phường Phương Liệt, Quận Thanh Xuân, Hà Nội`,
                email: 'linhnt0044@gmail.com',
                username: 'linhnt0044',
                image: await toBase64('44bs-linh.jpg'),
                describe: `Gần 15 năm kinh nghiệm trong khám và điều trị về Da liễu       
Phó Trưởng khoa Điều trị bệnh da phụ nữ và trẻ em Bệnh viện Da liễu Trung ương       
Bác sĩ nhận bệnh nhân ở mọi độ tuổi`,
                price: `-    Giá khám đã bao gồm soi da: 450.000đ`,
                content: `Thạc sĩ, Bác sĩ Nguyễn Thùy Linh
--------------------------------

-   Gần 15 năm kinh nghiệm trong khám và điều trị về Da liễu
-   Phó Trưởng khoa Điều trị bệnh da phụ nữ và trẻ em Bệnh viện Da liễu Trung ương
-   Bác sĩ nhận bệnh nhân ở mọi độ tuổi

Khám và điều trị
----------------

-   Trứng cá: Mụn viêm, mụn bọc, da dầu
-   Viêm da cơ địa: Da khô đỏ, bong vảy
-   Rám má: Mảng tăng sắc tố vùng má 2 bên
-   Khô da: Da khô, nhiều nếp nhăn
-   Lão hóa da: Da khô sạm, nếp nhăn nhiều, tăng sắc tố
-   Tăng tiết mồ hôi
-   Bệnh da nhiễm khuẩn
-   Bệnh da tự miễn
-   Bệnh da bọng nước tự miễn
-   Dày sừng nang lông
-   Khám chữa các vấn đề tóc: rụng tóc
-   Khám chữa các bệnh da liễu: viêm da cơ địa, viêm da tiếp xúc, viêm da dầu, vảy nến...
-   Khám và điều trị da liễu thẩm mỹ: Sẹo lõm, sẹo lồi, lỗ chân lông to, tàn nhang, bạch biến
-   Tạo hình khuôn mặt, đường nét cơ thể bằng Filler, Toxin, Chỉ
-   Khám và tư vấn các bệnh xã hội

### Quá trình công tác

-   Phó Trưởng khoa, Bệnh viện Da liễu Trung ương (2016 - 2022)
-   Bác sĩ, Bệnh viện Da liễu Trung Ương (2009 - 2015)

### Quá trình đào tạo

-   Chuyên khoa II chuyên ngành Da liễu, Đại học Y Hà Nội (2020 - 2022)
-   DFMSA chuyên khoa Da liễu, Đại học Paris 13 Bobigny, Cộng hòa Pháp (2014 - 2015)
-   Cao học chuyên khoa Da liễu, Đại học Y Hà Nội (2011 - 2013)
-   Định hướng chuyên khoa Da liễu, Đại học Y Hà Nội (2009 - 2010)
-   Bác sĩ đa khoa, Đại học Y Hà Nội (2002 - 2008)

### Chứng chỉ trong và ngoài nước

-   Căng chỉ trong thẩm mỹ da, Bệnh viện Da liễu Trung Ương (2022)
-   Ứng dụng Botulinum Toxin trong thẩm mỹ da, Bệnh viện Da liễu Trung Ương (2021)
-   Tiêm chất làm đầy trong thẩm mỹ da, Bệnh viện Da liễu Trung Ương (2021)
-   Mesotherapy trong thẩm mỹ da, Bệnh viện Da liễu Trung Ương (2021)`,
                active: true
            },
            {
                id: '0045',
                name: 'Hoàng Văn Tâm',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '09',
                clinicAddress: `**Phòng khám Chuyên khoa Da liễu Pema+**        
TT 03 khu liền kề, 609 Trương Định, Phường Thịnh Liệt, Quận Hoàng Mai, TP. Hà Nội`,
                email: 'tamhv0045@gmail.com',
                username: 'tamhv0045',
                image: await toBase64('45bs-hoang-van-tam.jpg'),
                describe: `Gần 10 năm kinh nghiệm trong Chuyên khoa Da liễu       
Phó khoa điều trị nội trú ban ngày, Bệnh viện Da liễu Trung Ương       
Phó chủ tịch hội bác sĩ Da liễu trẻ Việt Nam`,
                price: `-    Giá khám đã bao gồm soi da: 450.000đ`,
                content: `Thạc sĩ, Bác sĩ Nội trú Hoàng Văn Tâm
-------------------------------------

-   Gần 10 năm kinh nghiệm trong Chuyên khoa Da liễu
-   Phó khoa điều trị nội trú ban ngày, Bệnh viện Da liễu Trung Ương
-   Phó chủ tịch hội bác sĩ Da liễu trẻ Việt Nam

Khám và Điều trị
----------------

Bác sĩ nhận khám và điều trị:

-   Bạch biến: Đám giảm sắc tố
-   Rám má: Đám tăng sắc tố ở mặt
-   Trứng cá: Mụn ở mặt
-   Viêm da cơ địa: Mụn, sần ở mặt, tay
-   Vảy nến: Mảng đỏ, có vảy
-   Lão hoá da: Da nhăn, chảy xệ

### Quá trình Công tác

-   Phó khoa điều trị nội trú ban ngày, Bệnh viện Da liễu Trung Ương (2015)

### Quá trình Đào tạo

-   Nghiên cứu sinh Da liễu, Đại học Y Hà Nội (2020 - Nay)
-   Bác sĩ nội trú Da liễu, Đại học Y Hà Nội (2012 - 2015)
-   Bác sĩ Đa khoa, Đại học Y Hà Nội (2006 - 2012)

### Chứng chỉ trong nước hoặc nước ngoài

-   Chứng chỉ về phẫu thuật Da trong Da liễu, Bệnh viện Da liễu Trung Ương (2022)
-   Thực hành tiêm filler trên xác, và người thật, Thái Lan (2018)
-   Chứng chỉ laser, Bệnh viện Da liễu Trung Ương (2016)

### Sách và các công trình nghiên cứu, báo cáo khoa học

-   Sách: chăm sóc da trọn đời tập 1 (2022)
-   Sách: Hình ảnh lâm sàng, chẩn đoán và điều trị trong chuyên ngành Da liễu (2020)
-   Sách: Bệnh học Da liễu (2020)
-   Nghiên cứu: điều trị bệnh vảy nến bằng UVB dải hẹp (2015)

### Thành viên các Hội khoa học, tổ chức chuyên môn

-   Phó chủ tịch hội bác sĩ Da liễu trẻ Việt Nam`,
                active: true
            },
            {
                id: '0046',
                name: 'Trần Hữu Bình',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '10',
                clinicAddress: `**Phòng khám Chuyên khoa Yên Hòa**          
                số 11 i4, ngõ 37 Trần Kim Xuyến, khu Đô Thị Mới Yên Hoà, Yên Hoà, Cầu Giấy, Hà Nội`,
                email: 'binhth0046@gmail.com',
                username: 'binhth0046',
                image: await toBase64('46bs-tran-huu-binh.jpg'),
                describe: `Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh        
                Nguyên Viện trưởng Viện Sức khỏe Tâm thần quốc gia, Bệnh viện Bạch Mai        
                Nguyên Phó Chủ nhiệm Bộ môn Tâm thần trường Đại học Y Hà Nội        
                Bác sĩ nhận khám mọi độ tuổi        
                Bác sĩ không nhận khám tự kỉ và chậm nói`,
                price: `-   Giá khám áp dụng cho bệnh nhân là người Việt: 300.000đ
                -   Giá khám áp dụng cho bệnh nhân là người nước ngoài: 600.000đ`,
                content: `PGS, TS, Giảng viên cao cấp Trần Hữu Bình
                -----------------------------------------
                
                -   Danh hiệu Thầy thuốc Nhân dân
                -   Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh
                -   Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai
                -   Nguyên Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội
                -   Bác sĩ nhận khám mọi độ tuổi
                -   Bác sĩ không nhận khám tự kỉ và chậm nói
                
                ### Quá trình công tác
                
                -   PGS.TS.BS Khám bệnh tại Trung tâm Y khoa số 1, Bệnh viện Đại học Y Hà Nội
                -   Chủ trì Hội chẩn lâm sàng bệnh nhân Tâm thần tại Viện Sức khỏe Tâm thần, Bệnh viện Bạch Mai
                -   Đào tạo (giảng dạy, hướng dẫn, chấm luận án) Tiến sĩ, Thạc sĩ, Bác sĩ chuyên khoa II, Bác sĩ nội trú chuyên ngành Tâm thần, Y tế công cộng của Trường Đại học Y Hà Nội
                -   Viện trưởng Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (2008 -- 2011)
                -   Trưởng khoa điều trị Nghiện chất Viện Sức khoẻ Tâm thần, Bệnh viện Bạch Mai (2010 -- 2014)
                -   Trưởng khoa điều trị loạn thần Nam Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (1995 -- 2008)
                -   Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội (1995 - 2014)
                -   Bác sĩ -- cán bộ giảng dạy, Bộ môn Tâm thầnTrường Đại học Y Hà Nội (1978 - 1994)
                
                ### Quá trình đào tạo
                
                -   Giảng viên cao cấp chuyên ngành Tâm thần, Bộ Giáo dục và đào tạo (2014)
                -   Phó Giáo sư chuyên ngành Tâm thần, Bộ Giáo dục và đào tạo (2007)
                -   Tiến sĩ chuyên ngành Tâm thần, Trường Đại học Y Hà Nội (2003)
                
                ### Sách và các công trình nghiên cứu khoa học
                
                -   Tham gia biên soạn chủ biên và đồng chủ biên 16 đầu sách là giáo trình giảng dạy, sách chuyên khảo chuyên ngành Tâm thần học và y học nói chung (2003 - 2018)
                -   Trên 50 công trình nghiên cứu khoa học đăng tải trong các tạp chí khoa học có uy tín (Tạp chí Nghiên cứu khoa học Đại học Y Hà Nội, tạp chí Tổng hội Y Dược học Việt Nam, tạp chí Y học thực hành Bộ Y tế, tạp chí Hội Tâm thần học Việt Nam). (1992 - 2020)
                -   Hướng dẫn bảo vệ thành công 31 luận án Tiến sĩ, luận văn Thạc sĩ, Bác sĩ chuyên khoa cấp 2, Bác sĩ nội trú Bệnh viện, Y tế công cộng Đại học Y Hà Nội (2003 - 2020)
                
                ### Thành viên các hội khoa học, tổ chức chuyên môn
                
                -   Ban chấp hành Hội Tâm thần học Việt Nam
                -   Phó Chủ tịch Hội đồng khoa học Viện Nghiên cứu Điều trị các bệnh hiểm nghèo
                
                Khám và điều trị
                ----------------
                
                **Bác sĩ nhận khám các vấn đề:**
                
                -   Các rối loạn giấc ngủ: Mất ngủ, ngủ nhiều, ác mộng, hoảng sợ khi ngủ, rối loạn nhịp thức ngủ, đi trong giấc ngủ (chứng miên hành).
                
                **Các rối loạn liên quan đến Stress và dạng cơ thể:**
                
                -   Đau dai dẳng các loại: Đau đầu, đau ngực, đau bụng, đau mọi vị trí không xác định trong cơ thể.
                -   Rối loạn thần kinh thực vật
                -   Rối loạn hệ thống tim mạch: Tim đập nhanh, hồi hộp đánh trống ngực, cảm giác đè nặng ngực, nghẹt thở, huyết áp dao động.
                -   Rối loạn dạ dày - ruột: đau bụng, đầy hơi, trào ngược dạ dày, trào ngược thực quản.
                -   Rối loạn hệ thống hô hấp: Tức ngực, khó thở, đoản hơi.
                -   Rối loạn hệ thống tiết niệu - sinh dục: Đái nhiều, đái nóng, đái dắt; giảm ham muốn tình dục, nam rối loạn cương, nữ rối loạn kinh nguyệt.
                
                **Rối loạn sự thích ứng:**
                
                -   Trầm cảm: Buồn chán, mất thích thú, mệt mỏi, vô lực, giảm tập trung chú ý, kém tự tin, nhìn tương lai ảm đạm và bi quan.
                -   Lo âu, rối loạn cảm xúc và hành vi,...
                -   Các rối loạn cảm xúc: Trầm cảm, hưng cảm, cảm xúc dao động, ...
                -   Các rối loạn tâm ký nặng: Hoang tưởng, Ảo giác, rối loạn phân liệt,...
                -   Trẻ em: Tự kỷ, tăng động giảm chú ý, tíc, đái dầm, ỉa đùn, nói lắp, trầm cảm, rối loạn cảm xúc và hành vi, rối loạn vận động định hình.
                -   Người già: Trầm cảm, sa sút trí tuệ, lú lẫn, hoang tưởng, ảo giác.
                -   Các vấn đề tâm lý ở phụ nữ các giai đoạn: Dậy thì, mang thai, sinh đẻ, mãn kinh,...
                -   Rối loạn ăn uống: Chán ăn, ăn vô độ, béo phì.
                -   Rối loạn tình dục: Mất ham muốn, xuất tinh sớm, bất lực, lãnh cảm, đau khi giao hợp, rối loạn phân định giới tính,...
                -   Các vấn đề về nghiện: Nghiện rượu, ma tuý, Game Online, Internet, ...`,
                active: true
            },
            {
                id: '0047',
                name: 'Nguyễn Viết Chung',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '10',
                clinicAddress: `**Phòng khám Hello Doctor cơ sở Hoàng Cầu - Hà Nội**        
                Số 5, Ngách 4, Ngõ 95, Hoàng Cầu, Đống Đa, Hà Nội`,
                email: 'chungnv0047@gmail.com',
                username: 'chungnv0047',
                image: await toBase64('47bs-nguyen-viet-chung.jpg'),
                describe: `Bác sĩ khám và điều trị tại Khoa Sức khoẻ Tâm thần, Bệnh viện E        
                Giảng viên Bộ môn Tâm thần và Tâm lý lâm sàng, Trường Đại học Y Dược - Đại học Quốc Gia Hà Nội        
                Bác sĩ nhận khám cho bệnh nhân từ 7 tuổi trở lên`,
                price: `-   Giá khám áp dụng cho bệnh nhân là người Việt: 300.000đ
                -   Giá khám áp dụng cho bệnh nhân là người nước ngoài: 600.000đ`,
                content: `Thạc sĩ, Bác sĩ Nguyễn Viết Chung
                ---------------------------------
                
                -   Bác sĩ khám và điều trị tại Khoa Sức khoẻ Tâm thần, Bệnh viện E
                -   Giảng viên Bộ môn Tâm thần và Tâm lý lâm sàng, Trường Đại học Y Dược - Đại học Quốc Gia Hà Nội
                
                Khám và điều trị
                ----------------
                
                **Bác sĩ có thế mạnh khám và điều trị các bệnh:**
                
                -   Rối loạn lo âu, ám ảnh, stress: Lo lắng một hay nhiều chủ đề; Đau đầu căng thẳng, bồn chồn; Các triệu chứng thần kinh thực vật, vã mồ hôi, run, khô miệng, hồi hộp - đánh trống ngực; Trào ngược dạ dày - thực quản, đau thượng vị, rối loạn tiêu hoá, đi tiểu nhiều lần
                -   Rối loạn trầm cảm: Buồn chán, mệt mỏi, mất các quan tâm thích thú - mất cảm nhận niềm vui trong cuộc sống; Suy nghĩ tiêu cực, bi quan, giảm giá trị bản thân; Có ý tưởng tự sát; Mất ngủ, chán ăn; Mất tập trung, hay quên, thiếu động lực trong cuộc sống
                -   Rối loạn giấc ngủ: Ngủ nhiều hoặc mất ngủ, ngủ không sâu giấc, khó vào giấc ngủ, thức dậy nhiều lần trong đêm, thức dậy sớm, mộng du
                -   Rối loạn tiền đình: Đau nửa đầu, đau sau gáy, đau liên quan đến stress hay thay đổi thời tiết; Chóng mặt, hoa mắt, cảm giác quay, buồn nôn, nôn
                -   Sa sút trí tuệ: Hay quên; Thay đổi tính tình: cáu gắt, bực bội; Hoang tưởng - ảo giác, cho rằng bị mất cắp, có người lạ - kẻ trộm trong nhà
                -   Rối loạn cảm xúc hành vi ở người già: Tính tình dễ thay đổi, có khi trầm buồn, ít nói, ít giao tiếp, có khi trở nên cáu gắt - khó chịu, đánh người khác; Mất ngủ, ăn kém
                -   Rối loạn cảm xúc hành vi ở trẻ em - thanh thiếu niên: Buồn chán, ít nói, mất đông lực sống - học tập; Cáu gắt, bực bội, dễ nổi nóng - đánh người; Chống đối - bướng bỉnh
                -   Rối loạn tăng động giảm chú ý: Tăng động; Kém tập trung chú ý
                -   Rối loạn phát triển
                -   Rối loạn liên quan đến sử dụng chất
                
                ### Quá trình công tác
                
                -   Bác sĩ điều trị tại khoa Sức khỏe tâm thần, Bệnh viện E (2019 - nay)
                -   Giảng viên Bộ môn Tâm thần và Tâm lý lâm sàng, Trường Đại học Y Dược - Đại học Quốc Gia Hà Nội (2019 - nay)
                -   Bác sĩ Nội trú chuyên ngành Tâm thần, Viện Sức khỏe Tâm thần Quốc gia, Bệnh viện Bạch Mai (2016 - 2019)
                
                ### Quá trình đào tạo
                
                -   Tham gia Khóa đào tạo về liệu pháp kích hoạt hành vi, tiến hành bởi Giáo sư Victoria Ngo, Nguyễn Thanh Tâm, Basic Needs VietNam (2019)
                -   Thạc sĩ Y học, Đại học Y Hà Nội (2018)
                -   Bác sĩ Nội trú, Đại học Y Hà Nội (2016 - 2019)
                -   Tốt nghiệp Đại học Y Hà Nội (2016)`,
                active: true
            },
            {
                id: '0048',
                name: 'Nguyễn Trọng Tuân',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '10',
                clinicAddress: `**Phòng khám Hello Doctor cơ sở TP.HCM**        
                152/6 Thành Thái, phường 12, quận 10, TP.HCM`,
                email: 'tuannt0048@gmail.com',
                username: 'tuannt0048',
                image: await toBase64('48bs-tuan.jpg'),
                describe: `Gần 20 năm kinh nghiệm khám, chẩn đoán và chữa trị các bệnh lý về Tâm thần        
                Hiện đang công tác tại Bệnh viện Tâm thần TP. HCM        
                Thực tập chương trình FFI chuyên ngành Tâm thần tại Bệnh viện TENON, Cộng hòa Pháp        
                Bác sĩ nhận khám từ 10 tuổi trở lên`,
                price: `-   Giá khám áp dụng cho bệnh nhân là người Việt: 300.000đ
                -   Giá khám áp dụng cho bệnh nhân là người nước ngoài: 600.000đ`,
                content: `Bác sĩ Chuyên khoa I Nguyễn Trọng Tuân
                --------------------------------------
                
                -   Gần 20 năm kinh nghiệm khám, chẩn đoán và chữa trị các bệnh lý về Tâm thần
                -   Hiện đang công tác tại Bệnh viện Tâm thần TP. HCM
                -   Thực tập chương trình FFI chuyên ngành Tâm thần tại Bệnh viện TENON, Cộng hòa Pháp
                -   Bác sĩ nhận khám từ 10 tuổi trở lên
                
                Khám và điều trị
                ----------------
                
                Bác sĩ nhận khám và điều trị các vấn đề về Tâm thần, Tâm lý:
                
                -   Các rối loạn tâm thần cấp tính do stress, do nghiện chất (chất kích thích, ma túy, rượu),tâm thần phân liệt, do bệnh động kinh
                -   Các rối loạn cảm xúc như trầm cảm, hưng cảm, rối loạn lưỡng cực
                -   Rối loạn giấc ngủ
                -   Mất ngủ
                -   Rối loạn stress
                -   Sang chấn sau stress
                -   Đau đầu do căng thẳng
                -   Khám sức khỏe tâm thần cho các trẻ em bị khiếm khuyết về trí tuệ
                
                ### Quá trình công tác
                
                -   Công tác tại phòng Kế hoạch tổng hợp, Bệnh viện Tâm thần TP. HCM (2004 - nay)
                -   Quản lý chương trình quốc gia tâm thần và động kinh 24 quận - huyện thuộc TP. HCM
                -   Khám sức khỏe tâm thần cho các trẻ em bị khiếm khuyết về trí tuệ ở các trường khuyết tật
                -   Khám sức khỏe tâm thần cho các trung tâm cai nghiện
                
                ### Quá trình đào tạo
                
                -   Bác sĩ Chuyên khoa I ngành Tâm thần, Đại học Y dược TP. HCM (2010 - 2012)
                -   Thực tập chương trình FFI (Faisant fonction d'interne) chuyên ngành Tâm thần tại Bệnh viện TENON quận 20, Cộng hòa Pháp (2007 - 2008)
                -   Bác sĩ Y khoa, Trường Đại học Y khoa Phạm Ngọc Thạch (1998 - 2004)
                
                ### Sách, các công trình nghiên cứu và báo cáo khoa học
                
                Các nghiên cứu khoa học đã tham gia:
                
                -   Tuân thủ điều trị thuốc của bệnh nhân tâm thần phân liệt đang điều trị tại cộng đồng TP. HCM (2016 - 2017)
                -   Khảo sát hiệu quả liệu pháp gia đình trên bệnh nhân tâm thần phân liệt tại cộng đồng TP. HCM (2014 - 2015)
                -   Nghiên cứu các rối loạn tâm thần trên bệnh nhân động kinh cơn lớn đang điều trị tại cộng đồng TP. HCM (2013)
                -   Khảo sát khoảng thời gian loạn thần không điều trị (DUP) và các yếu tố liên quan trên bệnh nhân loạn thần đến khám tại Bệnh viện Tâm thần TP. HCM (2011 - 2012)
                -   Khảo sát phản ứng tâm lý bệnh nhân tâm thần phân liệt đối với các định kiến xã hội tại TP. HCM (2006)`,
                active: true
            },
            {
                id: '0049',
                name: 'Nguyễn Trọng Hiến',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '10',
                clinicAddress: `**Bệnh viện Lão khoa Trung ương**        
                Số 1A Phương Mai, Đống Đa, Hà Nội`,
                email: 'hiennt0049@gmail.com',
                username: 'hiennt0049',
                image: await toBase64('49thac-si-nguyen-trong-hien.jpg'),
                describe: `Bác sĩ khoa Sức khỏe Tâm thần, Bệnh viện Lão khoa Trung ương        
                Từng là giảng viên bộ môn Tâm thần, Đại học Y Hà Nội        
                Từng công tác tại Bệnh viện Đa khoa Quốc tế Vinmec Hà Nội`,
                price: `-   Giá khám áp dụng cho bệnh nhân là người Việt: 300.000đ
                -   Giá khám áp dụng cho bệnh nhân là người nước ngoài: 600.000đ`,
                content: `Thạc sĩ, Bác sĩ Nguyễn Trọng Hiến 
                ----------------------------------
                
                -   Bác sĩ khoa Sức khỏe Tâm thần, Bệnh viện Lão khoa Trung ương
                -   Từng là giảng viên bộ môn Tâm thần, Đại học Y Hà Nội
                -   Từng công tác tại Bệnh viện Đa khoa Quốc tế Vinmec Hà Nội
                -   Bác sĩ nhận khám mọi độ tuổi
                
                Khám & điều trị các bệnh
                ------------------------
                
                -   Trầm cảm
                -   Rối loạn lo âu
                -   Rối loạn hoảng sợ
                -   Tâm thần phân liệt
                -   Các rối loạn loạn thần
                -   Nghiện chất (rượu, ma túy, cần sa, ma túy đá...)
                -   Nghiện game, nghiện cờ bạc
                -   Rối loạn cảm xúc lưỡng cực
                -   Rối loạn giấc ngủ
                -   Rối loạn ăn uống
                -   Rối loạn chức năng tình dục
                -   Rối loạn nhân cách
                -   Rối loạn hành vi
                -   Rối loạn trí nhớ, sa sút trí tuệ
                
                ### Quá trình công tác
                
                -   Bác sĩ khoa Sức khỏe Tâm thần, Bệnh viện Lão khoa Trung ương (2016 - nay)
                -   Giảng viên bộ môn Tâm thần, Đại học Y Hà Nội (2016 - 2020)
                -   Bác sĩ, Bệnh viện Đa khoa Quốc tế Vinmec Hà Nội (2016 - 2020)
                
                ### Quá trình đào tạo
                
                -   Chuyên khoa Tâm thần, Bác sĩ chuyên khoa cấp II, Đại học Y Hà Nội (2020 - 2022)
                -   Bác sĩ Nội trú Chuyên ngành Tâm thần, Đại học Y Hà Nội (2016)
                -   Tốt nghiệp Bác sĩ Đa Khoa, Đại học Y Hà Nội (2013)`,
                active: true
            },
            {
                id: '0050',
                name: 'Nguyễn Văn Phi',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '10',
                clinicAddress: `**Bệnh viện Lão khoa Trung ương**        
                Số 1A Phương Mai, Đống Đa, Hà Nội`,
                email: 'phinv0050@gmail.com',
                username: 'phinv0050',
                image: await toBase64(),
                describe: `Nhiều năm kinh nghiệm trong lĩnh vực Tâm thần        
                Hiện đang là Phụ trách khoa Sức khỏe tâm thần, Bệnh viện Lão khoa        
                Giảng viên - Giáo vụ Đại học bộ môn Tâm thần, Đại học Y Hà Nội        
                Từng công tác tại Viện sức khỏe Tâm thần, Bệnh viện Bạch Mai`,
                price: `-   Giá khám áp dụng cho bệnh nhân là người Việt: 300.000đ
                -   Giá khám áp dụng cho bệnh nhân là người nước ngoài: 600.000đ`,
                content: `Bác sĩ Chuyên khoa II Nguyễn Văn Phi
                ------------------------------------
                
                -   Nhiều năm kinh nghiệm trong lĩnh vực Tâm thần
                -   Hiện đang là Phụ trách khoa Sức khỏe tâm thần, Bệnh viện Lão khoa
                -   Giảng viên - Giáo vụ Đại học bộ môn Tâm thần, Đại học Y Hà Nội
                -   Từng công tác tại Viện sức khỏe Tâm thần, Bệnh viện Bạch Mai
                -   Bác sĩ nhận khám bệnh nhân ở mọi độ tuổi
                
                Khám và điều trị
                ----------------
                
                Bác sĩ có thế mạnh về tư vấn và trị liệu tâm lý, cũng như điều trị và tư vấn một số rối loạn tâm thần như:
                
                -   Các rối loạn giấc ngủ: Ngủ kém, mất ngủ, mộng du, hoảng sợ khi ngủ
                -   Các rối loạn cảm xúc: Trầm cảm, hưng cảm; Chán nản, thất vọng, tức giận, cáu gắt, lo lắng, căng thẳng, ý tưởng muốn chết
                -   Các rối loạn lo âu, liên quan stress: Lo âu, căng thẳng, dễ cáu gắt...
                -   Đau đầu: Đau đầu, đau nửa đầu
                -   Rối loạn thần kinh thực vật dạng cơ thể: Hồi hộp, lo lắng, khó thở, nóng ruột, vã mồ hôi...
                -   Rối loạn dạng cơ thể khác: Đau, khó chịu nhiều vị trí khám không có bệnh cơ thể
                -   Các rối loạn tình dục: Giảm ham muốn, rối loạn cương dương, rối loạn xuất tinh...
                -   Các rối loạn ăn uống: Chán ăn, ăn vô độ tâm thần
                -   Rối loạn nhận thức, sa sút trí tuệ: Suy giảm trí nhớ, trí tuệ, rối loạn hành vi
                -   Các rối loạn hành vi: Bướng bỉnh, chống đối, tăng động...
                -   Các rối loạn tâm thần trẻ em và thanh thiếu niên: Nóng giận, hành vi đập phá đồ đạc, không nghe lời bố mẹ, giảm sút kết quả học tập, bướng bỉnh...; Rối loạn phổ tự kỷ, chậm nói, chậm phát triển tâm thần
                -   Các rối loạn tâm thần liên quan đến sử dụng chất (cần sa, bóng cười, thuốc lắc, đá...)
                -   Tâm thần phân liệt, rối loạn hoang tưởng... : Cho rằng có người khác làm hại, nghe thấy tiếng nói trong đầu, cho rằng chồng/ vợ không chung thuỷ với mình
                -   Các rối loạn tâm thần liên quan đến sinh đẻ (trầm cảm sau sinh...): Buồn chán, thay đổi cảm xúc, rối loạn giấc ngủ liên quan thai nghén và sau sinh
                -   Các rối loạn tâm thần sau tổn thương não
                -   Rối loạn nhân cách loại ranh giới, rối loạn nhân cách phụ thuộc... : Cảm xúc thay đổi thất thường, thường xuyên suy nghĩ tiêu cực về bản thân, mất động lực sống, chán ghét bản thân, ít bạn bè, ít mối quan hệ ...
                
                ### Quá trình công tác
                
                -   Phụ trách khoa Sức khỏe tâm thần, Bệnh viện Lão khoa (11/2021 - Nay)
                -   Giảng viên - Giáo vụ Đại học Bộ môn Tâm thần, Đại học Y Hà Nội (09/2016 - Nay)
                -   Phó khoa Sức khỏe tâm thần, Bệnh viện Lão khoa (02/2021 - 10/2021)
                -   Bác sĩ điều trị khoa Sức khỏe tâm thần, Bệnh viện Lão khoa (07/2017 - 02/2021)
                -   Bác sĩ điều trị Viện Sức Khoẻ Tâm thần, Bệnh viện Bạch Mai (03/2015 - 07/2017)
                -   Giảng viên Đại học Bộ môn Tâm thần, Đại học Y Hà Nội (03/2015 - 09/2016)
                
                ### Quá trình đào tạo
                
                -   Bác sĩ Chuyên khoa cấp II chuyên ngành Tâm thần, Đại học Y Hà Nội (2019 - 2021)
                -   Thạc sĩ chuyên ngành Tâm thần, Đại học Y Hà Nội (2020 - 2021)
                -   Bác sĩ Nội trú chuyên ngành Tâm thần, Đại học Y Hà Nội (2011 - 2014)
                -   Bác sĩ Đa khoa, Đại học Y Hà Nội (2006 - 2011)
                
                ### Chứng chỉ trong nước hoặc nước ngoài
                
                -   Chứng chỉ đào tạo lâm sàng tâm thần học , Đại học Sydney (2019)
                -   Chứng chỉ đào tạo leadership, Indonesia, Tổ chức Y tế Thế giới (2018)
                
                ### Giải thưởng
                
                -   Bằng khen của Bộ trưởng Bộ Y tế
                -   Giấy khen Giám đốc Bệnh viện Bạch Mai
                -   Giấy khen Giám đốc Bệnh viện Lão khoa
                -   Bằng khen Hiệu trưởng Trường Đại Học Y Hà Nội dành cho Bác sĩ Nội trú tốt nghiệp Thủ khoa toàn khóa
                -   Bằng khen của Thủ tướng Chính phủ dành cho thành viên đội tuyển tham dự Olympic Sinh Quốc tế
                -   Và nhiều học bổng trong và ngoài nước
                
                ### Sách và các công trình nghiên cứu, báo cáo khoa học
                
                -   Biên soạn 2 sách giáo khoa về Tâm thần học, 1 sách chẩn đoán và điều trị Covid-19
                -   Dịch giả nhiều đầu sách chuyên ngành.
                -   Đồng Chủ nhiệm 1 đề tài cấp bộ. Tham gia 1 đề tài cấp nhà nước và 2 đề tài cấp bộ
                -   Đồng tác giả 1 bài báo quốc tế và 4 báo cáo tại Hội nghị Quốc tế tổ chức bởi hội tâm Tâm thần học thế giới
                -   Hơn 10 đề tài nghiên cứu khoa học và 20 bài báo khoa học đã được xuất bản.
                
                ### Thành viên các Hội khoa học, tổ chức chuyên môn
                
                -   Hội Tâm thần học Việt Nam
                -   Hội Lão khoa Việt Nam
                
                ### Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình
                
                -   Tham dự nhiều chương trình tư vấn sức khỏe tâm thần trên VTV và VTC
                -   Cố vấn chuyên môn tổ chức Beautiful Mind Việt Nam
                
                Khám & điều trị các bệnh
                ------------------------
                
                Bác sĩ có thế mạnh về tư vấn và trị liệu tâm lý, cũng như điều trị và tư vấn một số rối loạn tâm thần như:
                
                -   Rối loạn giấc ngủ
                -   Rối loạn lo âu
                -   Rối loạn liên quan stress
                -   Trầm cảm
                -   Sử dụng chất (ma túy)
                -   Sa sút trí tuệ
                -   Hưng cảm
                -   Tâm thần phân liệt`,
                active: true
            },
            {
                id: '0051',
                name: 'Bùi Văn Khánh',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '11',
                clinicAddress: `**Phòng khám Tâm Phúc**        
                Phòng 401, Tầng 4, Tòa nhà An Bình, số 3 đường Trần Nguyên Đán, khu đô thị mới Định Công, quận Hoàng Mai, Hà Nội.`,
                email: 'khanhbv0051@gmail.com',
                username: 'khanhbv0051',
                image: await toBase64('51ths-bui-van-khanh.jpg'),
                describe: `Hiện đang công tác tại khoa Dị ứng miễn dịch, Bệnh viện Bạch Mai        
                Tham gia tư vấn các bệnh lý Dị ứng miễn dịch trên Báo sức khỏe đời sống, VN Express, Báo người lao động...`,
                price: `-    Giá khám chưa bao gồm chi phí xét nghiệm: 250.000đ

                Phòng khám có hình thức thanh toán chi phí bằng tiền mặt`,
                content: `Tiến sĩ, Bác sĩ Bùi Văn Khánh
                -----------------------------
                
                -   Đạt giải thưởng hội dị ứng châu Âu (2016)
                -   Là hội viên hội dị ứng miễn dịch châu Âu
                -   Tham gia tư vấn các bệnh lý dị ứng miễn dịch trên báo sức khỏe đời sống, VN Express, báo người lao động....
                
                ### Quá trình đào tạo
                
                -   Đang làm nghiên cứu sinh tại trường Đại học y Hà Nội từ năm 2015
                -   Tốt nghiệp thạc sĩ y khoa trường Đại học y Hà Nội (2015)
                -   Thực tập sinh tại Hàn quốc (2011)
                -   Tốt nghiệp trường Đại học Y Hà Nội (2006)
                
                ### Chứng chỉ trong nước, ngoài nước
                
                -   Chứng chỉ hen và dị ứng của Hội hô hấp hen phế quản châu Âu
                -   Chứng chỉ bệnh vảy nến của Hội da liễu châu Á Thái Bình Dương
                -   Chứng chỉ mề đay mãn tính của Hội dị ứng châu Âu
                
                ### Quá trình công tác
                
                -   Làm việc tại khoa dị ứng miễn dịch Bệnh viện Bạch Mai từ năm 2011
                -   Là Bí thư đoàn thanh niên của khoa dị ứng miễn dịch Bệnh viện Bạch Mai
                
                ### Giải thưởng
                
                -   Đạt giải thưởng hội dị ứng châu Âu(2016)
                
                ### Sách và các công trình nghiên cứu khoa học
                
                -   Biên soạn cuốn:'' Hiểu biết mới về số bệnh dị ứng và miễn dịch"
                -   Tham gia báo cáo về dị ứng thuốc giảm đau chống viêm không steroid tại Viên, Áo tại Hội nghị dị ứng miễn dịch châu Âu (2016)
                -   Báo cáo về hen phế quản nhạy cảm với Aspirin tại Barcelona, Tây Ban Nha (2015)
                -   Báo cáo về hiệu quả điều trị mày đay mãn tính bằng chế phẩm sinh học tại Áo (2016)
                -   Tiếp cận chẩn đoán và điều trị dị ứng Aspirin tại Hội nghị Tim mạch quốc gia (2016)
                -   Tiếp cận và điều trị mày đay mãn tính tại Hội dị ứng miễn dịch thành phố Hồ CHí Minh (2017)
                -   Báo cáo:"Lợi ích và nguy cơ Glucocorticoids trong điều trị sốc phản vệ" (2014)
                
                ### Thành viên các Hội khoa học, tổ chức chuyên môn
                
                -   Hội viên Hội dị ứng miễn dịch châu Âu
                -   Hội viên Hội dị ứng miễn dịch của Mỹ
                -   Hội viên Hội suy giảm miễn dịch của châu Âu
                
                ### Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình
                
                -   Báo VN Express: "Tư vấn về tình trạng dị ứng"
                -   Báo Sức khỏe & Đời sống: "Coi chừng dị ứng mỹ phẩm"
                
                Khám và điều trị
                ----------------
                
                **Bệnh dị ứng **
                
                -   Bệnh dị ứng thuốc
                -   Bệnh dị ứng thức ăn
                -   Bệnh dị ứng mỹ phẩm
                -   Bệnh dị ứng vắc xin
                -   Bệnh dị ứng do côn trùng đốt
                -   Bệnh mày đay, phù mạch
                -   Bệnh viêm da dị ứng
                -   Bệnh viêm mũi dị ứng
                -   Bệnh viêm xoang dị ứng
                
                **Bệnh hen phế quản**
                
                -   Bệnh hen phế quản
                -   Bệnh hen phế quản trẻ em
                -   Bệnh hen phế quản người già
                -   Bệnh hen phế quản nghề nghiệp
                -   Bệnh hen phế quản thai kỳ  
                
                **Bệnh miễn dịch**
                
                -   Bệnh lupus ban đỏ
                -   Bệnh xơ cứng bì
                -   Bệnh mô liên kết hỗn hợp
                -   Bệnh viêm da cơ, viêm đa cơ
                -   Bệnh viêm mạch
                -   Bệnh viêm gan, thận, phổi, tim tự miễn
                -   Bệnh rối loại miễn dịch
                -   Các bệnh tự miễn khác
                
                **Điều trị giải mẫn cảm đặc hiệu với dị nguyên dị ứng**`,
                active: true
            },
            {
                id: '0052',
                name: 'Đỗ Trương Thanh Lan',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '11',
                clinicAddress: `**Phòng khám Vietlife MRI Trần Bình Trọng**        
                14 Trần Bình Trọng - Hoàn Kiếm - Hà Nội`,
                email: 'landtt0052@gmail.com',
                username: 'landtt0052',
                image: await toBase64('52bs-lan.jpg'),
                describe: `Từng công tác tại Bệnh viện Bạch Mai        
                Giảng viên Bộ môn Dị ứng, Đại học Y Hà Nội        
                Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Dị ứng - Miễn dịch        
                Nhận khám từ 15 tuổi trở lên`,
                price: `-    Giá khám chưa bao gồm chi phí xét nghiệm: 250.000đ

                Phòng khám có hình thức thanh toán chi phí bằng tiền mặt`,
                content: `Bác sĩ chuyên khoa II Đỗ Trương Thanh Lan
                -----------------------------------------
                
                -   Từng công tác tại Bệnh viện Bạch Mai
                -   Giảng viên Bộ môn Dị ứng, Đại học Y Hà Nội
                -   Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Dị ứng - Miễn dịch
                -   Nhận khám từ 15 tuổi trở lên
                
                ### Quá trình công tác
                
                -   Hiện là Bác sĩ tại Phòng khám Đa khoa Vietlife
                -   Nguyên Phó trưởng Bộ môn và Giảng viên chính Bộ môn Dị ứng, Đại học Y Hà Nội (1982 - 2013)
                -   Bác sĩ chuyên khoa II, Trung tâm Dị ứng - Miễn dịch lâm sàng, Bệnh viện Bạch Mai (1982 - 2013)
                
                ### Quá trình đào tạo
                
                -   Tốt nghiệp Bác sĩ chuyên khoa II, chuyên ngành Dị ứng - Miễn dịch lâm sàng, Đại học Y Hà Nội (1997)
                -   Tốt nghiệp Bác sĩ chuyên khoa I, chuyên ngành Dị ứng - Miễn dịch lâm sàng, Đại học Y Hà Nội (1994)
                -   Tốt nghiệp Bác sĩ đa khoa, Đại học Y khoa Oderxa (Liên Xô cũ) (1982)
                
                Khám và điều trị
                ----------------
                
                -   Các bệnh dị ứng do thuốc, thức ăn, hóa chất, mỹ phẩm,...
                -   Mày đay, viêm da tiếp xúc, viêm da chàm hóa, phù Quincke, hồng ban nút, hồng ban nhiễm sắc cố định,...
                -   Hen phế quản, Bệnh phổi tắc nghẽn mạn tính (COPD),viêm mũi dị ứng
                -   Bệnh tự miễn, Lupus ban đỏ hệ thống, xơ cứng bì, viêm da cơ,...`,
                active: true
            },
            {
                id: '0053',
                name: 'Lê Hồng Anh',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '12',
                clinicAddress: `**Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn**        
                476B Nguyễn Tri Phương, Phường 9, Quận 10, Hồ Chí Minh`,
                email: 'anhlh0053@gmail.com',
                username: 'anhlh0053',
                image: await toBase64('53bs-hong-anh.jpg'),
                describe: `Hơn 20 năm kinh nghiệm trong lĩnh vực Phổi và Lao        
                Từng công tác nhiều năm tại Bệnh viện Phạm Ngọc Thạch        
                Bác sĩ nhận bệnh nhân từ 13 tuổi trở lên`,
                price: `-    Giá tái khám: 250.000 VNĐ ( bệnh nhân phải có mặt)
                -   Giá tư vấn tái khám: 200.000 VNĐ (người nhà bệnh nhân đến báo lại tình trạng của bệnh nhân và lấy thuốc)
                -   Chụp X-quang/1 tấmTheo chỉ định của bác sĩ: 250.000đ
                -   Đo chức năng hô hấpTheo chỉ định của bác sĩ: 500.000đ`,
                content: `Bác sĩ Chuyên khoa II Lê Hồng Anh
                ---------------------------------
                
                -   Hơn 20 năm kinh nghiệm trong lĩnh vực Phổi và Lao
                -   Từng công tác nhiều năm tại Bệnh viện Phạm Ngọc Thạch
                -   Giám đốc chuyên môn tại Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn
                -   Bác sĩ nhận bệnh nhân từ 13 tuổi trở lên
                
                ### Quá trình công tác
                
                -   Giám đốc chuyên môn Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn (2016 - nay)
                -   Bác sĩ điều trị, Bệnh viện Phạm Ngọc Thạch (2001 - 2016)
                
                ### Quá trình đào tạo
                
                -   Tốt nghiệp Bác sĩ Chuyên khoa II chuyên ngành bệnh Phổi và Lao, Đại học Y dược TP.HCM (2014)
                -   Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành bệnh Phổi và Lao, Đại học Y dược TP.HCM (2007)
                -   Tốt nghiệp Bác sĩ Đa khoa Tổng quát, Đại học Y dược TP.HCM (1996)
                
                ### Thành viên các Hội khoa học, tổ chức chuyên môn
                
                -   Hội Phổi Việt Nam
                -   Hội Hô Hấp TP.HCM
                -   Hội Hô Hấp Việt Nam
                -   Hội Hen - Dị ứng - Miễn dịch Lâm sàng TP.HCM
                
                ### Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình...
                
                -   HTV9
                -   HTV7
                -   Báo Thanh Niên
                
                Khám và điều trị
                ----------------
                
                -   Lao
                -   Lao kháng thuốc
                -   Hen
                -   COPD
                -   Ung Thư
                -   Các bệnh Phổi nghề nghiệp
                -   Các bệnh hô hấp`,
                active: true
            },
            {
                id: '0054',
                name: 'Dương Anh Phượng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '12',
                clinicAddress: `**Bệnh viện Quốc tế City**        
                3 Đường Số 17A, Bình Trị Đông B, Bình Tân, Thành phố Hồ Chí Minh`,
                email: 'phuongda0054@gmail.com',
                username: 'phuongda0054',
                image: await toBase64('54drduonganhphuong270x356.jpg'),
                describe: `Bác sĩ Chuyên khoa II Dương Anh Phượng        
                Hơn 20 năm kinh nghiệm trong lĩnh vực Nội tổng quát - Hô hấp        
                Nguyên Phó Trưởng khoa Hô Hấp - Phó Trưởng khoa Hồi Sức Tích Cực, Bệnh viện Nhân Dân Gia Định        
                Bác sĩ nhận khám bệnh nhân từ 16 tuổi trở lên`,
                price: `-    Giá tái khám: 250.000 VNĐ ( bệnh nhân phải có mặt)
                -   Giá tư vấn tái khám: 200.000 VNĐ (người nhà bệnh nhân đến báo lại tình trạng của bệnh nhân và lấy thuốc)
                -   Chụp X-quang/1 tấmTheo chỉ định của bác sĩ: 250.000đ
                -   Đo chức năng hô hấpTheo chỉ định của bác sĩ: 500.000đ`,
                content: `Bác sĩ Chuyên khoa II Dương Anh Phượng
                --------------------------------------
                
                -   Hơn 20 năm kinh nghiệm trong lĩnh vực Nội tổng quát - Hô hấp
                -   Nguyên Phó Trưởng khoa Hô Hấp - Phó Trưởng khoa Hồi Sức Tích Cực, Bệnh viện Nhân Dân Gia Định
                -   Bác sĩ nhận khám bệnh nhân từ 16 tuổi trở lên
                
                ### Quá trình công tác
                
                -   Bác sĩ điều trị Khoa Nội, Bệnh viện Quốc tế City (2015 - nay)
                -   Phó Trưởng khoa Hô Hấp, Bệnh viện Nhân Dân Gia Định (2008 - 2015)
                -   Phó Trưởng khoa Hồi Sức Tích Cực, Bệnh viện Nhân Dân Gia Định (2006 - 2008)
                -   Bác sĩ Khoa Hồi Sức Tích Cực, Bệnh viện Nhân Dân Gia Định (2002 - 2006)
                
                ### Quá trình đào tạo
                
                -   Tốt nghiệp BSCKII chuyên ngành Nội Hô Hấp, Đại học Y Dược TP.HCM (2015)
                -   Tốt nghiệp BSCKII chuyên ngành Nội Hô Hấp, Đại học Y Dược TP.HCM (2008)
                -   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Dược TP.HCM (2000)
                -   Chứng chỉ Soi phế quản, Bệnh viện Chợ Rẫy (2010)
                -   Chứng chỉ Quản lý hen và COPD trong cộng đồng, Đại học Y Dược TP.HCM (2009)
                
                Khám và điều trị
                ----------------
                
                Khám & Kiểm tra sức khỏe tổng quát (tại khoa EHS bệnh viện Quốc tế City)
                
                Chẩn đoán & Điều trị các bệnh lý nội hô hấp:
                
                -   Lao
                -   Lao kháng thuốc
                -   Hen
                -   COPD
                -   Ung Thư
                -   Các bệnh Phổi nghề nghiệp
                -   Các bệnh hô hấp`,
                active: true
            },
            {
                id: '0055',
                name: 'Nguyễn Thị Diệu Hồng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '12',
                clinicAddress: `**Phòng khám Đa khoa Mediplus**        
                Tầng 2, Trung tâm thương mại Mandarin Garden 2, 99 phố Tân Mai, Tân Mai, Hoàng Mai, Hà Nội`,
                email: 'hongntd0055@gmail.com',
                username: 'hongntd0055',
                image: await toBase64('54drduonganhphuong270x356.jpg'),
                describe: `Hiện là bác sĩ điều trị tại Trung tâm Hô hấp, Bệnh viện Bạch Mai        
                Chủ tịch Công đoàn Trung tâm Hô hấp, Bệnh viện Bạch Mai        
                Gần 30 năm kinh nghiệm trong khám và điều trị bệnh lý Hô hấp        
                Bác sĩ được đào tạo chuyên sâu về Hô hấp nhiều năm tại Cộng hòa Pháp        
                Bác sĩ nhận khám độ tuổi từ 10 tuổi trở lên`,
                price: `-    Giá tái khám: 250.000 VNĐ ( bệnh nhân phải có mặt)
                -   Giá tư vấn tái khám: 200.000 VNĐ (người nhà bệnh nhân đến báo lại tình trạng của bệnh nhân và lấy thuốc)
                -   Chụp X-quang/1 tấmTheo chỉ định của bác sĩ: 250.000đ
                -   Đo chức năng hô hấpTheo chỉ định của bác sĩ: 500.000đ`,
                content: `Thạc sĩ, Bác sĩ Nguyễn Thị Diệu Hồng
                ------------------------------------
                
                -   Hiện là bác sĩ điều trị tại Trung tâm Hô hấp, Bệnh viện Bạch Mai
                -   Chủ tịch Công đoàn Trung tâm Hô hấp, Bệnh viện Bạch Mai
                -   Gần 30 năm kinh nghiệm trong khám và điều trị bệnh lý Hô hấp
                -   Bác sĩ được đào tạo chuyên sâu về Hô hấp nhiều năm tại Cộng hòa Pháp
                
                ### Quá trình công tác
                
                -   Hiện là Bác sĩ Nội Hô hấp, Phòng khám Đa khoa Mediplus
                -   Chủ tịch Công đoàn Trung tâm Hô hấp, Bệnh viện Bạch Mai (2017 - nay)
                -   Bác sĩ điều trị tại Trung tâm Hô hấp, Bệnh viện Bạch Mai (2010 - nay)
                -   Trợ giảng Chuyên khoa Chuyên sâu Hô hấp tại Viện trường Nancy, Cộng hòa Pháp (2009 - 2010)
                -   Bác sĩ điều trị tại Trung tâm Hô hấp, Bệnh viện Bạch Mai (1994 -2004)
                
                ### Quá trình đào tạo
                
                -   Hội nghị hội Hô hấp Châu Âu tại Madrid Tây Ban Nha (2019)
                -   Hội nghị hội Hô hấp Châu Âu tại Paris, Cộng hòa Pháp (2018)
                -   Hoàn thành khóa thực tập nội soi phế quản ống mềm có can thiệp trong chẩn đoán bệnh tại Viện NCJM Nhật Bản (2017)
                -   Khóa học Phục hồi chức năng hô hấp tại Bệnh viện Bạch Mai do Hội phổi Pháp Việt đào tạo (2015)
                -   Khóa học Thăm dò chức năng tại Khoa Thăm dò chức năng, Bệnh viện Brabois, Cộng hòa Pháp (2011)
                -   Học Chuyên khoa Chuyên sâu ngành Hô hấp tại Viện trường Nancy, Cộng hòa Pháp (2009 - 2010)
                -   Tốt nghiệp Thạc sĩ, Đại học Y Hà Nội (2008)
                -   Tham gia khóa học Nội soi phế quản và Nội soi lồng ngực tại Bệnh viện Bạch Mai do Hội phổi Pháp Việt đào tạo (2006)
                -   Bác sĩ nội trú FFI tại Viện trường Nancy, Cộng hòa Pháp (2004-2005)
                -   Học chuyên khoa sơ bộ Đông Y tại Viện Y học Cổ truyền Trung ương (1993-1994)
                -   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội (1993)
                
                Khám và điều trị
                ----------------
                
                -   Bệnh phổi tắc nghẽn mạn tính:
                    -   Tình trạng ho mãn tính, kéo dài: ho có đờm, đờm có màu trắng, màu vàng xám, màu xanh lá cây thậm chí đôi khi có thể thấy đờm kèm máu
                    -   Bị nhiễm trùng đường hô hấp và tái đi tái lại tình trạng cúm, cảm lạnh. Khó thở, thở gấp sức, thở gấp
                    -   Ngực có cảm giác thắt chặt, đau
                    -   Thở khò khè, mệt mỏi kéo dài
                    -   Sốt nhẹ và có cảm giác ớn lạnh.
                -   Hen phế quản:
                    -   Khó thở nhiều khi thở ra, phải ngồi dậy để thở.
                    -   Có thể nghe thấy tiếng thở rít hay khò khè, ho, khạc đờm kèm theo.
                    -   Đôi khi thấy hình ảnh lồng ngực biến dạng.
                -   Khám và chẩn đoán ung thư phổi:
                    -   Ho kéo dài, đau ngực
                    -   Có cảm giác khó thở, thở ngắn, có đờm lẫn máu.
                    -   Cơ thể bị gầy sút, mệt mỏi, khàn giọng, khó nuốt, thở khò khè, đau xương
                    -   Tràn dịch màng phổi
                -   Viêm phổi
                    -   Đau ngực khi bạn thở hoặc ho.
                    -   Ho có đờm hoặc chất nhầy
                    -   Mệt mỏi và chán ăn
                    -   Sốt, vã mồ hôi và ớn lạnh.
                    -   Buồn nôn, nôn và tiêu chảy
                    -   Hụt hơi
                -   Khám và chẩn đoán lao phổi
                    -   Ho kéo dài, sút cân
                    -   Cơ thể có biểu hiện mệt mỏi, giảm cân và mất cảm giác thèm ăn
                    -   Người bệnh bị đau ngực thậm chí là khó thở
                    -   Bị ra mồ hôi vào ban đêm và có biểu hiện sốt nhẹ về chiều.
                -   Hội chứng ngừng thở khi ngủ
                    -   Ngủ ngáy, buồn ngủ ban ngày, mệt mỏi, cáu gắt
                    -   Biến chứng gây rối loạn chuyển hóa....
                -   Chẩn đoán ho kéo dài Ho kéo dài do nhiều nguyên nhân ....`,
                active: true
            },
            {
                id: '0056',
                name: 'Đồng Khắc Hưng',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '12',
                clinicAddress: `**Bệnh viện Quốc tế DoLife**        
                108 Đường Nguyễn Hoàng, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Thành phố Hà Nội.`,
                email: 'hungdk0056@gmail.com',
                username: 'hungdk0056',
                image: await toBase64('56pgs-hung1.jpg'),
                describe: `Nhiều năm kinh nghiệm về lĩnh vực Hô hấp - Phổi        
                Nguyên Phó Giám đốc Bệnh viện Quân y 103        
                Nguyên Phó Giám đốc Học viện Quân y`,
                price: `-    Giá tái khám: 250.000 VNĐ ( bệnh nhân phải có mặt)
                -   Giá tư vấn tái khám: 200.000 VNĐ (người nhà bệnh nhân đến báo lại tình trạng của bệnh nhân và lấy thuốc)
                -   Chụp X-quang/1 tấmTheo chỉ định của bác sĩ: 250.000đ
                -   Đo chức năng hô hấpTheo chỉ định của bác sĩ: 500.000đ`,
                content: `Phó Giáo sư, Tiến sĩ, Bác sĩ Đồng Khắc Hưng
                -------------------------------------------
                
                -   Nhiều năm kinh nghiệm về lĩnh vực Hô hấp - Phổi
                -   Nguyên Phó Giám đốc Bệnh viện Quân y 103
                -   Nguyên Phó Giám đốc Học viện Quân y
                
                Khám và điều trị
                ----------------
                
                -   Ho, khó thở, đau ngực, ho ra máu không rõ nguyên nhân
                -   Chẩn đoán điều trị bệnh phổi tắc nghẽn mạn tính, hen phế quản, viêm phổi, tràn dịch màng phổi, bệnh phổi kẽ
                -   Chẩn đoán ung thư sớm
                -   Điều trị tế bào gốc đối với các bệnh phổi mạn tính
                
                ### Quá trình công tác
                
                -   Bác sĩ tại Bệnh viện Quốc tế DoLife (Nay)
                -   Nguyên Phó Giám đốc Học viện Quân y
                -   Nguyên Phó Giám đốc Bệnh viện Quân y 103` ,
                active: true
            },
            {
                id: '0057',
                name: 'Phạm Thị Bích Loan',
                phoneNumber: randomPhoneNumber(),
                specialtyID: '12',
                clinicAddress: `**Phòng khám Bệnh viện Đại học Y Dược 1**        
                20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM`,
                email: 'loanptb0057@gmail.com',
                username: 'loanptb0057',
                image: await toBase64('57bs-pham-thi-bich-loan.jpg'),
                describe: `Gần 30 năm kinh nghiệm lĩnh vực Hô hấp        
                Hiện đang công tác tại Phòng khám Bệnh viện Đại học Y Dược I        
                Từng công tác tại Bệnh viện An Bình`,
                content: `Bác sĩ Chuyên khoa II Phạm Thị Bích Loan
                ----------------------------------------
                
                -   Gần 30 năm kinh nghiệm lĩnh vực Hô hấp
                -   Hiện đang công tác tại Phòng khám Bệnh viện Đại học Y Dược I
                -   Từng công tác tại Bệnh viện An Bình
                
                Khám và điều trị
                ----------------
                
                -   Bệnh phổi tắc nghẽn mạn tính:
                    -   Tình trạng ho mãn tính, kéo dài: ho có đờm, đờm có màu trắng, màu vàng xám, màu xanh lá cây thậm chí đôi khi có thể thấy đờm kèm máu
                    -   Bị nhiễm trùng đường hô hấp và tái đi tái lại tình trạng cúm, cảm lạnh. Khó thở, thở gấp sức, thở gấp
                    -   Ngực có cảm giác thắt chặt, đau
                    -   Thở khò khè, mệt mỏi kéo dài
                    -   Sốt nhẹ và có cảm giác ớn lạnh
                -   Hen phế quản:
                    -   Khó thở nhiều khi thở ra, phải ngồi dậy để thở
                    -   Có thể nghe thấy tiếng thở rít hay khò khè, ho, khạc đờm kèm theo.
                    -   Đôi khi thấy hình ảnh lồng ngực biến dạng
                -   Khám và chẩn đoán ung thư phổi:
                    -   Ho kéo dài, đau ngực
                    -   Có cảm giác khó thở, thở ngắn, có đờm lẫn máu
                    -   Cơ thể bị gầy sút, mệt mỏi, khàn giọng, khó nuốt, thở khò khè, đau xương
                    -   Tràn dịch màng phổi
                -   Viêm phổi
                    -   Đau ngực khi bạn thở hoặc ho
                    -   Ho có đờm hoặc chất nhầy
                    -   Mệt mỏi và chán ăn
                    -   Sốt, vã mồ hôi và ớn lạnh.
                    -   Buồn nôn, nôn và tiêu chảy
                    -   Hụt hơi
                -   Khám và chẩn đoán lao phổi
                    -   Ho kéo dài, sút cân 
                    -   Cơ thể có biểu hiện mệt mỏi, giảm cân và mất cảm giác thèm ăn
                    -   Người bệnh bị đau ngực thậm chí là khó thở
                    -   Bị ra mồ hôi vào ban đêm và có biểu hiện sốt nhẹ về chiều
                -   Hội chứng ngừng thở khi ngủ
                    -   Ngủ ngáy, buồn ngủ ban ngày, mệt mỏi, cáu gắt
                    -   Biến chứng gây rối loạn chuyển hóa...
                -   Chẩn đoán ho kéo dài do nhiều nguyên nhân...
                
                ### Quá trình công tác
                
                -   Bác sĩ Nội tổng quát -- Hô hấp Phòng khám Bệnh viện Đại học Y Dược 1 (2019 - Nay)
                -   Công tác tại Bệnh viện An Bình (1994 - 2019)
                
                ### Quá trình đào tạo
                
                -   Học Chuyên khoa II Khoa Lao -- Bệnh phổi trường Đại học Y Dược TP. Hồ Chí Minh (2012 - 2014)
                -   Học Chuyên khoa I Khoa Lao -- Bệnh phổi trường Đại học Y Dược TP. Hồ Chí Minh ( 2005 - 2007)
                -   Học và tốt nghiệp Bác sĩ trường Đại học Y Dược TP. Hồ Chí Minh (1986 - 1992)
                
                ### Thành viên các Hội khoa học, tổ chức chuyên môn
                
                -   Hội Hô hấp Việt Nam
                -   Hội Hô hấp TP. Hồ Chí Minh`,
                active: true
            },
            // {
            //     name: ,
            //     phoneNumber: randomPhoneNumber(),
            //     specialtyID: ,
            //     clinicAddress: ,
            //     email: '@gmail.com',
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
            //     email: '@gmail.com',
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
            //     email: '@gmail.com',
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
            //     email: '@gmail.com',
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
            //     email: '@gmail.com' ,
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
