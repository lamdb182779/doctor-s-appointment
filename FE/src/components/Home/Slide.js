import "../../styles/Home/Slide.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image, Button } from "react-bootstrap";

import useFetch from "../../custom/fetch";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Slide = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [slide, setSlide] = useState(location.state?.slide ? location.state.slide : 0)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: location.state?.slide ? location.state.slide : 0,
        afterChange: (index) => {
            setSlide(index)
        },
    };

    const { data, loading } = useFetch('http://localhost:8080/api/home')

    const handleSpecialtyDoctors = (id) => {
        let route = `/doctors?specialtyID=${id}`
        navigate(route, {
            state: {
                route: props.route,
                preState: { ...location.state, slide: slide },
                loc: props.loc,
            }
        })
        props.setRoute(route)
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

export default Slide