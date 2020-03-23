import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import yin_yang from '../images/yin_yang.png';

function NavBar() {
  return (
    <div class="bold">
      <Navbar bg="dark" variant="dark">
        {/* <img src={yin_yang} alt="logo" height="20"/> */}
        <Navbar.Brand href="/">Jason Wong</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="cv">CV</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;