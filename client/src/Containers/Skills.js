import React, { useState } from "react";
import BarChart from "../Components/BarChart";
import { Row, Col, Button } from "react-bootstrap";
import "../css/Containers/Skills.css";

export function Skills() {
  const [activeChart, setActiveChart] = useState(1);

  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <Row>
        <Col>
          <Button
            onClick={() => {
              setActiveChart(1);
            }}
          >
            Programming Languages
          </Button>
          <Button
            onClick={() => {
              setActiveChart(2);
            }}
          >
            Frameworks
          </Button>
          <Button
            onClick={() => {
              setActiveChart(3);
            }}
          >
            Tools
          </Button>
        </Col>
        <Col>
          <BarChart value="Programming Languages" visible={activeChart === 1} />
          <BarChart value="Frameworks" visible={activeChart === 2} />
          <BarChart value="Tools" visible={activeChart === 3} />
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
