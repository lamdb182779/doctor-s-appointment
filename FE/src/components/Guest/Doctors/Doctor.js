import "../../../styles/Guest/Doctors/Doctor.scss"
import { Image, Row, Col } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBook,
    faPhone,
    faEnvelope,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import nullavatar from "../../../assets/images/nullavatardoctor.jpg"

const Doctor = (props) => {
    return (
        <div className="doctor-container bg-secondary m-3 rounded-5 px-5 py-3 fs-6 text-start">
            <div className="doctor-title  fw-bold">
                Bác sĩ {props.data.name}
            </div>
            <Row className="doctor-content">
                <Col xs={4} className="doctor-image align-self-center">
                    <Image className="h-auto w-50" src={props.data.image ? props.data.image : nullavatar} alt={props.data.name} rounded />
                </Col>
                <Col className="doctor-description">
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
                </Col>
            </Row>
        </div>
    )
}

export default Doctor