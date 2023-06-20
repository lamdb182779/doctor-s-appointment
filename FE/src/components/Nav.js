import "../styles/App/Nav.scss"

import { NavLink } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav-list">
            <div className="nav-home" onClick={() => props.handleClose()}>
                <NavLink to="/" exact>Trang chủ</NavLink>
            </div>
            <div className="nav-specialties" onClick={() => props.handleClose()}>
                <NavLink to="/specialties">Chuyên khoa nổi bật</NavLink>
            </div>
            <div className="nav-doctors" onClick={() => props.handleClose()}>
                <NavLink to="/doctors">Bác sĩ nổi bật</NavLink>
            </div>
        </div>
    )
}

export default Nav