import React from "react";
import { Button, Nav, Navbar, NavbarBrand, NavDropdown, Container, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

const Header = () => {
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Auto Service</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Beauty
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Cafe
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Clothing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Fastfood
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Groceries
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Pets
                </NavDropdown.Item><NavDropdown.Item href="#action5">
                  Recreation
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Restaraunts
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
