import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/Components/NavigationBar.css";

export function NavigationBar() {
  return (
    <div className="nav-box">
      <Navbar
        fixed="top"
        className="d-flex navbar"
        style={{ background: "#252934" }}
        expand="md"
      >
        <Navbar.Brand
          className=""
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <img
            alt=""
            src={require("../logo.png")}
            width="60"
            height="60"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="link">
              <Link
                className="p-2"
                style={{ color: "white" }}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="link">
              <Link
                className="p-2"
                style={{ color: "white" }}
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link className="link">
              <Link
                className="p-2 link"
                style={{ color: "white" }}
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </Link>
            </Nav.Link>
            <Nav.Link className="link">
              <Link
                className="p-2 link"
                style={{ color: "white" }}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link className="link">
              <Link
                className="p-2 link"
                style={{ color: "white" }}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
