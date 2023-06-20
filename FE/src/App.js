import Home from './components/Home/Home';
import './styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCircleQuestion,
  faPhone,
  faEnvelope,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import logo from '../src/assets/images/logo.png'
import Image from 'react-bootstrap/Image';

import useFetch from "../src/custom/fetch"

function App() {
  const { data, loading } = useFetch('http://localhost:8080/api')
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-home'>
          <div className='App-bar'>
            <FontAwesomeIcon icon={faBars} size='lg' />
          </div>
          <div className='App-logo'>
            <Image src={logo} alt='logo' fluid />
          </div>
        </div>
        <div className='App-support'>
          <div className='question-icon'>
            <FontAwesomeIcon icon={faCircleQuestion} size='lg' />
          </div>
          <div className='phone-number'>
            Hỗ trợ <br />
            033xxxxx33
          </div>
        </div>
      </header>
      <main className='App-main'>
        <Home />
      </main>
      <footer className='App-footer'>
        <div className='App-info'>
          <div className='App-logo'>
            <Image src={logo} alt='logo' fluid />
            <br />
            Doctor Booking - Nền tảng đặt lịch hẹn khám trực tuyến
          </div>
          {loading === false ?
            <>
              {Object.keys(data) !== 0 ?
                <>
                  <div className='App-address'>
                    <FontAwesomeIcon icon={faLocationDot} size="sm" />
                    <b>Địa chỉ</b><br />
                    {data.address}
                  </div>
                  <div className='App-email'>
                    <FontAwesomeIcon icon={faEnvelope} size="sm" />
                    <b>Email</b><br />
                    {data.email}
                  </div>
                  <div className='App-phone'>
                    <FontAwesomeIcon icon={faPhone} size="sm" />
                    <b>Điện thoại</b><br />
                    {data.phoneNumber}
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
      </footer>
    </div>
  );
}

export default App;
