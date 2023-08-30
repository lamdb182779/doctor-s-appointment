import { useEffect, useState } from "react"
import "../../styles/Admin/DoctorAdd.scss"

import { Row, Col, Form, Button, OverlayTrigger, Popover } from "react-bootstrap"

import ReactMarkdown from "react-markdown"
import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserPlus
} from "@fortawesome/free-solid-svg-icons"

import useFetch from "../../custom/fetch"

import Warning from "../General/Dialog/Warning"
import { toast } from "react-toastify"

const DoctorAdd = (props) => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [specialtyID, setSpecialtyID] = useState("")
    const [address, setAddress] = useState("")
    const [describe, setDescribe] = useState("")
    const [price, setPrice] = useState("")
    const [content, setContent] = useState("")
    const [showWarning, setShowWarning] = useState(false)

    const [add, setAdd] = useState(0)

    const renderAddPopover = (props) => (
        <Popover id="change-popover" {...props}>
            <Popover.Header>
                Thêm thông tin bác sĩ mới<br />
            </Popover.Header>
            <Popover.Body>
                Ngoài ảnh đại diện và thông tin cụ thể, các trường còn lại không được trống.
            </Popover.Body>
        </Popover>
    )

    const { data, loading: specialtiesLoading } = useFetch("http://localhost:8080/api/doctors/specialties")
    const { message, loading } = useFetch(add === 0 ? "" : `http://localhost:8080/api/doctors?${add}`, add === 0 ? {} : {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name.trim(),
            phoneNumber: phone.trim(),
            email: email.trim(),
            specialtyID: specialtyID,
            clinicAddress: address,
            describe: describe,
            price: price,
            content: content,
        })
    })
    const handleAdd = () => {
        if ([name.trim(), phone.trim(), email.trim(), specialtyID, address.trim(), describe.trim(), price.trim()].includes("")) {
            toast.warning("Có thông tin cần thiết bị bỏ trống")
        } else {
            setShowWarning(true)
        }
    }
    const handleYes = () => {
        setAdd(add + 1)
    }
    const handleBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        if (loading === false && add !== 0) {
            if (message === "ok") {
                toast.success("Đã thêm thông tin bác sĩ mới thành công!")
            }
            else {
                toast.error(message === "server error!" ? "Lỗi Server"
                    : message === "wrong verify" ? "Lỗi xác thực"
                        : message === "duplicate email" ? "Email này đã tồn tại, vui lòng sử dụng email khác"
                            : "Có lỗi xảy ra")
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="doctor-add-container p-5">
            <Warning
                show={showWarning}
                setShow={setShowWarning}
                handleYes={handleYes}
                body="Bạn có chắc muốn thêm thông tin bác sĩ vào hệ thống không?" />
            <div className="doctor-add-title">
                <Row className="">
                    <Col xs={2} className="d-flex justify-content-start">
                        <Button onClick={() => handleBack()} variant="outline-secondary" size="sm">Quay lại</Button>
                    </Col>
                    <Col xs={8} className="d-flex align-items-center justify-content-center fw-bold">
                        Thêm thông tin cho bác sĩ mới
                    </Col>
                </Row>
            </div>
            <div className="doctor-add-content fs-6 text-start d-grid gap-3 py-5">
                <Row className="d-flex align-items-center">
                    <Col xs={2}>
                        <b>Ảnh đại diện:</b>
                    </Col>
                    <Col>
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
                <Row className="">
                    <Col xs={6}>
                        <Row className="d-flex align-items-center">
                            <Col xs={4}>
                                <b>Họ và tên: </b>
                            </Col>
                            <Col >
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    size="sm" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Row className="d-flex align-items-center">
                            <Col xs={4}>
                                <b>Điện thoại: </b>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                    size="sm" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Row className="d-flex align-items-center">
                            <Col xs={4}>
                                <b>Email: </b>
                            </Col>
                            <Col >
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    size="sm" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Row className="d-flex align-items-center">
                            <Col xs={4}>
                                <b>Chuyên khoa: </b>
                            </Col>
                            <Col>
                                <Form.Select onClick={(event) => setSpecialtyID(event.target.value)} size="sm">
                                    <option value="">Chọn chuyên khoa</option>
                                    {specialtiesLoading === false ?
                                        <>
                                            {data?.length > 0 ?
                                                <>
                                                    {data.map((item, index) => {
                                                        return (
                                                            <option
                                                                key={index}
                                                                value={item.id}>
                                                                {item.name}
                                                            </option>
                                                        )
                                                    })}
                                                </>
                                                :
                                                <></>
                                            }
                                        </>
                                        :
                                        <></>}
                                </Form.Select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row >
                    <Row>
                        <Col xs={1} >
                            <b>Địa chỉ:</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                            <Row className="px-2">
                                <p>Text:</p>
                            </Row>
                            <Row className="px-4">
                                <Form.Control
                                    value={address}
                                    as="textarea"
                                    rows={5}
                                    onChange={(event) => setAddress(event.target.value)} />
                            </Row>
                        </Col>
                        <Col className="">
                            <Row className="pe-2 ps-5">
                                Markdown:
                            </Row>
                            <Row className="pb-4 pt-3 pe-2 ps-5 h-100">
                                <div className="doctor-add-markdown">
                                    <ReactMarkdown>{address}</ReactMarkdown>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                <Row >
                    <Row>
                        <Col xs={1} >
                            <b>Mô tả:</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                            <Row className="px-2">
                                <p>Text:</p>
                            </Row>
                            <Row className="px-4">
                                <Form.Control
                                    value={describe}
                                    as="textarea"
                                    rows={5}
                                    onChange={(event) => setDescribe(event.target.value)} />
                            </Row>
                        </Col>
                        <Col className="">
                            <Row className="pe-2 ps-5">
                                Markdown:
                            </Row>
                            <Row className="pb-4 pt-3 pe-2 ps-5 h-100">
                                <div className="doctor-add-markdown">
                                    <ReactMarkdown>{describe}</ReactMarkdown>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                <Row >
                    <Row>
                        <Col xs={2} >
                            <b>Giá khám bệnh:</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                            <Row className="px-2">
                                <p>Text:</p>
                            </Row>
                            <Row className="px-4">
                                <Form.Control
                                    value={price}
                                    as="textarea"
                                    rows={5}
                                    onChange={(event) => setPrice(event.target.value)} />
                            </Row>
                        </Col>
                        <Col className="">
                            <Row className="pe-2 ps-5">
                                Markdown:
                            </Row>
                            <Row className="pb-4 pt-3 pe-2 ps-5 h-100">
                                <div className="doctor-add-markdown">
                                    <ReactMarkdown>{price}</ReactMarkdown>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Row>
                        <Col xs={2} >
                            <b>Thông tin cụ thể:</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                            <Row className="px-2">
                                <p>Text:</p>
                            </Row>
                            <Row className="px-4">
                                <Form.Control
                                    value={content}
                                    as="textarea"
                                    rows={15}
                                    onChange={(event) => setContent(event.target.value)} />
                            </Row>
                        </Col>
                        <Col className="">
                            <Row className="pe-2 ps-5">
                                Markdown:
                            </Row>
                            <Row className="pb-4 pt-3 pe-2 ps-5 h-100">
                                <div className="doctor-add-markdown">
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </div>
            <OverlayTrigger
                placement="auto"
                overlay={renderAddPopover}>
                <div onClick={() => handleAdd()} className="doctor-add-to-add d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faUserPlus} />
                </div>
            </OverlayTrigger>
        </div>
    )
}

export default DoctorAdd