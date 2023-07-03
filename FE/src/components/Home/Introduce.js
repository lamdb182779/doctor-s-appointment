import "../../styles/Home/Introduce.scss"

import { Carousel } from 'react-bootstrap'

import appointment from '../../assets/images/appointment.jpg'
import takecare from '../../assets/images/take-care.jpg'
import specialties from '../../assets/images/specialties.jpg'
import nowinfor from '../../assets/images/now-infor.jpg'
import contact from '../../assets/images/contact.jpg'
import online from '../../assets/images/online.jpg'
import coop from '../../assets/images/cooperation.jpg'

const Introduce = (props) => {
    return (
        <div className='intro-container' >
            <div className="intro-title">
                <b>Về chúng tôi</b>
            </div>
            <div className="intro-content" >
                <div className="intro-carousel">
                    <Carousel activeIndex={props.index} onSelect={(e) => props.setIndex(e)} data-bs-theme="dark" onSlide={(e) => props.setIndex(e)}>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={appointment}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={takecare}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={specialties}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={nowinfor}
                                alt="Forth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={online}
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={coop}
                                alt="Sixth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={contact}
                                alt="Seventh slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="intro-about-us">
                    <Carousel activeIndex={props.index} controls={false} indicators={false}>
                        <Carousel.Item >
                            <p>Với Doctor Booking, việc thao tác cực kỳ đơn giản.</p>
                            <p>Đặt lịch khám bệnh nhanh chóng, tiện lợi với trang web của chúng tôi.</p>
                            <p>Mau chóng chọn bác sĩ phù hợp và hẹn trước.</p>
                            <p>Đặt lịch ngay &gt;&gt;&gt;</p>
                        </Carousel.Item>
                        <Carousel.Item >
                            <p>Doctor Booking cung cấp cho bạn nhiều tiện ích với sự chăm sóc tận tình.</p>
                            <p>Tìm kiếm cơ sở y tế, bác sĩ, triệu chứng và dịch vụ trên website.</p>
                            <p>Tìm hiểu thông tin, thay đổi thông tin dễ dàng.</p>
                            <p>Các thắc mắc xin liên lạc theo điện thoại hỗ trợ, email.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p>Quy tụ rất nhiều bác sĩ hàng đầu thuộc đầy đủ các chuyên khoa.</p>
                            <p>Cung cấp đầy đủ các chuyên khoa bệnh khác nhau.</p>
                            <p>Tìm hiểu ngay các chuyên khoa &gt;&gt;&gt;</p>
                        </Carousel.Item>
                        <Carousel.Item >
                            <p>Lịch hẹn liên tục cập nhật.</p>
                            <p>Xác nhận, thay đổi lịch hẹn dễ dàng, nhanh chóng.</p>
                            <p>Kết quả trả về hồ sơ hợp tác nhanh chóng trong vài ngày.</p>
                        </Carousel.Item>
                        <Carousel.Item >
                            <p>Hệ thống nhân viên đông đảo, nhiệt tình, vui vẻ.</p>
                            <p>Luôn luôn túc trực, giải đáp mọi thắc mắc.</p>
                            <p>Thực hiện các yêu cầu, trợ giúp tận tình.</p>
                        </Carousel.Item>
                        <Carousel.Item >
                            <p>Hệ thống đang mở rộng hợp tác với các bác sĩ toàn quốc.</p>
                            <p>Cùng nhau tạo ra dịch vụ chất lượng.</p>
                            <p>Hợp tác lâu dài, cùng phát triển mạnh mẽ.</p>
                            <p>Liên hệ hợp tác tại email hoặc tại các trụ sở của Doctor Booking.</p>
                        </Carousel.Item>
                        <Carousel.Item >
                            <p>Mọi thắc mắc có thể liên lạc nhanh chóng qua điện thoại hỗ trợ.</p>
                            <p>Gửi hồ sơ hợp tác tại email hoặc theo địa chỉ trụ sở.</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Introduce;