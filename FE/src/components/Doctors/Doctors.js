import { useState } from "react"
import "../../styles/Doctors/Doctors.scss"

import { Button, Dropdown, Form, Col, Row, Spinner } from "react-bootstrap"

import { useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../custom/fetch"

import Doctor from "./Doctor"

import { connect } from "react-redux"

const Doctors = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    if (props.route.path === '/') {
        props.setRoute({ ...props.route, path: location.pathname + location.search, preRoute: { path: '/' } })
    }

    let { page, pagesize, name, specialtyID, clinicAddress } = Object.fromEntries(new URLSearchParams(location.search).entries())

    page = page !== undefined ? page : ''
    pagesize = pagesize !== undefined ? pagesize : ''
    name = name !== undefined ? name : ''
    specialtyID = specialtyID !== undefined ? specialtyID : ''
    clinicAddress = clinicAddress !== undefined ? clinicAddress : ''

    const { data: specialtiesData, loading: specialtiesLoading } = useFetch('http://localhost:8080/api/doctors/specialties')
    const { data, loading } = useFetch(`http://localhost:8080/api/doctors?page=${page}&pagesize=${pagesize}&specialtyID=${specialtyID}&name=${name}&clinicAddress=${clinicAddress}`)
    const [searchName, setSearchName] = useState(name ? name : '')
    const [searchAddress, setSearchAddress] = useState(clinicAddress ? clinicAddress : '')
    const [searchSpecialtyID, setSearchSpecialtyID] = useState(specialtyID ? specialtyID : '')
    const [pageNo, setPage] = useState(page ? page : 1)
    const [pageSize, setPageSize] = useState(pagesize ? pagesize : 5)

    const handleSearch = () => {
        let path = `/doctors?page=${pageNo}&pagesize=${pageSize}&specialtyID=${searchSpecialtyID}&name=${searchName}&clinicAddress=${searchAddress}`
        navigate(path)
    }

    const handleDoctor = (id) => {
        let path = `/doctor/${id}`
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
                                                {specialtiesData.find(item => item.id === searchSpecialtyID)?.name}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => setSearchSpecialtyID('')}>Tát cả</Dropdown.Item>
                                                {specialtiesData?.length > 0 ?
                                                    <>
                                                        {specialtiesData.map((item, index) => {
                                                            return (
                                                                <Dropdown.Item key={index} onClick={() => setSearchSpecialtyID(item.id)}>
                                                                    {item.name}
                                                                </Dropdown.Item>
                                                            )
                                                        })
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <Dropdown.Item>
                                                            Không có dữ liệu
                                                        </Dropdown.Item>
                                                    </>
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </>
                                    :
                                    <>
                                        Loading...
                                    </>
                                }
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className="doctors-name">
                                Tên:
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Nhập tên bác sĩ"
                                        className="me-2"
                                        aria-label="Search"
                                        size="sm"
                                        value={searchName}
                                        onChange={(event) => setSearchName(event.target.value)}
                                    />
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="doctors-address">
                            Địa chỉ:
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Nhập địa chỉ"
                                    className="me-2"
                                    aria-label="Search"
                                    size="sm"
                                    value={searchAddress}
                                    onChange={(event) => setSearchAddress(event.target.value)}
                                />
                            </Form>
                            <Button variant="outline-success"
                                onClick={() => handleSearch()}>Tìm kiếm</Button>
                        </div>
                    </Row>
                </div>
                <div className="doctors-list">
                    {loading === false ?
                        <>
                            {data?.length > 0 ?
                                <>
                                    {data.map((item, index) => {
                                        return (
                                            <div key={index} onClick={() => handleDoctor(item.id)}>
                                                <Doctor data={item} />
                                            </div>
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