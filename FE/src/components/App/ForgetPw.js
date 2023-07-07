import "../../styles/App/ForgetPw.scss"

import { Form } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import { useState } from "react"

const ForgetPw = (props) => {
    const [email, setEmail] = useState('')
    return (
        <div className="forgetpw-container">
            <div className="forgetpw-title">
                Nhập vào email của bạn
            </div>
            <div className="forgetpw-content">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            <FontAwesomeIcon icon={faEnvelope} size="sm" />
                            &nbsp;Email
                        </Form.Label>
                        <Form.Control type="email"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default ForgetPw