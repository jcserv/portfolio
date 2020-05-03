import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "../css/Components/Footer.css";

export function Footer() {
  return (
    <div className="footer">
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
      <p
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Click me to scroll to the top!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
      </p>
    </div>
  );
}

export default Footer;
