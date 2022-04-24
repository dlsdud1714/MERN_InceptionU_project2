import React from "react";
import { Button, Nav, Navbar, NavbarBrand, NavDropdown, Container, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'

const Header = (props) => {
  const {businessData} = props; 
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    border: "1px solid black",
    paddingtop: "50px",
    paddingright: "30px",
    paddingbottom: "50px",
    paddingleft: "80px",
    fontFamily: "Sans-Serif",
  };
  return (
    <div>
      <Navbar bg="danger" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">YCCWhatsNearMe?</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home"> Home </Nav.Link>
              <Nav.Link href="/about"> About </Nav.Link>
              <Nav.Link href="#" disabled> Link </Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"> Auto Service </NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Beauty </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Cafe </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Clothing </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Fastfood </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Groceries </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Pets </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Recreation </NavDropdown.Item>
                <NavDropdown.Item href="#action5"> Restaraunts </NavDropdown.Item>
              </NavDropdown>
            </Nav>
              <SearchBar businessData={businessData}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
