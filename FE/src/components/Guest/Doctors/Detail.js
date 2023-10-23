import "../../../styles/Guest/Doctors/Detail.scss"

import { Col, Image, Row, Spinner } from "react-bootstrap"

import { useParams } from "react-router-dom"

import { useRef, useState } from "react"

import useGet from "../../../custom/get"
import DoctorNotfound from "../../General/Notfound/DoctorNotfound"
import DetailNav from "./DetailNav"
import Nav from "../../App/Nav"

import nullavatar from "../../../assets/images/nullavatardoctor.jpg"

import Overview from "./Overview"

import ReactMarkdown from "react-markdown"
import Clinic from "./Clinic"
import Booking from "./Booking"
import Loading from "../../General/Notfound/Loading"

const Detail = (props) => {
    const { id } = useParams()
    const topRef = useRef(null)
    const contentRef = useRef(null)
    const [viewmode, setViewmode] = useState(0)
    const { data, loading } = useGet(`/doctors/${id}/1`)

    const renderContent = () => {
        switch (viewmode) {
            case 0:
                return <Overview
                    doctor={data[0]} />
            case 1:
                return <Clinic
                    doctor={data[0]} />
            case 2:
                return <div><ReactMarkdown>{data[0].content}</ReactMarkdown></div>
            case 3:
                return <Booking
                    doctor={data[0]} />
            default:
                return <Overview
                    doctor={data[0]} />
        }
    }
    return (
        <div ref={topRef} className="detail-container p-5 fs-6 text-start">
            <Row className="d-flex justify-content-center">
                <Col xs={2} className="p-0">
                    <div className="left-nav">
                        <div className="px-2 w-100 m-0">
                            <Nav />
                        </div>
                        <div className="px-2 w-100 mx-0 mt-3">
                            <DetailNav
                                setViewmode={setViewmode}
                                viewmode={viewmode}
                                contentRef={contentRef}
                                topRef={topRef}
                                active={loading === false && data?.length > 0}
                            />
                        </div>
                    </div>
                </Col>
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <Col className="d-grid gap-4" xs={9}>
                                    <div className="detail-title d-grid gap-5 mt-0 p-5 main-element">
                                        <Row className="detail-summary ">
                                            <Col xs={2} className="d-flex align-items-center">
                                                <Image className="w-100 h-auto" src={data[0].image ? data[0].image : nullavatar} alt="avatar" roundedCircle />
                                            </Col>
                                            <Col className="detail-describe d-flex align-items-center">
                                                <div>
                                                    <b>Bác sĩ {data[0].name}</b>
                                                    <ReactMarkdown>{data[0].describe}</ReactMarkdown>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div ref={contentRef} className="detail-content d-grid mt-0 p-5 gap-5 main-element">
                                        {renderContent()}
                                    </div>
                                </Col>
                            </>
                            :
                            <>
                                <Col className="main-element mt-0 p-5 d-grid gap-5" xs={9}>
                                    <div ref={contentRef} className="detail-nodata">
                                        <DoctorNotfound />
                                    </div>
                                </Col>
                            </>
                        }
                    </>
                    :
                    <>
                        <Col className="main-element mt-0 p-5 d-grid gap-5" xs={9}>
                            <div ref={contentRef} className="detail-loading">
                                <Loading />
                            </div>
                        </Col>
                    </>
                }
            </Row>
        </div >
    )
}

export default Detail