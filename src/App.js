import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (

   <>
<Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
        <h1 id="pcpc1">Pacific Counseling and Pyschological Center</h1>
        <Button variant="outline-success">Contact Us</Button>
        </Container>
      </Navbar>
      
<div class='about1'>
  <h2 id="empower">Empowering You to Thrive</h2>
</div>

<div class="about2">
  <h2>Our Services </h2>
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

<h2>Book an Appointment Now</h2>


<h2>The Doctor is In</h2>
   </>
  );
}

export default App;
