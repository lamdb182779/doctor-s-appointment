import { Col, Row, Image } from "react-bootstrap"
import "../../../styles/Guest/Home/Introduce.scss"

import appointment from "../../../assets/images/appointment.png"
import takecare from "../../../assets/images/take-care.png"
import specialties from "../../../assets/images/specialties.png"
import nowinfor from "../../../assets/images/now-infor.png"
import contact from "../../../assets/images/contact.png"
import online from "../../../assets/images/online.png"
import coop from "../../../assets/images/cooperation.png"
import { useRef, useEffect } from "react"
import useUtil from "../../../custom/utils"

const Introduce = (props) => {
    const { handleNavigate } = useUtil()
    const slideRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const slide = slideRef.current

        const handleScroll = (event) => {
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)))
            const scrollSlideSpeed = slideRef.current.offsetHeight * delta
            const scrollTextSpeed = textRef.current.offsetWidth * delta

            slide.scrollBy({
                top: -scrollSlideSpeed,
            })
            textRef.current.scrollBy({
                left: -scrollTextSpeed,
            })
            event.preventDefault()
        }

        slide.addEventListener('mousewheel', handleScroll)
        slide.addEventListener('DOMMouseScroll', handleScroll)
    }, [slideRef])// eslint-disable-line react-hooks/exhaustive-deps

    const handleScroll = () => {
        const mySlide = slideRef.current
        const slides = mySlide.querySelectorAll("[id^='slide']")

        const myText = textRef.current
        const texts = myText.querySelectorAll("[id^='text']")

        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i]
            const text = texts[i]
            const rect = slide.getBoundingClientRect()
            const divRect = mySlide.getBoundingClientRect()

            if (rect.top >= divRect.top && rect.bottom <= divRect.bottom) {
                slide.classList.add("show")
                text.classList.add("show")

            } else {
                slide.classList.remove("show")
                text.classList.remove("show")
            }
        }
    }
    return (
        <div className="introduce-container p-5" >
            <Row>
                <p className="fs-5">Đến với <b className="text-warning">Doctor Booking</b></p>
                <Col xs={8} >
                    <div className="slider-container p-5" ref={slideRef} onScroll={handleScroll}>
                        <div id="slide1" className="slide pulse">
                            <Image
                                className="h-100 w-auto"
                                src={appointment}
                                alt="First slide"
                            />
                        </div>
                        <div id="slide2" className="slide pulse">
                            <Image
                                className="h-100 w-auto"
                                src={takecare}
                                alt="Second slide"
                            />
                        </div>
                        <div id="slide3" className="slide pulse">
                            <Image
                                className="h-100 w-auto"
                                src={specialties}
                                alt="Third slide"
                            />
                        </div>
                        <div id="slide4" className="slide pulse">
                            <Image
                                className="h-100 w-auto"
                                src={nowinfor}
                                alt="Forth slide"
                            />
                        </div>
                        <div id="slide5" className="slide pulse">
                            <Image
                                className="h-100 w-auto"
                                src={online}
                                alt="Fifth slide"
                            />
                        </div>
                        <div id="slide6" className="slide pulse">
                            <Image
                                className="h-100 w-auto"
                                src={coop}
                                alt="Sixth slide"
                            />
                        </div>
                        <div id="slide7" className="slide pulse">
                            <Image
                                className="h-100 w-auto"
                                src={contact}
                                alt="Seventh slide"
                            />
                        </div>
                    </div>
                </Col>
                <Col className="fs-6 p-0 d-flex align-items-center" xs={4}>
                    <div className="text-container p-3" ref={textRef}>
                        <div id="text1" className="text fade">
                            <div>
                                <div>
                                    <p>Đặt lịch khám bệnh nhanh chóng, tiện lợi.</p>
                                    <p>Thao tác cực kỳ đơn giản.</p>
                                    <p>Chọn bác sĩ phù hợp và hẹn trước.</p>
                                    <p style={{ cursor: "pointer" }} onClick={() => handleNavigate("/doctors")}>Đặt lịch ngay &gt&gt&gt</p>
                                </div>
                            </div>
                        </div>
                        <div id="text2" className="text fade">
                            <div>
                                <div>
                                    <p>Cung cấp cho bạn nhiều tiện ích với sự chăm sóc tận tình.</p>
                                    <p>Tìm kiếm nhanh chóng, dễ dàng.</p>
                                    <p>Tìm hiểu, thay đổi thông tin đơn giản.</p>
                                </div>
                            </div>
                        </div>
                        <div id="text3" className="text fade">
                            <div>
                                <div>
                                    <p>Quy tụ rất nhiều bác sĩ hàng đầu.</p>
                                    <p>Cung cấp tất cả chuyên khoa khác nhau.</p>
                                    <p style={{ cursor: "pointer" }} onClick={() => handleNavigate("/specialties")}>Tìm hiểu ngay các chuyên khoa &gt&gt&gt</p>
                                </div>
                            </div>
                        </div>
                        <div id="text4" className="text fade">
                            <div>
                                <div>
                                    <p>Lịch hẹn liên tục cập nhật.</p>
                                    <p>Xác nhận, thay đổi lịch hẹn dễ dàng.</p>
                                    <p>Kết quả trả về hồ sơ hợp tác nhanh chóng.</p>
                                </div>
                            </div>
                        </div>
                        <div id="text5" className="text fade">
                            <div>
                                <div>
                                    <p>Hệ thống nhân viên đông đảo, nhiệt tình.</p>
                                    <p>Luôn luôn túc trực, giải đáp mọi thắc mắc.</p>
                                    <p>Thực hiện các yêu cầu, trợ giúp tận tình.</p>
                                </div>
                            </div>
                        </div>
                        <div id="text6" className="text fade">
                            <div>
                                <div>
                                    <p>Hợp tác rộng rãi với các bác sĩ toàn quốc.</p>
                                    <p>Cùng nhau tạo ra dịch vụ chất lượng.</p>
                                    <p>Hợp tác lâu dài, cùng phát triển mạnh mẽ.</p>
                                    <p>Liên hệ hợp tác tại email hoặc tại các trụ sở.</p>
                                </div>
                            </div>
                        </div>
                        <div id="text7" className="text fade">
                            <div>
                                <div>
                                    <p>Mọi thắc mắc có thể liên lạc nhanh chóng qua điện thoại hỗ trợ.</p>
                                    <p>Gửi hồ sơ hợp tác tại email hoặc theo địa chỉ trụ sở.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Introduce