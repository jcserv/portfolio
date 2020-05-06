import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/Components/NavigationBar.css";

export function NavigationBar() {
  return (
    <div className="nav-box">
      <Navbar fixed="top" className="d-flex" style={{ background: "#252934" }}>
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
        <Nav className="ml-auto">
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
