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
          <Navbar.Brand>YYCWhatsNearMe?</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/about"> About </Nav.Link>
              {/* <Nav.Link href="#" disabled> Link </Nav.Link> */}
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/categories/auto"> Auto Service </NavDropdown.Item>
                <NavDropdown.Item href="/categories/beauty"> Beauty </NavDropdown.Item>
                <NavDropdown.Item href="/categories/coffeeshop"> Cafe </NavDropdown.Item>
                <NavDropdown.Item href="/categories/clothing"> Clothing </NavDropdown.Item>
                <NavDropdown.Item href="/categories/fastfood"> Fastfood </NavDropdown.Item>
                <NavDropdown.Item href="/categories/groceries"> Groceries </NavDropdown.Item>
                <NavDropdown.Item href="/categories/pets"> Pets </NavDropdown.Item>
                <NavDropdown.Item href="/categories/recreation"> Recreation </NavDropdown.Item>
                <NavDropdown.Item href="/categories/restaurant"> Restaurants </NavDropdown.Item>
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

// <Navbar.Brand href="#">YYCWhatsNearMe?</Navbar.Brand> can be used in header if wanting the name of brand to have a link
