import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="Header Header--top">
      <Container className="Header-inner Header-inner--top">
        <Navbar expand="lg" className="w-100">
          <Navbar.Toggle aria-controls="primary-nav" />
          <Navbar.Collapse id="primary-nav" className="d-flex justify-content-between w-100">
            <div className="d-flex">
              <Nav className="Header-nav">
                <Nav.Link as={Link} to="/" className="Header-nav-item Header-nav-item--active">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="Header-nav-item">
                  About
                </Nav.Link>
              </Nav>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Navbar.Brand as={Link} to="/" className="Header-branding">
                Carlos Romero
              </Navbar.Brand>
            </div>
            <div className="d-flex">
              <Nav className="Header-nav">
                <Nav.Link as={Link} to="/resume" className="Header-nav-item">
                  Resume
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
