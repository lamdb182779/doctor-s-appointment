import { Col, Row, Table, Button, Dropdown, Form, OverlayTrigger, Popover } from "react-bootstrap"
import AdminNav from "./AdminNav"
import "../../styles/Admin/StaffList.scss"
import useGet from "../../custom/get"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTrash,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons"
import Page from "../General/Page/Page"
import { useState } from "react"
import moment from "moment"

const StaffList = (props) => {
    const [page, setPage] = useState(1)
    const [pagesize, setPageSize] = useState(5)
    const [name, setName] = useState("")
    const [searchName, setSearchName] = useState("")
    const [filters, setFilters] = useState([])

    const { data, loading } = useGet(`/staffs?pagesize=${pagesize}&page=${page}&name=${name}`)

    const getFirstSentence = (input) => {
        return input.substring(0, input.indexOf("\n")) || input
    }

    const renderFilterData = (filter, data) => {
        switch (filter) {
            case "Địa chỉ":
                return <>{getFirstSentence(data.address)}</>
            case "Email":
                return <>{data.email}</>
            case "Số điện thoại":
                return <>{data.phoneNumber}</>
            case "Ngày sinh":
                return <>{moment(data.doB).format("DD-MM-YYYY")}</>
            default: return <></>
        }
    }

    const renderFilterClass = (filter) => {
        switch (filter) {
            case "Địa chỉ":
                return "address"
            case "Email":
                return "email"
            case "Số điện thoại":
                return "phone"
            case "Ngày sinh":
                return "doB"
            default: return ""
        }
    }

    const createFilters = (item) => {
        if (filters.includes(item)) {
            setFilters(filters.filter(filter => filter !== item))
        } else {
            setFilters([...filters, item])
        }
    }

    const renderFilterCheckbox = (props) => {
        return (
            <Popover {...props} id="filter-popover">
                <Popover.Body>
                    {["Địa chỉ", "Email", "Số điện thoại", "Ngày sinh"].map((item, index) => {
                        return (
                            <div key={index} onClick={() => createFilters(item)}>
                                <Form.Check
                                    checked={filters.includes(item)}
                                    className="m-0"
                                    label={item}
                                    name={"filter"}
                                    type={"checkbox"} />
                            </div>
                        )
                    })}
                </Popover.Body>
            </Popover>
        )
    }

    const handlePage = (page) => {
        setPage(page)
    }

    const handleSearch = () => {
        setName(searchName)
        setPage(1)
    }
    return (
        <div className="staff-list-container">
            <Row className="d-flex justify-content-center">
                <Col xs={2} className="p-0">
                    <div className="left-nav">
                        <div className="px-2 w-100 m-0">
                            <AdminNav />
                        </div>
                    </div>
                </Col>
                <Col xs={9} className="p-5 main-element">
                    <div className="px-5 d-grid gap-3">
                        <Row>
                            <h4>Danh sách nhân viên hệ thống</h4>
                        </Row>
                        <Row>
                            <Col className="d-flex align-items-end p-0 fs-6" xs={1}>
                                Tên:
                            </Col>
                            <Col className="" xs={10}>
                                <Form.Control
                                    placeholder=""
                                    type="search"
                                    value={searchName}
                                    onChange={event => setSearchName(event.target.value)} />
                            </Col>
                            <Col className="d-flex justify-content-end p-0">
                                <Button size="sm" variant="outline-success" onClick={() => handleSearch()}>
                                    Tìm kiếm
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col xs={2} className="fs-6 text-start p-0 d-flex align-items-center">
                                        Chế độ:
                                    </Col>
                                    <Col className="justify-content-start d-flex align-items-center">
                                        <Dropdown >
                                            <Dropdown.Toggle size="sm" variant="outline-primary">
                                                {pagesize} kết quả/trang
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => setPageSize(5)}>
                                                    5 kết quả/trang
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => setPageSize(10)}>
                                                    10 kết quả/trang
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => setPageSize(15)}>
                                                    15 kết quả/trang
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col className="fs-6 text-start d-flex align-items-center justify-content-end p-0">
                                        Lọc:
                                    </Col>
                                    <Col xs={5} className="justify-content-end d-flex align-items-center p-0">
                                        <OverlayTrigger
                                            placement="bottom"
                                            trigger={"click"}
                                            rootClose
                                            overlay={renderFilterCheckbox}>
                                            <Button className="w-75 overflow-hidden" size="sm" variant="outline-primary">
                                                <div className="text-nowrap">
                                                    {filters?.length > 0 ?
                                                        <>
                                                            {filters.map((item, index) => {
                                                                if (index < filters.length - 1) {
                                                                    return item + ", "
                                                                }
                                                                return item
                                                            })
                                                            }
                                                        </>
                                                        : <>Lọc thông tin</>}
                                                </div>
                                            </Button>
                                        </OverlayTrigger>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="staff-list-content py-5">
                            {loading === false ?
                                <>
                                    {data?.length > 0 ?
                                        <>
                                            <div className="table-container p-0">
                                                <Table bordered hover={true} className="fs-6">
                                                    <thead>
                                                        <tr>
                                                            <th className="id">ID</th>
                                                            <th className="name">Họ và tên</th>
                                                            <th className="gender">Giới tính</th>
                                                            {filters.map((filter, index) => {
                                                                return (
                                                                    <th className={renderFilterClass(filter)} key={index}>
                                                                        {filter}
                                                                    </th>
                                                                )
                                                            })}
                                                            <th className="no-scroll">Hành động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((item, index) => {
                                                            if (index !== data.length - 1) {
                                                                return (
                                                                    <tr key={index} className="">
                                                                        <th className="fw-normal">{item.id}</th>
                                                                        <th className="fw-normal">{item.name}</th>
                                                                        <th className="fw-normal">{item.gender === true && "Nam"}{item.gender === false && "Nữ"}</th>
                                                                        {filters.map((filter, index) => {
                                                                            return (
                                                                                <th key={index} className="fw-normal">
                                                                                    {renderFilterData(filter, item)}
                                                                                </th>
                                                                            )
                                                                        })}
                                                                        <th className="fw-normal no-scroll">
                                                                            <Row>
                                                                                <Col className="">
                                                                                    <Button
                                                                                        className=""
                                                                                        variant="outline-primary"
                                                                                        size="sm">
                                                                                        <FontAwesomeIcon icon={faCircleInfo} />&nbsp;Sửa
                                                                                    </Button>
                                                                                    &nbsp;
                                                                                    <Button
                                                                                        className=""
                                                                                        variant="outline-danger"
                                                                                        size="sm">
                                                                                        <FontAwesomeIcon icon={faTrash} />&nbsp;Xóa
                                                                                    </Button>
                                                                                </Col>
                                                                            </Row>
                                                                        </th>
                                                                    </tr>
                                                                )
                                                            }
                                                            return (null)
                                                        })
                                                        }
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <Page
                                                page={page > parseInt((data[data.length - 1] - 1) / pagesize + 1) ? parseInt((data[data.length - 1] - 1) / pagesize + 1) : page}
                                                len={parseInt((data[data.length - 1] - 1) / pagesize + 1)}
                                                handlePage={handlePage} />
                                        </>
                                        :
                                        <></>
                                    }
                                </>
                                :
                                <></>
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default StaffList