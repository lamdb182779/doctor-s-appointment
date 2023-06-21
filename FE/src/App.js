import Header from './components/Header'
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home/Home';
import Specialties from './components/Specialties/Specialties';
import Doctors from './components/Doctors/Doctors'

import './styles/App/App.scss';

import logo from '../src/assets/images/logo.png'

import { Offcanvas } from 'react-bootstrap';

import { useState, useEffect } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loc, setLoc] = useState(0);
  const [route, setRoute] = useState("/")
  const [pre, setPre] = useState({})

  useEffect(() => {
    function handleScroll() {
      setLoc(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <BrowserRouter>
      <div className="App">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <a href='/' style={{ textDecoration: 'none', color: 'black' }}>Doctor Booking</a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav handleClose={handleClose} loc={loc} route={route} />
          </Offcanvas.Body>
        </Offcanvas>
        <header className="App-header">
          <Header logo={logo} handleShow={handleShow} />
        </header>
        <main className='App-main'>
          <Routes>
            <Route path='/' element={<Home loc={loc} setRoute={setRoute} route={route} setPre={setPre} pre={pre} />} />
            <Route path='/specialties' element={<Specialties setRoute={setRoute} route={route} setPre={setPre} pre={pre} />} />
            <Route path='/doctors' element={<Doctors setRoute={setRoute} route={route} setPre={setPre} pre={pre} />} />
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
