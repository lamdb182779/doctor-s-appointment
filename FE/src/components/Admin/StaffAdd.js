import { useEffect, useState } from "react"
import "../../styles/Admin/StaffAdd.scss"

import { Row, Col, Form, Button, OverlayTrigger, Popover, FloatingLabel } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faUserPlus,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons"
import {
    faSquare
} from "@fortawesome/free-regular-svg-icons"
import useGet from "../../custom/get"
import useUtil from "../../custom/utils"

import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import { toast } from "react-toastify"
const StaffAdd = (props) => {
    const { handleNavigate } = useUtil()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState(null)
    const [doB, setDoB] = useState(new Date())
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const [isDoB, setIsDoB] = useState(false)

    const [showWarning, setShowWarning] = useState(false)

    const [add, setAdd] = useState(0)

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

    const { message, loading } = useGet(add === 0 ? "" : `/staffs?${add}`, add === 0 ? {} : {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name.trim(),
            phoneNumber: phone.trim(),
            email: email.trim(),
            address: address.trim(),
            gender: gender,
            doB: doB,
        })
    })
    const handleAdd = () => {
        if ([name.trim(), phone.trim(), email.trim(), address.trim()].includes("")) {
            toast.warning("Có thông tin cần thiết bị bỏ trống")
        } else {
            setShowWarning(true)
        }
    }
    const handleYes = () => {
        setAdd(add + 1)
    }
    const handleBack = () => {
        handleNavigate(-1)
    }
    useEffect(() => {
        if (loading === false && add !== 0) {
            if (message === "ok") {
                toast.success("Đã thêm thông tin nhân viên mới thành công!")
            }
            else {
                toast.error(message === "server error!" ? "Lỗi Server"
                    : message === "wrong verify" ? "Lỗi xác thực"
                        : message === "duplicate email" ? "Email này đã tồn tại, vui lòng sử dụng email khác"
                            : "Có lỗi xảy ra")
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
            <div className="staff-add-title">
                <Row className="">
                    <Col xs={2} className="d-flex justify-content-start">
                        <Button onClick={() => handleBack()} variant="outline-secondary" size="sm">Quay lại</Button>
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
                                onChange={event => setName(event.target.value)} />
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
                                onChange={event => setPhone(event.target.value)} />
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
                                onChange={event => setEmail(event.target.value)} />
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
                                onChange={event => setAddress(event.target.value)} />
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

export default StaffAdd