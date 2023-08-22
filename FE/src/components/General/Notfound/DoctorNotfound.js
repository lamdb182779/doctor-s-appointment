import "../../../styles/General/Notfound/DoctorNotfound.scss"

import notfound from "../../../assets/images/doctor-notfound.png"

import { Image, Button } from "react-bootstrap"

import { useNavigate } from "react-router-dom"

const DoctorNotfound = (props) => {
    const navigate = useNavigate()

    return (
        <div className="doctor-notfound-container">
            <div className="doctor-notfound-image">
                <Image src={notfound} alt="notfound" width="600" height="290" />
            </div>
            <div className="doctor-notfound-text">
                <b>Bác sĩ có vẻ không ở quanh đây</b>
                <p>Lỗi này có thể xảy ra khi bác sĩ không có trong hệ thống</p>
                <p>Có lẽ bác sĩ đã rời đi mất rồi </p>
            </div>
            <div className="doctor-notfound-button">
                <Button variant="primary" onClick={() => navigate('/')}>Trở về trang chủ</Button><br />
                <Button variant="outline-link" >Tìm hiểu thêm</Button>
            </div>
        </div>
    )
}

export default DoctorNotfound