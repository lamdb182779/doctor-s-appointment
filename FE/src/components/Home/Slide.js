import "../../styles/Home/Slide.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image, Button, Spinner } from "react-bootstrap";

import useFetch from "../../custom/fetch";

import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

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
        props.setRoute({
            preRoute: props.route,
            path: path,
            scrollY: window.scrollY,
        })
        navigate(path)
        window.scrollTo(0, 0)
    }

    const handleDoctorDetail = (id) => {
        let path = `/doctors/${id}`
        props.setRoute({
            preRoute: props.route,
            path: path,
            scrollY: window.scrollY,
        })
        navigate(path)
        window.scrollTo(0, 0)
    }
    return (
        <div className="slide-container" onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()}>
            <div className="slide-title">
                <b>
                    {props.show === '/doctors' ? 'Một số bác sĩ trong hệ thống' : 'Một số chuyên khoa'}
                </b>
                <Button className="mt-1" variant="outline-primary" size="sm" onClick={() => props.showMore(props.show)}>Xem thêm</Button>
            </div>
            <div className="slide-content">
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <div className="slide-arrow" onClick={() => slider?.current?.slickPrev()}>
                                    <FontAwesomeIcon icon={faChevronLeft} size="xl" />
                                </div>
                                <div className="slide-slider">
                                    <Slider ref={slider} {...settings} draggable={true}>
                                        {data.map((item, index) => {
                                            return (
                                                <div key={index} onClick={() => handleClick(item.id)}>
                                                    {props.show === '/doctors' ?
                                                        <>
                                                            <div className="slide-doctors">
                                                                <Image src={item.image} alt={item.name} width='20px' height='20px' roundedCircle />
                                                                {item.name}<br />
                                                                <small>{item.Specialty.name}</small>
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <div className="slide-specialties">
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
                                <div className="slide-nodata">
                                    Không có dữ liệu
                                </div>
                            </>
                        }
                    </>
                    :
                    <>
                        <div className="slide-loading">
                            <Spinner animation="border" variant="primary" />
                            Đang tải dữ liệu
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        route: state.route
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute: (route) => dispatch({ type: 'SET_ROUTE', payload: route }),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide)