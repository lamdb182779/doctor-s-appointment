import "./../../styles/App/Header.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBars,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons"

import { Button, Image, Row, Col } from "react-bootstrap"

import { useSelector } from "react-redux"

import AdminHeader from "../Admin/AdminHeader"
import DoctorHeader from "../Doctor/DoctorHeader"
import StaffHeader from "../Staff/StaffHeader"

const Header = (props) => {
    const user = useSelector(state => state.user)
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
    return (
        <>
            <Row className="d-flex justify-content-between w-100">
                <Col xs={4} className="d-flex align-items-center">
                    <Row className="App-home d-flex align-items-center h-100 w-100">
                        <Col xs={1} />
                        <Col xs={1} className="d-flex justify-content-start p-0" onClick={() => props.handleShowCanvas()}>
                            <div className="App-bar p-2 d-flex justify-content-center align-items-center rounded-3">
                                <FontAwesomeIcon icon={faBars} size="lg" />
                            </div>
                        </Col>
                        <Col xs={5} className="App-logo h-50">
                            <a href="/"><Image className="h-100 w-auto" src={props.logo} alt="logo" fluid /></a>
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
                                    <div className="App-user fs-6 text-secondary h-100 d-flex justify-content-center align-items-center">
                                        Chào mừng,<br />
                                        {user.name}
                                    </div>
                                </>
                                :
                                <>
                                    <div className="App-login h-100 d-flex justify-content-center align-items-center" >
                                        <Button size="" className="w-100" variant="outline-secondary" onClick={() => props.handleShowLogin()}>
                                            Đăng nhập<br />
                                        </Button>
                                    </div>
                                </>
                            }
                        </Col>
                        <Col className="d-flex justify-content-start" xs={Object.keys(user).length === 0 ? 4 : 1}>
                            {user?.table ?
                                <></>
                                :
                                <>
                                    <div className="App-support d-flex align-items-center text-secondary fs-6">
                                        <div className="question-icon me-2">
                                            <FontAwesomeIcon icon={faCircleQuestion} size="lg" />
                                        </div>
                                        <div className="phone-number">
                                            Hỗ trợ <br />
                                            033xxxxx33
                                        </div>
                                    </div>
                                </>
                            }
                        </Col>
                    </Row>
                </Col >
            </Row>
        </>
    )
}

export default Header