import React from 'react';
import './new.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';



    export const AboutPage = () => {
    return(
        <>
        {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark" sticky="top" >
          <Container fluid>
            <div id='navbar'>
            <NavbarBrand id="pcpc1">Pacific Counseling and<br/> Pyschological Center</NavbarBrand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Pacific Counseling and Pyschological Center
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Homepage</Nav.Link>
                  <Nav.Link href="/about/:aboutId">About our Doctor</Nav.Link>
                  <Nav.Link href="#action2">Resources</Nav.Link>

                  <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">(828)222-2222</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              pacificcounselingpc@gmail.com
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
      <div id='aboutpage'>
        <div className="aboutheader">
        <h1>Hello, my name is Thierry (he/him/his)</h1>
   
        </div>
        <div className="aboutbio">
        <h3 id='seca'>Dr. Thierry Kolpin received his doctorate from Stanford University, California, with an emphasis in school and community-based counseling psychology. <br/>  <br/> Licensed in California and Washington, Dr. Kolpin sees private clients both in-person and virtually, with offices in Orange, California, and Poulsbo, Washington. In addition, as an Associate Professor at the University of Massachusetts Global, he is the Department Chair for the Professional School Counseling and Psychology programs. <br/> <br/> He also consults for universities across the globe to assist in the development of mental health and disability support.  Dr. Kolpin presents at international conferences on topics including Trauma, Disabilities, Mindfulness, Crisis Prevention and Response, TBI, Depression, and Anxiety.  </h3>
     </div> 
     <img src='https://i.imgur.com/GRMFpAn.jpeg' id='aboutimg'/>       
     </div>
     <div id='hmbu'>
     <div className="d-grid gap-2">
     <Button id="button3" variant="outline-success" size='lg' href="/">Homepage</Button>{' '}
     </div>
     </div>
        
        </>
    )
}


