import "../../styles/Doctors/Detail.scss"

import { Button, Col, Dropdown, Image, Row, Spinner, OverlayTrigger, Tooltip } from "react-bootstrap"

import { useNavigate, useParams, useLocation } from "react-router-dom"

import { useRef } from "react"

import { connect } from "react-redux"

import useFetch from "../../custom/fetch"

import ReactMarkdown from "react-markdown"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarDays,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import DoctorNotfound from "../Notfound/DoctorNotfound"

const Detail = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    let { id } = useParams()
    const componentRef = useRef(null)
    if (props.route.path === '/') {
        props.setRoute({ ...props.route, path: location.pathname + location.search, preRoute: { path: '/' } })
    }
    const handleBack = () => {
        let scrollY = props.route.scrollY
        navigate(props.route.preRoute.path)
        props.setRoute(props.route.preRoute)
        setTimeout(() => {
            window.scrollTo(0, scrollY)
        }, 250)
    }

    const { data, loading } = useFetch(`http://localhost:8080/api/doctors/${id}`)

    const renderBookingTooltip = (props) => (
        <Tooltip id="booking-tooltip" {...props}>
            Đặt lịch ngay
        </Tooltip>
    )
    return (
        <div className="detail-container">
            {loading === false ?
                <>
                    {data?.length > 0 ?
                        <>
                            <div className="detail-title">
                                <Button variant="outline-secondary" size="sm" onClick={() => handleBack()}>Quay lại</Button><br />
                                <div className="detail-summary">
                                    <Image src={data[0].image} alt='avatar' roundedCircle width="250" height="250" />
                                    <div className="detail-describe">
                                        <b>Bác sĩ {data[0].name}</b>
                                        <ReactMarkdown>{data[0].describe}</ReactMarkdown>
                                        <b>Số điện thoại</b>
                                        <p>{data[0].phoneNumber}</p>
                                        <b>Email</b>
                                        <p>{data[0].email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-content">
                                <div className="detail-booking" ref={componentRef}>
                                    <div className="detail-time">
                                        <div className="detail-day">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-success" size="sm"></Dropdown.Toggle>
                                                <Dropdown.Item></Dropdown.Item>
                                            </Dropdown>
                                        </div>
                                        <div className="detail-cal">
                                            <FontAwesomeIcon icon={faCalendarDays} size="sm" />
                                            &nbsp;&nbsp;LỊCH KHÁM
                                        </div>
                                        <div className="detail-timeframe">
                                            <Row>
                                                <Col>
                                                    <Button variant="outline-primary">8:00 - 8:30</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">8:30 - 9:00</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">9:00 - 9:30</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">9:30 - 10:00</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button variant="outline-primary">10:00 - 10:30</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">10:30 - 11:00</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">11:00 - 11:30</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">11:30 - 12:00</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button variant="outline-primary">13:30 - 14:00</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">14:00 - 14:30</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">14:30 - 15:00</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">15:00 - 15:30</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button variant="outline-primary">15:30 - 16:00</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">16:00 - 16:30</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">16:30 - 17:00</Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-primary">17:00 - 17:30</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className="detail-address">
                                        <h6>ĐỊA CHỈ KHÁM</h6>
                                        <ReactMarkdown>{data[0].clinicAddress}</ReactMarkdown>
                                        <h6>GIÁ KHÁM</h6>
                                        <ReactMarkdown>{data[0].price}</ReactMarkdown>

                                    </div>
                                </div>
                                <div className="detail-description">
                                    <ReactMarkdown>{data[0].content}</ReactMarkdown>

                                </div>
                            </div>
                            <OverlayTrigger
                                placement="auto"
                                overlay={renderBookingTooltip}>
                                <div className="detail-to-order" onClick={() => componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </div>
                            </OverlayTrigger>
                        </>
                        :
                        <>
                            <div className="detail-nodata">
                                <DoctorNotfound />
                            </div>
                        </>
                    }
                </>
                :
                <>
                    <div className="detail-loading">
                        <Spinner animation="border" variant="primary" />
                        Đang tải dữ liệu
                    </div>
                </>
            }
        </div >
    )
}

const mapStateToProps = (state) => {
    return ({
        route: state.route
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute: (route) => dispatch({ type: 'SET_ROUTE', payload: route }),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)