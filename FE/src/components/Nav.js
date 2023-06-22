import "../styles/App/Nav.scss"

import { NavLink } from "react-router-dom"

import { Button, Form } from "react-bootstrap"
import { connect } from "react-redux"

const Nav = (props) => {
    const handleClick = (path) => {
        props.setRoute({
            preRoute: props.route,
            path: path,
            scrollY: props.loc,
        })
        window.scrollTo(0, 0)
        props.handleClose()
    }

    return (
        <div className="nav-list">
            <div className="nav-home" onClick={() => handleClick("/")}>
                <NavLink to="/">Trang chủ</NavLink>
            </div>
            <div className="nav-specialties" onClick={() => handleClick("/specialties")}>
                <NavLink to="/specialties">Chuyên khoa</NavLink>
            </div>
            <div className="nav-doctors" onClick={() => handleClick("/doctors")}>
                <NavLink to="/doctors">Bác sĩ</NavLink>
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

const mapStateToProps = (state) => {
    return ({
        route: state.route
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute: (route) => dispatch({ type: 'SET_ROUTE', payload: route }),
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav)