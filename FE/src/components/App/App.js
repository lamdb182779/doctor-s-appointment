import Header from './Header'
import Footer from './Footer';
import Nav from './Nav';
import Login from './Login';
import ForgetPw from './ForgetPw'
import Home from '../Home/Home';
import Specialties from '../Specialties/Specialties';
import Doctors from '../Doctors/Doctors';
import Detail from '../Doctors/Detail';

import '../../styles/App/App.scss';

import logo from '../../assets/images/logo.png'

import { Offcanvas, Button, Modal } from 'react-bootstrap';

import { useState, useEffect } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

function App() {
  const [showForgetPw, setShowForgetPw] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)
  const handleCloseCanvas = () => setShowCanvas(false)
  const handleShowCanvas = () => setShowCanvas(true)
  const handleCloseForgetPw = () => setShowForgetPw(false)
  const handleShowForgetPw = () => setShowForgetPw(true)
  const handleCloseLogin = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)
  const [loc, setLoc] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setLoc(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <BrowserRouter>
      <div className="App">
        <Offcanvas show={showCanvas} onHide={handleCloseCanvas} scroll={true} style={{ transition: 'transform 0.5s ease-in-out' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <a href='/' style={{ textDecoration: 'none', color: 'black' }}>Doctor Booking</a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav handleClose={handleCloseCanvas} loc={loc} />
          </Offcanvas.Body>
        </Offcanvas>
        <header className="App-header">
          <Header logo={logo} handleShowCanvas={handleShowCanvas} handleShowLogin={handleShowLogin} />
        </header>
        <main className='App-main'>
          <Routes>
            <Route path='/' element={<Home loc={loc} />} />
            <Route path='/specialties' element={<Specialties />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctor/:id' element={<Detail />} />
          </Routes>
        </main>
        <footer className='App-footer'>
          <Footer logo={logo} />
        </footer>
      </div>
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => { handleCloseLogin(); handleShowForgetPw() }}>
            Quên mật khẩu
          </Button>
          <Button variant="primary" >
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showForgetPw} onHide={handleCloseForgetPw} centered>
        <Modal.Header closeButton>
          <Modal.Title>Quên mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForgetPw />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => { handleCloseForgetPw(); handleShowLogin() }}>
            Quay lại đăng nhập
          </Button>
          <Button variant="primary" >
            Gửi email xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </BrowserRouter>
  );
}

export default App;
