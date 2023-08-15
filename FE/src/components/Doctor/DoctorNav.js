import "../../styles/Doctor/DoctorNav.scss"

import { NavLink, useNavigate } from "react-router-dom"

import { Button } from "react-bootstrap"

import { connect } from "react-redux"
import { useState } from "react"
const DoctorNav = (props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        props.handleClose()
        window.scrollTo(0, 0)
    }
    const handleChangePw = () => {
        props.handleClose()
        props.handleShowChangePw(true)
    }
    const handleLogout = () => {
        props.setUser({})
        props.handleClose()
        navigate('/')
    }
    return (
        <div className="h-100">
            <div className="doctor-nav-list h-50">
                <div className="doctor-nav-home" onClick={() => handleClick("/")}>
                    <NavLink to="/doctor/" >Trang chủ</NavLink>
                </div>
                <div className="doctor-nav-staffs" onClick={() => handleClick("/specialties")}>
                    <NavLink to="/doctor/appointments">Kiểm tra lịch hẹn</NavLink>
                </div>
            </div >

            <div className="doctor-nav-button d-flex h-50 align-items-end">
                <div className="w-100">
                    <Button onClick={() => handleChangePw()} className="w-100 " variant="light">Đổi mật khẩu</Button>
                    <Button onClick={() => handleLogout()} className="w-100 mt-1" variant="outline-danger">Đăng xuất</Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        route: state.route,
        user: state.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute: (route) => dispatch({ type: 'SET_ROUTE', payload: route }),
        setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorNav)