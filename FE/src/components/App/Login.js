import { Form } from "react-bootstrap"

import "../../styles/App/Login.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faLock,
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'

import { useState } from "react"


const Login = (props) => {
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="login-container">
            <div className="login-title">
                Nhập tên tài khoản và mật khẩu
            </div>
            <div className="login-content">
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>
                            <FontAwesomeIcon icon={faUser} size="sm" />
                            &nbsp;Tài khoản
                        </Form.Label>
                        <Form.Control
                            value={username}
                            type="search"
                            placeholder="Nhập tên tài khoản"
                            onChange={(event) => setUserName(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>
                            <FontAwesomeIcon icon={faLock} size="sm" />
                            &nbsp;Mật khẩu
                        </Form.Label>
                        <Form.Control type={showPassword ? 'text' : 'password'}
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
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