import "../../../styles/General/Notfound/NotPermission.scss"

import notpermission from "../../../assets/images/notpermission.png"

import { Image, Button, Row, Col } from "react-bootstrap"

import { useNavigate } from "react-router-dom"

import { useSelector } from "react-redux"
const NotPermission = (props) => {
    const navigate = useNavigate()

    const user = useSelector(state => state.user)
    const handleHome = () => {
        if (Object.keys(user).length === 0) {
            navigate("/")
        } else {
            switch (props.user.table) {
                case "Admins":
                    navigate("/admin")
                    break
                case "Doctors":
                    navigate("/doctor")
                    break
                case "Staffs":
                    navigate("/staff")
                    break
                default:
                    navigate("/")
                    break
            }
        }
    }
    return (
        <Col className="doctor-notfound-container d-grid gap-4 py-5">
            <Row className="doctor-notfound-image d-flex justify-content-center">
                <Image src={notpermission} alt="notfound" className="w-25 h-auto" />
            </Row>
            <Row className="doctor-notfound-text text-center d-flex justify-content-center fs-6">
                <b className="fs-5">Bạn không có quyền truy cập khu vực này</b>
                Hiện tại bạn chưa có quyền hạn truy cập tới đây<br />
                Cũng có thể phía trước đang gặp vấn đề, hãy báo cáo và quay lại sau
            </Row>
            <Row className="doctor-notfound-button">
                <Row>
                    <Col className=" d-flex justify-content-center">
                        <Button variant="primary" onClick={() => handleHome()}>Trở về trang chủ</Button>
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

export default NotPermission