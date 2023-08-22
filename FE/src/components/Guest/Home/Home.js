import "../../../styles/Guest/Home/Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faCalendarDays,
    faHandshake,
    faBlenderPhone,
    faAddressBook,
    faHospital,
    faUserNurse,
    faTruckArrowRight
} from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from "react-router-dom"

import Slide from "./Slide"
import Introduce from "./Introduce"

import { useState, useRef } from "react"

import { Row, Col } from "react-bootstrap"

const Home = (props) => {
    const navigate = useNavigate()
    const componentRef = useRef(null)

    const handleShowMore = (path) => {
        navigate(path)
        window.scrollTo(0, 0);
    }

    const handleClick = (id) => {
        setIndex(id)
        componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleSearch = (event) => {
        if (search.trim() !== '' && event.key === 'Enter') {
            let path = `/search?${search.trim()}`
            navigate(path)
            window.scrollTo(0, 0)
        }
    }

    const [index, setIndex] = useState(0)
    const [search, setSearch] = useState('')
    return (
        <div className="home-container">
            <div className="home-title p-5">
                <br />
                <h2>
                    Chào mừng đến với chúng tôi
                </h2>
                <h3>
                    Nền tảng y tế - Chăm sóc sức khỏe toàn diện
                </h3>
                <div className="home-search d-flex justify-content-center mt-5">
                    <div className="home-search d-flex justify-content-center bg-warning w-50 p-2 rounded-pill">
                        <div className="search-icon ps-2">
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xs" />
                        </div>
                        <input className="w-100 fs-6 border-0 bg-warning px-3" onKeyDown={(event) => handleSearch(event)}
                            type="text"
                            placeholder="Nhập từ khóa (ngắn gọn). Ví dụ: lưng, Thu Hà, Ba Đình, ..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)} />
                    </div>
                </div>
                <Row className="home-functions fs-6 mt-5 text-secondary">
                    <Col onClick={() => handleClick(0)}>
                        <FontAwesomeIcon icon={faCalendarDays} size="2xl" />
                        <br />
                        Đặt lịch nhanh chóng
                    </Col>
                    <Col onClick={() => handleClick(1)}>
                        <FontAwesomeIcon icon={faUserNurse} size="2xl" />
                        <br />
                        Chăm sóc tận tình
                    </Col>
                    <Col onClick={() => handleClick(2)}>
                        <FontAwesomeIcon icon={faHospital} size="2xl" />
                        <br />
                        Đầy đủ các chuyên khoa
                    </Col>
                    <Col onClick={() => handleClick(3)}>
                        <FontAwesomeIcon icon={faTruckArrowRight} size="2xl" />
                        <br />
                        Thông tin ngay lập tức
                    </Col>
                    <Col onClick={() => handleClick(4)}>
                        <FontAwesomeIcon icon={faBlenderPhone} size="2xl" />
                        <br />
                        Túc trực 24/24
                    </Col>
                    <Col onClick={() => handleClick(5)}>
                        <FontAwesomeIcon icon={faHandshake} size="2xl" />
                        <br />
                        Hợp tác rộng rãi
                    </Col>

                    <Col onClick={() => handleClick(6)}>
                        <FontAwesomeIcon icon={faAddressBook} size="2xl" />
                        <br />
                        Liên lạc dễ dàng
                    </Col>
                </Row>
            </div>
            <div className="home-content">
                <div ref={componentRef}>
                    <Introduce index={index} setIndex={setIndex} showMore={handleShowMore} />
                </div>
                <Slide showMore={handleShowMore} show={'/specialties'} />
                <Slide showMore={handleShowMore} show={'/doctors'} />
            </div>
        </div>
    )
}

export default Home