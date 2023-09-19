import "../../../styles/Guest/Doctors/Booking.scss"
import { Col, Row, Dropdown, Button, FloatingLabel, Form } from "react-bootstrap"
import { timeframe, dayArray } from "../../../constants/variables/schedule"
import { useRef, useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../../custom/fetch"
import moment from "moment"
import "moment/locale/vi"
import { toast } from "react-toastify"
import ReCAPTCHA from "react-google-recaptcha"

const Booking = (props) => {
    const doctor = props.doctor
    const [day, setDay] = useState(dayArray[0])
    const [book, setBook] = useState(0)
    const [booked, setBooked] = useState(0)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [describe, setDescribe] = useState("")
    const [index, setIndex] = useState(0)
    const [captcha, setCaptcha] = useState("")
    const { data, loading } = useFetch(`http://localhost:8080/api/schedules?doctorId=${doctor.id}&date=${day}&${booked}`)
    const scheduleRef = useRef(null)
    const captchaRef = useRef(null)
    const timeRef = useRef(null)
    const slotRef = useRef(null)
    const appointmentRef = useRef(null)
    const handleTime = (event, idx) => {
        if (index !== idx) {
            timeRef.current.classList.add("scroll")
            slotRef.current.classList.add("scroll")
            setTimeout(() => {
                timeRef.current.classList.remove("scroll")
                slotRef.current.classList.remove("scroll")
                setIndex(idx)
            }, 200)
            const buttons = scheduleRef.current.querySelectorAll("button")
            buttons[index].classList.remove("active")
            event.target.classList.add("active")
        }
    }

    const handleDay = (date) => {
        if (date !== day) {
            scheduleRef.current.classList.add("flip")
            appointmentRef.current.classList.add("flip")
            setTimeout(() => {
                setIndex(0)
                setDay(date)
                scheduleRef.current.classList.remove("flip")
                appointmentRef.current.classList.remove("flip")
            }, [200])
        }
    }

    const { message, loading: appointmentLoading } = useFetch(book === 0 ? "" : `http://localhost:8080/api/appointments?${book}`, book === 0 ? {} : {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            patientName: name.trim(),
            patientPhoneNumber: phone.trim(),
            patientEmail: email.trim(),
            description: describe.trim(),
            scheduleId: data[index].id,
            currentNumber: data[index].currentNumber,
            captcha: captcha
        })
    })

    const handleReset = () => {
        setName("")
        setPhone("")
        setEmail("")
        setDescribe("")
        captchaRef.current.reset()
    }

    const handleBooking = () => {
        if ((name.trim() === "") || (phone.trim() === "") || (data[index].maxNumber - data[index].currentNumber === 0)) {
            toast.warning(((name.trim() === "") || (phone.trim() === "")) ? "Có thông tin cần thiết bị bỏ trống" :
                data[index].maxNumber - data[index].currentNumber === 0 ? "Đã hết chỗ trống trong khung giờ này" :
                    "Có lỗi xảy ra")
        }
        else {
            setCaptcha(captchaRef.current.getValue())
            captchaRef.current.reset()
            setBook(book + 1)
        }
    }

    useEffect(() => {
        if (appointmentLoading === false && book !== 0) {
            if (message === "ok") {
                toast.success("Đặt lịch thành công")
                setBooked(booked + 1)
                setBook(0)
            } else {
                toast.error(message === "server error!" ? "Lỗi Server" :
                    message === "full slot" ? "Đã hết chỗ trống khung giờ này" :
                        "Có lỗi xảy ra")
            }
        }
    }, [appointmentLoading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <Row className="booking-container px-3">
                <Col ref={scheduleRef} className="main-element p-5 m-1">
                    <h6 className="d-flex justify-content-between align-items-center">
                        <div>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            &nbsp;LỊCH KHÁM
                        </div>
                        <Dropdown className="d-inline">
                            <Dropdown.Toggle variant="success" size="sm" >{day.format("dd, DD/MM/YYYY")}</Dropdown.Toggle>
                            <Dropdown.Menu >
                                {dayArray.map((item, index) => {
                                    return (
                                        <Dropdown.Item key={index}
                                            onClick={() => handleDay(item)}>{item.format("dd, DD/MM/YYYY")}</Dropdown.Item>
                                    )
                                })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </h6>
                    <div className="schedule" >
                        {loading === false ?
                            <>
                                {data?.length > 0 ?
                                    <>
                                        <Row className="m-0">
                                            {data.map((item, index) => {
                                                return (
                                                    <Col className="mb-1 p-1" key={index} xs={4}>
                                                        <Button className={index === 0 ? "active" : ""} onClick={event => handleTime(event, index)}
                                                            size="sm" variant="outline-dark w-100">{timeframe[item.time]}</Button>
                                                    </Col>
                                                )
                                            })
                                            }
                                        </Row>
                                    </>
                                    :
                                    <>
                                        <div className="fs-6 text-center mt-5">
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
                <Col ref={appointmentRef} className="main-element p-5 m-1">
                    {loading === false ?
                        <>
                            {data?.length > 0 ?
                                <>
                                    <div>
                                        <h6>ĐẶT LỊCH</h6>
                                        <div className="d-flex"><div className="time" ref={timeRef}>{timeframe[data[index].time]}</div>&nbsp;- {moment(data[index].date).format("dddd - DD/MM/YYYY")}</div>
                                        <div className="d-flex">Hiện tại còn&nbsp;<div ref={slotRef} className="slot">{data[index].maxNumber - data[index].currentNumber}</div>&nbsp;chỗ trống tại khung giờ này</div>
                                        <Row className="mt-1">
                                            <Col className="">
                                                <FloatingLabel controlId="name" label="Tên">
                                                    <Form.Control
                                                        placeholder=""
                                                        type="text"
                                                        value={name}
                                                        onChange={event => setName(event.target.value)} />
                                                </FloatingLabel>
                                            </Col>
                                            <Col className="">
                                                <FloatingLabel controlId="phone" label="Điện thoại">
                                                    <Form.Control
                                                        placeholder=""
                                                        type="text"
                                                        value={phone}
                                                        onChange={event => setPhone(event.target.value)} />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="">
                                                <FloatingLabel controlId="email" label="Email">
                                                    <Form.Control
                                                        placeholder=""
                                                        type="text"
                                                        value={email}
                                                        onChange={event => setEmail(event.target.value)} />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="">
                                                <FloatingLabel controlId="describe" label="Mô tả ngắn gọn lý do khám">
                                                    <Form.Control
                                                        placeholder=""
                                                        value={describe}
                                                        type="text"
                                                        onChange={event => setDescribe(event.target.value)} />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="d-flex align-items-center">
                                                Vui lòng xác nhận:
                                            </Col>
                                            <Col>
                                                <div className="mt-2"></div>
                                                <ReCAPTCHA
                                                    ref={captchaRef}
                                                    sitekey={process.env.REACT_APP_SITE_KEY} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div className="d-flex justify-content-end">
                                                    <Button variant="danger" onClick={() => handleReset()} className="mt-2 me-1" size="sm">
                                                        Làm mới
                                                    </Button>
                                                    <Button onClick={() => handleBooking()} className="mt-2" size="sm">
                                                        Đặt lịch hẹn
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </>
                                :
                                <>
                                </>
                            }
                        </>
                        :
                        <>
                        </>
                    }
                </Col>
            </Row>
        </>
    )
}

export default Booking