import "../../styles/App/Nav.scss"

import { NavLink, useNavigate } from "react-router-dom"

import { Button } from "react-bootstrap"
import { useState } from "react"
import useUtil from "../../custom/utils"

const Nav = (props) => {
    const { handleNavigate, handleLink } = useUtil()
    return (
        <div className="nav-list fs-6 py-3">
            <div className="nav-home mb-1 rounded">
                <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" end to="/">Trang chủ</NavLink>
            </div>
            <div className="nav-specialties mb-1 rounded">
                <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/specialties">Chuyên khoa</NavLink>
            </div>
            <div className="nav-doctors mb-1 rounded">
                <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/doctors">Bác sĩ</NavLink>
            </div>

            <Button className="w-100 mt-5" onClick={() => handleNavigate("/login")} size="sm">Đăng Nhập</Button>
        </div>
    )
}

export default Nav