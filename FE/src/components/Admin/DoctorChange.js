import "../../styles/Admin/DoctorChange.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPenToSquare,
    faArrowDownLong
} from "@fortawesome/free-solid-svg-icons"

import { Row, Col, Modal, Form, Button, } from "react-bootstrap"

import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"
import useFetch from "../../custom/fetch"
import Danger from "../General/Dialog/Danger"
import Warning from "../General/Dialog/Warning"

import { connect } from "react-redux"
import { useRef } from "react"

const DoctorChange = (props) => {
    const data = props.data
    const componentRef = useRef()

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
        setAddressDisable(true)
        setDescribeDisable(true)
        setPriceDisable(true)
        setContentDisable(true)
        setSave('')
    }

    const [name, setName] = useState(data[0].name)
    const [phone, setPhone] = useState(data[0].phoneNumber)
    const [email, setEmail] = useState(data[0].email)
    const [describe, setDescribe] = useState(data[0].describe)
    const [address, setAddress] = useState(data[0].clinicAddress)
    const [price, setPrice] = useState(data[0].price)
    const [content, setContent] = useState(data[0].content)

    const [nameDisable, setNameDisable] = useState(true)
    const [phoneDisable, setPhoneDisable] = useState(true)
    const [emailDisable, setEmailDisable] = useState(true)
    const [addressDisable, setAddressDisable] = useState(true)
    const [describeDisable, setDescribeDisable] = useState(true)
    const [priceDisable, setPriceDisable] = useState(true)
    const [contentDisable, setContentDisable] = useState(true)

    const [save, setSave] = useState('')

    const [change, setChange] = useState(0)

    const [showWarning, setShowWarning] = useState(false)
    const [showDanger, setShowDanger] = useState(false)

    const { message, loading } = useFetch(change === 0 ? '' : `http://localhost:8080/api/doctors/${data[0].id}/${change}`,
        change === 0 ? {} : {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name === data[0].name ? null : name.trim(),
                phoneNumber: phone === data[0].phone ? null : phone.trim(),
                email: email === data[0].email ? null : email.trim(),
                clinicAddress: address === data[0].address ? null : address,
                describe: describe === data[0].describe ? null : describe,
                price: price === data[0].price ? null : price,
                content: content === data[0].content ? null : content,
                token: props.user.token,
            })
        })

    const [isAnyBlank, setIsAnyBlank] = useState(false)

    const [row, setRow] = useState(0)

    const handleChangeName = () => {
        setNameDisable(!nameDisable)
    }
    const handleChangePhone = () => {
        setPhoneDisable(!phoneDisable)
    }
    const handleChangeEmail = () => {
        setEmailDisable(!emailDisable)
    }
    const handleChangeAddress = () => {
        setRow(address.split("\n").length)
        setAddressDisable(false)
        setSave(address)
        handleShow()
    }
    const handleChangeDescribe = () => {
        setRow(describe.split("\n").length)
        setDescribeDisable(false)
        setSave(describe)
        handleShow()
    }
    const handleChangePrice = () => {
        setRow(price.split("\n").length)
        setPriceDisable(false)
        setSave(price)
        handleShow()
    }
    const handleChangeContent = () => {
        setRow(content.split("\n").length)
        setContentDisable(false)
        setSave(content)
        handleShow()
    }

    const handleLoadSave = () => {
        (!addressDisable && setAddress(save)) ||
            (!describeDisable && setDescribe(save)) ||
            (!priceDisable && setPrice(save)) ||
            (!contentDisable && setContent(save))
    }

    const handleChange = () => {
        if ([name.trim(), phone.trim(), email.trim(), address.trim(), describe.trim(), price.trim()].includes("")) {
            setIsAnyBlank(true)
            setShowDanger(true)
        }
        else {
            setIsAnyBlank(false)
            setShowWarning(true)
        }
    }
    const handleYes = () => {
        setChange(change + 1)
    }

    useEffect(() => {
        if (loading === false && change !== 0) {
            if (message === 'ok') {
                props.handleClose()
                props.setChanged(props.changed + 1)
                props.setShowSuccess(true)
            }
            else {
                setShowDanger(true)
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <Warning
                show={showWarning}
                setShow={setShowWarning}
                handleYes={handleYes}
                body="Bạn có chắc muốn thực hiện những thay đổi này không?" />
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
            <Modal.Header closeButton>
                <Modal.Title>
                    Thay đổi thông tin bác sĩ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-grid gap-3">
                {"Chọn các thông tin cần thay đổi và sửa (Thông tin cụ thể có thể để trống):"}
                <Row className="">
                    <Col xs={4}>
                        <Row className="d-flex align-items-center">
                            <Col xs={4}>
                                <b>Họ và tên: </b>
                            </Col>
                            <Col xs={6}>
                                <Form.Control
                                    type="text"
                                    disabled={nameDisable}
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    size="sm" />
                            </Col>
                            <Col>
                                <FontAwesomeIcon onClick={() => handleChangeName()} icon={faPenToSquare} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3}>
                        <Row className="d-flex align-items-center">
                            <Col xs={5}>
                                <b>Điện thoại: </b>
                            </Col>
                            <Col xs={5}>
                                <Form.Control
                                    type="text"
                                    disabled={phoneDisable}
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                    size="sm" />
                            </Col>
                            <Col>
                                <FontAwesomeIcon onClick={() => handleChangePhone()} icon={faPenToSquare} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="d-flex align-items-center">
                            <Col xs={2}>
                                <b>Email: </b>
                            </Col>
                            <Col xs={8}>
                                <Form.Control
                                    type="email"
                                    disabled={emailDisable}
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    size="sm" />
                            </Col>
                            <Col>
                                <FontAwesomeIcon onClick={() => handleChangeEmail()} icon={faPenToSquare} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} >
                        <b>Địa chỉ:</b>
                    </Col>
                    <Col xs={1} >
                        <FontAwesomeIcon onClick={() => handleChangeAddress()} icon={faPenToSquare} />
                    </Col>
                </Row>
                <Row className="px-5">
                    <Col xs={12} className="doctor-info-field">
                        <ReactMarkdown className="text-start">{address}</ReactMarkdown>
                    </Col>
                </Row>
                <Row >
                    <Col xs={1} >
                        <b>Mô tả:</b>
                    </Col>
                    <Col xs={1} >
                        <FontAwesomeIcon onClick={() => handleChangeDescribe()} icon={faPenToSquare} />
                    </Col>
                </Row>
                <Row className="px-5">
                    <Col xs={12} className="doctor-info-field">
                        <ReactMarkdown className="text-start">{describe}</ReactMarkdown>
                    </Col>
                </Row>
                <Row >
                    <Col xs={2} >
                        <b>Giá khám bệnh:</b>
                    </Col>
                    <Col xs={1} >
                        <FontAwesomeIcon onClick={() => handleChangePrice()} icon={faPenToSquare} />
                    </Col>
                </Row>
                <Row className="px-5">
                    <Col xs={12} className="doctor-info-field">
                        <ReactMarkdown className="text-start">{price}</ReactMarkdown>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} >
                        <b>Thông tin cụ thể:</b>
                    </Col>
                    <Col xs={1} >
                        <FontAwesomeIcon onClick={() => handleChangeContent()} icon={faPenToSquare} />
                    </Col>
                </Row>
                <Row className="px-5">
                    <Col xs={12} className="doctor-info-field">
                        <ReactMarkdown className="text-start">{content}</ReactMarkdown>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleChange()}>Thay đổi thông tin</Button>
            </Modal.Footer>

            <Modal className="" show={show} size="xl" centered>
                <Modal.Header>
                    <Modal.Title className="w-100">
                        <Row>
                            <Col>
                                Chỉnh sửa&nbsp;
                                {!addressDisable && "địa chỉ"}
                                {!describeDisable && "mô tả"}
                                {!priceDisable && "giá khám bệnh"}
                                {!contentDisable && "thông tin cụ thể"}
                            </Col>
                            <Col>
                                <div onClick={() => componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                    className="change-to-bottom text-end">
                                    <FontAwesomeIcon icon={faArrowDownLong} />
                                </div>
                            </Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className="">
                            <Row>
                                <b>Text:</b>
                            </Row>
                            <Row className="p-2">
                                <Form.Control
                                    value={!addressDisable ? address :
                                        !describeDisable ? describe :
                                            !priceDisable ? price :
                                                !contentDisable ? content : ""}
                                    as="textarea"
                                    rows={row > 5 ? row : 5}
                                    onChange={(event) => {
                                        !addressDisable ? setAddress(event.target.value) :
                                            !describeDisable ? setDescribe(event.target.value) :
                                                !priceDisable ? setPrice(event.target.value) :
                                                    !contentDisable && setContent(event.target.value)
                                        setRow(event.target.value.split("\n").length)
                                    }} />
                            </Row>
                        </Col>
                        <Col className="">
                            <Row>
                                <b>Markdown:</b>
                            </Row>
                            <Row className="p-2">
                                <ReactMarkdown>
                                    {(!addressDisable && address) ||
                                        (!describeDisable && describe) ||
                                        (!priceDisable && price) ||
                                        (!contentDisable && content)}
                                </ReactMarkdown>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer ref={componentRef}>
                    <Button variant="outline-secondary" onClick={() => handleLoadSave()}>Hủy thay đổi</Button>
                    <Button variant="outline-primary" onClick={() => handleClose()}>Xác nhận</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default connect(mapStateToProps)(DoctorChange)