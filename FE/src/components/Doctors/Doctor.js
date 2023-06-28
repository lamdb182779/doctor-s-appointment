import "../../styles/Doctors/Doctor.scss"
import { Image } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook,
    faPhone,
    faEnvelope,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'

const Doctor = (props) => {
    return (
        <div className="doctor-container">
            <div className="doctor-title">
                Bác sĩ {props.data.name}
            </div>
            <div className="doctor-content">
                <div className="doctor-image">
                    <Image src={props.data.image} alt={props.data.name} fluid />
                </div>
                <div className="doctor-description">
                    <div className="doctor-describe">
                        <FontAwesomeIcon icon={faBook} size="sm" />
                        <b>Mô tả</b><br />
                        <ReactMarkdown >{props.data.describe}</ReactMarkdown>
                    </div>
                    <div className="doctor-phone">
                        <FontAwesomeIcon icon={faPhone} size="sm" />
                        <b>Điện thoại</b><br />
                        {props.data.phoneNumber}
                    </div>
                    <div className="doctor-email">
                        <FontAwesomeIcon icon={faEnvelope} size="sm" />
                        <b>Email</b><br />
                        {props.data.email}
                    </div>
                    <div className="doctor-address">
                        <FontAwesomeIcon icon={faLocationDot} size="sm" />
                        <b>Địa chỉ</b><br />
                        <ReactMarkdown>{props.data.clinicAddress}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor