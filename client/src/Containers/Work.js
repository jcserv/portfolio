import React from "react";
import WorkOverview from "../Components/WorkOverview";
import { jobs } from "../data/work";
import { Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import "../css/Containers/Work.css";

export function Work() {
  return (
    <div id="work" className="work">
      <Fade>
        <div>
          <h1 style={{ paddingTop: "6vw" }}>Work Experience</h1>
          <Row
            style={{ paddingTop: "3vw" }}
            className="d-flex justify-content-center"
          >
            <WorkOverview data={jobs} />
          </Row>
        </div>
      </Fade>
    </div>
  );
}

export default Work;
