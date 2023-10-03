import "../../../styles/Guest/Doctors/Clinic.scss"
import { Row, Col } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLocationDot,
    faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons"

import ReactMarkdown from "react-markdown"

const Clinic = (props) => {
    const doctor = props.doctor
    return (
        <>
            <Row className="px-3">
                <Col xs={6} className="main-element p-5 m-1">
                    <h6>
                        <FontAwesomeIcon icon={faLocationDot} size="sm" />
                        &nbsp;ĐỊA CHỈ KHÁM
                    </h6>
                    <ReactMarkdown>{doctor.clinicAddress}</ReactMarkdown>
                    <h6>
                        <FontAwesomeIcon icon={faMoneyBillWave} size="sm" />
                        &nbsp;GIÁ KHÁM
                    </h6>
                    <ReactMarkdown>{doctor.price}</ReactMarkdown>
                </Col>
                <Col className="main-element p-5 m-1"></Col>
            </Row>
        </>
    )
}

export default Clinic