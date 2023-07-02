import "../../styles/Home/Slide.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image, Button, Spinner } from "react-bootstrap";

import useFetch from "../../custom/fetch";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";

const Slide = (props) => {
    const navigate = useNavigate()

    const [slide, setSlide] = useState(props.route.slide ? props.route.slide : 0)
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
        initialSlide: slide,
        afterChange: (index) => {
            setSlide(index)
        },
    }

    const { data, loading } = useFetch('http://localhost:8080/api/home')

    const handleSpecialtyDoctors = (id) => {
        let path = `/doctors?specialtyID=${id}`
        props.setRoute({
            preRoute: { ...props.route, slide: slide },
            path: path,
            scrollY: props.loc,
        })
        navigate(path)
        window.scrollTo(0, 0)
    }

    const handleDoctorDetail = (id) => {
        let path = `/doctor/${id}`
        props.setRoute({
            preRoute: { ...props.route, slide: slide },
            path: path,
            scrollY: props.loc,
        })
        navigate(path)
        window.scrollTo(0, 0)
    }
    return (
        <div className="slide-container" onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()}>
            <div className="slide-title">
                <b>
                    Chuyên khoa phổ biến
                </b>
                <Button className="mt-1" variant="outline-primary" size="sm" onClick={() => props.showMore(props.show)}>Xem thêm</Button>
            </div>
            <div className="slide-content">
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <Slider {...settings} draggable={true}>
                                    {data.map((item, index) => {
                                        return (
                                            <div key={index} onClick={() => handleClick(item.id)}>
                                                <Image src={item.image} alt={item.name} fluid />
                                                {item.name}
                                            </div>
                                        )
                                    })
                                    }
                                </Slider>
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
                            Đang tải dữ liệu ...
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