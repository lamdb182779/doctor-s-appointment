import "../../styles/App/ForgetPw.scss"

import { Button, Form, Row, Col, Spinner } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
} from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from "react"
import useFetch from "../../custom/fetch"

const ForgetPw = (props) => {
    const sendVerify = props.sendVerify
    const [username, setUserName] = useState('')

    const [check, setCheck] = useState(0)

    const [isValid, setIsValid] = useState(true)
    const [isBlank, setIsBlank] = useState(true)

    useEffect(() => {
        setIsBlank(username.trim() === '' ? true : false)
        setIsValid(check && username.trim() === '' ? false : true)
    }, [check])// eslint-disable-line react-hooks/exhaustive-deps

    const { data, message, loading } = useFetch(check === 0
        || username.trim() === ''
        ? ''
        : `http://localhost:8080/api/login/findemail?${check}`,
        check === 0
            || username.trim() === ''
            ? {} : {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username.trim(),
                })
            })

    useEffect(() => {
        setIsValid(message === 'wrong username' ? false : true)
        if (data && data.length > 0 && loading === false) {
            props.setActiveSendEmail(true)
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps

    const handleCheckUsername = (event) => {
        event.preventDefault()
        props.setSendVerify(0)
        props.setActiveSendEmail(false)
        setCheck(check + 1)
    }

    const { message: verifyMessage, loading: verifyLoading } = useFetch(sendVerify === 0 ? '' : `http://localhost:8080/api/login/sendverify?${sendVerify}`, sendVerify === 0 ? {} : {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: data[0].id,
            table: data[0].table,
        })
    })

    useEffect(() => {
        props.setActiveSendEmail(true)
        if (verifyLoading) {
            props.setActiveSendEmail(false)
        } else if (verifyMessage === 'ok') {
        }
    }, [verifyLoading])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="forgetpw-container">
            <div className="forgetpw-title">
                Nhập vào tên tài khoản của bạn
            </div>
            <div className="forgetpw-content">
                <Form onKeyDown={(event) => { if (event.key === 'Enter') event.preventDefault() }}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>
                            <FontAwesomeIcon icon={faUser} size="sm" />
                            &nbsp;Tài khoản
                        </Form.Label>
                        <Row>
                            <Col xs={9}>
                                <Form.Control type="search"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(event) => setUserName(event.target.value)}
                                    isInvalid={!isValid}
                                />
                                <Form.Control.Feedback type="invalid">
                                    &nbsp;{isBlank ? 'Vui lòng điền tên tài khoản!'
                                        : message === 'wrong username' ? 'Tài khoản không tồn tại, vui lòng kiểm tra lại!' : ''}
                                </Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Button className="w-100" onClick={(event) => handleCheckUsername(event)}>Kiểm tra</Button></Col>
                        </Row>
                        {loading === true ?
                            <>
                                <Form.Label>
                                    <Spinner animation="border" variant="primary" size="sm" />
                                    &nbsp;Vui lòng chờ một chút
                                </Form.Label>
                            </>
                            :
                            <>
                                {data && data.length > 0 && !isBlank ?
                                    <>
                                        <Form.Label>
                                            Chúng tôi tìm thấy email tương ứng với tài khoản của bạn là: <b>{data[0].email}</b>.<br />
                                            Nếu đúng, hãy chọn <b>Gửi email xác nhận</b>, hoặc liên hệ với chúng tôi nếu email không trùng khớp.
                                        </Form.Label>
                                    </>
                                    :
                                    <></>
                                }
                            </>
                        }
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default ForgetPw