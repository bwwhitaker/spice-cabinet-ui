import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import AuthButton from './AuthButton';


export default (
  class NavbarUI extends Component {

  

  render() {

    

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">    
        <Navbar.Brand href="/">Spice Cabinet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Profile">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <AuthButton />
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
)