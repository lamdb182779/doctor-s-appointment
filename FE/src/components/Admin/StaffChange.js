import "../../styles/Admin/StaffChange.scss"

import { Row, Col, Button, Modal, Popover, Image, OverlayTrigger, FloatingLabel, Form } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faImages,
    faSquareFull
} from "@fortawesome/free-regular-svg-icons"

import {
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons"

import nullavatar from "../../assets/images/nullavatarstaff.jpg"
import { useState, useEffect } from "react"

import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import useFetch from "../../custom/fetch"
import Danger from "../Dialog/Danger"
import Success from "../Dialog/Success"
import Warning from "../Dialog/Warning"

import { connect } from "react-redux"

const StaffChange = (props) => {
    const [url, setUrl] = useState('')
    const [options, setOptions] = useState({})

    const { message, loading } = useFetch(url, options)

    const data = props.data
    const renderAvatar = (props) => (
        <Popover id="avatar-popover" {...props}>
            <Popover.Body className="p-1">
                <Button className="w-100 text-dark text-decoration-none fw-bold" variant="link" size="">
                    <FontAwesomeIcon icon={faImages} />&nbsp;Đổi ảnh đạt diện
                </Button>
                <Button className="w-100 text-dark text-decoration-none fw-bold" variant="link" size="">
                    <FontAwesomeIcon icon={faSquareFull} />&nbsp;Xoá ảnh đại diện
                </Button>
            </Popover.Body>
        </Popover>
    )
    const [name, setName] = useState(data.name)
    const [phone, setPhone] = useState(data.phoneNumber)
    const [gender, setGender] = useState(data.gender)
    const [doB, setDoB] = useState(new Date(data.doB))
    const [email, setEmail] = useState(data.email)
    const [address, setAddress] = useState(data.address)

    const [isDoB, setIsDoB] = useState(false)

    const [change, setChange] = useState(0)

    const [showWarning, setShowWarning] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showDanger, setShowDanger] = useState(false)

    const [isAnyBlank, setIsAnyBlank] = useState(true)

    const handleChange = () => {
        if ([name.trim(), phone.trim(), email.trim(), address.trim()].includes("")) {
            setIsAnyBlank(true)
            setShowDanger(true)
        } else {
            setIsAnyBlank(false)
            setShowWarning(true)
        }
    }

    const handleYes = () => {
        setChange(change + 1)
    }

    useEffect(() => {
        setUrl(change === 0 ? '' : `http://localhost:8080/api/staffs?id=${data.id}&${change}`)
        setOptions(change === 0 ? {} : {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name === data.name ? null : name.trim(),
                phoneNumber: phone === data.phoneNumber ? null : phone.trim(),
                email: email === data.email ? null : email.trim(),
                address: address === data.address ? null : address.trim(),
                gender: gender,
                doB: !isDoB ? null : doB,
                token: props.user.token,
            })
        })
    }, [change])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (loading === false && change !== 0) {
            if (message === 'ok') {
                setShowSuccess(true)
                props.setChange(props.change + 1)
            } else {
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
        <>
            <Danger
                show={showDanger}
                setShow={setShowDanger}
                // size={isAnyBlank ? "nm" : "sm"}
                time={1000}
                bodyAlign="text-center"
                body={isAnyBlank ? "Có thông tin cần thiết bị bỏ trống" :
                    message === 'server error!' ? "Lỗi Server"
                        : message === 'wrong verify' ? "Lỗi xác thực"
                            : undefined} />
            <Success
                show={showSuccess}
                setShow={setShowSuccess}
                time={1000}
                bodyAlign="text-center"
                size="nm"
                body="Thay đổi thông tin nhân viên thành công!" />
            <Warning
                show={showWarning}
                setShow={setShowWarning}
                handleYes={handleYes}
                body="Bạn có chắc muốn thực hiện những thay đổi này không?" />

            <Modal.Header closeButton className="border-0">
                <Modal.Title >
                    Thông tin chi tiết nhân viên
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="staff-change-content d-grid gap-3">
                <Row className="d-flex justify-content-center">
                    <Col xs={2}>
                        <OverlayTrigger
                            trigger="click"
                            placement="auto"
                            overlay={renderAvatar}>
                            <Image onClick={(event) => event.target.click()} className="w-100 h-auto" src={data.image ? data.image : nullavatar} alt='avatar' roundedCircle />
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <FloatingLabel controlId="name" label="Họ và tên">
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                    <Col xs={4}>
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
                        <Form.Check
                            inline
                            type="radio"
                            id="unknown"
                            label="Trống"
                            checked={gender === null}
                            onClick={() => setGender(null)}
                        />
                    </Col>
                    <Col xs={5} >
                        <Form.Label >
                            Ngày sinh
                        </Form.Label><br />
                        <DatePicker selected={doB}
                            onChange={(date) => setDoB(date)}
                            onSelect={(date) => setDoB(date)}
                            disabled={!isDoB}
                            dateFormat="dd/MM/yyyy" />
                        <OverlayTrigger
                            placement="auto"
                            overlay={renderChangeDoB}>
                            <FontAwesomeIcon icon={faPenToSquare} onClick={() => setIsDoB(!isDoB)} />
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <FloatingLabel controlId="phone" label="Điện thoại">
                            <Form.Control
                                type="text"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                    <Col xs={6}>
                        <FloatingLabel controlId="email" label="Email">
                            <Form.Control
                                type="text"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FloatingLabel controlId="address" label="Địa chỉ">
                            <Form.Control
                                type="text"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="border-0"  >
                <Button onClick={() => { handleChange() }} variant="outline-primary" >Thay đổi</Button>
            </Modal.Footer>
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default connect(mapStateToProps)(StaffChange)