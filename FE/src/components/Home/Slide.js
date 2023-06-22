import "../../styles/Home/Slide.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image, Button } from "react-bootstrap";

import useFetch from "../../custom/fetch";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";

const Slide = (props) => {
    const navigate = useNavigate()

    const [slide, setSlide] = useState(props.route.slide ? props.route.slide : 0)

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
    };

    const { data, loading } = useFetch('http://localhost:8080/api/home')

    const handleSpecialtyDoctors = (id) => {
        let path = `/doctors?specialtyID=${id}`
        props.setRoute({
            preRoute: { ...props.route, slide: slide },
            path: path,
            scrollY: props.loc,
        })
        navigate(path)
        window.scrollTo(0, 0);
    }
    return (
        <div className="slide-container">
            <div className="slide-title">
                <b>
                    Chuyên khoa phổ biến
                </b>
                <Button className="mt-1" variant="outline-primary" size="sm" onClick={() => props.showMore('/specialties')}>Xem thêm</Button>
            </div>
            <div className="slide-content">
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <Slider {...settings}>
                                    {data.map((item, index) => {
                                        return (
                                            <div key={index} onClick={() => handleSpecialtyDoctors(item.id)}>
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