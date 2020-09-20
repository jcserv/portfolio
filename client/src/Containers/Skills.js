import React, { useState } from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { AiOutlineCode, AiFillTool, AiOutlineConsoleSql } from "react-icons/ai";
import { GrStackOverflow } from "react-icons/gr";
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5 } from "react-icons/io";
import {
  FaJava,
  FaCodiepie,
  FaReact,
  FaJenkins,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  DiPhp,
  DiJqueryLogo,
  DiMongodb,
  DiGit,
  DiVisualstudio,
  DiEclipse,
} from "react-icons/di";
import {
  SiKotlin,
  SiRedux,
  SiSpring,
  SiNeo4J,
  SiAdobexd,
} from "react-icons/si";
import BarChart from "../Components/BarChart";
import { languages, frameworks, tools } from "../data/skills";
import "../css/Containers/Skills.css";

const js = <IoLogoJavascript />;
const python = <IoLogoPython />;
const java = <FaJava />;
const c = <FaCodiepie />;
const php = <DiPhp />;
const html = <IoLogoHtml5 />;
const kotlin = <SiKotlin />;

const react = <FaReact />;
const sql = <AiOutlineConsoleSql />;
const redux = <SiRedux />;
const jquery = <DiJqueryLogo />;
const spring = <SiSpring />;
const mongo = <DiMongodb />;
const neo4j = <SiNeo4J />;

const git = <DiGit />;
const jenkins = <FaJenkins />;
const docker = <FaDocker />;
const figma = <FaFigma />;
const xd = <SiAdobexd />;
const vscode = <DiVisualstudio />;
const eclipse = <DiEclipse />;

export function Skills() {
  const [activeChart, setActiveChart] = useState(1);

  return (
    <div id="skills" name="skills" className="skills">
      <Fade>
        <div>
          <Row
            className="d-flex justify-content-center"
            id="skills"
            name="skills"
          >
            <h1 style={{ paddingTop: "1vw" }}>Skills</h1>
          </Row>
          <Row className="d-flex justify-content-center">
            <div className="p-5 skills-desc">
              <p>
                <strong>Languages:</strong> JavaScript, Python, Java, C, PHP,
                HTML/CSS, Kotlin
              </p>
              <p>
                <strong>Technologies:</strong> React, SQL, Redux, jQuery,
                Spring, MongoDB, Neo4j
              </p>
              <p>
                <strong>Tools:</strong> Git, Jenkins, Docker, Figma, Adobe XD,
                VS Code, Eclipse
              </p>
            </div>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="skills">
                <ButtonGroup vertical className="w-25 skills-buttons">
                  <Button
                    block
                    variant="skill"
                    className={
                      activeChart === 1
                        ? "text-decoration-none active-button"
                        : "text-decoration-none btn-skill"
                    }
                    onClick={() => {
                      setActiveChart(1);
                    }}
                  >
                    <div className="d-flex justify-content-center">
                      <h3>
                        <AiOutlineCode />
                      </h3>
                      <p className="button-text">Languages</p>
                    </div>
                  </Button>

                  <Button
                    block
                    className={
                      activeChart === 2
                        ? "text-decoration-none active-button"
                        : "text-decoration-none btn-skill"
                    }
                    variant="skill"
                    onClick={() => {
                      setActiveChart(2);
                    }}
                  >
                    <div className="d-flex justify-content-center">
                      <h3>
                        <GrStackOverflow />
                      </h3>
                      <p className="button-text"> Technologies</p>
                    </div>
                  </Button>
                  <Button
                    block
                    className={
                      activeChart === 3
                        ? "text-decoration-none active-button"
                        : "text-decoration-none btn-skill"
                    }
                    variant="skill"
                    onClick={() => {
                      setActiveChart(3);
                    }}
                  >
                    <div className="d-flex justify-content-center">
                      <h3>
                        <AiFillTool />
                      </h3>
                      <p
                        className="button-text"
                        style={{ paddingRight: "1vw" }}
                      >
                        Tools
                      </p>
                    </div>
                  </Button>
                </ButtonGroup>
                <p style={{ fontSize: "12px" }}>
                  Click on one of the above to see my proficiency stats
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="barchart-group">
                <Row className="d-flex justify-content-center">
                  <BarChart
                    x={languages.x}
                    height={languages.height}
                    width={languages.width}
                    logos={[js, python, java, c, php, html, kotlin]}
                    data={languages.stats}
                    visible={activeChart === 1}
                  />
                  <BarChart
                    x={frameworks.x}
                    height={frameworks.height}
                    width={frameworks.width}
                    logos={[react, sql, redux, jquery, spring, mongo, neo4j]}
                    data={frameworks.stats}
                    visible={activeChart === 2}
                  />
                  <BarChart
                    x={tools.x}
                    height={tools.height}
                    width={tools.width}
                    logos={[git, jenkins, docker, figma, xd, vscode, eclipse]}
                    data={tools.stats}
                    visible={activeChart === 3}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Fade>
    </div>
  );
}

export default Skills;
