import { useNavigate, NavLink } from "react-router-dom"

import "../../styles/App/LoginNav.scss"

import { Button } from "react-bootstrap"
import useUtil from "../../custom/utils"
const LoginNav = (props) => {
    const { handleNavigate, handleLink } = useUtil()
    return (
        <div className="login-nav-list fs-6 py-3">
            <div className="nav-home mb-1 rounded">
                <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/login">Đăng nhập</NavLink>
            </div>
            <div className="nav-specialties mb-1 rounded">
                <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/forgetpassword">Quên mật khẩu</NavLink>
            </div>
            <div className="nav-doctors mb-1 rounded">
                <NavLink onClick={event => handleLink(event)} className="text-decoration-none d-flex align-items-center ps-2 h-100 w-100 rounded" to="/register">Đăng ký</NavLink>
            </div>

            <Button className="w-100 mt-5" onClick={() => handleNavigate("/")} size="sm">Trang chủ</Button>
        </div>
    )
}

export default LoginNav