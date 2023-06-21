import "../styles/App/Nav.scss"

import { NavLink } from "react-router-dom"

import { Button, Form } from "react-bootstrap"

const Nav = (props) => {
    return (
        <div className="nav-list">
            <div className="nav-home" onClick={() => props.handleClose()}>
                <NavLink to={{
                    pathname: "/",
                    state: props.state,
                }} exact>Trang chủ</NavLink>
            </div>
            <div className="nav-specialties" onClick={() => props.handleClose()}>
                <NavLink to={{
                    pathname: "/specialties",
                    state: props.state,
                }}>Chuyên khoa</NavLink>
            </div>
            <div className="nav-doctors" onClick={() => props.handleClose()}>
                <NavLink to={{
                    pathname: "/doctors",
                    state: props.state,
                }}>Bác sĩ</NavLink>
            </div>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Nhập từ khóa"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Tìm</Button>
            </Form>
        </div>
    )
}

export default Nav