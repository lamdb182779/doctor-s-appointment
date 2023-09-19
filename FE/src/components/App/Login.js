import { Row, Col, FloatingLabel, Form, Button } from "react-bootstrap"

import "../../styles/App/Login.scss"

import LoginNav from "./LoginNav"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEye,
    faEyeSlash,
    faLock,
} from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../custom/fetch"
import { toast } from "react-toastify"
import useUser from "../../custom/user"
import useUtil from "../../custom/utils"

const Login = (props) => {
    const { handleNavigate } = useUtil()
    const { setUser } = useUser()

    const [count, setCount] = useState(0)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const validateInput = () => {
        if (username === "" && password === "") {
            toast.warning("Cần nhập đầy đủ tên đăng nhập và mật khẩu")
            return false
        }
        return true
    }

    const handleLogin = () => {
        if (validateInput) {
            setCount(count + 1)
        }
    }

    const { data, message, loading } = useFetch(count === 0
        ? ""
        : `http://localhost:8080/api/login/checklogin?${count}`,
        count === 0
            ? {} : {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })

    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if (loading === false && count !== 0) {
            if (data && data.length > 0) {
                toast.success("Đăng nhập thành công")
                setUser(data[0])
                switch (data[0].table) {
                    case "Admins":
                        handleNavigate("/admin")
                        break
                    case "Doctors":
                        handleNavigate("/doctor")
                        break
                    case "Staffs":
                        handleNavigate("/staff")
                        break
                    default: break
                }
            } else {
                toast.error(message === "server error!" ? "Lỗi Server"
                    : message === "wrong username" ? "Tài khoản không tồn tại, vui lòng kiểm tra lại"
                        : message === "wrong password" ? "Mật khẩu không khớp, vui lòng kiểm tra lại"
                            : "Có lỗi xảy ra")
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="login-container">
            <Row className="d-flex justify-content-center">
                <Col xs={2} className="p-0">
                    <div className="left-nav">
                        <div className="px-2 w-100 m-0">
                            <LoginNav />
                        </div>
                    </div>
                </Col>
                <Col xs={4} className="main-element fs-6">
                    <Row className="d-flex align-items-center h-100">
                        <Col className="p-5 d-grid gap-5" xs={12}>
                            <Row className="">
                                <div className="d-flex justify-content-center">
                                    <div className="mb-2 p-3 rounded-circle text-white bg-danger d-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon size="lg" icon={faLock} />
                                    </div>
                                </div>
                                <h4 >Đăng nhập</h4>
                                <Col className="p-0">
                                    <FloatingLabel controlId="username" label="Tên đăng nhập">
                                        <Form.Control
                                            placeholder=""
                                            type="text"
                                            value={username}
                                            onChange={event => setUsername(event.target.value)} />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="">
                                <Col xs={10} className="p-0">
                                    <FloatingLabel controlId="password" label="Mật khẩu">
                                        <Form.Control
                                            placeholder=""
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={event => setPassword(event.target.value)} />
                                    </FloatingLabel>
                                </Col>
                                <Col className="d-flex align-items-center py-2">
                                    <div onClick={() => setShowPassword(!showPassword)} className=" text-center mt-3 pw-hidden w-100">
                                        {showPassword === false ?
                                            <>
                                                <FontAwesomeIcon size="" icon={faEye} />
                                            </>
                                            :
                                            <>
                                                <FontAwesomeIcon size="" icon={faEyeSlash} />
                                            </>
                                        }
                                    </div>
                                </Col>
                                <Form.Check
                                    className="mt-3 text-start"
                                    label="Lưu đăng nhập"
                                    type="checkbox" />
                            </Row>
                            <Row>
                                <Button onClick={() => handleLogin()} className="mb-2">Đăng nhập</Button>
                                <Col className="text-start p-0">
                                    <a href="/forgetpassword">Quên mật khẩu</a>
                                </Col>
                                <Col className="text-end p-0">
                                    <a href="/register">Đăng ký ngay</a>
                                </Col>
                            </Row>
                            <span className="text-secondary">
                                Copyright © <a href="/" className="text-secondary">Doctor Booking</a> 2023.
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    )
}

export default Login