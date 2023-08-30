import "../../styles/Staff/AppointmentList.scss"

import { Row, Col, Button, Table, Dropdown } from "react-bootstrap"

import { useNavigate } from "react-router-dom"

import { useState } from "react"

import useFetch from "../../custom/fetch"

import moment from "moment"
import "moment/locale/vi"

const AppointmentList = (props) => {
    const navigate = useNavigate()

    const today = moment().startOf("day")
    const [day, setDay] = useState(moment(today).add(1, "days"))
    const dayArray = [
        moment(today).add(1, "days"),
        moment(today).add(2, "days"),
        moment(today).add(3, "days"),
        moment(today).add(4, "days"),
        moment(today).add(5, "days"),
        moment(today).add(6, "days"),
        moment(today).add(7, "days"),
    ]
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

    const { data, loading } = useFetch(`http://localhost:8080/api/appointments?date=${day}`)
    return (
        <div className="appointment-list-container p-5">
            <div className="apponitment-list-title">
                <Row className="">
                    <Col xs={2} className="d-flex justify-content-start">
                        <Button onClick={() => navigate("/staff")} variant="outline-secondary" size="sm">Quay lại</Button>
                    </Col>
                    <Col xs={8} className="d-flex align-items-center justify-content-center fw-bold">
                        Danh sách lịch hẹn
                    </Col>
                </Row>
            </div>
            {loading === false ?
                <>
                    <div className="appointment-list-content mt-5">
                        <div className="appointment-list-day d-flex justify-content-start align-items-center fs-6 mb-3">
                            <b>Ngày làm việc:</b> &nbsp;
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-primary" size="sm">{day.format("dd, DD/MM/YYYY")}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {dayArray.map((item, index) => {
                                        return (
                                            <Dropdown.Item onClick={() => setDay(item)}
                                                key={index}>{item.format("dd, DD/MM/YYYY")}</Dropdown.Item>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        {data?.length > 0 ?
                            <>
                                <Table striped className="fs-6 ">
                                    <thead>
                                        <tr>
                                            <th>Bệnh nhân</th>
                                            <th>Điện thoại</th>
                                            <th>Thời gian</th>
                                            <th>Bác sĩ</th>
                                            <th>Trạng thái</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            return (
                                                <tr key={index} className="">
                                                    <th className="fw-normal">{item.patientName}</th>
                                                    <th className="fw-normal">{item.patientPhoneNumber}</th>
                                                    <th className="fw-normal">{time[item.time]}</th>
                                                    <th className="fw-normal">{item.Doctor.name}</th>
                                                    <th className="fw-normal">{[0, 1, 2].includes(item.status) ?
                                                        "Chưa xác nhận" : item.status === 3 ?
                                                            "Đã xác nhận" : item.status === 5 ?
                                                                "Đã hủy" : "Không rõ ràng"}</th>
                                                    <th className="fw-normal">
                                                        {[0, 1, 2].includes(item.status) ?
                                                            <><Button size="sm" variant="danger">Hủy</Button>&nbsp;
                                                                <Button size="sm" variant="primary">OK</Button></>
                                                            : item.status === 3 ?
                                                                <><Button size="sm" variant="danger">Xóa</Button>&nbsp;
                                                                    <Button size="sm" variant="primary">Sửa</Button></>
                                                                :
                                                                <></>
                                                        }
                                                    </th>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </Table>
                            </> :
                            <>
                                <div className="appointments-nodata">
                                    Hôm nay không có lịch khám đặt trước
                                </div>
                            </>
                        }
                    </div>
                </>
                :
                <></>
            }
        </div>
    )
}

export default AppointmentList