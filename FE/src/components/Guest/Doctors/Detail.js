import "../../../styles/Guest/Doctors/Detail.scss"

import { Button, Col, Dropdown, Image, Row, Spinner, OverlayTrigger, Tooltip, Modal } from "react-bootstrap"

import { useParams, useNavigate } from "react-router-dom"

import { useRef, useState } from "react"

import useFetch from "../../../custom/fetch"

import ReactMarkdown from "react-markdown"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarDays,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import DoctorNotfound from "../../General/Notfound/DoctorNotfound"
import Booking from "./Booking"

import nullavatar from "../../../assets/images/nullavatardoctor.jpg"

import moment from "moment"
import "moment/locale/vi"

const Detail = (props) => {
    let { id } = useParams()
    const componentRef = useRef(null)
    const navigate = useNavigate()
    const today = moment().startOf('day')
    const [day, setDay] = useState(moment(today).add(1, 'days'))
    const dayArray = [
        moment(today).add(1, 'days'),
        moment(today).add(2, 'days'),
        moment(today).add(3, 'days'),
        moment(today).add(4, 'days'),
        moment(today).add(5, 'days'),
        moment(today).add(6, 'days'),
        moment(today).add(7, 'days'),
    ]
    const [schedule, setSchedule] = useState({})

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const handleBack = () => {
        navigate(-1)
    }

    const { data, loading } = useFetch(`http://localhost:8080/api/doctors/${id}/1`)

    const [book, setBook] = useState(0)

    const { data: scheduleData, loading: scheduleLoading } = useFetch(`http://localhost:8080/api/schedules?doctorId=${id}&date=${day}&${book}`)

    const renderBookingTooltip = (props) => (
        <Tooltip id="booking-tooltip" {...props}>
            Đặt lịch ngay
        </Tooltip>
    )

    const time = {
        "00": "8:00 - 8:30",
        "01": "8:30 - 9:00",
        "02": "9:00 - 9:30",
        "03": "9:30 - 10:00",
        "04": "10:00 - 10:30",
        "05": "10:30 - 11:00",
        "06": "11:00 - 11:30",
        "07": "11:30 - 12:00",
        "08": "13:30 - 14:00",
        "09": "14:00 - 14:30",
        "10": "14:30 - 15:00",
        "11": "15:00 - 15:30",
        "12": "15:30 - 16:00",
        "13": "16:00 - 16:30",
        "14": "16:30 - 17:00",
        "15": "17:00 - 17:30",
    }
    return (
        <div className="detail-container p-5 fs-6 text-start">
            <Modal centered size="lg" show={show} onHide={handleClose}>
                <Booking
                    schedule={schedule}
                    doctor={data[0]}
                    book={book}
                    setBook={setBook}
                    handleClose={handleClose} />
            </Modal>
            {loading === false ?
                <>
                    {data?.length > 0 ?
                        <>
                            <div className="detail-title d-grid gap-5">
                                <Row>
                                    <Col className="d-flex justify-content-start align-items-center">
                                        <Button variant="outline-secondary" size="sm" onClick={() => handleBack()}>Quay lại</Button><br />
                                    </Col>
                                </Row>
                                <Row className="detail-summary d-flex align-items-center">
                                    <Col xs={3}>
                                        <Image src={data[0].image ? data[0].image : nullavatar} alt='avatar' roundedCircle width="250" height="250" />
                                    </Col>
                                    <Col className="detail-describe">
                                        <b>Bác sĩ {data[0].name}</b>
                                        <ReactMarkdown>{data[0].describe}</ReactMarkdown>
                                        <b>Số điện thoại</b>
                                        <p>{data[0].phoneNumber}</p>
                                        <b>Email</b>
                                        <p>{data[0].email}</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="detail-content mt-5 d-grid gap-5">
                                <div className="detail-booking d-grid gap-3" ref={componentRef}>
                                    <Row className="detail-day">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="outline-success" >{day.format('dd, DD/MM/YYYY')}</Dropdown.Toggle>
                                            <Dropdown.Menu >
                                                {dayArray.map((item, index) => {
                                                    return (
                                                        <Dropdown.Item key={index}
                                                            onClick={() => setDay(item)}>{item.format('dd, DD/MM/YYYY')}</Dropdown.Item>
                                                    )
                                                })
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Row>
                                    <Row className="">
                                        <Col>
                                            <FontAwesomeIcon icon={faCalendarDays} size="sm" />
                                            &nbsp;&nbsp;LỊCH KHÁM
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="detail-time">
                                            <div className="detail-timeframe">
                                                {scheduleLoading === false ?
                                                    <>
                                                        {scheduleData?.length > 0 ?
                                                            <>
                                                                <Row className="">
                                                                    {scheduleData.map((item, index) => {
                                                                        return (
                                                                            <Col className="mb-1" key={index} xs={3}>
                                                                                <Button onClick={() => { setSchedule(item); handleShow() }}
                                                                                    variant="outline-primary w-100">{time[item.time]}</Button>
                                                                            </Col>
                                                                        )
                                                                    })
                                                                    }
                                                                </Row>
                                                            </>
                                                            :
                                                            <>
                                                                <div className="fs-6 text-start">
                                                                    Có vẻ vào {day.format('dddd - DD/MM/YYYY')} bác sĩ khá bận, hãy hẹn bác sĩ hôm khác nhé
                                                                </div>
                                                            </>
                                                        }
                                                    </>
                                                    :
                                                    <></>
                                                }
                                            </div>
                                        </Col>
                                        <Col className="detail-address">
                                            <h6>ĐỊA CHỈ KHÁM</h6>
                                            <ReactMarkdown>{data[0].clinicAddress}</ReactMarkdown>
                                            <h6>GIÁ KHÁM</h6>
                                            <ReactMarkdown>{data[0].price}</ReactMarkdown>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="detail-description">
                                    <ReactMarkdown>{data[0].content}</ReactMarkdown>
                                </div>
                            </div>
                            <OverlayTrigger
                                placement="auto"
                                overlay={renderBookingTooltip}>
                                <div className="detail-to-order rounded-circle fs-4" onClick={() => componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </div>
                            </OverlayTrigger>
                        </>
                        :
                        <>
                            <div className="detail-nodata">
                                <DoctorNotfound />
                            </div>
                        </>
                    }
                </>
                :
                <>
                    <div className="detail-loading">
                        <Spinner animation="border" variant="primary" />
                        Đang tải dữ liệu
                    </div>
                </>
            }
        </div >
    )
}

export default Detail