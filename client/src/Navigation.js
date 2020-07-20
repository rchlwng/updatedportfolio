import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/rachellogo.png';

const Navigation = () => (
    <Navbar fixed="top" id="myNav" className="color-nav" variant="dark" expand="md">
        <Navbar.Brand href='/'>
          <img id="logo" src={logo} width="50" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href='/work'>
                  Work
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/about'>
                  About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contact'>
                  Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
);

export default Navigation;