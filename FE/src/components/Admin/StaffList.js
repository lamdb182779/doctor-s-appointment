import useFetch from "../../custom/fetch"
import "../../styles/Admin/StaffList.scss"

import { Row, Col, Button, Table, Modal } from "react-bootstrap"

// import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import Page from "../Page/Page"

import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Warning from "../Dialog/Warning"
import Success from "../Dialog/Success"
import Danger from "../Dialog/Danger"

import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleInfo,
    faTrash,
} from "@fortawesome/free-solid-svg-icons"

import StaffChange from "../Admin/StaffChange"

const StaffList = (props) => {
    const [del, setDel] = useState({ confirm: false })
    const [change, setChange] = useState(0)

    const navigate = useNavigate()
    const location = useLocation()

    const [url, setUrl] = useState('')
    const [delUrl, setDelUrl] = useState('')
    const [options, setOptions] = useState({})

    const [showWarning, setShowWarning] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showDanger, setShowDanger] = useState(false)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    let { page, pagesize, name } = Object.fromEntries(new URLSearchParams(location.search).entries())
    page = page ? parseInt(page) : 1
    // pagesize = pagesize !== undefined ? parseInt(pagesize) : 5
    // name = name !== undefined ? name : ''
    // specialtyID = specialtyID !== undefined ? specialtyID : ''
    // clinicAddress = clinicAddress !== undefined ? clinicAddress : ''
    const { data, loading } = useFetch(url)
    const { message, loading: delLoading } = useFetch(delUrl, options)
    const handlePage = (page) => {
        let path = `/admin/staff-list?page=${page}`
        // props.setRoute({
        //     preRoute: props.route.preRoute,
        //     scrollY: props.route.scrollY ? props.route.scrollY : 0,
        //     path: path
        // })
        navigate(path)
        // componentRef.current.scrollIntoView({ behavior: 'smooth' })
        setUrl(`http://localhost:8080/api/staffs?page=${page}&pagesize=10`)
        window.scrollTo(0, 0)
    }
    const [id, setId] = useState(0)
    const handleInfo = (id) => {
        // let path = `/admin/staff-info/${id}`
        // navigate(path)
        // window.scrollTo(0, 0)
        setId(id)
        handleShow()
    }
    const handleDelete = (id) => {
        setDel({ ...del, id: id })
        setShowWarning(true)
    }

    const handleYes = () => {
        setDel({ ...del, confirm: true })
    }

    const formatDate = (date) => {
        if (date) {
            date = new Date(date)
            let format = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
            return format
        }
        return null
    }

    useEffect(() => {
        setDelUrl(del.confirm === false ? '' : `http://localhost:8080/api/staffs?id=${del.id}`)
        setOptions(del.confirm === false ? {} : {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: props.user.token,
            })
        })
    }, [del])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (delLoading === false) {
            if (del.confirm) {
                if (message === 'ok') {
                    setShowSuccess(true)
                }
                else {
                    setShowDanger(true)
                }
            }
            setUrl(`http://localhost:8080/api/staffs?page=${page}&pagesize=10&del=${del.id}`)
            setDel({ ...del, confirm: false })
        }
    }, [delLoading])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setUrl(`http://localhost:8080/api/staffs?page=${page}&pagesize=10&change=${change}`)
    }, [change])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="staff-list-container px-5 py-5">
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <StaffChange
                    setChange={setChange}
                    change={change}
                    data={data[id]} />
            </Modal>
            <Warning
                show={showWarning}
                setShow={setShowWarning}
                handleYes={handleYes}
                body="Bạn có chắc muốn hủy kích hoạt nhân viên này không?" />
            <Success
                show={showSuccess}
                setShow={setShowSuccess}
                time={1000}
                bodyAlign="text-center"
                body="Đã hủy kích hoạt nhân viên thành công!" />
            <Danger
                show={showDanger}
                setShow={setShowDanger}
                time={1000}
                bodyAlign="text-center"
                body={message === 'server error!' ? "Lỗi Server"
                    : message === 'wrong verify' ? "Lỗi xác thực" : undefined} />
            <div className="staff-list-title">
                <Row className="">
                    <Col xs={2} className="d-flex justify-content-start">
                        <Button onClick={() => navigate('/admin')} variant="outline-secondary" size="sm">Quay lại</Button>
                    </Col>
                    <Col xs={8} className="d-flex align-items-center justify-content-center fw-bold">
                        Danh sách nhân viên hệ thống
                    </Col>
                </Row>
            </div>
            {loading === false ?
                <>
                    {data?.length > 0 ?
                        <>
                            <div className="staff-list-content mt-3">
                                <Table striped className="fs-6 ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th >Họ và tên</th>
                                            <th>Giới tính</th>
                                            <th>Ngày sinh</th>
                                            <th>Email</th>
                                            <th>Địa chỉ</th>
                                            <th>Hành động</th>
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
                                                        <th className="fw-normal">{formatDate(item.doB)}</th>
                                                        <th className="fw-normal">{item.email}</th>
                                                        <th className="fw-normal">{item.address}</th>
                                                        <th className="fw-normal">
                                                            <Row>
                                                                <Col className="">
                                                                    <Button
                                                                        className=""
                                                                        onClick={() => handleInfo(index)}
                                                                        variant="outline-info"
                                                                        size="sm">
                                                                        <FontAwesomeIcon icon={faCircleInfo} />&nbsp;Sửa
                                                                    </Button>
                                                                    &nbsp;
                                                                    <Button
                                                                        className=""
                                                                        onClick={() => handleDelete(item.id)}
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
                                <Page
                                    page={page > parseInt((data[data.length - 1] - 1) / 10 + 1) ? parseInt((data[data.length - 1] - 1) / 10 + 1) : page}
                                    len={parseInt((data[data.length - 1] - 1) / 10 + 1)}
                                    handlePage={handlePage} />
                            </div>
                        </> : <></>
                    }
                </>
                :
                <></>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user,
    })
}

export default connect(mapStateToProps)(StaffList)