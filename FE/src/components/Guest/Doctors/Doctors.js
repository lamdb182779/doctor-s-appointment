import { useState, useRef } from "react"
import "../../../styles/Guest/Doctors/Doctors.scss"

import { Button, Dropdown, Form, Col, Row, Spinner } from "react-bootstrap"

import { useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../../custom/fetch"
import useUtil from "../../../custom/utils"

import Doctor from "./Doctor"
import Page from "../../General/Page/Page"

const Doctors = (props) => {
    const { handleNavigate } = useUtil()
    const location = useLocation()
    const componentRef = useRef(null)

    let { specialtyID } = Object.fromEntries(new URLSearchParams(location.search).entries())

    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(5)
    const [name, setName] = useState("")
    const [specialty, setSpecialty] = useState(specialtyID !== undefined ? specialtyID : "")
    const [clinicAddress, setClinicAddress] = useState("")

    const { data: specialtiesData, loading: specialtiesLoading } = useFetch("http://localhost:8080/api/doctors/specialties")
    const { data, loading } = useFetch(`http://localhost:8080/api/doctors?page=${page}&pagesize=${pagesize}&specialtyID=${specialty}&name=${name}&clinicAddress=${clinicAddress}`)
    const [searchName, setSearchName] = useState(name ? name : "")
    const [searchAddress, setSearchAddress] = useState(clinicAddress ? clinicAddress : "")

    const handleSearch = () => {
        setName(searchName)
        setClinicAddress(searchAddress)
        setPage(1)
    }

    const handlePage = (page) => {
        setPage(page)
        componentRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const handlePagesize = (pagesize) => {
        setPagesize(pagesize)
        setPage(1)
    }

    const handleSpecialty = (specialtyID) => {
        setSpecialty(specialtyID)
        setPage(1)
    }

    const handleDoctor = (id) => {
        let path = `/doctors/${id}`
        handleNavigate(path)
    }

    const handleBack = () => {
        handleNavigate(-1)
    }

    return (
        <div className="doctors-container p-5">
            <div className="doctors-title d-flex justify-content-between">
                <Button variant="outline-secondary" size="sm" onClick={() => handleBack()}>Quay lại</Button>
                <b>Danh sách các bác sĩ </b>
                <div></div>
            </div>
            <div className="doctors-content mt-5">
                <div className="doctors-search fs-6 fw-bold text-start d-grid gap-3">
                    <Row className="d-flex align-items-center">
                        <Col xs={3}>
                            <Row className="doctors-specialty d-flex align-items-center">
                                <Col xs={4}>
                                    Chuyên khoa:
                                </Col>
                                <Col xs={8}>
                                    {specialtiesLoading === false ?
                                        <>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-dark" size="sm">
                                                    {specialtiesData.find(item => item.id === specialty)?.name}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu style={{ height: "50vh", overflowY: "scroll" }} >
                                                    <Dropdown.Item onClick={() => handleSpecialty("")}>Tất cả</Dropdown.Item>
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
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={7}>
                            <Row className="doctors-name d-flex align-items-center">
                                <Col xs={1}>
                                    Tên:
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="search"
                                        placeholder="Nhập tên bác sĩ"
                                        className="me-2"
                                        aria-label="Search"
                                        size="sm"
                                        value={searchName}
                                        onChange={event => setSearchName(event.target.value)}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="doctors-address d-flex align-items-center">
                        <Col xs={1}>
                            Địa chỉ:
                        </Col>
                        <Col>
                            <Form.Control
                                type="search"
                                placeholder="Nhập địa chỉ"
                                className="me-2"
                                aria-label="Search"
                                size="sm"
                                value={searchAddress}
                                onChange={event => setSearchAddress(event.target.value)}
                            />
                        </Col>
                        <Col xs={2}>
                            <Button className="w-100" variant="outline-success" size="sm"
                                onClick={() => handleSearch()}>Tìm kiếm</Button>
                        </Col>
                    </Row>
                </div>
                <div className="doctors-list mt-5" ref={componentRef}>
                    <div className="doctors-viewmode d-flex align-items-center">
                        <div className="fs-6 d-inline me-2">
                            Chế độ xem:
                        </div>
                        <div className="d-inline">
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

export default Doctors