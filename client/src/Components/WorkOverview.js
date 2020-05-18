import React, { useState } from "react";
import { Card, ButtonGroup, Button, Col, Row } from "react-bootstrap";
import "../css/Components/WorkOverview.css";

export function WorkOverview(props) {
  const [display, setDisplay] = useState(0);

  function renderButtons(isVertical) {
    if (props.data) {
      const btns = props.data.map((job, index) => {
        return (
          <Button
            key={index}
            variant="howdy"
            block
            onClick={() => {
              setDisplay(job.id);
            }}
            className="rounded-0 work-btn"
          >
            <p>{job.workplace}</p>
          </Button>
        );
      });
      return (
        <ButtonGroup vertical={isVertical} className="p-2 w-75">
          {btns}
        </ButtonGroup>
      );
    }
  }

  function renderWorkplace(selected) {
    if (selected && selected.url) {
      return (
        <a href={selected.url} target="_blank" rel="noopener noreferrer">
          {selected.workplace}
        </a>
      );
    }
    return selected.workplace;
  }

  function renderWorkInfo() {
    if (props.data) {
      const selected = props.data[display];
      const info = selected.description.map((task, index) => {
        return <li key={index}>{task}</li>;
      });

      return (
        <div style={{ textAlign: "left" }} className="m-2">
          <h5 className="p-2">
            {selected.position} @ {renderWorkplace(selected)}
          </h5>
          <h6>{selected.duration}</h6>
          <ul>{info}</ul>
        </div>
      );
    }
  }

  return (
    <Card bg="dark" className="w-50 d-flex flex-wrap">
      <Row className="d-block d-lg-none">{renderButtons(false)}</Row>
      <Row className="p-2">
        <Col xs={5} md={3} className="d-none d-lg-block">
          {renderButtons(true)}
        </Col>
        <Col>{renderWorkInfo()}</Col>
      </Row>
    </Card>
  );
}

export default WorkOverview;
