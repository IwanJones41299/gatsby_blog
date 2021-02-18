import React from "react"
import { Nav, Navbar, NavbarBrand } from "react-bootstrap"
import { Link } from "gatsby";
import "./nav.css";

const NavLayout = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <NavbarBrand href="/">Gatsby</NavbarBrand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/about">About</Link></Nav.Link>
        <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link className="nav-link"><Link to="/login">Login</Link></Nav.Link>
        <Nav.Link><Link to="/register">Register</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavLayout
