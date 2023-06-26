import { useState } from "react"
import "../../styles/Doctors/Doctors.scss"

import { Button, Dropdown, Form, Col, Row } from "react-bootstrap"

import { useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../custom/fetch"

// import Doctor from "./Doctor"

import { connect } from "react-redux"

const Doctors = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    if (props.route.path === '/') {
        props.setRoute({ ...props.route, path: location.pathname + location.search })
    }

    const { page, pagesize, name, specialtyID, clinicAddress } = Object.fromEntries(new URLSearchParams(location.search).entries())
    const { data: specialtiesData, loading: specialtiesLoading } = useFetch('http://localhost:8080/api/doctors/specialties')

    const [searchName, setSearchName] = useState(name ? name : '')
    const [searchAddress, setSearchAddress] = useState(clinicAddress ? clinicAddress : '')
    const [searchSpecialtyID, setSearchSpecialtyID] = useState(specialtyID ? specialtyID : '')
    const [pageNo, setPage] = useState(page ? page : 1)
    const [pageSize, setPageSize] = useState(pagesize ? pagesize : 5)

    const handleSearch = (id, name, address) => {
        let path = `/doctors?specialtyID=${id}&name=${name}&clinicAddress=${address}`
        navigate(path)
    }

    const handleBack = () => {
        if (props.route.preRoute) {
            let scrollY = props.route.scrollY
            navigate(props.route.preRoute.path)
            props.setRoute(props.route.preRoute)
            setTimeout(() => {
                window.scrollTo(0, scrollY)
            }, 250)
        } else {
            navigate('/')
            window.scrollTo(0, 0)
        }
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
                                                {specialtiesData?.length > 0 ?
                                                    <>
                                                        {specialtiesData.map((item, index) => {
                                                            return (
                                                                <Dropdown.Item id={index} onClick={() => setSearchSpecialtyID(item.id)}>
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
                                onClick={() => handleSearch(searchSpecialtyID, searchName, searchAddress)}>Tìm kiếm</Button>
                        </div>
                    </Row>
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