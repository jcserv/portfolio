import React, { useState, useEffect } from "react";
import { GrNode } from "react-icons/gr";
import {
  FaReact,
  FaNode,
  FaAndroid,
  FaGithub,
  FaYoutube,
  FaDev,
  FaExternalLinkAlt,
  FaLink,
} from "react-icons/fa";
import { DiPostgresql, DiMongodb } from "react-icons/di";
import { Card, Row, Col, Image, ListGroup } from "react-bootstrap";
import "../css/Components/Project.css";

const links = [
  <FaGithub />,
  <FaDev />,
  <FaYoutube />,
  <FaExternalLinkAlt />,
  <FaLink />,
];

const tech = [
  <FaReact />,
  <GrNode />,
  <FaNode />,
  <DiMongodb />,
  <DiPostgresql />,
  <FaAndroid />,
];

export function Project(props) {
  useEffect(() => {
    setAlternate(props.alternate);
    setData(props.data);
  }, [props]);

  const [alternate, setAlternate] = useState(false);
  const [data, setData] = useState(undefined);

  function decodeLink(link) {
    const small = link.toLowerCase();

    if (link.includes("https://github")) {
      return 0;
    } else if (link.includes("https://devpost")) {
      return 1;
    } else if (link.includes("https://youtu.be")) {
      return 2;
    } else if (small.includes(data.name.toLowerCase())) {
      return 3;
    }
    return 4;
  }

  function renderContent() {
    if (data) {
      return (
        <div className="content">
          <div className={alternate ? "pr-4 text-left" : "pr-4 text-right"}>
            <Card.Title>{data.name}</Card.Title>
            {data ? <Card.Subtitle>{data.subtitle}</Card.Subtitle> : ""}
          </div>
          <div className="text-left description" style={{ paddingTop: "1vw" }}>
            {data.description}
          </div>
        </div>
      );
    }
  }

  function renderTech() {
    if (data) {
      const technologies = data.tech.map((techIndex, index) => {
        return (
          <ListGroup.Item key={index} className="list-group-item">
            <h4>{tech[techIndex]}</h4>
          </ListGroup.Item>
        );
      });
      return (
        <ListGroup horizontal className="list-group-h">
          {technologies}
        </ListGroup>
      );
    }
  }

  function renderLinks() {
    if (data) {
      const link_items = data.links.map((link, index) => {
        return (
          <ListGroup.Item key={index} className="list-group-item">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {links[decodeLink(link)]}
            </a>
          </ListGroup.Item>
        );
      });
      return (
        <ListGroup horizontal className="list-group-card">
          {link_items}
        </ListGroup>
      );
    }
  }

  function renderProject(indicator) {
    if (data && indicator) {
      return (
        <div>
          <Row className="d-flex justify-content-center">
            <a href={data.links[0]} target="_blank" rel="noopener noreferrer">
              {" "}
              <Image
                fluid
                src={
                  data
                    ? data.pic
                    : "https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg"
                }
                className="project-img"
              />
            </a>
          </Row>
          <Row className="d-flex justify-content-center">{renderTech()}</Row>
        </div>
      );
    }
    return (
      <Card bg="dark" text="white" className="vertical-center">
        {renderContent()}
        <div className="d-flex justify-content-end">{renderLinks()}</div>
      </Card>
    );
  }

  return (
    <Row style={{ paddingTop: "5vw", paddingLeft: "2vw" }}>
      <Col xs={12} sm={6} className="d-flex align-items-center">
        {renderProject(!alternate)}
      </Col>
      <Col xs={12} sm={6} className="d-flex align-items-center">
        {renderProject(alternate)}
      </Col>
    </Row>
  );
}

export default Project;
