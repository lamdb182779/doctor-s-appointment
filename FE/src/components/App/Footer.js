import "../../styles/App/Footer.scss"

import useFetch from "../../custom/fetch"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPhone,
    faEnvelope,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons"

import { Image, Spinner, Row, Col } from "react-bootstrap"

const Footer = (props) => {
    const { data, loading } = useFetch("http://localhost:8080/api")
    return (
        <>
            <Row className="w-100 p-5 fs-6">
                <Col xs={6} className="d-grid gap-3 App-info px-5">
                    <Row className="App-logo" >
                        <Col>
                            <a href="/"><Image src={props.logo} alt="logo" fluid /></a>
                            <br />
                            Doctor Booking - Nền tảng đặt lịch hẹn khám trực tuyến
                        </Col>
                    </Row>
                    {loading === false ?
                        <>
                            {data?.length > 0 ?
                                <>
                                    <Row className="App-address">
                                        <Col>
                                            <FontAwesomeIcon icon={faLocationDot} size="sm" />
                                            <b>Địa chỉ</b><br />
                                            {data[0].address}
                                        </Col>
                                    </Row>
                                    <Row className="App-email">
                                        <Col>
                                            <FontAwesomeIcon icon={faEnvelope} size="sm" />
                                            <b>Email</b><br />
                                            <a rel="noopener noreferrer" target="_blank" href="https://mail.google.com/mail/?view=cm&to=lamxxxxxx79@gmail.com">
                                                {data[0].email}
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row className="App-phone">
                                        <Col>
                                            <FontAwesomeIcon icon={faPhone} size="sm" />
                                            <b>Điện thoại</b><br />
                                            {data[0].phoneNumber}
                                        </Col>
                                    </Row>
                                </>
                                :
                                <>
                                    <div className="App-nodata">
                                        Không tải được dữ liệu
                                    </div>
                                </>
                            }
                        </>
                        :
                        <>
                            <div className="App-loading">
                                <Spinner animation="border" variant="light" />
                                Đang tải dữ liệu...
                            </div>
                        </>
                    }
                </Col>
                <Col xs={6} className="App-rules d-flex align-items-center justify-content-end">
                    <Row className="w-50 d-grid gap-1">
                        <Row>Liên hệ hợp tác</Row>
                        <Row>Danh bạ y tế</Row>
                        <Row>Sức khỏe doanh nghiệp</Row>
                        <Row>Tuyển dụng</Row>
                        <Row>Câu hỏi thường gặp</Row>
                        <Row>Điều khoản</Row>
                        <Row>Chính sách bảo mật</Row>
                        <Row>Quy chế hoạt động</Row>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Footer