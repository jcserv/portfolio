import React from "react";
import WorkOverview from "../Components/WorkOverview";
import { jobs } from "../data/work";
import { Row } from "react-bootstrap";
import "../css/Containers/Work.css";

export function Work() {
  return (
    <div id="work" className="work">
      <div>
        <h1 style={{ "padding-top": "3vw" }}>Work Experience</h1>
        <Row
          style={{ "padding-top": "2vw" }}
          className="d-flex justify-content-center"
        >
          <WorkOverview data={jobs} />
        </Row>
      </div>
    </div>
  );
}

export default Work;
