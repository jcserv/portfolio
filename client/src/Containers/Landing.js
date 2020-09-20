import React from "react";

import { Link /*, animateScroll as scroll*/ } from "react-scroll";
import Jump from "react-reveal/Jump";
import { BsChevronDown } from "react-icons/bs";
import "../css/Containers/Landing.css";

export function Landing() {
  return (
    <div id="landing" className="landing">
      <div className="center">
        <h1 style={{ color: "white" }}>Hi, I'm Jarrod Servilla, </h1>
        <h1 style={{ color: "white" }}>
          {" "}
          a <strong>full stack developer.</strong>
        </h1>
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
          <h5 className="learn-more">Learn More</h5>

          <h6 style={{ paddingTop: "2vw" }}>
            <Jump forever={true} duration={1500}>
              <BsChevronDown />
            </Jump>
          </h6>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
