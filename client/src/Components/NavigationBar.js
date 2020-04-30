import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "../css/Components/NavigationBar.css";

export function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" className="d-flex">
        <Navbar.Brand href="/dashboard" className="p-2">
          <img
            alt=""
            src={require("../logo.svg")}
            width="60"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto p-2">
          <Link
            className="p-2 link"
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
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
