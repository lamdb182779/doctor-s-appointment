import "../../styles/Staff/Staff.scss"

import useFetch from "../../custom/fetch"

import nullavatar from "../../assets/images/nullavatarstaff.jpg"

import { Row, Col, Image, Accordion, Table } from "react-bootstrap"

import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    // faUserPen,
    faTableList,
} from "@fortawesome/free-solid-svg-icons"
import {
    // faUserPen,
    faCalendarDays,
} from "@fortawesome/free-regular-svg-icons"

import moment from "moment"
import "moment/locale/vi"
import useUtil from "../../custom/utils"

const Staff = (props) => {
    const { handleLink } = useUtil()
    const { data, loading } = useFetch("http://localhost:8080/api/self/info")
    return (
        <div className="staff-container px-5 py-5">
            {loading === false ?
                <>
                    <div className="staff-title">
                        <Row>
                            <Col className="text-center  fs-3">
                                XIN CHÀO,
                                CHÚC BẠN MỘT NGÀY TỐT LÀNH
                            </Col>
                        </Row>
                    </div>
                    {data?.length > 0 ?
                        <>
                            <div className="admin-content px-5 py-5">
                                <Row>
                                    <Col xs={3}>
                                        <Image className="h-auto w-100" src={nullavatar} alt="avatar" roundedCircle />
                                    </Col>
                                    <Col xs={3} />
                                    <Col xs={6}>
                                        <div className="admin-work">
                                            <Row className=" fs-4">
                                                <Row>
                                                    Bạn muốn làm gì đây?
                                                </Row>
                                                <Row className="text-start p-3" >
                                                    <Accordion>
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                <FontAwesomeIcon icon={faCalendarDays} />
                                                                &nbsp;Quản lý lịch hẹn
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <Row className="fs-5 text-dark d-grid gap-3">
                                                                    <Row className="">
                                                                        <NavLink onClick={event => handleLink(event)} to="/staff/appointments" className="text-dark text-decoration-none">
                                                                            <FontAwesomeIcon icon={faTableList} size="xs" />
                                                                            &nbsp;Xem danh sách lịch hẹn &gt;&gt;&gt;
                                                                        </NavLink>
                                                                    </Row>
                                                                </Row>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Row>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} className="d-flex align-items-center">
                                        <div className="admin-info fs-6 text-start w-75">
                                            <Table className="">
                                                <thead>
                                                    <tr>
                                                        <th>&nbsp;</th>
                                                        <th>&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Họ tên:</th>
                                                        <th className="fw-normal">{data[0].name}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Giới tính:</th>
                                                        <th className="fw-normal">
                                                            {data[0].gender === true ? "Nam"
                                                                : data[0].gender === false ? "Nữ"
                                                                    : "Trống"}
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th>Ngày sinh:</th>
                                                        <th className="fw-normal">{data[0].doB ? moment(data[0].doB).format("DD/MM/YYYY") : "Trống"}</th>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                    <Col xs={6} className="d-flex align-items-center">
                                        <div className="admin-info fs-6 text-start">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>&nbsp;</th>
                                                        <th>&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>SĐT:</th>
                                                        <th className="fw-normal">{data[0].phoneNumber}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Email:</th>
                                                        <th className="fw-normal">{data[0].email}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Địa chỉ:</th>
                                                        <th className="fw-normal">{data[0].address}</th>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                        :
                        <></>
                    }
                </>
                :
                <>
                </>
            }
        </div>
    )
}

export default Staff