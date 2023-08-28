import "../../styles/Staff/StaffNav.scss"

import { NavLink, useNavigate } from "react-router-dom"

import { Button } from "react-bootstrap"

import { connect } from "react-redux"

import { useEffect, useState } from "react"

import useFetch from "../../custom/fetch"
const StaffNav = (props) => {
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
            <div className="staff-nav-list h-50">
                <div className="staff-nav-home mb-1 rounded" onClick={() => handleClick()}>
                    <NavLink className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" end to="/staff" >Trang chủ</NavLink>
                </div>
                <div className="staff-nav-staffs mb-1 rounded" onClick={() => handleClick()}>
                    <NavLink className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" to="/staff/appointments">Quản lý lịch hẹn</NavLink>
                </div>
            </div >

            <div className="staff-nav-button d-flex h-50 align-items-end">
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

export default connect(mapStateToProps, mapDispatchToProps)(StaffNav)