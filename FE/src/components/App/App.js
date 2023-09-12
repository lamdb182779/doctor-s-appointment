import Header from "./Header"
import Footer from "./Footer";
import Login from "./Login";
import ForgetPw from "./ForgetPw"
import Home from "../Guest/Home/Home";
import Specialties from "../Guest/Specialties/Specialties";
import Doctors from "../Guest/Doctors/Doctors";
import Detail from "../Guest/Doctors/Detail";
import Notfound from "../General/Notfound/Notfound";
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
import useUser from "../../custom/user";
import NavigateRoles from "./NavigateRoles";
import GuestRoute from "./GuestRoute";
const App = (props) => {
  const user = useSelector(state => state.user)
  const { setUser, clearUser } = useUser()

  return (
    <BrowserRouter>
      <div className="App">
        <NavigateRoles />

        <header className="App-header shadow">
          <Header logo={logo} />
        </header>
        <main className="App-main active">
          <Routes>
            <Route path="/" element={<GuestRoute element={<Home />} />} />
            <Route path="/login" element={<GuestRoute element={<Login />} />} />
            <Route path="/specialties" element={<GuestRoute element={<Specialties />} />} />
            <Route path="/doctors" element={<GuestRoute element={<Doctors />} />} />
            <Route path="/doctors/:id" element={<GuestRoute element={<Detail />} />} />
            <Route path="/search" element={<GuestRoute element={<Search />} />} />
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
            <Route path="*" element={<Notfound />} />
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
    </BrowserRouter>
  );
}

export default App;
