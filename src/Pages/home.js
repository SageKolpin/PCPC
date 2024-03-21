import React from 'react';
import './new.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { Routes } from 'react-router-dom';
import Form from '../compoents/ContactUs'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Home() {

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark" sticky="top" >
          <Container fluid>
            <div id='navbar'>
              <NavbarBrand id="pcpc1">Pacific Counseling and <br></br> Psychology Center</NavbarBrand>
              <NavbarBrand id="pcpc11">Pacific Counseling and Psychology Center</NavbarBrand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Pacific Counseling and Psychology Center
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/about/:aboutId">About our Doctor</Nav.Link>
                  <Nav.Link href="#action2">Resources</Nav.Link>
                  <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">(360) 200-8811</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      doctorkolpin@gmail.com
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Or fill out our form on hompage
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div class='about1'>
        <h2 id="empower">Empowering You to Thrive</h2>

        <div id='doc2'>
 

        <div class="about4">
          <div id='space'> </div>
          <h2 id='dc'> Meet The Doctor </h2>
          <div id="about5">
            <div>
              <h6 id="shortabout">Dr. Kolpin is a passionate and dedicated therapist who strides to provide a safe and supportive place to grow.</h6>
              <img id='img' src='https://i.imgur.com/1HgRzvh.png' />
              <Button id="button3" variant="outline-primary" size='lg' href="/about/:aboutId">About Dr.Kolpin</Button>{' '}
            </div>
            <img id='drwho' src='https://i.imgur.com/YqUVijH.png' />
        
          </div>
        </div>
      </div>

        </div>


      <div id='background'>
        <div class="about2">
          <div id='space'> </div>
          <h2 id='services'>Our Services </h2>
          <div id="each">
            <div id="one">
              <h4 id="words1">Individual Counseling</h4>
            </div>
            <div id="two">
              <h4 id="words2">Family Therapy</h4>
            </div>
            <div id="four">
              <h4 id="words4">Child Therapy</h4></div>
            <div id="three">
              <h4 id="words3">Group Sessions</h4>
            </div>
          </div>
        </div>
        
        <div class='about3'>
          <div id='space2'> </div>
          <Button variant="success" onClick={handleClick}>Book a Consultation with Us</Button>
        </div>


        <div class="about4">
          <div id='space'> </div>
          <h2 id='dc'> Meet, <br /> The Doctor </h2>
          <div id="about5">
            <img id='drwho' src='https://i.imgur.com/YqUVijH.png' />
            <div >
              <h6 id="shortabout">Dr. Kolpin is a passionate and dedicated therapist who strides to provide a safe and supportive place to grow.</h6>
              <Button id="button3" variant="outline-primary" size='sm' href="/about/:aboutId">About Dr.Kolpin</Button>{' '}
            </div>
          </div>
        </div>
      </div>

      <div id='lgabout2'>

        <div class="about2">
          <h2 id='services'>Our Services </h2>
          <div id="each">

           
            <div id="one">
              <h4 id="words1">Individual Counseling</h4>
            </div>
            <div id="two">
              <h4 id="words2">Family Therapy</h4>
            </div>
          
            <div id="four">
              <h4 id="words4">Child Therapy</h4></div>
            <div id="three">
              <h4 id="words3">Group Sessions</h4>
            </div>
            </div>
        </div>
      </div>

      <div className='mobil1'>
      <div class='about3'>
          <div id='space2'> </div>
          <Button variant="success" onClick={handleClick}>Book a Consultation with Us</Button>
        </div>
        
      <div className='about6'>
        <div id='rew'>
          <h1 id='res'>Resources</h1>
          <h3 id="resourceab">Check out our currated collection of free materials for health and wellbeing here.</h3>
          <Button variant="success">Mindfulness</Button>{' '}
        </div>
      </div>
        </div>



      <div className='desk1'>
      <div class='about3'> 
          <Button variant="success" onClick={handleClick} id='consult' size='lg'>Book a Consultation with Us</Button>
        </div>
        
      <div className='about6'>
        <div id='rew'>
          <h1 id='res'>Resources</h1>
          <h3 id="resourceab">Check out our currated collection of free materials for health and wellbeing here.</h3>
          <Button variant="primary" size='lg'>Mindfulness</Button>{' '}
        </div>
      </div>
      </div>




      <div id='images'>
        <img id='img1' src='https://i.imgur.com/1HgRzvh.png' />
      </div>
      <div className='about7' ref={ref}>
        <h1 id='=contact'></h1>
        <h1>Let's get in touch!</h1>
        <h3 id='const'>If you have any questions or would like to book a consultation fill out the form and our reciptionist will be back to you.</h3>
        <Form />
      </div>
      <div id='space2'> </div>
      <div className='about8'>
        <div id='rew1'>
          <div id='space2'> </div>
          <h4 id='loc'>Located in WA & CA. (360) 200-8811</h4>
        </div>
      </div>


    </>
  );
}

export default Home;
