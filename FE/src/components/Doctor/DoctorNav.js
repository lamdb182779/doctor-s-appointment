import "../../styles/Doctor/DoctorNav.scss"

import { NavLink, useNavigate } from "react-router-dom"

import { Button } from "react-bootstrap"

import { useState, useEffect } from "react"

import useFetch from "../../custom/fetch"

import { connect } from "react-redux"
const DoctorNav = (props) => {
    const [isLogout, setIsLogout] = useState(false)
    const { loading } = useFetch(isLogout ? 'http://localhost:8080/api/deletetoken' : '')
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
        setIsLogout(true)
    }
    useEffect(() => {
        if (loading === false && isLogout === true) {
            props.setUser({})
            navigate('/')
            props.handleClose()
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="h-100">
            <div className="doctor-nav-list h-50">
                <div className="doctor-nav-home mb-1 rounded" onClick={() => handleClick("/")}>
                    <NavLink className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" end to="/doctor" >Trang chủ</NavLink>
                </div>
                <div className="doctor-nav-staffs mb-1 rounded" onClick={() => handleClick("/specialties")}>
                    <NavLink className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" to="/doctor/appointments">Kiểm tra lịch hẹn</NavLink>
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
        user: state.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorNav)