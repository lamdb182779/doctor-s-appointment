import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap"
import "../../styles/Admin/AdminHeader.scss"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserDoctor,
    faUserPen,
} from "@fortawesome/free-solid-svg-icons"
import {
    faCircleUser,
} from "@fortawesome/free-regular-svg-icons"
import useUtil from "../../custom/utils"
import { useRef } from "react"

const AdminHeader = (props) => {
    const { handleLink } = useUtil()
    const adminRef = useRef(null)
    const staffRef = useRef(null)
    const doctorRef = useRef(null)
    const renderHomeTooltip = (props) => {
        return (
            <Tooltip id="home-tooltip" {...props}>
                Trang chủ
            </Tooltip>
        )
    }
    const renderDoctorTooltip = (props) => {
        return (
            <Tooltip id="doctor-tooltip" {...props}>
                Quản lý bác sĩ
            </Tooltip>
        )
    }
    const renderStaffTooltip = (props) => {
        return (
            <Tooltip id="staff-tooltip" {...props}>
                Quản lý nhân viên
            </Tooltip>
        )
    }
    return (
        <Row className="w-100 h-100 admin-header-container">
            <OverlayTrigger
                placement="bottom"
                overlay={renderHomeTooltip}>
                <Col xs={4} className="admin-header-home d-flex align-items-center justify-content-center">
                    <NavLink ref={adminRef} onClick={event => handleLink(event, adminRef.current)} end to="/admin" className="w-100 h-100 text-secondary text-decoration-none p-2">
                        <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon size="lg" icon={faCircleUser} />
                        </div>
                    </NavLink>
                </Col>
            </OverlayTrigger>
            <OverlayTrigger
                placement="bottom"
                overlay={renderStaffTooltip}>
                <Col xs={4} className="admin-header-staff d-flex align-items-center justify-content-center">
                    <NavLink ref={staffRef} onClick={event => handleLink(event, staffRef.current)} to="/admin/staff" className="w-100 h-100 text-secondary text-decoration-none p-2">
                        <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faUserPen} />
                        </div>
                    </NavLink>
                </Col>
            </OverlayTrigger>
            <OverlayTrigger
                placement="bottom"
                overlay={renderDoctorTooltip}>
                <Col xs={4} className="admin-header-doctor d-flex align-items-center justify-content-center">
                    <NavLink ref={doctorRef} onClick={event => handleLink(event, doctorRef.current)} to="/admin/doctor" className="w-100 h-100 text-secondary text-decoration-none p-2">
                        <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faUserDoctor} />
                        </div>
                    </NavLink>
                </Col>
            </OverlayTrigger>
        </Row>
    )
}

export default AdminHeader