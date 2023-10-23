import { useState, useRef } from "react"
import "../../../styles/Guest/Doctors/Doctors.scss"

import { Button, Dropdown, Form, Col, Row, Spinner } from "react-bootstrap"

import { useLocation } from "react-router-dom"
import useGet from "../../../custom/get"

import Doctor from "./Doctor"
import Page from "../../General/Page/Page"
import Nav from "../../App/Nav"

const Doctors = (props) => {
    const location = useLocation()
    const componentRef = useRef(null)

    let { specialtyID } = Object.fromEntries(new URLSearchParams(location.search).entries())

    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(5)
    const [name, setName] = useState("")
    const [specialty, setSpecialty] = useState(specialtyID !== undefined ? specialtyID : "")
    const [clinicAddress, setClinicAddress] = useState("")

    const { data: specialtiesData, loading: specialtiesLoading } = useGet("/doctors/specialties")
    const { data, loading } = useGet(`/doctors?page=${page}&pagesize=${pagesize}&specialtyID=${specialty}&name=${name}&clinicAddress=${clinicAddress}`)
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

    return (
        <div className="doctors-container">
            <Row className="d-flex justify-content-center">
                <Col xs={2} className="p-0">
                    <div className="left-nav">
                        <div className="px-2 w-100 m-0">
                            <Nav />
                        </div>
                    </div>
                </Col>
                <Col className="main-element p-5 d-grid gap-5" xs={9}>
                    <Row className="">
                        <h3>Danh sách bác sĩ</h3>
                    </Row>
                    <Row className="fs-6 text-start d-grid gap-5">
                        <Row>
                            <Col xs={4}>
                                <Row>
                                    <Col xs={5} className="d-flex align-items-center">
                                        Chuyên khoa:
                                    </Col>
                                    <Col className="ms-4 ps-4 d-flex align-items-center justify-content-start">
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
                            <Col xs={6}>
                                <Row>
                                    <Col className="d-flex align-items-end" xs={1}>
                                        Tên:
                                    </Col>
                                    <Col className="" >
                                        <Form.Control
                                            placeholder=""
                                            type="search"
                                            value={searchName}
                                            onChange={event => setSearchName(event.target.value)} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="" xs={10}>
                                <Row className="h-100">
                                    <Col xs={2} className="d-flex align-items-end">
                                        Địa chỉ:
                                    </Col>
                                    <Col className="ms-4 ps-4">
                                        <Form.Control
                                            placeholder=""
                                            type="search"
                                            value={searchAddress}
                                            onChange={event => setSearchAddress(event.target.value)} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={2} className="d-flex align-items-center">
                                <Button variant="outline-success" size="sm" className="w-100" onClick={() => handleSearch()}>
                                    Tìm kiếm
                                </Button>
                            </Col>
                        </Row>
                    </Row>
                    <Row ref={componentRef} className="fs-6 text-start">
                        <Col xs={2} className="d-flex align-items-center">
                            Chế độ xem:
                        </Col>
                        <Col className="ps-3 d-flex align-items-center">
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
                        </Col>
                    </Row>
                    {loading === false ?
                        <>
                            {data?.length > 0 ?
                                <>
                                    {data.map((item, index) => {
                                        if (index !== data.length - 1) {
                                            return (
                                                <Row className="d-flex justify-content-center px-5">
                                                    <Doctor doctor={item} />
                                                </Row>
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
                                <></>}
                        </>
                        :
                        <></>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Doctors