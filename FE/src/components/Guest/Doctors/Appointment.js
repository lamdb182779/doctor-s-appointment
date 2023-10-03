import "../../../styles/Guest/Doctors/Appointment.scss"

import { Modal, Button, Row, Col, Image, Form, FloatingLabel } from "react-bootstrap"

import moment from "moment"
import "moment/locale/vi"

import { useEffect, useRef, useState } from "react"

import nullavatar from "../../../assets/images/nullavatardoctor.jpg"
import { timeframe } from "../../../constants/variables/schedule"

import { toast } from "react-toastify"

import ReCAPTCHA from "react-google-recaptcha"

import useConfirm from "../../../custom/confirm"
import usePost from "../../../custom/post"
const Appointment = (props) => {
    const { showConfirm } = useConfirm()
    const captchaRef = useRef(null)
    const schedule = props.schedule
    const doctor = props.doctor
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [describe, setDescribe] = useState("")
    const [input, setInput] = useState({})

    const { loading, message } = usePost("/appointments", input)

    const handleBook = () => {
        if ((name.trim() === "")
            || (phone.trim() === "")
            || (schedule.maxNumber - schedule.currentNumber === 0)) {
            toast.warning(((name.trim() === "") || (phone.trim() === "")) ? "Có thông tin cần thiết bị bỏ trống" :
                schedule.maxNumber - schedule.currentNumber === 0 ? "Đã hết chỗ trống trong khung giờ này" :
                    "Có lỗi xảy ra")
        }
        else {
            showConfirm({
                body: "Bạn có chắc muốn đặt lịch không?",
                accept: () => {
                    setInput({
                        patientName: name.trim(),
                        patientPhoneNumber: phone.trim(),
                        patientEmail: email.trim(),
                        describe: describe.trim(),
                        scheduleId: schedule.id,
                        currentNumber: schedule.currentNumber,
                        captcha: captchaRef.current.getValue()
                    })
                    captchaRef.current.reset()
                }
            })
        }
    }
    useEffect(() => {
        if (loading === false && message === "ok") {
            toast.success("Đặt lịch thành công")
            props.setBooked(props.booked + 1)
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>
                    Thông tin đặt lịch hẹn bác sĩ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="appointment-content d-grid gap-3">
                <Row className="d-flex align-items-center">
                    <Col xs={2}>
                        <Image src={doctor.image ? doctor.image : nullavatar} alt="avatar" roundedCircle className="w-100 h-auto" />
                    </Col>
                    <Col>
                        <b>Bác sĩ {doctor.name}</b><br />
                        {timeframe[schedule.time]} - {moment(schedule.date).format("dddd - DD/MM/YYYY")}<br />
                        Hiện tại còn {schedule.maxNumber - schedule.currentNumber} chỗ tại khung giờ này<br />
                        Đặt lịch miễn phí
                    </Col>
                </Row>
                <Row >
                    <Col xs={4}>
                        <FloatingLabel controlId="name" label="Họ và tên*">
                            <Form.Control
                                placeholder=""
                                type="text"
                                value={name}
                                onChange={event => setName(event.target.value)}
                                size="sm" />
                        </FloatingLabel>
                    </Col>
                    <Col xs={4}>
                        <FloatingLabel controlId="phone" label="Số điện thoại*">
                            <Form.Control
                                placeholder=""
                                type="text"
                                value={phone}
                                onChange={event => setPhone(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="email" label="Email">
                            <Form.Control
                                placeholder=""
                                type="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                size="sm" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel controlId="describe" label="Mô tả ngắn gọn lý do khám">
                            <Form.Control
                                placeholder=""
                                value={describe}
                                as="textarea"
                                onChange={event => setDescribe(event.target.value)} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Vui lòng xác nhận:
                        <ReCAPTCHA
                            ref={captchaRef}
                            sitekey={process.env.REACT_APP_SITE_KEY} />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.handleClose()} variant="outline-secondary">Hủy bỏ</Button>
                <Button onClick={() => handleBook()} variant="primary">Xác nhận </Button>
            </Modal.Footer>
        </>
    )
}

export default Appointment