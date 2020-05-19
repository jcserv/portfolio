import React from "react";
import { Row } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Jump from "react-reveal/Jump";
import ContactList from "./ContactList";
import "../css/Components/Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/jcserv/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-text"
        >
          Made with{" "}
          <span role="img" aria-label="blue-heart">
            &#128153;
          </span>{" "}
          (and React) by Jarrod Servilla
        </a>
        <Jump duration={1500}>
          <p
            onClick={() => {
              scroll.scrollToTop();
            }}
            style={{ paddingTop: "2vw" }}
          >
            <span role="img" aria-label="rocket">
              &#128640;
            </span>{" "}
            Click me to scroll to the top!{" "}
            <span role="img" aria-label="rocket">
              &#128640;
            </span>
          </p>
        </Jump>
      </div>
      <Row className="d-block d-sm-none justify-content-center">
        <ContactList isHorizontal={true} />
      </Row>
      <div className="d-flex justify-content-end admin">
        <Link to="/admin">admin</Link>
      </div>
    </div>
  );
}

export default Footer;
