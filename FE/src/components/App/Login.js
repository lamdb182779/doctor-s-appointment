import { Form } from "react-bootstrap"

import "../../styles/App/Login.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUser,
    faLock,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons"

import { useEffect, useState } from "react"

import useFetch from "../../custom/fetch"

import { useNavigate } from "react-router-dom"

import useUser from "../../custom/user"
import { toast } from "react-toastify"

const Login = (props) => {
    const { setUser } = useUser()

    const login = props.login

    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [isBlankUsername, setIsBlankUsername] = useState(true)
    const [isBlankPassword, setIsBlankPassword] = useState(true)

    const [isValidUsername, setIsValidUsername] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        setIsBlankUsername(username === "" ? true : false)
        setIsBlankPassword(password === "" ? true : false)
        setIsValidUsername(login && username === "" ? false : true)
        setIsValidPassword(login && password === "" ? false : true)
    }, [login])// eslint-disable-line react-hooks/exhaustive-deps

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const { data, message, loading } = useFetch(login === 0
        || username === ""
        || password === ""
        ? ""
        : `http://localhost:8080/api/login/checklogin?${login}`,
        login === 0
            || username === ""
            || password === ""
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

    useEffect(() => {
        setIsValidUsername(message === "wrong username" ? false : true)
        setIsValidPassword(message === "wrong password" ? false : true)
        if (login !== 0 && loading === false) {
            if (data && data.length > 0) {
                toast.success("Đăng nhập thành công")
                setUser(data[0])
                switch (data[0].table) {
                    case "Admins":
                        navigate("/admin")
                        break
                    case "Doctors":
                        navigate("/doctor")
                        break
                    case "Staffs":
                        navigate("/staff")
                        break
                    default: break
                }
                window.scrollTo(0, 0)
                props.handleCloseLogin()
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
            <div className="login-title">
                Nhập tên tài khoản và mật khẩu
            </div>
            <div className="login-content">
                <Form onKeyDown={(event) => { if (event.key === "Enter") event.preventDefault() }}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>
                            <FontAwesomeIcon icon={faUser} size="sm" />
                            &nbsp;Tài khoản
                        </Form.Label>
                        <Form.Control
                            value={username}
                            type="search"
                            placeholder="Nhập tên tài khoản"
                            isInvalid={!isValidUsername}
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            &nbsp;{isBlankUsername ? "Vui lòng điền tên tài khoản" : ""}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>
                            <FontAwesomeIcon icon={faLock} size="sm" />
                            &nbsp;Mật khẩu
                        </Form.Label>
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Mật khẩu"
                            value={password}
                            isInvalid={!isValidPassword}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            &nbsp;{isBlankPassword ? "Vui lòng điền mật khẩu" : ""}
                        </Form.Control.Feedback>
                        <Form.Group onClick={() => handleShowPassword()} className="mt-1" controlId="formBasicCheckbox" style={{ cursor: "pointer" }} >
                            {showPassword === false ?
                                <>
                                    <FontAwesomeIcon icon={faEye} />
                                    &nbsp;Hiện mật khẩu
                                </>
                                :
                                <>
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                    &nbsp;Ẩn mật khẩu
                                </>
                            }
                        </Form.Group>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Login