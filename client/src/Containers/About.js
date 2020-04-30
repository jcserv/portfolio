import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import "../css/Containers/About.css";

export function About() {
  return (
    <div id="about" name="about" className="about">
      <div>
        <h1 className="header">About Me</h1>
        <Row style={{ "padding-top": "3vw" }}>
          <Col>
            <div className="bio">
              <p>
                Hi, I'm Jarrod! I am a third year Computer Science Specialist
                student at the University of Toronto Mississauga.
              </p>
              <p>
                I'm passionate about designing and creating web and mobile
                applications, with the goal of providing useful solutions to
                users with an elegant user experience and design.
              </p>
              <p>
                I worked as a Social Robotics Programmer at the Perception
                Action Language Lab at UTM, where I programmed the Furhat robot
                to conduct experiments focusing on human-robot interaction.
                These experiments utilized features of the robot such as
                eye-tracking and human-like body/facial gestures.
              </p>
              <p>
                I'm an incoming Full Stack Developer intern at CitiBank for July
                - August 2020, and Full Stack & Data Developer intern at WatrHub
                for Sept 2020 - August 2021.
              </p>
            </div>
          </Col>
          <Col>
            <div className="picture">
              <Image src={require("../img/me.jpg")} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
