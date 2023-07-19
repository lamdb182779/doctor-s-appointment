import "../../styles/Home/Home.scss"
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

import { connect } from "react-redux"

import { useState, useRef } from "react"

const Home = (props) => {
    const navigate = useNavigate()
    const componentRef = useRef(null)

    const handleShowMore = (path) => {
        props.setRoute({
            preRoute: props.route,
            path: path,
            scrollY: window.scrollY,
        })
        navigate(path)
        window.scrollTo(0, 0);
    }

    const handleClick = (id) => {
        setIndex(id)
        componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    let [index, setIndex] = useState(0)
    return (
        <div className="home-container">
            <div className="home-title">
                <br />
                <h2>
                    Chào mừng đến với chúng tôi
                </h2>
                <h3>
                    Nền tảng y tế - Chăm sóc sức khỏe toàn diện
                </h3>
                <div className="home-search">
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="2xs" />
                    </div>
                    <input type="text" placeholder="Tìm lý do khám. Ví dụ: đau lưng, ho, đau bụng,..." />
                </div>
                <div className="home-functions">
                    <div onClick={() => handleClick(0)}>
                        <FontAwesomeIcon icon={faCalendarDays} size="2xl" />
                        <br />
                        Đặt lịch nhanh chóng
                    </div>
                    <div onClick={() => handleClick(1)}>
                        <FontAwesomeIcon icon={faUserNurse} size="2xl" />
                        <br />
                        Chăm sóc tận tình
                    </div>
                    <div onClick={() => handleClick(2)}>
                        <FontAwesomeIcon icon={faHospital} size="2xl" />
                        <br />
                        Đầy đủ các chuyên khoa
                    </div>
                    <div onClick={() => handleClick(3)}>
                        <FontAwesomeIcon icon={faTruckArrowRight} size="2xl" />
                        <br />
                        Thông tin ngay lập tức
                    </div>
                    <div onClick={() => handleClick(4)}>
                        <FontAwesomeIcon icon={faBlenderPhone} size="2xl" />
                        <br />
                        Túc trực 24/24
                    </div>
                    <div onClick={() => handleClick(5)}>
                        <FontAwesomeIcon icon={faHandshake} size="2xl" />
                        <br />
                        Hợp tác rộng rãi
                    </div>

                    <div onClick={() => handleClick(6)}>
                        <FontAwesomeIcon icon={faAddressBook} size="2xl" />
                        <br />
                        Liên lạc dễ dàng
                    </div>
                </div>
            </div>
            <div className="home-content">
                <div ref={componentRef}>
                    <Introduce index={index} setIndex={setIndex} />
                </div>
                <Slide showMore={handleShowMore} show={'/specialties'} />
                <Slide showMore={handleShowMore} show={'/doctors'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)