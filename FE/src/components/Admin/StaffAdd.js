import { useEffect, useState } from "react"
import "../../styles/Admin/StaffAdd.scss"

import { Row, Col, Form, Button, OverlayTrigger, Popover, FloatingLabel } from "react-bootstrap"

import { connect } from "react-redux"

import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faUserPlus,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons"
import {
    faSquare
} from "@fortawesome/free-regular-svg-icons"
import useFetch from "../../custom/fetch"
import Danger from "../Dialog/Danger"
import Success from "../Dialog/Success"
import Warning from "../Dialog/Warning"

import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
const StaffAdd = (props) => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState(null)
    const [doB, setDoB] = useState(new Date())
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const [url, setUrl] = useState('')
    const [options, setOptions] = useState({})

    const [isDoB, setIsDoB] = useState(false)

    const [showDanger, setShowDanger] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showWarning, setShowWarning] = useState(false)

    const [add, setAdd] = useState(0)

    const [isAnyBlank, setIsAnyBlank] = useState(null)

    const renderAddPopover = (props) => (
        <Popover id="change-popover" {...props}>
            <Popover.Header>
                Thêm thông tin nhân viên mới<br />
            </Popover.Header>
            <Popover.Body>
                Ngoài ảnh đại diện, giới tính, ngày sinh, các trường còn lại không được trống.
            </Popover.Body>
        </Popover>
    )

    const { message, loading } = useFetch(url, options)
    const handleAdd = () => {
        if ([name.trim(), phone.trim(), email.trim(), address.trim()].includes("")) {
            setIsAnyBlank(true)
            setShowDanger(true)
        } else {
            setIsAnyBlank(false)
            setShowWarning(true)
        }
    }
    const handleYes = () => {
        setAdd(add + 1)
    }
    useEffect(() => {
        setUrl(add === 0 ? '' : `http://localhost:8080/api/staffs?${add}`)
        setOptions(add === 0 ? {} : {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.trim(),
                phoneNumber: phone.trim(),
                email: email.trim(),
                address: address.trim(),
                gender: gender,
                doB: doB,
                token: props.user.token,
            })
        })
    }, [add])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (loading === false && add !== 0) {
            if (message === 'ok') {
                setShowSuccess(true)
            }
            else {
                setShowDanger(true)
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    const renderChangeDoB = (props) => (
        <Popover id="staff-change-doB" {...props}>
            <Popover.Header>
                {isDoB ? "Hủy bỏ sửa thông tin ngày sinh" : "Kích hoạt sửa thông tin ngày sinh"}
            </Popover.Header>
            <Popover.Body>
                Lưu ý: Cần kích hoạt chỉnh sửa ngày sinh mới cho phép ngày sinh cập nhật mới
            </Popover.Body>
        </Popover>
    )
    return (
        <div className="staff-add-container p-5">
            <Danger
                show={showDanger}
                setShow={setShowDanger}
                time={1000}
                bodyAlign="text-center"
                size={message === 'duplicate email' ? "nm" : "sm"}
                body={
                    isAnyBlank ? "Có thông tin cần thiết bị bỏ trống"
                        : message === 'server error!' ? "Lỗi Server"
                            : message === 'wrong verify' ? "Lỗi xác thực"
                                : message === 'duplicate email' ? "Email này đã tồn tại, vui lòng sử dụng email khác" : undefined} />
            <Success
                show={showSuccess}
                setShow={setShowSuccess}
                time={1000}
                size="nm"
                bodyAlign="text-center"
                body="Đã thêm thông tin nhân viên mới thành công!" />
            <Warning
                show={showWarning}
                setShow={setShowWarning}
                handleYes={handleYes}
                body="Bạn có chắc muốn thêm thông tin nhân viên vào hệ thống không?" />
            <div className="staff-add-title">
                <Row className="">
                    <Col xs={2} className="d-flex justify-content-start">
                        <Button onClick={() => navigate('/admin')} variant="outline-secondary" size="sm">Quay lại</Button>
                    </Col>
                    <Col xs={8} className="d-flex align-items-center justify-content-center fw-bold">
                        Thêm thông tin cho nhân viên mới
                    </Col>
                </Row>
            </div>
            <div className="staff-add-content fs-6 text-start d-grid gap-3 py-5">
                <Row>
                    <Col xs={5}>
                        <FloatingLabel controlId="name" label="Họ và tên">
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                    <Col xs={1} />
                    <Col xs={4} className="d-flex justify-content-end">
                        <div>
                            <Form.Label >
                                Giới tính
                            </Form.Label><br />
                            <Form.Check
                                inline
                                type="radio"
                                id="male"
                                label="Nam"
                                checked={gender === true}
                                onClick={() => setGender(true)}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                id="female"
                                label="Nữ"
                                checked={gender === false}
                                onClick={() => setGender(false)}
                            />
                            <Form.Check className="null"
                                inline
                                type="radio"
                                id="unknown"
                                label="Trống"
                                checked={gender === null}
                                onClick={() => setGender(null)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <FloatingLabel controlId="phone" label="Điện thoại">
                            <Form.Control
                                type="text"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                    <Col xs={1} />
                    <Col xs={4} className="d-flex justify-content-end">
                        <div>
                            <Form.Label >
                                Ngày sinh
                            </Form.Label><br />
                            <DatePicker selected={doB}
                                onChange={(date) => setDoB(date)}
                                onSelect={(date) => setDoB(date)}
                                disabled={!isDoB}
                                dateFormat="dd/MM/yyyy" />
                            <OverlayTrigger
                                placement="right"
                                overlay={renderChangeDoB}>
                                {isDoB === false ?
                                    <>
                                        <FontAwesomeIcon icon={faPenToSquare} onClick={() => setIsDoB(!isDoB)} />
                                    </>
                                    :
                                    <>
                                        <FontAwesomeIcon icon={faSquare} onClick={() => setIsDoB(!isDoB)} />
                                    </>
                                }
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <FloatingLabel controlId="email" label="Email">
                            <Form.Control
                                type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                    <Col xs={1} />
                    <Col xs={4}>
                        <Form.Label >
                            Ảnh đại diện
                        </Form.Label><br />
                        <Form.Control
                            size="sm"
                            type="file"
                            required
                            name="file"
                        //   onChange={handleChange}
                        //   isInvalid={!!errors.file}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={10}>
                        <FloatingLabel controlId="address" label="Địa chỉ">
                            <Form.Control
                                type="text"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </div>
            <OverlayTrigger
                placement="auto"
                overlay={renderAddPopover}>
                <div onClick={() => handleAdd()} className="staff-add-to-add d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faUserPlus} />
                </div>
            </OverlayTrigger>
        </div>
    )
}
const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default connect(mapStateToProps)(StaffAdd)