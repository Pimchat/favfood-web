import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logofavfood from "./logo-favfood.png";

function NavMenu() {
  return (
    <div className="header">
      <Navbar className="nav" collapseOnSelect fixed="top" expand="lg">
        <div className="menu-left">
          <Navbar.Brand>
            <img src={logofavfood} alt="Logo" width="160" />
          </Navbar.Brand>
        </div>
        <div className="menu-right">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex">
              <Nav.Link href="/home" className="menu">
                Home
              </Nav.Link>
              <Nav.Link href="/foods" className="menu">
                Foods
              </Nav.Link>
              <Nav.Link href="/drinks" className="menu">
                Drinks
              </Nav.Link>
              <NavDropdown title="Restaurants" className="menu">
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/locations">Locations</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/stories" className="menu">
                Stories
              </Nav.Link>
              <Nav.Link href="/videos" className="menu">
                Videos
              </Nav.Link>
              <Form className="d-flex">
                <FormControl type="text" placeholder="Search" />
                <Button type="submit" variant="outline-success">
                  Search
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div>Hello</div>
    </div>
  );
}

export default NavMenu;
