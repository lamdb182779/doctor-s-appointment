import { Image, Button } from "react-bootstrap"

import "../../styles/Notfound/Notfound.scss"

import notfound from "../../assets/images/notfound.png"

import { useNavigate } from "react-router-dom"

const Notfound = (props) => {
    const navigate = useNavigate()

    return (
        <div className="notfound-container">
            <div className="notfound-image">
                <Image src={notfound} alt='notfound' width="300" height="300" />
            </div>
            <div className="notfound-text">
                <b>Điều bạn cần tìm có lẽ không ở quanh đây</b>
                <p>Lỗi này xảy ra khi bạn tìm một điều gì đó không ở trong hệ thống</p>
                <p>Có thể điều đó chỉ tạm thời không có, hoặc đã bị loại bỏ</p>
            </div>
            <div className="notfound-button">
                <Button variant="primary" onClick={() => navigate('/')}>Trở về trang chủ</Button><br />
                <Button variant="outline-link" >Tìm hiểu thêm</Button>
            </div>
        </div>
    )
}

export default Notfound