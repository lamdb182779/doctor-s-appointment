import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap"
import "../../styles/Staff/StaffHeader.scss"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleUser,
    faCalendarDays,
} from "@fortawesome/free-regular-svg-icons"
import useUtil from "../../custom/utils"
import { useRef } from "react"

const StaffHeader = (props) => {
    const { handleLink } = useUtil()
    const staffRef = useRef(null)
    const appointmentRef = useRef(null)
    const renderHomeTooltip = (props) => {
        return (
            <Tooltip id="home-tooltip" {...props}>
                Trang chủ
            </Tooltip>
        )
    }
    const renderAppointmentTooltip = (props) => {
        return (
            <Tooltip id="appointment-tooltip" {...props}>
                Quản lý lịch hẹn
            </Tooltip>
        )
    }
    return (
        <Row className="w-100 h-100 staff-header-container d-flex justify-content-center">
            <OverlayTrigger
                placement="bottom"
                overlay={renderHomeTooltip}>
                <Col xs={4} className="staff-header-home d-flex align-items-center justify-content-center">
                    <NavLink ref={staffRef} onClick={event => handleLink(event, staffRef.current)} end to="/staff" className="w-100 h-100 text-secondary text-decoration-none p-2">
                        <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon size="lg" icon={faCircleUser} />
                        </div>
                    </NavLink>
                </Col>
            </OverlayTrigger>
            <OverlayTrigger
                placement="bottom"
                overlay={renderAppointmentTooltip}>
                <Col xs={4} className="staff-header-appointment d-flex align-items-center justify-content-center">
                    <NavLink ref={appointmentRef} onClick={event => handleLink(event, appointmentRef.current)} to="/staff/appointments" className="w-100 h-100 text-secondary text-decoration-none p-2">
                        <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon size="lg" icon={faCalendarDays} />
                        </div>
                    </NavLink>
                </Col>
            </OverlayTrigger>
            {/* <Col xs={4} className="staff-header-staff d-flex align-items-center justify-content-center">
                <NavLink onClick={event => handleLink(event)} to="/staff/staff-list" className="w-100 h-100 text-secondary text-decoration-none p-2">
                    <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon size="nm" icon={faUserDoctor} />
                    </div>
                </NavLink>
            </Col> */}
        </Row>
    )
}

export default StaffHeader