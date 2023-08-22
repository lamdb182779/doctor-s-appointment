import "../../styles/App/Nav.scss"

import { NavLink, useNavigate } from "react-router-dom"

import { Button, Form } from "react-bootstrap"
import { useState } from "react"

const Nav = (props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        window.scrollTo(0, 0)
        props.handleClose()
    }

    const [search, setSearch] = useState('')

    return (
        <div className="nav-list ">
            <div className="nav-home mb-1 rounded" onClick={() => handleClick()}>
                <NavLink className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" to="/">Trang chủ</NavLink>
            </div>
            <div className="nav-specialties mb-1 rounded" onClick={() => handleClick()}>
                <NavLink className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" to="/specialties">Chuyên khoa</NavLink>
            </div>
            <div className="nav-doctors mb-1 rounded" onClick={() => handleClick()}>
                <NavLink className="text-decoration-none text-dark d-flex align-items-center ps-2 h-100 w-100 rounded" to="/doctors">Bác sĩ</NavLink>
            </div>
            <Form className="d-flex mt-5">
                <Form.Control
                    type="search"
                    placeholder="Nhập từ khóa"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <Button onClick={() => {
                    if (search.trim() !== '') {
                        handleClick(`/search?${search.trim()}`)
                        navigate(`/search?${search.trim()}`)
                    }
                }} variant="outline-success">Tìm</Button>
            </Form>
        </div>
    )
}

export default Nav