import { Image, Row, Col } from "react-bootstrap"
import "../../../styles/Guest/Home/DoctorsPreview.scss"
import useGet from "../../../custom/get"
import nullavatar from "../../../assets/images/nullavatardoctor.jpg"
import useUtil from "../../../custom/utils"
import { useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const DoctorsPreview = (props) => {
    const { data, loading } = useGet("/home/doctors")
    const { handleNavigate } = useUtil()
    const doctorsRef = useRef(null)
    const handleScrollLeft = () => {
        doctorsRef.current.scrollBy({
            left: -doctorsRef.current.offsetWidth / 4
        })
    }
    const handleScrollRight = () => {
        doctorsRef.current.scrollBy({
            left: doctorsRef.current.offsetWidth / 4
        })
    }

    return (
        <div className="doctors-preview-container p-5 w-100 d-grid gap-5">
            <Row>
                <h4 className="mb-3">BÁC SĨ CỦA CHÚNG TÔI</h4>
                <h5>Hội tụ các bác sĩ hàng đầu cả nước, với kinh nghiệm nhiều năm trong nghề</h5>
            </Row>
            <Row className="w-100 d-flex justify-content-center">
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <Col className="slide-arrow" onClick={() => handleScrollLeft()}>
                                    <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                                </Col>
                                <Col ref={doctorsRef} xs={12} className="doctors-preview-content p-0">
                                    {data.map((item, index) => {
                                        return (
                                            <div key={index} onClick={() => handleNavigate(`doctors/${item.id}`)}>
                                                <Image className="" src={item.image ? item.image : nullavatar} alt={item.name} />
                                                <div className="h-25">
                                                    <span className="fs-6 text-light">
                                                        {item.Specialty.name}
                                                    </span>
                                                    <h5 className="text-white">
                                                        {item.name}
                                                    </h5>
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                </Col>
                                <Col className="slide-arrow" onClick={() => handleScrollRight()}>
                                    <FontAwesomeIcon icon={faChevronRight} size="xl" />
                                </Col>
                            </>
                            :
                            <>
                            </>
                        }
                    </>
                    :
                    <>

                    </>
                }
            </Row>
        </div>
    )
}

export default DoctorsPreview