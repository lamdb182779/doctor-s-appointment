import { Image, Button, Row, Col } from "react-bootstrap"

import "../../../styles/General/Notfound/Notfound.scss"

import notfound from "../../../assets/images/notfound.png"

import { useSelector } from "react-redux"
import useUtil from "../../../custom/utils"

const Notfound = (props) => {
    const user = useSelector(state => state.user)
    const { handleNavigate } = useUtil()
    const handleHome = () => {
        if (Object.keys(user).length === 0) {
            handleNavigate("/")
        } else {
            switch (user.table) {
                case "Admins":
                    handleNavigate("/admin")
                    break
                case "Doctors":
                    handleNavigate("/doctor")
                    break
                case "Staffs":
                    handleNavigate("/staff")
                    break
                default:
                    handleNavigate("/")
                    break
            }
        }
    }

    return (
        <div className="notfound-container d-grid gap-4">
            <Row className="notfound-image d-flex justify-content-center mt-5">
                <Image className="h-auto w-25" src={notfound} alt="notfound" />
            </Row>
            <Row className="notfound-text fs-6 d-flex justify-content-center">
                <b className="fs-5">Điều bạn cần tìm có lẽ không ở quanh đây</b>
                Lỗi này xảy ra khi bạn tìm một điều gì đó không ở trong hệ thống<br />
                Có thể điều đó chỉ tạm thời không có, hoặc đã bị loại bỏ
            </Row>
            <Row className="notfound-button">
                <Col>
                    <Button variant="primary" onClick={() => handleHome()}>Trở về trang chủ</Button><br />
                    <Button variant="outline-link" onClick={() => handleNavigate(-1)}>Quay về trang trước</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Notfound