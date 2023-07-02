import Header from './components/Header'
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home/Home';
import Specialties from './components/Specialties/Specialties';
import Doctors from './components/Doctors/Doctors'
import Detail from './components/Doctors/Detail';

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
        <Offcanvas show={show} onHide={handleClose} scroll={true} style={{ transition: 'transform 0.5s ease-in-out' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <a href='/' style={{ textDecoration: 'none', color: 'black' }}>Doctor Booking</a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav handleClose={handleClose} loc={loc} />
          </Offcanvas.Body>
        </Offcanvas>
        <header className="App-header">
          <Header logo={logo} handleShow={handleShow} />
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
    </BrowserRouter>
  );
}

export default App;
