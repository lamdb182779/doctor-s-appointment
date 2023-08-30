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

import { useEffect, useState } from "react"
import DoctorChange from "./DoctorChange"

import nullavatar from "../../assets/images/nullavatardoctor.jpg"

const DoctorInfo = (props) => {
    const navigate = useNavigate()
    // const location = useLocation()
    const { id } = useParams()

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [changed, setChanged] = useState(0)
    const { data, loading } = useFetch(`http://localhost:8080/api/doctors/${id}/${changed}`)
    const handleBack = () => {
        navigate(-1)
    }
    const renderChangeTooltip = (props) => (
        <Tooltip id="change-tooltip" {...props}>
            Chỉnh sửa thông tin bác sĩ
        </Tooltip>
    )

    const renderAvatar = (props) => (
        <Popover id="avatar-popover" {...props}>
            <Popover.Body className="p-1">
                <Button className="w-100 text-dark text-decoration-none fw-bold" variant="link" size="">
                    <FontAwesomeIcon icon={faImages} />&nbsp;Đổi ảnh đại diện
                </Button>
                <Button className="w-100 text-dark text-decoration-none fw-bold" variant="link" size="">
                    <FontAwesomeIcon icon={faSquareFull} />&nbsp;Xoá ảnh đại diện
                </Button>
            </Popover.Body>
        </Popover>
    )
    return (
        <div className="doctor-info-container px-5 py-5 d-grid gap-5">
            {loading === false ?
                <>
                    {data?.length > 0 ?
                        <>
                            <Row className="">
                                <Col xs={2} className="d-flex justify-content-start">
                                    <Button onClick={() => handleBack()} variant="outline-secondary" size="sm">Quay lại</Button>
                                </Col>
                            </Row>
                            <Row className="fs-6 text-start d-flex align-items-center">
                                <Col xs={4}>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="auto"
                                        overlay={renderAvatar}>
                                        <Image onClick={(event) => event.target.click()} className="w-50 h-auto"
                                            src={data[0].image ? data[0].image : nullavatar} alt="avatar" roundedCircle />
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
                                <div onClick={() => handleShow()} className="doctor-info-to-change d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </div>
                            </OverlayTrigger>
                            <Modal show={show} onHide={handleClose} size="xl">
                                <DoctorChange
                                    setChanged={setChanged}
                                    changed={changed}
                                    handleClose={handleClose}
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

export default DoctorInfo