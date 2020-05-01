import React from "react";

import { Link /*, animateScroll as scroll*/ } from "react-scroll";
import { BsChevronDown } from "react-icons/bs";
import "../css/Containers/Landing.css";

export function Landing() {
  return (
    <div id="landing" className="landing">
      <div className="center">
        <h1>Hi, I'm Jarrod Servilla, </h1>
        <h1> a full stack developer.</h1>
      </div>
      <div className="learn">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h5>Learn More</h5>
          <h6>
            <BsChevronDown />
          </h6>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
