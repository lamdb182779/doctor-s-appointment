import "../../styles/App/ChangePw.scss"

import { Form } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLock,
    faEye,
    faEyeSlash,
    faLocationPinLock,
} from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from "react"
import useFetch from "../../custom/fetch"

import { connect } from "react-redux"

import Success from "../Dialog/Success"
import Danger from "../Dialog/Danger"

const ChangePw = (props) => {
    const [oldpw, setOldPw] = useState('')
    const [newpw, setNewPw] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [url, setUrl] = useState('')
    const [options, setOptions] = useState({})

    const [isBlankOldPw, setIsBlankOldPw] = useState(true)
    const [isBlankNewPw, setIsBlankNewPw] = useState(true)
    const [isDupPw, setIsDupPw] = useState(true)

    const [isValidOldPw, setIsValidOldPw] = useState(true)
    const [isValidNewPw, setIsValidNewPw] = useState(true)

    const [showSuccess, setShowSuccess] = useState(false)
    const [showDanger, setShowDanger] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        setIsBlankOldPw(oldpw === '' ? true : false)
        setIsBlankNewPw(newpw === '' ? true : false)
        setIsDupPw(oldpw === newpw ? true : false)

        setIsValidOldPw(props.changeClick && oldpw === '' ? false : true)
        setIsValidNewPw(props.changeClick && (newpw === '' || oldpw === newpw) ? false : true)
        setUrl(props.changeClick === 0
            || oldpw === ''
            || newpw === ''
            || oldpw === newpw
            ? ''
            : `http://localhost:8080/api/self/changepw?${props.changeClick}`)
        setOptions(props.changeClick === 0
            || oldpw === ''
            || newpw === ''
            || oldpw === newpw
            ? {} : {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    oldpw: oldpw,
                    newpw: newpw,
                    token: props.user.token,
                })
            })
    }, [props.changeClick])// eslint-disable-line react-hooks/exhaustive-deps

    const { message, loading } = useFetch(url, options)

    useEffect(() => {
        setIsBlankOldPw(message === 'wrong password' ? false : true)
        if (props.changeClick !== 0 && loading === false) {
            if (message === 'ok') {
                setShowSuccess(true)
                props.handleCloseChangePw(1000)
            } else {
                setShowDanger(true)
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="changepw-container">
            <Success
                show={showSuccess}
                setShow={setShowSuccess}
                time={1000}
                bodyAlign="text-center"
                body="Đổi mật khẩu thành công!" />
            <Danger
                show={showDanger}
                setShow={setShowDanger}
                time={1000}
                bodyAlign="text-center"
                body={message === 'server error!' ? "Lỗi Server"
                    : message === 'wrong verify' ? "Lỗi xác thực" : undefined} />
            <div className="changepw-title">
                Nhập mật khẩu hiện tại và mật khẩu mới
            </div>
            <div className="changepw-content">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
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
                            &nbsp;{isBlankOldPw ? 'Vui lòng điền mật khẩu hiện tại'
                                : message === 'wrong password' ? 'Sai mật khẩu hiện tại' : ''}
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
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
                            &nbsp;{isBlankNewPw ? 'Vui lòng điền mật khẩu mới'
                                : isDupPw ? 'Mật khẩu mới không được trùng với mật khẩu cũ'
                                    : message === 'wrong password' ? 'Sai mật khẩu hiện tại' : ''}
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

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default connect(mapStateToProps)(ChangePw)
