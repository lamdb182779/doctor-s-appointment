import "../../../styles/General/Notfound/DoctorNotfound.scss"

import notfound from "../../../assets/images/doctor-notfound.png"

import { Image, Button, Row, Col } from "react-bootstrap"

import { useNavigate } from "react-router-dom"

const DoctorNotfound = (props) => {
    const navigate = useNavigate()

    return (
        <Col className="doctor-notfound-container d-grid gap-4">
            <Row className="doctor-notfound-image d-flex justify-content-center">
                <Image src={notfound} alt="notfound" className="w-50 h-auto" />
            </Row>
            <Row className="doctor-notfound-text text-center d-flex justify-content-center">
                <b className="fs-5">Bác sĩ có vẻ không ở quanh đây</b>
                Lỗi này có thể xảy ra khi bác sĩ không có trong hệ thống<br />
                Có lẽ bác sĩ đã rời đi mất rồi
            </Row>
            <Row className="doctor-notfound-button">
                <Row>
                    <Col className=" d-flex justify-content-center">
                        <Button variant="primary" onClick={() => navigate("/")}>Trở về trang chủ</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className=" d-flex justify-content-center">
                        <Button variant="outline-link" onClick={() => navigate(-1)}>Quay lại trang trước</Button>
                    </Col>
                </Row>
            </Row>
        </Col>
    )
}

export default DoctorNotfound