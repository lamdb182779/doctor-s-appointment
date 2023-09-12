import "../../../styles/Guest/Doctors/Booking.scss"

import { Modal, Button, Row, Col, Image, Form, FloatingLabel } from "react-bootstrap"

import moment from "moment"
import "moment/locale/vi"

import { useEffect, useState } from "react"

import useFetch from "../../../custom/fetch"

import Warning from "../../General/Dialog/Warning"

import nullavatar from "../../../assets/images/nullavatardoctor.jpg"

import { toast } from "react-toastify"
const Booking = (props) => {

    const schedule = props.schedule || {}
    const doctor = props.doctor || {}
    const [book, setBook] = useState(0)
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
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const [showWarning, setShowWarning] = useState(false)

    const { message, loading } = useFetch(book === 0 ? "" : `http://localhost:8080/api/appointments?${book}`, book === 0 ? {} : {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            patientName: name.trim(),
            patientPhoneNumber: phone.trim(),
            patientEmail: email.trim(),
            description: description.trim(),
            date: schedule.date,
            time: schedule.time,
            scheduleId: schedule.id,
            doctorId: schedule.doctorId,
            currentNumber: schedule.currentNumber,
        })
    })
    const handleBook = () => {
        if ((name.trim() === "") || (phone.trim() === "") || (schedule.maxNumber - schedule.currentNumber === 0)) {
            toast.warning(((name.trim() === "") || (phone.trim() === "")) ? "Có thông tin cần thiết bị bỏ trống" :
                schedule.maxNumber - schedule.currentNumber === 0 ? "Đã hết chỗ trống trong khung giờ này" :
                    "Có lỗi xảy ra")
        }
        else {
            setShowWarning(true)
        }
    }
    const handleYes = () => {
        setBook(book + 1)
    }
    useEffect(() => {
        if (loading === false && book !== 0) {
            if (message === "ok") {
                toast.success("Đặt lịch thành công")
                props.setBook(props.book + 1)
                setBook(0)
            } else {
                toast.error(message === "server error!" ? "Lỗi Server" :
                    message === "full slot" ? "Đã hết chỗ trống khung giờ này" :
                        "Có lỗi xảy ra")
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <Warning
                show={showWarning}
                setShow={setShowWarning}
                handleYes={handleYes}
                body="Bạn có chắc chắn muốn đặt lịch không?" />
            <Modal.Header closeButton>
                <Modal.Title>
                    Thông tin đặt lịch hẹn bác sĩ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="booking-content d-grid gap-3">
                <Row className="d-flex align-items-center">
                    <Col xs={2}>
                        <Image src={doctor.image ? doctor.image : nullavatar} alt="avatar" roundedCircle className="w-100 h-auto" />
                    </Col>
                    <Col>
                        <b>Bác sĩ {doctor.name}</b><br />
                        {time[schedule.time]} - {moment(schedule.date).format("dddd - DD/MM/YYYY")}<br />
                        Hiện tại còn {schedule.maxNumber - schedule.currentNumber} chỗ tại khung giờ này<br />
                        Đặt lịch miễn phí
                    </Col>
                </Row>
                <Row >
                    <Col xs={4}>
                        <FloatingLabel controlId="name" label="Họ và tên*">
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={event => setName(event.target.value)}
                                size="sm" />
                        </FloatingLabel>
                    </Col>
                    <Col xs={4}>
                        <FloatingLabel controlId="phone" label="Số điện thoại*">
                            <Form.Control
                                type="text"
                                value={phone}
                                onChange={event => setPhone(event.target.value)}
                                size="sm" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="email" label="Email">
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                size="sm" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel controlId="description" label="Mô tả ngắn gọn lý do khám">
                            <Form.Control
                                rows={5}
                                value={description}
                                as="textarea"
                                onChange={event => setDescription(event.target.value)} />
                        </FloatingLabel>
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

export default Booking