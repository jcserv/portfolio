import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "../css/Containers/About.css";

export function About() {
  return (
    <div id="about" name="about" className="about">
      <Fade>
        <div>
          <h1 style={{ paddingTop: "10vw" }}>About Me</h1>
          <Row
            style={{ paddingTop: "3vw" }}
            className="d-flex justify-content-center"
          >
            <Col lg={6}>
              <div style={{ paddingLeft: "6vw" }}>
                <div className="p-4 bio">
                  <p>
                    Hi, I'm Jarrod! I am a fourth year{" "}
                    <strong>Computer Science Specialist</strong> student at the{" "}
                    University of Toronto Mississauga.
                  </p>
                  <p>
                    I enjoy designing & engineering{" "}
                    <strong>
                      efficient full stack and mobile applications
                    </strong>
                    , and always try to optimize the user experience for a
                    simple and elegant user journey through the application. I
                    have a <strong>passion for teaching</strong>, and have
                    worked as a TA in university and highschool CS courses. I'm
                    an <strong>avid hackathon goer</strong>, and received 3rd
                    place at EngHacks 2019 for VapeSafe with my amazing team!
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="picture">
                <Image src={require("../img/me.jpg")} className="bio-img" />
              </div>
            </Col>
          </Row>
        </div>
      </Fade>
    </div>
  );
}

export default About;
