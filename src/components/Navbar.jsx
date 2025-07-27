import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {

  return (
   
    <Navbar bg="primary" expand="lg" variant="dark" className="fixed-top py-2 px-3">
      <Navbar.Brand as={Link} to="/Home"> Jornada Medica ICAT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/Registro">Registro</Nav.Link>
          <Nav.Link as={Link} to="/Enfermeria"> Enfermeria </Nav.Link>
          <Nav.Link as={Link} to="/Clinica"> Clinica </Nav.Link>
          <Nav.Link as={Link} to="/Laboratorio"> Laboratorio </Nav.Link>
          <Nav.Link as={Link} to="/Farmacia"> Farmacia </Nav.Link>        
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default AppNavbar;