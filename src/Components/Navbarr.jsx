import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom"
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';

const Navbarr = () => {
  return (
    <BrowserRouter basename="/reactservice">
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
          <Container className='fixed="top"'>
            <Navbar.Brand exact as={NavLink} to="/" className='logo'>ABHEY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" id='sidebar'>
                <Nav.Link exact as={NavLink} to="/" activeClassName='active'>Home</Nav.Link>
                <Nav.Link exact as={NavLink} to="/about" activeClassName='active'>About</Nav.Link>
                <Nav.Link exact as={NavLink} to="/service" activeClassName='active'>Services</Nav.Link>
                <Nav.Link exact as={NavLink} to="/contact" activeClassName='active'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
    
    </>
    <Footer />
    </BrowserRouter>
    
  );
}

export default Navbarr