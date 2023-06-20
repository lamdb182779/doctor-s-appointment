import Header from './components/Header'
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Specialties from './components/Specialties/Specialties';
import Doctors from './components/Doctors/Doctors'

import './styles/App/App.scss';

import logo from '../src/assets/images/logo.png'

import { Offcanvas } from 'react-bootstrap';

import { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Nav from './components/Nav';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <BrowserRouter>
      <div className="App">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Doctor Booking
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav handleClose={handleClose} />
          </Offcanvas.Body>
        </Offcanvas>
        <header className="App-header">
          <Header logo={logo} handleShow={handleShow} />
        </header>
        <main className='App-main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/specialties' element={<Specialties />} />
            <Route path='/doctors' element={<Doctors />} />
          </Routes>
        </main>
        <footer className='App-footer'>
          <Footer logo={logo} />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
