import "../../styles/App/AdminNav.scss"

import { NavLink } from "react-router-dom"

import { OverlayTrigger, Popover } from "react-bootstrap"
import useUtil from "../../custom/utils"
import { useRef, useState, useEffect } from "react"

const AdminNav = (props) => {
    const { handleLink } = useUtil()
    const [staff, setStaff] = useState(false)
    const [doctor, setDoctor] = useState(false)
    const staffRef = useRef(null)
    const doctorRef = useRef(null)
    const renderStaff = (props) => {
        return (
            <Popover className="shadow" id="staff-popover" {...props} >
                <Popover.Body>
                    <div className="admin-nav-list fs-6 p-2 rounded-3 bg-light">
                        <div className="admin-nav-staff-list mb-2 rounded">
                            <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" end to="/admin/staff">Xem danh sách nhân viên</NavLink>
                        </div>
                        <div className="admin-nav-staff-add rounded">
                            <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/admin/staff/add">Thêm nhân viên mới</NavLink>
                        </div>
                    </div>
                </Popover.Body>
            </Popover>
        )
    }
    const renderDoctor = (props) => {
        return (
            <Popover className="shadow" id="doctor-popover" {...props} >
                <Popover.Body>
                    <div className="admin-nav-list fs-6 p-2 rounded-3 bg-light">
                        <div className="admin-nav-doctor-list mb-2 rounded">
                            <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" end to="/admin/doctor">Xem danh sách bác sĩ</NavLink>
                        </div>
                        <div className="admin-nav-doctor-add rounded">
                            <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/admin/doctor/add">Thêm bác sĩ mới</NavLink>
                        </div>
                    </div>
                </Popover.Body>
            </Popover>
        )
    }

    useEffect(() => {
        window.addEventListener("click", (event) => {
            if (!(staffRef.current && staffRef.current.contains(event.target))) {
                setStaff(false)
            }
            if (!(doctorRef.current && doctorRef.current.contains(event.target))) {
                setDoctor(false)
            }
        })
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="admin-nav-list fs-6 py-3">
            <div className="admin-nav-home mb-1 rounded">
                <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" end to="/admin">Trang chủ</NavLink>
            </div>
            <OverlayTrigger
                show={staff}
                placement="auto"
                overlay={renderStaff}>
                <div ref={staffRef} onClick={() => setStaff(!staff)} className="admin-nav-staff mb-1 rounded">
                    <NavLink onClick={event => event.preventDefault()} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/admin/staff">Quản lý nhân viên</NavLink>
                </div>
            </OverlayTrigger>
            <OverlayTrigger
                show={doctor}
                placement="auto"
                overlay={renderDoctor}>
                <div ref={doctorRef} onClick={() => setDoctor(!doctor)} className="admin-nav-doctor mb-1 rounded">
                    <NavLink onClick={event => event.preventDefault()} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/admin/doctor">Quản lý bác sĩ</NavLink>
                </div>
            </OverlayTrigger>
        </div>
    )
}

export default AdminNav