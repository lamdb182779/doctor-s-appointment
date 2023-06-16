import Home from './components/Home';
import './styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import logo from '../src/assets/images/logo.png'
import Image from 'react-bootstrap/Image';

function App() {
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
          </div>
          <div className='App-address'>

          </div>
          <div className='App-email'>

          </div>
          <div className='App-phone'>

          </div>
        </div>
        <div className='App-rules'>
          <ul>
            <li>Liên hệ hợp tác</li>
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
