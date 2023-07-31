import Header from './Header'
import Footer from './Footer';
import Nav from './Nav';
import Login from './Login';
import ForgetPw from './ForgetPw'
import Home from '../Home/Home';
import Specialties from '../Specialties/Specialties';
import Doctors from '../Doctors/Doctors';
import Detail from '../Doctors/Detail';
import Notfound from '../Notfound/Notfound';
import Search from '../Search/Search';
import Doctor from '../Doctor/Doctor';
import Staff from '../Staff/Staff';
import Admin from '../Admin/Admin';
import ChangePw from './ChangePw';
import StaffList from '../Admin/StaffList';
import StaffAdd from '../Admin/StaffAdd';
import DoctorAdd from '../Admin/DoctorAdd';
import DoctorList from '../Admin/DoctorList';

import '../../styles/App/App.scss';

import logo from '../../assets/images/logo.png'

import { Offcanvas, Button, Modal } from 'react-bootstrap';

import { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import AdminNav from '../Admin/AdminNav';
import DoctorNav from '../Doctor/DoctorNav';
import StaffNav from '../Staff/StaffNav';

import { connect } from 'react-redux';

const App = (props) => {
  const [showChangePw, setShowChangePw] = useState(false)
  const [showForgetPw, setShowForgetPw] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)
  const [activeSendEmail, setActiveSendEmail] = useState(false)
  const [loginClick, setLoginClick] = useState(0)
  const [sendVerify, setSendVerify] = useState(0)
  const [changeClick, setChangeClick] = useState(0)

  const handleCloseCanvas = (time) => setShowCanvas(false)
  const handleShowCanvas = () => setShowCanvas(true)
  const handleCloseForgetPw = (time) => setTimeout(() => { setShowForgetPw(false); setSendVerify(0) }, time || 0)
  const handleShowForgetPw = () => setShowForgetPw(true)
  const handleCloseLogin = (time) => setTimeout(() => { setShowLogin(false); setLoginClick(0) }, time || 0)
  const handleShowLogin = () => setShowLogin(true)
  const handleCloseChangePw = (time) => setTimeout(() => { setShowChangePw(false); setChangeClick(0) }, time || 0)
  const handleShowChangePw = () => setShowChangePw(true)

  const renderNav = () => {
    switch (props.user.table) {
      case 'Admins':
        return <AdminNav handleClose={handleCloseCanvas} handleShowChangePw={handleShowChangePw} />
      case 'Doctors':
        return <DoctorNav handleClose={handleCloseCanvas} handleShowChangePw={handleShowChangePw} />
      case 'Staffs':
        return <StaffNav handleClose={handleCloseCanvas} handleShowChangePw={handleShowChangePw} />
      case undefined:
        return <Nav handleClose={handleCloseCanvas} />
      default: break
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Offcanvas show={showCanvas} onHide={handleCloseCanvas} scroll={true} style={{ transition: 'transform 0.5s ease-in-out' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <a href='/' className="text-decoration-none text-dark">Doctor Booking</a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {renderNav()}
          </Offcanvas.Body>
        </Offcanvas>
        <header className="App-header">
          <Header logo={logo} handleShowCanvas={handleShowCanvas} handleShowLogin={handleShowLogin} />
        </header>
        <main className='App-main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/specialties' element={<Specialties />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:id' element={<Detail />} />
            <Route path='/search' element={<Search />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/staff-list' element={<StaffList />} />
            <Route path='/admin/staff-add' element={<StaffAdd />} />
            <Route path='/admin/doctor-add' element={<DoctorAdd />} />
            <Route path='/admin/doctor-list' element={<DoctorList />} />
            <Route path='/doctor' element={<Doctor />} />
            <Route path='/staff' element={<Staff />} />
            <Route path='*' element={<Notfound />} />
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
          <Login loginClick={loginClick} handleCloseLogin={handleCloseLogin} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => { handleCloseLogin(); handleShowForgetPw() }}>
            Quên mật khẩu
          </Button>
          <Button variant="primary" onClick={() => setLoginClick(loginClick + 1)}>
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showForgetPw} onHide={handleCloseForgetPw} size="" centered>
        <Modal.Header closeButton>
          <Modal.Title>Quên mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForgetPw setActiveSendEmail={setActiveSendEmail}
            sendVerify={sendVerify}
            setSendVerify={setSendVerify} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => { handleCloseForgetPw(); handleShowLogin(); setActiveSendEmail(false) }}>
            Quay lại đăng nhập
          </Button>
          <Button variant="primary" onClick={() => setSendVerify(sendVerify + 1)} disabled={activeSendEmail ? false : true}>
            Gửi email xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showChangePw} onHide={handleCloseChangePw} size="" centered>
        <Modal.Header closeButton>
          <Modal.Title>Đổi mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangePw changeClick={changeClick} handleCloseChangePw={handleCloseChangePw} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setChangeClick(changeClick + 1)} variant="primary" >
            Đổi mật khẩu
          </Button>
        </Modal.Footer>
      </Modal>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  })
}

export default connect(mapStateToProps)(App);
