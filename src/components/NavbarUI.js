import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import AuthButton from './AuthButton';
import { useAuth0 } from "@auth0/auth0-react";

const NavbarUI = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">    
        <Navbar.Brand href="/">Spice Cabinet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Profile">Profile</Nav.Link>
              <AuthButton />
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    :
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">    
      <Navbar.Brand href="/">Spice Cabinet</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <AuthButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  )
};

export default NavbarUI;



