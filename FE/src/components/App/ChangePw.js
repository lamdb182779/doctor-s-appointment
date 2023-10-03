import "../../styles/App/ChangePw.scss"

import { Col, Form, Row, FloatingLabel, Button } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLock,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons"

import { useEffect, useState } from "react"
import usePost from "../../custom/post"

import { toast } from "react-toastify"
import { NavLink } from "react-router-dom"
import useUtil from "../../custom/utils"

const ChangePw = (props) => {
    const { handleNavigate } = useUtil()
    const [index, setIndex] = useState(-1)
    const [oldpw, setOldPw] = useState("")
    const [showOld, setShowOld] = useState(false)
    const [newpw, setNewPw] = useState("")
    const [showNew, setShowNew] = useState(false)
    const [repw, setRePw] = useState("")
    const [showRe, setShowRe] = useState(false)
    const [input, setInput] = useState({})

    const { message } = usePost("/self/changepw", input)
    const handleChange = () => {
        if (oldpw === "" || newpw === "" || repw === "" || oldpw === newpw || newpw !== repw) {
            toast.warning(oldpw === "" || newpw === "" || repw === "" ? "Có thông tin cần thiết bị bỏ trống"
                : oldpw === newpw ? "Mật khẩu mới phải khác mật khẩu hiện tại" :
                    newpw !== repw ? "Hãy nhập lại đúng mật khẩu mới" : "Có lỗi xảy ra")
        } else {
            setInput({
                oldpw: oldpw,
                newpw: newpw
            })
        }
    }

    useEffect(() => {
        if (message === "ok") {
            toast.success("Đổi mật khẩu thành công")
            handleNavigate("/")
        }
    }, [message])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const inputs = document.querySelectorAll("input")
        const hiddens = document.querySelectorAll(".pw-hidden")
        const handleClick = () => {
            inputs.forEach((element, idx) => {
                if (element === document.activeElement) {
                    if (index !== idx) {
                        setIndex(idx)
                        hiddens.forEach((element, index) => {
                            if (index === idx) {
                                element.classList.remove("hide")
                            } else {
                                element.classList.add("hide")
                            }
                        })
                    }
                }
            })
        }
        window.addEventListener("click", handleClick)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="changepw-container">
            <Row className="d-flex justify-content-center">
                <Col xs={7} className="main-element fs-6">
                    <Row>
                        <Col xs={5} className="image-account-theme" />
                        <Col>
                            <Row className="d-flex align-items-center h-100">
                                <Col className="p-5 d-grid gap-3" xs={12}>
                                    <Row className="">
                                        <div className="d-flex justify-content-center">
                                            <div className="mb-2 p-3 rounded-circle text-white bg-danger d-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon size="lg" icon={faLock} />
                                            </div>
                                        </div>
                                        <h4 >Đổi mật khẩu</h4>
                                    </Row>
                                    <Row className="fs-6">
                                        <Col className="p-0">
                                            <FloatingLabel controlId="oldpw" label="Mật khẩu cũ">
                                                <Form.Control
                                                    placeholder=""
                                                    type={showOld === true ? "text" : "password"}
                                                    value={oldpw}
                                                    onChange={event => setOldPw(event.target.value)} />
                                            </FloatingLabel>
                                        </Col>
                                        <Col xs={1} className="d-flex align-items-center p-0">
                                            <div onClick={() => setShowOld(!showOld)} className="text-center pw-hidden w-100 mt-4 hide">
                                                {showOld === false ?
                                                    <>
                                                        <FontAwesomeIcon icon={faEye} />
                                                    </>
                                                    :
                                                    <>
                                                        <FontAwesomeIcon icon={faEyeSlash} />
                                                    </>
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="fs-6">
                                        <Col className="p-0">
                                            <FloatingLabel controlId="newpw" label="Mật khẩu mới">
                                                <Form.Control
                                                    placeholder=""
                                                    type={showNew === true ? "text" : "password"}
                                                    value={newpw}
                                                    onChange={event => setNewPw(event.target.value)} />
                                            </FloatingLabel>
                                        </Col>
                                        <Col xs={1} className="d-flex align-items-center p-0">
                                            <div onClick={() => setShowNew(!showNew)} className="text-center mt-4 pw-hidden w-100 hide">
                                                {showNew === false ?
                                                    <>
                                                        <FontAwesomeIcon icon={faEye} />
                                                    </>
                                                    :
                                                    <>
                                                        <FontAwesomeIcon icon={faEyeSlash} />
                                                    </>
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="p-0">
                                            <FloatingLabel controlId="repw" label="Nhập lại mật khẩu mới">
                                                <Form.Control
                                                    placeholder=""
                                                    type={showRe === true ? "text" : "password"}
                                                    value={repw}
                                                    onChange={event => setRePw(event.target.value)} />
                                            </FloatingLabel>
                                        </Col>
                                        <Col xs={1} className="d-flex align-items-center p-0">
                                            <div onClick={() => setShowRe(!showRe)} className="text-center mt-4 pw-hidden w-100 hide">
                                                {showRe === false ?
                                                    <>
                                                        <FontAwesomeIcon icon={faEye} />
                                                    </>
                                                    :
                                                    <>
                                                        <FontAwesomeIcon icon={faEyeSlash} />
                                                    </>
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-start p-0 d-flex align-items-center">
                                            <NavLink to="/forgetpassword">Quên mật khẩu</NavLink>
                                        </Col>
                                        <div className="p-0 mt-2">
                                            <Button className="w-100" onClick={() => handleChange()}>Đổi mật khẩu</Button>
                                        </div>
                                    </Row>
                                    <span className="text-secondary">
                                        Copyright © <a href="/" className="text-secondary">Doctor Booking</a> 2023.
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </div >
    )
}

export default ChangePw
