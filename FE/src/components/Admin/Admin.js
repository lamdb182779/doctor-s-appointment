import { Col, Image, Row } from "react-bootstrap"

import welcome from "../../assets/images/welcome.png"

import "../../styles/Admin/Admin.scss"
import useFetch from "../../custom/fetch"

import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserDoctor,
    faUserPen,
    faUserPlus,
    faTableList,
} from "@fortawesome/free-solid-svg-icons"

import { NavLink } from "react-router-dom"
const Admin = (props) => {
    const { data, loading } = useFetch('http://localhost:8080/api/self', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: props.user.token,
        })
    })
    return (
        <div className="admin-container px-5 py-5">
            {loading === false ?
                <>
                    <div className="admin-title">
                        <Row>
                            <Col xs={2}>
                                <Image className="h-auto" src={welcome} alt="welcome" fluid />
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
                                                <Row className="text-start ms-2 mt-4" >
                                                    <Row>
                                                        <Col>
                                                            <FontAwesomeIcon icon={faUserPen} />
                                                            &nbsp;Quản lý nhân viên
                                                        </Col>
                                                        <Row className="fs-5 ms-2 mb-4 text-dark">
                                                            <Row className="mt-2">
                                                                <NavLink to='/admin/staff-list' className="text-dark text-decoration-none">
                                                                    <FontAwesomeIcon icon={faTableList} size="xs" />
                                                                    &nbsp;Xem danh sách nhân viên &gt;&gt;&gt;
                                                                </NavLink>
                                                            </Row>
                                                            <Row className="mt-1">
                                                                <NavLink to='/admin/staff-add' className="text-dark text-decoration-none">
                                                                    <FontAwesomeIcon icon={faUserPlus} size="xs" />
                                                                    &nbsp;Thêm nhân viên mới &gt;&gt;&gt;
                                                                </NavLink>
                                                            </Row>
                                                        </Row>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <FontAwesomeIcon className="me-2" icon={faUserDoctor} />
                                                            &nbsp;Quản lý bác sĩ
                                                        </Col>
                                                        <Row className="fs-5 ms-2 ">
                                                            <Row className="mt-2">
                                                                <NavLink to='/admin/doctor-list' className="text-dark text-decoration-none">
                                                                    <FontAwesomeIcon icon={faTableList} size="xs" />
                                                                    &nbsp;Xem danh sách bác sĩ &gt;&gt;&gt;
                                                                </NavLink>
                                                            </Row>
                                                            <Row className="mt-1">
                                                                <NavLink to='admin/doctor-add' className="text-dark text-decoration-none">
                                                                    <FontAwesomeIcon icon={faUserPlus} size="xs" />
                                                                    &nbsp;Thêm bác sĩ mới &gt;&gt;&gt;
                                                                </NavLink>
                                                            </Row>
                                                        </Row>
                                                    </Row>
                                                </Row>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col className="d-flex align-items-center">
                                        <div className="admin-info h-50 fs-5 d-grid gap-2 text-start">
                                            <Row>
                                                Họ và tên: {data[0].name}
                                            </Row>
                                            <Row>
                                                Số điện thoại: {data[0].phoneNumber}
                                            </Row>
                                            <Row>
                                                Email: {data[0].email}
                                            </Row>
                                            <Row>
                                                Address: {data[0].address}
                                            </Row>
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

const mapStateToProps = (state) => {
    return ({
        user: state.user,
    })
}

export default connect(mapStateToProps)(Admin)