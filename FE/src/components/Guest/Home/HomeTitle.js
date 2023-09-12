import { Button, Col, Row } from "react-bootstrap"

const HomeTitle = (props) => {
    return (
        <div className="home-title-container p-5">
            <h2>
                Chào mừng đến với chúng tôi
            </h2>
            <h3>
                Nền tảng y tế - Chăm sóc sức khỏe toàn diện
            </h3>
            <Row className="text-start p-5">
                <Col xs={9} className="d-grid gap-4">
                    <h6>
                        Hết sức cố gắng vì nụ cười của bạn và gia đình
                    </h6>
                    <h3>
                        Chúng tôi được thành lập dựa trên những điều mà bạn đang cần với dịch vụ tốt nhất
                    </h3>
                    <h6>
                        Hệ thống giúp bệnh nhân đặt lịch khám bệnh trực tuyến và giúp các bác sĩ quản lý lịch khám của mình hiệu quả hơn.
                    </h6>
                    <Row>
                        <Col>
                            <Button
                                onClick={() => props.infoRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}
                                size="" variant="primary" className="rounded-pill fw-bold me-3">Về chúng tôi</Button>
                            <Button size="" variant="outline-danger" className="rounded-pill fw-bold">Dịch vụ</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HomeTitle