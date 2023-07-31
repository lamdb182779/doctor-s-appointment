import { useState, useRef } from "react"
import "../../styles/Doctors/Doctors.scss"

import { Button, Dropdown, Form, Col, Row, Spinner } from "react-bootstrap"

import { useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../custom/fetch"

import Doctor from "./Doctor"
import Page from "../Page/Page"

import { connect } from "react-redux"

const Doctors = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const componentRef = useRef(null)

    if (props.route.path === '/') {
        props.setRoute({ ...props.route, path: location.pathname + location.search, preRoute: { path: '/' } })
    }

    let { page, pagesize, name, specialtyID, clinicAddress } = Object.fromEntries(new URLSearchParams(location.search).entries())

    page = page ? parseInt(page) : 1
    pagesize = pagesize !== undefined ? parseInt(pagesize) : 5
    name = name !== undefined ? name : ''
    specialtyID = specialtyID !== undefined ? specialtyID : ''
    clinicAddress = clinicAddress !== undefined ? clinicAddress : ''

    const { data: specialtiesData, loading: specialtiesLoading } = useFetch('http://localhost:8080/api/doctors/specialties')
    const { data, loading } = useFetch(`http://localhost:8080/api/doctors?page=${page}&pagesize=${pagesize}&specialtyID=${specialtyID}&name=${name}&clinicAddress=${clinicAddress}`)
    const [searchName, setSearchName] = useState(name ? name : '')
    const [searchAddress, setSearchAddress] = useState(clinicAddress ? clinicAddress : '')

    const handleSearch = () => {
        let path = `/doctors?page=1&pagesize=${pagesize}&specialtyID=${specialtyID}&name=${searchName.trim()}&clinicAddress=${searchAddress.trim()}`
        props.setRoute({
            preRoute: props.route.preRoute,
            scrollY: props.route.scrollY ? props.route.scrollY : 0,
            path: path
        })
        navigate(path)
    }

    const handlePage = (page) => {
        let path = `/doctors?page=${page}&pagesize=${pagesize}&specialtyID=${specialtyID}&name=${name}&clinicAddress=${clinicAddress}`
        props.setRoute({
            preRoute: props.route.preRoute,
            scrollY: props.route.scrollY ? props.route.scrollY : 0,
            path: path
        })
        navigate(path)
        componentRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handlePagesize = (pagesize) => {
        let path = `/doctors?page=1&pagesize=${pagesize}&specialtyID=${specialtyID}&name=${name}&clinicAddress=${clinicAddress}`
        props.setRoute({
            preRoute: props.route.preRoute,
            scrollY: props.route.scrollY ? props.route.scrollY : 0,
            path: path
        })
        navigate(path)
    }

    const handleSpecialty = (specialtyID) => {
        let path = `/doctors?page=1&pagesize=${pagesize}&specialtyID=${specialtyID}&name=${name}&clinicAddress=${clinicAddress}`
        props.setRoute({
            preRoute: props.route.preRoute,
            scrollY: props.route.scrollY ? props.route.scrollY : 0,
            path: path
        })
        navigate(path)
    }

    const handleDoctor = (id) => {
        let path = `/doctors/${id}`
        props.setRoute({
            preRoute: props.route,
            path: path,
            scrollY: window.scrollY
        })
        navigate(path)
        window.scrollTo(0, 0);
    }

    const handleBack = () => {
        let scrollY = props.route.scrollY
        navigate(props.route.preRoute.path)
        props.setRoute(props.route.preRoute)
        setTimeout(() => {
            window.scrollTo(0, scrollY)
        }, 250)
    }

    return (
        <div className="doctors-container">
            <div className="doctors-title">
                <Button variant="outline-secondary" size="sm" onClick={() => handleBack()}>Quay lại</Button>
                <b>Danh sách các bác sĩ </b>
            </div>
            <div className="doctors-content">
                <div className="doctors-search">
                    <Row>
                        <Col>
                            <div className="doctors-specialty">
                                Chuyên khoa:
                                {specialtiesLoading === false ?
                                    <>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="outline-dark" size="sm">
                                                {specialtiesData.find(item => item.id === specialtyID)?.name}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu style={{ height: '50vh', overflowY: 'scroll' }} >
                                                <Dropdown.Item onClick={() => handleSpecialty('')}>Tất cả</Dropdown.Item>
                                                {specialtiesData?.length > 0 ?
                                                    <>
                                                        {specialtiesData.map((item, index) => {
                                                            return (
                                                                <Dropdown.Item key={index} onClick={() => handleSpecialty(item.id)}>
                                                                    {item.name}
                                                                </Dropdown.Item>
                                                            )
                                                        })
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <Dropdown.Item>
                                                            &nbsp;Không có dữ liệu
                                                        </Dropdown.Item>
                                                    </>
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </>
                                    :
                                    <>
                                        &nbsp;Loading...
                                    </>
                                }
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className="doctors-name">
                                Tên:
                                <Form.Control
                                    type="search"
                                    placeholder="Nhập tên bác sĩ"
                                    className="me-2"
                                    aria-label="Search"
                                    size="sm"
                                    value={searchName}
                                    onChange={(event) => setSearchName(event.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="doctors-address">
                            Địa chỉ:
                            <Form.Control
                                type="search"
                                placeholder="Nhập địa chỉ"
                                className="me-2"
                                aria-label="Search"
                                size="sm"
                                value={searchAddress}
                                onChange={(event) => setSearchAddress(event.target.value)}
                            />
                            <Button variant="outline-success"
                                onClick={() => handleSearch()}>Tìm kiếm</Button>
                        </div>
                    </Row>
                </div>
                <div className="doctors-list" ref={componentRef}>
                    <div className="doctors-viewmode">
                        Chế độ xem:
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" size="sm">
                                {pagesize} kết quả/ trang
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item onClick={() => handlePagesize(5)}>5 kết quả/trang</Dropdown.Item>
                                <Dropdown.Item onClick={() => handlePagesize(10)}>10 kết quả/trang</Dropdown.Item>
                                <Dropdown.Item onClick={() => handlePagesize(15)}>15 kết quả/trang</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {loading === false ?
                        <>
                            {data?.length > 1 ?
                                <>
                                    {data.map((item, index) => {
                                        if (index !== data.length - 1) {
                                            return (
                                                <div key={index} onClick={() => handleDoctor(item.id)}>
                                                    <Doctor data={item} />
                                                </div>
                                            )
                                        }
                                        let len = parseInt((item - 1) / pagesize + 1)
                                        return (
                                            <Page page={page > len ? len : page}
                                                len={len}
                                                handlePage={handlePage} />
                                        )
                                    })
                                    }
                                </>
                                :
                                <>
                                    <div className="doctors-nodata">
                                        Không có dữ liệu
                                    </div>
                                </>
                            }
                        </>
                        :
                        <>
                            <div className="doctors-loading">
                                <Spinner animation="border" variant="primary" />
                                Đang tải dữ liệu...
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctors)