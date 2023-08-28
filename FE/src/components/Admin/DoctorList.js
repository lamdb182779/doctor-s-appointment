import useFetch from "../../custom/fetch"
import "../../styles/Admin/DoctorList.scss"

import { Row, Col, Button, Table } from "react-bootstrap"

import { ReactMarkdown } from "react-markdown/lib/react-markdown"

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

const DoctorList = (props) => {
    const [confirm, setConfirm] = useState(false)
    const [delId, setDelId] = useState(-1)
    const [deleted, setDeleted] = useState(0)

    const navigate = useNavigate()
    // const location = useLocation()

    const [showWarning, setShowWarning] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showDanger, setShowDanger] = useState(false)

    // let { page, pagesize, name, specialtyID, clinicAddress } = Object.fromEntries(new URLSearchParams(location.search).entries())
    const [page, setPage] = useState(1)
    // pagesize = pagesize !== undefined ? parseInt(pagesize) : 5
    // name = name !== undefined ? name : ''
    // specialtyID = specialtyID !== undefined ? specialtyID : ''
    // clinicAddress = clinicAddress !== undefined ? clinicAddress : ''
    const { data, loading } = useFetch(`http://localhost:8080/api/doctors?page=${page}&pagesize=10&${deleted}`)
    const { message, loading: delLoading } = useFetch(confirm === false ? '' : `http://localhost:8080/api/doctors/${delId}/${deleted}`,
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
        setPage(page)
        window.scrollTo(0, 0)
    }
    const handleInfo = (id) => {
        let path = `/admin/doctor-info/${id}`
        navigate(path)
        window.scrollTo(0, 0)
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
        <div className="doctor-list-container px-5 py-5">
            <Warning
                show={showWarning}
                setShow={setShowWarning}
                handleYes={handleYes}
                body="Bạn có chắc muốn hủy kích hoạt bác sĩ này không?" />
            <Success
                show={showSuccess}
                setShow={setShowSuccess}
                time={1000}
                bodyAlign="text-center"
                body="Đã hủy kích hoạt bác sĩ thành công!" />
            <Danger
                show={showDanger}
                setShow={setShowDanger}
                time={1000}
                bodyAlign="text-center"
                body={message === 'server error!' ? "Lỗi Server"
                    : message === 'wrong verify' ? "Lỗi xác thực" : undefined} />
            <div className="doctor-list-title">
                <Row className="">
                    <Col xs={2} className="d-flex justify-content-start">
                        <Button onClick={() => handleBack()} variant="outline-secondary" size="sm">Quay lại</Button>
                    </Col>
                    <Col xs={8} className="d-flex align-items-center justify-content-center fw-bold">
                        Danh sách bác sĩ cộng tác
                    </Col>
                </Row>
            </div>
            {loading === false ?
                <>
                    {data?.length > 0 ?
                        <>
                            <div className="doctor-list-content mt-3">
                                <Table striped className="fs-6 ">
                                    <thead>
                                        <tr>
                                            <th >Họ và tên</th>
                                            <th>Chuyên khoa</th>
                                            <th>Email</th>
                                            <th>Phòng khám</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            if (index !== data.length - 1) {
                                                return (
                                                    <tr key={index} className="">
                                                        <th className="fw-normal">{item.name}</th>
                                                        <th className="fw-normal">{item.Specialty.name}</th>
                                                        <th className="fw-normal">{item.email}</th>
                                                        <th className="fw-normal">
                                                            <ReactMarkdown>
                                                                {item.clinicAddress.match(/\*\*(.*?)\*\*/g)?.length > 0 ?
                                                                    item.clinicAddress.match(/\*\*(.*?)\*\*/g)[0].replace(/\*\*(.*?)\*\*/g, "$1")
                                                                    : item.clinicAddress}
                                                            </ReactMarkdown>
                                                        </th>
                                                        <th className="fw-normal">
                                                            <Row>
                                                                <Col className="">
                                                                    <Button
                                                                        className=""
                                                                        onClick={() => handleInfo(item.id)}
                                                                        variant="outline-info"
                                                                        size="sm">
                                                                        <FontAwesomeIcon icon={faCircleInfo} />&nbsp;Xem
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

export default connect(mapStateToProps)(DoctorList)