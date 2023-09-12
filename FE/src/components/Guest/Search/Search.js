import { useRef, useState } from "react"
import "../../../styles/Guest/Search/Search.scss"

import { Button, Col, Form, Row, Spinner, Card } from "react-bootstrap"

import { useNavigate, useLocation } from "react-router-dom"

import useFetch from "../../../custom/fetch"
import useUtil from "../../../custom/utils"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import Page from "../../General/Page/Page"

const Search = (props) => {
    const { handleNavigate } = useUtil()
    const location = useLocation()
    const componentRef = useRef(null)

    const [search, setSearch] = useState("")

    const { data, loading } = useFetch(`http://localhost:8080/api/search/${location.search.substring(1)}`)

    const handleSearch = () => {
        let path = `/search?${search.trim()}`
        handleNavigate(path)
    }

    const handleBack = () => {
        handleNavigate(-1)
    }

    const handleSpecialtyDoctors = (id) => {
        let path = `/doctors?specialtyID=${id}`
        handleNavigate(path)
    }

    const handleDoctor = (id) => {
        let path = `/doctors/${id}`
        handleNavigate(path)
    }

    const handlePage = (page) => {
        let path = `/search?${location.search.substring(1)}`
        handleNavigate(path)
        componentRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="search-container">
            <div className="search-title">
                <Button variant="outline-secondary" size="sm" onClick={() => handleBack()}>Quay lại</Button>
                <b>Danh sách các chuyên khoa</b>
            </div>
            <div className="search-content">
                <div className="search-form">
                    <Form.Group className="mt-5">
                        <Row className="align-items-center justify-content-center">
                            <Col xs={1} className="fs-6 fw-bold text-start">
                                Nhập từ khóa:
                            </Col>
                            <Col xs={7}>
                                <Form.Control type="search"
                                    aria-label="Search"
                                    value={search}
                                    placeholder="Nhập từ khóa (ngắn gọn). Ví dụ: lưng, Thu Hà, Ba Đình, ..."
                                    onChange={event => setSearch(event.target.value)} />
                            </Col>
                            <Col xs={2}>
                                <Button onClick={() => handleSearch()} className="w-100" variant="success">Tìm kiếm</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </div>
                <div className="search-list mt-5">
                    <Row>
                        {loading === false ?
                            <>
                                {data?.length > 3 ?
                                    <>
                                        {data.map((item, index) => {
                                            if (index === 0) {
                                                return (
                                                    <Col className="text-start fs-4" xs={12}>{item}</Col>
                                                )
                                            }
                                            if (item.table === "Specialties") {
                                                return (
                                                    <Col className="mt-2" xs={3} key={index}>
                                                        <Card onClick={() => handleSpecialtyDoctors(item.id)}>
                                                            <Card.Img variant="top" src={item.image} height="150px" roundedCircle />
                                                            <Card.Body className="fs-6">
                                                                {item.name}
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )
                                            }
                                            if (item.table === "Doctors")
                                                return (
                                                    <Col className="mt-2" xs={4} key={index}>
                                                        <Card className="h-100" onClick={() => handleDoctor(item.id)}>
                                                            <Card.Img variant="top" src={item.image} height="270px" circle />
                                                            <Card.Body className="fs-6">
                                                                {item.name}<br />
                                                                {item.Specialty.name}
                                                                <ReactMarkdown>{item.clinicAddress}</ReactMarkdown>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )
                                            if (index === data.length - 1) {
                                                return (
                                                    <Page
                                                        handlePage={handlePage} />
                                                )
                                            }
                                            return (
                                                <Col ref={componentRef} className="text-start mt-5 fs-4" xs={12}>{item}</Col>
                                            )
                                        })
                                        }
                                    </>
                                    :
                                    <>
                                        <div className="search-nodata d-flex align-items-center justify-content-center mt-5">
                                            Không có dữ liệu
                                        </div>
                                    </>
                                }
                            </>
                            :
                            <>
                                <div className="search-loading d-flex align-items-center justify-content-center mt-5">
                                    <Spinner className="me-2" variant="primary" />
                                    Đang tải dữ liệu
                                </div>
                            </>
                        }
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Search