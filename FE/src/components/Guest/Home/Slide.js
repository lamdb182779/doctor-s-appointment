import "../../../styles/Guest/Home/Slide.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image, Button, Spinner } from "react-bootstrap";

import useFetch from "../../../custom/fetch";

import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

import nullavatar from "../../../assets/images/nullavatardoctor.jpg"

const Slide = (props) => {
    const navigate = useNavigate()

    const slider = useRef(null)

    const [isDragging, setIsDragging] = useState(false)

    const handleMouseUp = () => {
        setTimeout(() => {
            setIsDragging(false)
        }, 100)
    }

    const handleMouseDown = () => {
        setTimeout(() => {
            setIsDragging(true)
        }, 100)
    }

    const handleClick = (id) => {
        if (isDragging === false) {
            switch (props.show) {
                case '/specialties':
                    handleSpecialtyDoctors(id)
                    break
                case '/doctors':
                    handleDoctorDetail(id)
                    break
                default: break
            }
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    }

    const { data, loading } = useFetch(`http://localhost:8080/api/home/${props.show}`)

    const handleSpecialtyDoctors = (id) => {
        let path = `/doctors?specialtyID=${id}`
        navigate(path)
        window.scrollTo(0, 0)
    }

    const handleDoctorDetail = (id) => {
        let path = `/doctors/${id}`
        navigate(path)
        window.scrollTo(0, 0)
    }
    return (
        <div className="slide-container px-5" onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()}>
            <div className="slide-title text-start d-flex align-items-center justify-content-between fs-5">
                <b>
                    {props.show === '/doctors' ? 'Một số bác sĩ trong hệ thống' : 'Một số chuyên khoa'}
                </b>
                <Button className="mt-1" variant="outline-primary" size="sm" onClick={() => props.showMore(props.show)}>Xem thêm</Button>
            </div>
            <div className="slide-content d-flex align-items-center">
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <div className="slide-arrow" onClick={() => slider?.current?.slickPrev()}>
                                    <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                                </div>
                                <div className="slide-slider m-auto">
                                    <Slider className="" ref={slider} {...settings} draggable={true}>
                                        {data.map((item, index) => {
                                            return (
                                                <div className="" key={index} onClick={() => handleClick(item.id)}>
                                                    {props.show === '/doctors' ?
                                                        <>
                                                            <div className="slide-doctors fs-6 text-secondary m-auto">
                                                                <Image className="mx-auto" src={item.image ? item.image : nullavatar} alt={item.name} roundedCircle />
                                                                {item.name}<br />
                                                                <small>{item.Specialty.name}</small>
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <div className="slide-specialties fs-6 text-secondary m-auto">
                                                                <Image src={item.image} alt={item.name} fluid />
                                                                {item.name}
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            )
                                        })
                                        }
                                    </Slider>
                                </div>
                                <div className="slide-arrow" onClick={() => slider?.current?.slickNext()}>
                                    <FontAwesomeIcon icon={faChevronRight} size="xl" />
                                </div>
                            </>
                            :
                            <>
                                <div className="slide-nodata d-flex align-items-center justify-content-center mx-auto fs-6">
                                    Không có dữ liệu
                                </div>
                            </>
                        }
                    </>
                    :
                    <>
                        <div className="slide-loading text-primary d-flex align-items-center justify-content-center mx-auto fs-6">
                            <Spinner className="me-1" animation="border" variant="primary" />
                            Đang tải dữ liệu
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Slide