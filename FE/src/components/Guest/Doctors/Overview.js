import "../../../styles/Guest/Doctors/Overview.scss"
import { Col, Row, OverlayTrigger, Dropdown, Button, Tooltip, Modal } from "react-bootstrap"

import ReactMarkdown from "react-markdown"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCalendarDays,
    faLocationDot,
    faMoneyBillWave,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons"

import { timeframe, dayArray } from "../../../constants/variables/schedule.js"
import useGet from "../../../custom/get"

import { useRef, useState } from "react"
import Appointment from "./Appointment"

import "moment/locale/vi"

const Overview = (props) => {
    const doctor = props.doctor
    const componentRef = useRef(null)

    const [day, setDay] = useState(dayArray[0])
    const [index, setIndex] = useState(-1)

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [booked, setBooked] = useState(0)

    const { data, loading } = useGet(`/schedules?doctorId=${doctor.id}&date=${day}&${booked}`)
    const renderBookingTooltip = (props) => (
        <Tooltip id="booking-tooltip" {...props}>
            Đặt lịch ngay
        </Tooltip>
    )
    return (
        <>
            <div className="detail-booking d-grid gap-3" ref={componentRef}>
                <Row className="detail-day">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-success" >{day.format("dd, DD/MM/YYYY")}</Dropdown.Toggle>
                        <Dropdown.Menu >
                            {dayArray.map((item, index) => {
                                return (
                                    <Dropdown.Item key={index}
                                        onClick={() => setDay(item)}>{item.format("dd, DD/MM/YYYY")}</Dropdown.Item>
                                )
                            })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row>
                    <Col className="detail-time">
                        <Row className="">
                            <Col>
                                <h6>
                                    <FontAwesomeIcon icon={faCalendarDays} size="sm" />
                                    &nbsp;LỊCH KHÁM
                                </h6>
                            </Col>
                        </Row>
                        <div className="detail-timeframe">
                            {loading === false ?
                                <>
                                    {data?.length > 0 ?
                                        <>
                                            <Row className="">
                                                {data.map((item, index) => {
                                                    return (
                                                        <Col className="p-1" key={index} xs={3}>
                                                            <Button size="sm" onClick={() => { setIndex(index); handleShow() }}
                                                                variant="outline-primary w-100">{timeframe[item.time]}</Button>
                                                        </Col>
                                                    )
                                                })
                                                }
                                            </Row>
                                        </>
                                        :
                                        <>
                                            <div className="fs-6 text-start">
                                                Có vẻ vào {day.format("dddd - DD/MM/YYYY")} bác sĩ khá bận, hãy hẹn bác sĩ hôm khác nhé
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
                        <h6>
                            <FontAwesomeIcon icon={faLocationDot} size="sm" />
                            &nbsp;ĐỊA CHỈ KHÁM
                        </h6>
                        <ReactMarkdown>{doctor.clinicAddress}</ReactMarkdown>
                        <h6>
                            <FontAwesomeIcon icon={faMoneyBillWave} size="sm" />
                            &nbsp;GIÁ KHÁM
                        </h6>
                        <ReactMarkdown>{doctor.price}</ReactMarkdown>
                    </Col>
                </Row>
            </div>
            <div className="detail-description">
                <ReactMarkdown>{doctor.content}</ReactMarkdown>
                <OverlayTrigger
                    placement="auto"
                    overlay={renderBookingTooltip}>
                    <div className="detail-to-order rounded-circle fs-4" onClick={() => componentRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                </OverlayTrigger>
            </div>
            <Modal centered size="lg" show={show} onHide={handleClose}>
                <Appointment
                    schedule={data[index]}
                    doctor={doctor}
                    booked={booked}
                    setBooked={setBooked}
                    handleClose={handleClose} />
            </Modal>
        </>
    )
}

export default Overview