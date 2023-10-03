import "./../../styles/App/Header.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleQuestion,
    faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons"

import { Button, Image, Row, Col, OverlayTrigger, Popover } from "react-bootstrap"

import { useSelector } from "react-redux"

import AdminHeader from "../Admin/AdminHeader"
import DoctorHeader from "../Doctor/DoctorHeader"
import StaffHeader from "../Staff/StaffHeader"
import useGet from "../../custom/get"
import { useState, useEffect, useRef } from "react"
import useUser from "../../custom/user"
import useUtil from "../../custom/utils"
import { NavLink } from "react-router-dom"

const Header = (props) => {

    const toLetter = (name) => {
        const nameArray = name.split(" ")
        if (nameArray.length > 1) {
            return nameArray[0].charAt(0).toUpperCase() + nameArray[nameArray.length - 1].charAt(0).toUpperCase()
        }
        return nameArray[0].charAt(0).toUpperCase()
    }
    const user = useSelector(state => state.user)
    const [show, setShow] = useState(false)
    const avatarRef = useRef(null)
    const logoRef = useRef(null)
    const { clearUser } = useUser()
    const { handleNavigate, handleLink } = useUtil()
    const renderNav = () => {
        switch (user.table) {
            case "Admins":
                return <AdminHeader />
            case "Doctors":
                return <DoctorHeader />
            case "Staffs":
                return <StaffHeader />
            default:
                return <></>
        }
    }
    const [logout, setLogout] = useState(0)
    useGet(logout === 0 ? "" : `deletetoken?${logout}`)

    const handleLogout = () => {
        setLogout(logout + 1)
        setTimeout(() => {
            clearUser()
        }, 100)
        handleNavigate("/login")
    }

    useEffect(() => {
        window.addEventListener("click", (event) => {
            if (!(avatarRef.current && avatarRef.current.contains(event.target))) {
                setShow(false)
            }
        })
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const renderAccount = (props) => (
        <Popover className="shadow" id="avatar-popover" {...props}>
            <Popover.Body className="p-3">
                <div className="shadow rounded-1 p-2">
                    <Row className="m-1">
                        <Col className="p-0 d-flex justify-content-center">
                            <div className="App-user fs-6">
                                {user.image ?
                                    <Image className="w-100 h-100" src={user.image} alt={user.name} roundedCircle />
                                    :
                                    <div className="w-100 h-100 text-center text-white rounded-circle bg-secondary p-2">{toLetter(user.name)}</div>
                                }
                            </div>
                        </Col>
                        <Col xs={9} className="d-flex align-items-center">
                            <h6 className="m-0">{user.name}</h6>
                        </Col>
                    </Row>
                    <hr className="m-2" />
                    <Button className="w-100 text-start text-primary text-decoration-none" variant="link" size="sm">
                        <h6 className="m-0">Xem thông tin cá nhân</h6>
                    </Button>
                </div>
                <Button onClick={() => handleNavigate("/changepassword")} className="w-100 text-start text-dark text-decoration-none mt-2" variant="link" size="">
                    Đổi mật khẩu
                </Button>
                <Button onClick={() => handleLogout()} className="w-100 text-start text-danger text-decoration-none" variant="link" size="">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />&nbspĐăng xuất
                </Button>
            </Popover.Body>
        </Popover>
    )
    return (
        <>
            <Row className="d-flex justify-content-between w-100">
                <Col xs={4} className="d-flex align-items-center">
                    <Row className="App-home d-flex align-items-center h-100 w-100">
                        <Col xs={1} />
                        <Col xs={5} className="App-logo h-50">
                            <NavLink ref={logoRef} onClick={event => handleLink(event, logoRef.current)} to="/"><Image className="h-100 w-auto" src={props.logo} alt="logo" fluid /></NavLink>
                        </Col>
                    </Row>
                </Col>
                <Col xs={4}>
                    {renderNav()}
                </Col>
                <Col xs={4} className="d-flex justify-content-end align-items-center">
                    <Row className="w-100 h-100 justify-content-end align-items-center">
                        <Col xs={4} className="d-flex justify-content-end">
                            {user?.table ?
                                <>
                                    <OverlayTrigger
                                        show={show}
                                        placement="bottom-end"
                                        overlay={renderAccount}>
                                        <div ref={avatarRef} onClick={() => setShow(!show)} className="App-user fs-6 text-secondary">
                                            {user.image ?
                                                <Image className="w-100 h-100" src={user.image} alt={user.name} roundedCircle />
                                                :
                                                <div className="w-100 h-100 text-center text-white rounded-circle bg-secondary p-2">{toLetter(user.name)}</div>
                                            }
                                        </div>
                                    </OverlayTrigger>
                                </>
                                :
                                <>
                                </>
                            }
                        </Col>
                        <Col className="" xs={1}>
                        </Col>
                    </Row>
                </Col >
            </Row>
        </>
    )
}

export default Header