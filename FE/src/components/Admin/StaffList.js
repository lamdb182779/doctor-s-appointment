import useFetch from "../../custom/fetch"
import "../../styles/Admin/StaffList.scss"

import { Row, Col, Button, Table, Modal } from "react-bootstrap"

// import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import Page from "../General/Page/Page"

import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Warning from "../General/Dialog/Warning"
import Success from "../General/Dialog/Success"
import Danger from "../General/Dialog/Danger"

import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleInfo,
    faTrash,
} from "@fortawesome/free-solid-svg-icons"

import StaffChange from "../Admin/StaffChange"

import moment from "moment"
import "moment/locale/vi"

const StaffList = (props) => {
    const [confirm, setConfirm] = useState(false)
    const [delId, setDelId] = useState(-1)
    const [deleted, setDeleted] = useState(0)
    const [changed, setChanged] = useState(0)
    const [changeId, setChangeId] = useState(0)

    const navigate = useNavigate()
    // const location = useLocation()

    const [showWarning, setShowWarning] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showDanger, setShowDanger] = useState(false)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // let { page, pagesize, name } = Object.fromEntries(new URLSearchParams(location.search).entries())
    const [page, setPage] = useState(1)
    // pagesize = pagesize !== undefined ? parseInt(pagesize) : 5
    // name = name !== undefined ? name : ''
    // specialtyID = specialtyID !== undefined ? specialtyID : ''
    // clinicAddress = clinicAddress !== undefined ? clinicAddress : ''
    const { data, loading } = useFetch(`http://localhost:8080/api/staffs?page=${page}&pagesize=10&${deleted}&${changed}`)
    const { message, loading: delLoading } = useFetch(confirm === false ? '' : `http://localhost:8080/api/staffs/${delId}/${deleted}`,
        confirm === false ? {} : {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: props.user.token,
            })
        })
    const handlePage = (page) => {
        // let path = `/admin/staff-list?page=${page}`
        // props.setRoute({
        //     preRoute: props.route.preRoute,
        //     scrollY: props.route.scrollY ? props.route.scrollY : 0,
        //     path: path
        // })
        // navigate(path)
        // componentRef.current.scrollIntoView({ behavior: 'smooth' })
        setPage(page)
        window.scrollTo(0, 0)
    }
    const handleInfo = (id) => {
        // let path = `/admin/staff-info/${id}`
        // navigate(path)
        // window.scrollTo(0, 0)
        setChangeId(id)
        handleShow()
    }
    const handleDelete = (id) => {
        setDelId(id)
        setShowWarning(true)
    }

    const handleYes = () => {
        setConfirm(true)
    }

    const handleBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        if (delLoading === false) {
            if (confirm === true) {
                if (message === 'ok') {
                    setShowSuccess(true)
                    setDeleted(deleted + 1)
                }
                else {
                    setShowDanger(true)
                }
                setConfirm(false)
            }
        }
    }, [delLoading])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="staff-list-container px-5 py-5">
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <StaffChange
                    setChanged={setChanged}
                    changed={changed}
                    data={data[changeId]} />
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
                        <Button onClick={() => handleBack()} variant="outline-secondary" size="sm">Quay lại</Button>
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
                                                        <th className="fw-normal">{moment(item.doB).format("DD/MM/YYYY")}</th>
                                                        <th className="fw-normal">{item.email}</th>
                                                        <th className="fw-normal">{item.address}</th>
                                                        <th className="fw-normal">
                                                            <Row>
                                                                <Col className="">
                                                                    <Button
                                                                        className=""
                                                                        onClick={() => handleInfo(index)}
                                                                        variant="outline-primary"
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