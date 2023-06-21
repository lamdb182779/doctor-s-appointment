import "../styles/App/Footer.scss"

import useFetch from "../custom/fetch"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
    faEnvelope,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'

import { Image } from "react-bootstrap"

const Footer = (props) => {
    const { data, loading } = useFetch('http://localhost:8080/api')
    return (
        <>
            <div className='App-info'>
                <div className='App-logo' >
                    <a href='/'><Image src={props.logo} alt='logo' fluid /></a>
                    <br />
                    Doctor Booking - Nền tảng đặt lịch hẹn khám trực tuyến
                </div>
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                <div className='App-address'>
                                    <FontAwesomeIcon icon={faLocationDot} size="sm" />
                                    <b>Địa chỉ</b><br />
                                    {data[0].address}
                                </div>
                                <div className='App-email'>
                                    <FontAwesomeIcon icon={faEnvelope} size="sm" />
                                    <b>Email</b><br />
                                    {data[0].email}
                                </div>
                                <div className='App-phone'>
                                    <FontAwesomeIcon icon={faPhone} size="sm" />
                                    <b>Điện thoại</b><br />
                                    {data[0].phoneNumber}
                                </div>
                            </>
                            :
                            <>
                                <div className='App-nodata'>
                                    Không tải được dữ liệu
                                </div>
                            </>
                        }
                    </>
                    :
                    <>
                        <div className='App-loading'>
                            Đang tải dữ liệu ...
                        </div>
                    </>
                }
            </div>
            <div className='App-rules'>
                <ul>
                    <li>Liên hệ hợp tác</li>
                    <li>Danh bạ y tế</li>
                    <li>Sức khỏe doanh nghiệp</li>
                    <li>Tuyển dụng</li>
                    <li>Câu hỏi thường gặp</li>
                    <li>Điều khoản</li>
                    <li>Chính sách bảo mật</li>
                    <li>Quy chế hoạt động</li>
                </ul>
            </div>
        </>
    )
}

export default Footer