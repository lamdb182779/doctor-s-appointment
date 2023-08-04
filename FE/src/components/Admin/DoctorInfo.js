import "../../styles/Admin/DoctorInfo.scss"

import { Row, Col, Button, Image, Tooltip, Popover, OverlayTrigger, Modal } from "react-bootstrap"

import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../custom/fetch"
import ReactMarkdown from "react-markdown"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPenToSquare
} from "@fortawesome/free-solid-svg-icons"
import {
    faImages,
    faSquareFull
} from "@fortawesome/free-regular-svg-icons"

import { connect } from "react-redux"

import { useEffect, useState } from "react"
import DoctorChange from "./DoctorChange"


import Success from "../Dialog/Success"

const DoctorInfo = (props) => {
    const navigate = useNavigate()
    // const location = useLocation()
    const { id } = useParams()

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [url, setUrl] = useState('')

    const { data, loading } = useFetch(url)

    const [change, setChange] = useState(0)
    const [showSuccess, setShowSuccess] = useState(false)
    useEffect(() => {
        setUrl(`http://localhost:8080/api/doctors/${id}/${change}`)
    }, [change])// eslint-disable-line react-hooks/exhaustive-deps

    const renderChangeTooltip = (props) => (
        <Tooltip id="change-tooltip" {...props}>
            Chỉnh sửa thông tin bác sĩ
        </Tooltip>
    )

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
    return (
        <div className="doctor-info-container px-5 py-5 d-grid gap-5">
            <Success
                show={showSuccess}
                setShow={setShowSuccess}
                time={1000}
                bodyAlign="text-center"
                size="nm"
                body="Thay đổi thông tin bác sĩ thành công!" />
            {loading === false ?
                <>
                    {data?.length > 0 ?
                        <>
                            <Row className="">
                                <Col xs={2} className="d-flex justify-content-start">
                                    <Button onClick={() => navigate('/admin/doctor-list')} variant="outline-secondary" size="sm">Quay lại</Button>
                                </Col>
                            </Row>
                            <Row className="fs-6 text-start d-flex align-items-center">
                                <Col xs={4}>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="auto"
                                        overlay={renderAvatar}>
                                        <Image onClick={(event) => event.target.click()} className="w-50 h-auto" src={data[0].image} alt='avatar' roundedCircle />
                                    </OverlayTrigger>
                                </Col>
                                <Col>
                                    <Row>
                                        <b>Bác sĩ {data[0].name}</b>
                                        <ReactMarkdown>{data[0].describe}</ReactMarkdown>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="">
                                <Col className="fs-6 text-start" xs={4}>
                                    <Row>
                                        <b>Số điện thoại</b>
                                        <p>{data[0].phoneNumber}</p>
                                        <b>Email</b>
                                        <p>{data[0].email}</p>
                                        <ReactMarkdown>{data[0].clinicAddress}</ReactMarkdown>
                                    </Row>
                                </Col>
                                <Col className="fs-6 ">
                                    <Row>
                                        <b className="text-start">Giá khám</b>
                                        <ReactMarkdown className="text-start">{data[0].price}</ReactMarkdown>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="fs-6 text-left">
                                <ReactMarkdown className="fs-6 text-start">{data[0].content}</ReactMarkdown>
                            </Row>
                            <OverlayTrigger
                                placement="auto"
                                overlay={renderChangeTooltip}>
                                <div onClick={() => handleShow()} className="detail-to-order d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </div>
                            </OverlayTrigger>
                            <Modal show={show} onHide={handleClose} size="xl">
                                <DoctorChange
                                    setChange={setChange}
                                    change={change}
                                    handleClose={handleClose}
                                    setShowSuccess={setShowSuccess}
                                    data={data} />
                            </Modal>
                        </>
                        :
                        <></>
                    }
                </>
                : <></>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user,
    })
}

export default connect(mapStateToProps)(DoctorInfo)