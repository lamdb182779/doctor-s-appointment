import { Accordion, Col, Image, Row, Table } from "react-bootstrap"

import welcome from "../../assets/images/welcome.png"

import "../../styles/Admin/Admin.scss"
import useFetch from "../../custom/fetch"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserDoctor,
    faUserPen,
    faUserPlus,
    faTableList,
} from "@fortawesome/free-solid-svg-icons"

import { NavLink } from "react-router-dom"
const Admin = (props) => {
    const { data, loading } = useFetch("http://localhost:8080/api/self/info")
    return (
        <div className="admin-container px-5 py-5">
            {loading === false ?
                <>
                    <div className="admin-title">
                        <Row>
                            <Col xs={2}>
                                <Image className="h-auto w-100" src={welcome} alt="welcome" fluid />
                            </Col>
                            <Col className="text-start d-flex align-items-center fs-3">
                                XIN CHÀO ADMIN,
                                CHÚC BẠN MỘT NGÀY TỐT LÀNH
                            </Col>
                        </Row>
                    </div>
                    {data?.length > 0 ?
                        <>
                            <div className="admin-content px-5 py-5">
                                <Row>
                                    <Col xs={6}>
                                        <div className="admin-work">
                                            <Row className=" fs-4">
                                                <Row>
                                                    Bạn muốn làm gì đây?
                                                </Row>
                                                <Row className="text-start p-3" >
                                                    <Accordion >
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                <FontAwesomeIcon icon={faUserPen} />
                                                                &nbsp;Quản lý nhân viên
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <Row className="fs-5 text-dark d-grid gap-3">
                                                                    <Row className="">
                                                                        <NavLink to="/admin/staff/list" className="text-dark text-decoration-none">
                                                                            <FontAwesomeIcon icon={faTableList} size="xs" />
                                                                            &nbsp;Xem danh sách nhân viên &gt;&gt;&gt;
                                                                        </NavLink>
                                                                    </Row>
                                                                    <Row className="">
                                                                        <NavLink to="/admin/staff/add" className="text-dark text-decoration-none">
                                                                            <FontAwesomeIcon icon={faUserPlus} size="xs" />
                                                                            &nbsp;Thêm nhân viên mới &gt;&gt;&gt;
                                                                        </NavLink>
                                                                    </Row>
                                                                </Row>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="q">
                                                            <Accordion.Header>
                                                                <FontAwesomeIcon className="" icon={faUserDoctor} />
                                                                &nbsp;Quản lý bác sĩ
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <Row className="fs-5 text-dark d-grid gap-3 ">
                                                                    <Row className="">
                                                                        <NavLink to="/admin/doctor/list" className="text-dark text-decoration-none">
                                                                            <FontAwesomeIcon icon={faTableList} size="xs" />
                                                                            &nbsp;Xem danh sách bác sĩ &gt;&gt;&gt;
                                                                        </NavLink>
                                                                    </Row>
                                                                    <Row className="">
                                                                        <NavLink to="/admin/doctor/add" className="text-dark text-decoration-none">
                                                                            <FontAwesomeIcon icon={faUserPlus} size="xs" />
                                                                            &nbsp;Thêm bác sĩ mới &gt;&gt;&gt;
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
                                    <Col className="d-flex align-items-center">
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
                                                        <th>Họ tên:</th>
                                                        <th className="fw-normal">{data[0].name}</th>
                                                    </tr>
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

export default Admin