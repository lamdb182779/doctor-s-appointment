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

const Home = (props) => {
    const navigate = useNavigate()
    const handleShowMore = (route) => {
        navigate(route)
        window.scrollTo(0, 0);
    }
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
                    <div>
                        <FontAwesomeIcon icon={faCalendarDays} size="2xl" />
                        <br />
                        Đặt lịch nhanh chóng
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserNurse} size="2xl" />
                        <br />
                        Chăm sóc tận tình
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHospital} size="2xl" />
                        <br />
                        Đầy đủ các chuyên khoa
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTruckArrowRight} size="2xl" />
                        <br />
                        Thông tin ngay lập tức
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faAddressBook} size="2xl" />
                        <br />
                        Liên lạc dễ dàng
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBlenderPhone} size="2xl" />
                        <br />
                        Túc trực 24/24
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHandshake} size="2xl" />
                        <br />
                        Hợp tác rộng rãi
                    </div>
                </div>
            </div>
            <div className="home-content">
                <Slide showMore={handleShowMore} />
            </div>
        </div>
    )
}

export default Home