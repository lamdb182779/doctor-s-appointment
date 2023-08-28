import { Col, Row } from "react-bootstrap"
import "../../styles/Doctor/DoctorHeader.scss"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//     // faUserDoctor,
//     faUserPen,
// } from "@fortawesome/free-solid-svg-icons"
import {
    faCircleUser,
    faCalendarDays,
} from "@fortawesome/free-regular-svg-icons"

const DoctorHeader = (props) => {
    return (
        <Row className="w-100 h-100 doctor-header-container d-flex justify-content-center">
            <Col xs={4} className="doctor-header-home d-flex align-items-center justify-content-center">
                <NavLink end to='/doctor' className="w-100 h-100 text-secondary text-decoration-none p-2">
                    <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon size="lg" icon={faCircleUser} />
                    </div>
                </NavLink>
            </Col>
            <Col xs={4} className="doctor-header-appointment d-flex align-items-center justify-content-center">
                <NavLink to='/doctor/appointments' className="w-100 h-100 text-secondary text-decoration-none p-2">
                    <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon size="lg" icon={faCalendarDays} />
                    </div>
                </NavLink>
            </Col>
            {/* <Col xs={4} className="doctor-header-staff d-flex align-items-center justify-content-center">
                <NavLink to='/doctor/doctor-list' className="w-100 h-100 text-secondary text-decoration-none p-2">
                    <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon size="nm" icon={faUserDoctor} />
                    </div>
                </NavLink>
            </Col> */}
        </Row>
    )
}

export default DoctorHeader