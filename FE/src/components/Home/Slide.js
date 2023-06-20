import "../../styles/Home/Slide.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image, Button } from "react-bootstrap";

import useFetch from "../../custom/fetch";

const Slide = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const { data, loading } = useFetch('http://localhost:8080/api/home')

    console.log(data)
    return (
        <div className="slide-container">
            <div className="slide-title">
                <b>
                    Chuyên khoa phổ biến
                </b>
                <Button variant="outline-primary" size="sm">Xem thêm</Button>
            </div>
            <div className="slide-content">
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <Slider {...settings}>
                                    {data.map((item, index) => {
                                        return (
                                            <div key={index}>
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