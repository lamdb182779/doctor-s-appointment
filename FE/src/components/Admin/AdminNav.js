import "../../styles/Admin/AdminNav.scss"

import { NavLink, useNavigate } from "react-router-dom"

import { Button } from "react-bootstrap"

import { connect } from "react-redux"
const AdminNav = (props) => {
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
            <div className="admin-nav-list h-50">
                <div className="admin-nav-home" onClick={() => handleClick("/")}>
                    <NavLink to="/admin/" >Trang chủ</NavLink>
                </div>
                <div className="admin-nav-staffs" onClick={() => handleClick("/specialties")}>
                    <NavLink to="/admin/staff-list">Quản lý nhân viên</NavLink>
                </div>
                <div className="admin-nav-doctors" onClick={() => handleClick("/doctors")}>
                    <NavLink to="/admin/doctor-list">Quản lý bác sĩ</NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminNav)