import { Col, Row } from "react-bootstrap"
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

const AdminHeader = (props) => {
    return (
        <Row className="w-100 h-100 admin-header-container">
            <Col xs={4} className="admin-header-home d-flex align-items-center justify-content-center">
                <NavLink end to='/admin' className="w-100 h-100 text-secondary text-decoration-none p-2">
                    <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon size="lg" icon={faCircleUser} />
                    </div>
                </NavLink>
            </Col>
            <Col xs={4} className="admin-header-staff d-flex align-items-center justify-content-center">
                <NavLink to='/admin/staff-list' className="w-100 h-100 text-secondary text-decoration-none p-2">
                    <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon size="nm" icon={faUserPen} />
                    </div>
                </NavLink>
            </Col>
            <Col xs={4} className="admin-header-doctor d-flex align-items-center justify-content-center">
                <NavLink to='/admin/doctor-list' className="w-100 h-100 text-secondary text-decoration-none p-2">
                    <div className="h-100 w-100 rounded-3 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon size="nm" icon={faUserDoctor} />
                    </div>
                </NavLink>
            </Col>
        </Row>
    )
}

export default AdminHeader