import React, { useState } from "react";
import { Image, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineCode, AiFillTool, AiOutlineConsoleSql } from "react-icons/ai";
import { GrStackOverflow, GrNode } from "react-icons/gr";
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io";
import { FaJava, FaCodiepie, FaReact, FaNode } from "react-icons/fa";
import {
  DiPhp,
  DiJqueryLogo,
  DiMongodb,
  DiGit,
  DiVisualstudio,
  DiIntellij,
  DiEclipse,
} from "react-icons/di";
import BarChart from "../Components/BarChart";
import Fade from "react-reveal/Fade";

import { languages, frameworks, tools } from "../data/skills";
import "../css/Containers/About.css";

const js = <IoLogoJavascript />;
const python = <IoLogoPython />;
const java = <FaJava />;
const c = <FaCodiepie />;
const php = <DiPhp />;
const html = <IoLogoHtml5 />;
const css = <IoLogoCss3 />;

const react = <FaReact />;
const express = <GrNode />;
const node = <FaNode />;
const jquery = <DiJqueryLogo />;
const mongo = <DiMongodb />;
const sql = <AiOutlineConsoleSql />;

const git = <DiGit />;
const vscode = <DiVisualstudio />;
const intellij = <DiIntellij />;
const eclipse = <DiEclipse />;

export function About() {
  const [activeChart, setActiveChart] = useState(1);

  return (
    <div id="about" name="about" className="about">
      <Fade>
        <div>
          <h1 style={{ paddingTop: "3vw" }}>About Me</h1>
          <Row
            style={{ paddingTop: "3vw" }}
            className="d-flex justify-content-center"
          >
            <Col lg={6}>
              <div className="p-4 bio">
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
                  Action Language Lab at UTM, where I programmed the Furhat
                  robot to conduct experiments focusing on human-robot
                  interaction. These experiments utilized features of the robot
                  such as eye-tracking and human-like body/facial gestures.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="picture">
                <Image src={require("../img/me.jpg")} className="bio-img" />
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <h3 style={{ paddingTop: "3vw" }}>Skills</h3>
          </Row>
          <Row className="d-flex justify-content-center">
            <div className="skills-desc">
              <p>
                Languages: JavaScript, Python, Java, C, PHP, HTML/CSS, Kotlin
              </p>
              <p>Technologies: React, Express, Node.js, SQL, jQuery, MongoDB</p>
              <p>Tools: Git, VS Code, IntelliJ, Eclipse</p>
            </div>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="skills">
                <ButtonGroup vertical className="skills-buttons">
                  <Button
                    block
                    variant="skill"
                    className="text-decoration-none btn-skill"
                    onClick={() => {
                      setActiveChart(1);
                    }}
                  >
                    <Row>
                      <h3>
                        <AiOutlineCode />
                      </h3>
                      <p className="button-text">Languages</p>
                    </Row>
                  </Button>

                  <Button
                    className="text-decoration-none btn-skill"
                    variant="skill"
                    onClick={() => {
                      setActiveChart(2);
                    }}
                  >
                    <Row>
                      <h3>
                        <GrStackOverflow />
                      </h3>
                      <p className="button-text">Frameworks</p>
                    </Row>
                  </Button>
                  <Button
                    className="text-decoration-none btn-skill"
                    variant="skill"
                    onClick={() => {
                      setActiveChart(3);
                    }}
                  >
                    <Row>
                      <h3>
                        <AiFillTool />
                      </h3>
                      <p className="button-text">Tools</p>
                    </Row>
                  </Button>
                </ButtonGroup>
                <p style={{ fontSize: "12px" }}>
                  Click on one of the above to see my proficiency stats
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="barchart-group">
                <BarChart
                  x={languages.x}
                  height={languages.height}
                  width={languages.width}
                  logos={[js, python, java, c, php, html, css]}
                  data={languages.stats}
                  visible={activeChart === 1}
                />
                <BarChart
                  x={frameworks.x}
                  height={frameworks.height}
                  width={frameworks.width}
                  logos={[react, express, node, sql, jquery, mongo]}
                  data={frameworks.stats}
                  visible={activeChart === 2}
                />
                <BarChart
                  x={tools.x}
                  height={tools.height}
                  width={tools.width}
                  logos={[git, vscode, intellij, eclipse]}
                  data={tools.stats}
                  visible={activeChart === 3}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Fade>
    </div>
  );
}

export default About;
