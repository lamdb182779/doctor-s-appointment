import Header from "./Header"
import Footer from "./Footer";
import Nav from "./Nav";
import Login from "./Login";
import ForgetPw from "./ForgetPw"
import Home from "../Guest/Home/Home";
import Specialties from "../Guest/Specialties/Specialties";
import Doctors from "../Guest/Doctors/Doctors";
import Detail from "../Guest/Doctors/Detail";
// import Notfound from "../General/Notfound/Notfound";
import Search from "../Guest/Search/Search";
import Doctor from "../Doctor/Doctor";
import Staff from "../Staff/Staff";
import Admin from "../Admin/Admin";
import PrivateRoute from "./PrivateRoute";
import ChangePw from "./ChangePw";
import StaffList from "../Admin/StaffList";
import StaffAdd from "../Admin/StaffAdd";
import DoctorAdd from "../Admin/DoctorAdd";
import DoctorList from "../Admin/DoctorList";
import Appointments from "../Doctor/Appointments";
import AppointmentList from "../Staff/AppointmentList";

import "../../styles/App/App.scss";

import logo from "../../assets/images/logo.png"

import { Offcanvas, Button, Modal } from "react-bootstrap";

import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import AdminNav from "../Admin/AdminNav";
import DoctorNav from "../Doctor/DoctorNav";
import StaffNav from "../Staff/StaffNav";

import { useSelector } from "react-redux";

import DoctorInfo from "../Admin/DoctorInfo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

// import cookies from "js-cookie"

import useFetch from "../../custom/fetch";
import useUser from "../../custom/user";
const App = (props) => {
  const user = useSelector(state => state.user)
  const { setUser, clearUser } = useUser()

  const [showChangePw, setShowChangePw] = useState(false)
  const [showForgetPw, setShowForgetPw] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)
  const [activeSendEmail, setActiveSendEmail] = useState(false)
  const [login, setLogin] = useState(0)
  const [sendVerify, setSendVerify] = useState(0)
  const [change, setChange] = useState(0)

  const handleCloseCanvas = () => setShowCanvas(false)
  const handleShowCanvas = () => setShowCanvas(true)
  const handleCloseForgetPw = () => setTimeout(() => { setShowForgetPw(false); setSendVerify(0) })
  const handleShowForgetPw = () => setShowForgetPw(true)
  const handleCloseLogin = () => setTimeout(() => { setShowLogin(false); setLogin(0) })
  const handleShowLogin = () => setShowLogin(true)
  const handleCloseChangePw = () => setTimeout(() => { setShowChangePw(false); setChange(0) })
  const handleShowChangePw = () => setShowChangePw(true)

  const renderNav = () => {
    switch (user.table) {
      case "Admins":
        return <AdminNav handleClose={handleCloseCanvas} handleShowChangePw={handleShowChangePw} />
      case "Doctors":
        return <DoctorNav handleClose={handleCloseCanvas} handleShowChangePw={handleShowChangePw} />
      case "Staffs":
        return <StaffNav handleClose={handleCloseCanvas} handleShowChangePw={handleShowChangePw} />
      default:
        return <Nav handleClose={handleCloseCanvas} />
    }
  }

  useEffect(() => {

  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  const { data, loading, message } = useFetch("http://localhost:8080/api/self")
  useEffect(() => {
    if (loading === false && message !== "") {
      switch (message) {
        case "ok":
          setUser(data[0])
          break
        case "missing token":
          clearUser()
          break
        case "wrong token":
          clearUser()
          break
        case "wrong table":
          clearUser()
          break
        case "access denied":
          break
        default: break
      }
    }
  }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
  if (loading === true) {
    return <></>
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Offcanvas show={showCanvas} onHide={handleCloseCanvas} scroll={true} style={{ transition: "transform 0.5s ease-in-out" }}>
          <Offcanvas.Header>
            <Offcanvas.Title>
              <a href="/" className="text-decoration-none text-dark">Doctor Booking</a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {renderNav()}
          </Offcanvas.Body>
        </Offcanvas>
        <header className="App-header shadow">
          <Header logo={logo} handleShowCanvas={handleShowCanvas} handleShowLogin={handleShowLogin} />
        </header>
        <main className="App-main shadow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<PrivateRoute table={["Admins"]} element={<Admin />} />} />
            <Route path="/admin/staff" element={<PrivateRoute table={["Admins"]} element={<StaffList />} />} />
            <Route path="/admin/staff/add" element={<PrivateRoute table={["Admins"]} element={<StaffAdd />} />} />
            <Route path="/admin/doctor/add" element={<PrivateRoute table={["Admins"]} element={<DoctorAdd />} />} />
            <Route path="/admin/doctor" element={<PrivateRoute table={["Admins"]} element={<DoctorList />} />} />
            <Route path="/admin/doctor/info/:id" element={<PrivateRoute table={["Admins"]} element={<DoctorInfo />} />} />
            <Route path="/doctor" element={<PrivateRoute table={["Doctors"]} element={<Doctor />} />} />
            <Route path="/doctor/appointments" element={<PrivateRoute table={["Doctors"]} element={<Appointments />} />} />
            <Route path="/staff" element={<PrivateRoute table={["Staffs"]} element={<Staff />} />} />
            <Route path="/staff/appointments" element={<PrivateRoute table={["Staffs"]} element={<AppointmentList />} />} />
            <Route path="*" element={<PrivateRoute />} />
          </Routes>
        </main>
        <footer className="App-footer shadow">
          <Footer logo={logo} />
        </footer>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login login={login} handleCloseLogin={handleCloseLogin} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => { handleCloseLogin(); handleShowForgetPw() }}>
            Quên mật khẩu
          </Button>
          <Button variant="primary" onClick={() => setLogin(login + 1)}>
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
          <ChangePw change={change} handleCloseChangePw={handleCloseChangePw} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setChange(change + 1)} variant="primary" >
            Đổi mật khẩu
          </Button>
        </Modal.Footer>
      </Modal>
    </BrowserRouter>
  );
}

export default App;
