import React, { useState } from "react";
import { Card, ButtonGroup, Button, Col, Row } from "react-bootstrap";
import "../css/Components/WorkOverview.css";

export function WorkOverview(props) {
  const [display, setDisplay] = useState(0);

  function renderButtons() {
    if (props.data) {
      const btns = props.data.map((job) => {
        return (
          <Button
            variant="howdy"
            block
            onClick={() => {
              setDisplay(job.id);
            }}
            className="rounded-0"
          >
            <p>{job.workplace}</p>
          </Button>
        );
      });
      return (
        <ButtonGroup
          vertical
          style={{ paddingTop: "2vw", paddingLeft: "0.5vw" }}
          className="w-100"
        >
          {btns}
        </ButtonGroup>
      );
    }
  }

  function renderWorkInfo() {
    if (props.data) {
      const selected = props.data[display];
      const info = selected.description.map((task) => {
        return <li>{task}</li>;
      });

      return (
        <div style={{ "text-align": "left" }}>
          <h5 style={{ paddingTop: "2vw" }}>
            {selected.position} @{" "}
            <a href={selected.url} target="_blank" rel="noopener noreferrer">
              {selected.workplace}
            </a>
          </h5>
          <h6>{selected.duration}</h6>
          <ul>{info}</ul>
        </div>
      );
    }
  }

  return (
    <Card bg="dark" className="work-overview">
      <Row style={{ paddingTop: "1vw", paddingBottom: "2vw" }}>
        <Col xs={4}>{renderButtons()}</Col>
        <Col xs={7}>{renderWorkInfo()}</Col>
      </Row>
    </Card>
  );
}

export default WorkOverview;
