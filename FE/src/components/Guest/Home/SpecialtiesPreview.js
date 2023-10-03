import { Col, Image, Row } from "react-bootstrap"
import "../../../styles/Guest/Home/SpecialtiesPreview.scss"
import useGet from "../../../custom/get"
import nullavatar from "../../../assets/images/nullavatarspecialty.jpg"
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import useUtil from "../../../custom/utils"
import { useRef } from "react"

const SpecialtiesPreview = (props) => {
    const { data, loading } = useGet("/home/specialties")
    const { handleNavigate } = useUtil()
    const specialtiesRef = useRef(null)
    const handleScrollLeft = () => {
        specialtiesRef.current.scrollBy({
            left: -specialtiesRef.current.offsetWidth
        })
    }
    const handleScrollRight = () => {
        specialtiesRef.current.scrollBy({
            left: specialtiesRef.current.offsetWidth
        })
    }
    return (
        <div className="specialties-preview-container p-5 w-100 d-grid gap-5">
            <Row className="fs-3 text-primary">
                <span>MỘT SỐ CHUYÊN KHOA</span>
            </Row>
            <Row>
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <Col className="slide-arrow" onClick={() => handleScrollLeft()}>
                                    <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                                </Col>
                                <Col xs={12} ref={specialtiesRef} className="specialties-preview-content d-flex p-0">
                                    {data.map((item, index) => {
                                        return (
                                            <div key={index} className="specialty w-100" onClick={() => handleNavigate(`/doctors?specialtyID=${item.id}`)}>
                                                <div className="specialty-front p-0">
                                                    <Image className=" w-100 h-100" src={item.image ? item.image : nullavatar} alt={item.name} />
                                                    <div className="w-100 h-25">
                                                        {item.name}
                                                    </div>
                                                </div>
                                                <div className="specialty-back p-0">
                                                    <div className="fs-3 h-25">{item.name}</div>
                                                    <div>
                                                        <div className="w-100">
                                                            <ReactMarkdown>{item.description ? item.description : "Chưa có mô tả cụ thể về chuyên khoa này"}</ReactMarkdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div >
                                        )
                                    })
                                    }
                                </Col>
                                <Col className="slide-arrow" onClick={() => handleScrollRight()}>
                                    <FontAwesomeIcon icon={faChevronRight} size="xl" />
                                </Col>
                            </>
                            :
                            <></>
                        }
                    </>
                    :
                    <></>
                }
            </Row>
        </div >
    )
}

export default SpecialtiesPreview