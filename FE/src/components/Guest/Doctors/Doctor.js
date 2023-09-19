import "../../../styles/Guest/Doctors/Doctor.scss"
import { Image, Row, Col, Button } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBook,
    faLocationDot,
    faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons"
import nullavatar from "../../../assets/images/nullavatardoctor.jpg"
import { useState, useRef } from "react"
import BookingNow from "./BookingNow"
import useUtil from "../../../custom/utils"

const Doctor = (props) => {
    const { handleNavigate } = useUtil()
    const doctor = props.doctor
    const [isHover, setIsHover] = useState(false)
    const doctorRef = useRef(null)
    const handleBooking = (event) => {
        event.stopPropagation()
        doctorRef.current.classList.add("flip")
    }
    const handleInfo = (event) => {
        doctorRef.current.classList.remove("flip")
    }
    const handleDoctor = (id) => {
        let path = `/doctors/${id}`
        handleNavigate(path)
    }
    return (
        <div ref={doctorRef} className="doctor-container fs-6 text-start"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <div className="front " onClick={() => handleDoctor(doctor.id)}>
                <Row>
                    <Col xs={isHover === false ? 4 : 2} className="text-center d-flex align-items-center">
                        <div>
                            <Image className="w-100 h-auto mb-3" src={doctor.image ? doctor.image : nullavatar} alt={doctor.name} roundedCircle />
                            <h6 className="w-100">{doctor.name}</h6>
                            {isHover !== false &&
                                <Button variant="outline-danger" onClick={event => handleBooking(event)}>
                                    Đặt lịch ngay
                                </Button>}
                        </div>
                    </Col>
                    <Col xs={isHover === false ? 8 : 5} className="d-flex align-items-center">
                        <div>
                            <h6>
                                <FontAwesomeIcon icon={faBook} />
                                &nbsp;MÔ TẢ
                            </h6>
                            <ReactMarkdown className="mb-4">
                                {doctor.describe}
                            </ReactMarkdown>
                            <h6>
                                <FontAwesomeIcon icon={faLocationDot} />
                                &nbsp;ĐỊA CHỈ
                            </h6>
                            <ReactMarkdown>
                                {doctor.clinicAddress}
                            </ReactMarkdown>
                        </div>
                    </Col>
                    <Col xs={5} className={`${isHover === false ? "d-none" : "d-flex align-items-center"}`}>
                        <div>
                            <h6>
                                <FontAwesomeIcon icon={faMoneyBillWave} />
                                &nbsp;GIÁ KHÁM
                            </h6>
                            <ReactMarkdown>
                                {doctor.price}
                            </ReactMarkdown>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="back ">
                <Row className="w-100">
                    <BookingNow doctor={doctor} handleInfo={handleInfo} />
                </Row>
            </div>
        </div>
    )
}

export default Doctor