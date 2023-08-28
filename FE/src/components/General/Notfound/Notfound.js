import { Image, Button, Row, Col } from "react-bootstrap"

import "../../../styles/General/Notfound/Notfound.scss"

import notfound from "../../../assets/images/notfound.png"

import { useNavigate } from "react-router-dom"

import { connect } from "react-redux"

const Notfound = (props) => {
    const navigate = useNavigate()
    const handleHome = () => {
        if (Object.keys(props.user).length === 0) {
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
        <div className="notfound-container d-grid gap-4">
            <Row className="notfound-image d-flex justify-content-center mt-5">
                <Image className="h-auto w-25" src={notfound} alt='notfound' />
            </Row>
            <Row className="notfound-text fs-6 d-flex justify-content-center">
                <b className="fs-5">Điều bạn cần tìm có lẽ không ở quanh đây</b>
                Lỗi này xảy ra khi bạn tìm một điều gì đó không ở trong hệ thống<br />
                Có thể điều đó chỉ tạm thời không có, hoặc đã bị loại bỏ
            </Row>
            <Row className="notfound-button">
                <Col>
                    <Button variant="primary" onClick={() => handleHome()}>Trở về trang chủ</Button><br />
                    <Button variant="outline-link" onClick={() => navigate(-1)}>Quay về trang trước</Button>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default connect(mapStateToProps)(Notfound)