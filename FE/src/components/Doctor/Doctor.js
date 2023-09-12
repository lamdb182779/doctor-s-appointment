import "../../styles/Doctor/Doctor.scss"

import nullavatar from "../../assets/images/nullavatardoctor.jpg"
import useFetch from "../../custom/fetch"

import ReactMarkdown from "react-markdown"

import { Row, Col, Image, } from "react-bootstrap"

import { useNavigate } from "react-router-dom"

const Doctor = (props) => {
    const { data, loading } = useFetch("http://localhost:8080/api/self/info")

    return (
        <div className="doctor-user-container px-5 py-5 d-grid gap-5">
            {loading === false ?
                <>
                    <div className="doctor-user-title">
                        <Row >
                            <Col className="text-center fs-3">
                                XIN CHÀO BÁC SĨ,
                                CHÚC BẠN MỘT NGÀY TỐT LÀNH
                            </Col>
                        </Row>
                    </div>
                    {data?.length > 0 ?
                        <>
                            <Row className="fs-6 text-start d-flex align-items-center">
                                <Col xs={4}>
                                    <Image onClick={event => event.target.click()} className="w-50 h-auto"
                                        src={data[0].image ? data[0].image : nullavatar} alt="avatar" roundedCircle />
                                </Col>
                                <Col>
                                    <Row>
                                        <b>Bác sĩ {data[0].name}</b>
                                        <ReactMarkdown>{data[0].describe}</ReactMarkdown>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="">
                                <Col className="fs-6 text-start" xs={4}>
                                    <Row>
                                        <b>Số điện thoại</b>
                                        <p>{data[0].phoneNumber}</p>
                                        <b>Email</b>
                                        <p>{data[0].email}</p>
                                        <ReactMarkdown>{data[0].clinicAddress}</ReactMarkdown>
                                    </Row>
                                </Col>
                                <Col className="fs-6 ">
                                    <Row>
                                        <b className="text-start">Giá khám</b>
                                        <ReactMarkdown className="text-start">{data[0].price}</ReactMarkdown>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="fs-6 text-left">
                                <ReactMarkdown className="fs-6 text-start">{data[0].content}</ReactMarkdown>
                            </Row>
                        </>
                        :
                        <></>
                    }
                </>
                : <></>
            }
        </div>
    )
}

export default Doctor