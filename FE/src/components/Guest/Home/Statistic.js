import useUtil from "../../../custom/utils"
import "../../../styles/Guest/Home/Statistic.scss"
import { Row, Col } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserDoctor,
    faHospital,
    faNotesMedical,
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons"

const Statistic = (props) => {
    const { handleNavigate } = useUtil()
    return (
        <div className="statistic-container">
            <Row>
                <h5 className="mb-5 text-white">Hệ thống đang ngày càng mở rộng</h5>
                <Col className="rounded-3 mx-5 p-3 shadow"
                    onClick={() => handleNavigate("/doctors")}>
                    <FontAwesomeIcon icon={faUserDoctor} size="2xl" /><br />
                    Bác sĩ hợp tác
                    <h2>85</h2>
                </Col>
                <Col className="rounded-3 mx-5 p-3 shadow">
                    <FontAwesomeIcon icon={faHospital} size="2xl" /><br />
                    Cơ sở y tế
                    <h2>85</h2>
                </Col>
                <Col className="rounded-3 mx-5 p-3 shadow" onClick={() => handleNavigate("/specialties")}>
                    <FontAwesomeIcon icon={faNotesMedical} size="2xl" /><br />
                    Chuyên khoa
                    <h2>19</h2>
                </Col>
                <Col className="rounded-3 mx-5 p-3 shadow">
                    <FontAwesomeIcon icon={faCalendarDays} size="2xl" /><br />
                    Lịch đặt trước
                    <h2>381</h2>
                </Col>
            </Row>
        </div>
    )
}

export default Statistic