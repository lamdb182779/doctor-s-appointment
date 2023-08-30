import "../../styles/App/ChangePw.scss"

import { Form } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLock,
    faEye,
    faEyeSlash,
    faLocationPinLock,
} from "@fortawesome/free-solid-svg-icons"

import { useEffect, useState } from "react"
import useFetch from "../../custom/fetch"

import { toast } from "react-toastify"

const ChangePw = (props) => {
    const change = props.change

    const [oldpw, setOldPw] = useState("")
    const [newpw, setNewPw] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [isBlankOldPw, setIsBlankOldPw] = useState(true)
    const [isBlankNewPw, setIsBlankNewPw] = useState(true)
    const [isDupPw, setIsDupPw] = useState(true)

    const [isValidOldPw, setIsValidOldPw] = useState(true)
    const [isValidNewPw, setIsValidNewPw] = useState(true)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        setIsBlankOldPw(oldpw === "" ? true : false)
        setIsBlankNewPw(newpw === "" ? true : false)
        setIsDupPw(oldpw === newpw ? true : false)

        setIsValidOldPw(change && oldpw === "" ? false : true)
        setIsValidNewPw(change && (newpw === "" || oldpw === newpw) ? false : true)
    }, [change])// eslint-disable-line react-hooks/exhaustive-deps

    const { message, loading } = useFetch(change === 0
        || oldpw === ""
        || newpw === ""
        || oldpw === newpw
        ? ""
        : `http://localhost:8080/api/self/changepw?${change}`,
        change === 0
            || oldpw === ""
            || newpw === ""
            || oldpw === newpw
            ? {} : {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    oldpw: oldpw,
                    newpw: newpw,
                })
            })

    useEffect(() => {
        setIsValidOldPw(message === "wrong password" ? false : true)
        if (change !== 0 && loading === false) {
            if (message === "ok") {
                toast.success("Đổi mật khẩu thành công!")
                props.handleCloseChangePw()
            } else {
                toast.error(message === "server error!" ? "Lỗi Server"
                    : message === "wrong verify" ? "Lỗi xác thực"
                        : message === "wrong password" ? "Sai mật khẩu hiện tại"
                            : "Có lỗi xảy ra")
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="changepw-container">
            <div className="changepw-title">
                Nhập mật khẩu hiện tại và mật khẩu mới
            </div>
            <div className="changepw-content">
                <Form>
                    <Form.Group className="mb-3" controlId="formOldPassword">
                        <Form.Label>
                            <FontAwesomeIcon icon={faLocationPinLock} size="sm" />
                            &nbsp;Mật khẩu hiện tại
                        </Form.Label>
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            value={oldpw}
                            onChange={(event) => setOldPw(event.target.value)}
                            isInvalid={!isValidOldPw}
                            placeholder="Mật khẩu hiện tại" />
                        <Form.Control.Feedback type="invalid">
                            &nbsp;{isBlankOldPw ? "Vui lòng điền mật khẩu hiện tại" : ""}
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formNewPassword">
                        <Form.Label>
                            <FontAwesomeIcon icon={faLock} size="sm" />
                            &nbsp;Mật khẩu mới
                        </Form.Label>
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            value={newpw}
                            onChange={(event) => setNewPw(event.target.value)}
                            isInvalid={!isValidNewPw}
                            placeholder="Mật khẩu mới" />
                        <Form.Control.Feedback type="invalid">
                            &nbsp;{isBlankNewPw ? "Vui lòng điền mật khẩu mới"
                                : isDupPw ? "Mật khẩu mới không được trùng với mật khẩu cũ" : ""}
                        </Form.Control.Feedback>
                    </Form.Group>

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
                </Form>
            </div>
        </div>
    )
}

export default ChangePw
