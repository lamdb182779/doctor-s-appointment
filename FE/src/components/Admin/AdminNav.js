import "../../styles/Admin/AdminNav.scss"

import { NavLink } from "react-router-dom"

import { Button } from "react-bootstrap"

import useFetch from "../../custom/fetch"
import useUser from "../../custom/user"

import { useEffect, useState } from "react"
import useUtil from "../../custom/utils"

const AdminNav = (props) => {
    const { clearUser } = useUser()
    const [isLogout, setIsLogout] = useState(false)
    const { loading } = useFetch(isLogout ? "http://localhost:8080/api/deletetoken" : "")
    const { handleNavigate, handleLink } = useUtil()
    const handleChangePw = () => {
        props.handleClose()
        props.handleShowChangePw(true)
    }
    const handleLogout = () => {
        setIsLogout(true)
    }
    useEffect(() => {
        if (loading === false && isLogout === true) {
            clearUser()
            handleNavigate("/")
            props.handleClose()
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="h-100">
            <div className="admin-nav-list h-50">
                <div className="admin-nav-home mb-1 rounded" >
                    <NavLink onClick={event => handleLink(event)} className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" end to="/admin">Trang chủ</NavLink>
                </div>
                <div className="admin-nav-staffs mb-1 rounded" >
                    <NavLink onClick={event => handleLink(event)} className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" to="/admin/staff" >Quản lý nhân viên</NavLink>
                </div>
                <div className="admin-nav-doctors mb-1 rounded" >
                    <NavLink onClick={event => handleLink(event)} className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" to="/admin/doctor" >Quản lý bác sĩ</NavLink>
                </div>
            </div >

            <div className="admin-nav-button d-flex h-50 align-items-end">
                <div className="w-100">
                    <Button onClick={() => handleChangePw()} className="w-100 " variant="light">Đổi mật khẩu</Button>
                    <Button onClick={() => handleLogout()} className="w-100 mt-1" variant="outline-danger">Đăng xuất</Button>
                </div>
            </div>
        </div>
    )
}

export default AdminNav