import React from "react";
import { Button, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import "../css/Components/ContactList.css";

export function ContactList(props) {
  const tooltip = (name) => {
    return <Tooltip id={`tooltip-${name}`}>{name}</Tooltip>;
  };

  return (
    <ListGroup
      horizontal={props.isHorizontal}
      className="list-group list-group-sidebar"
    >
      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("Github")}
          delay="750"
        >
          <Button
            href="https://github.com/jcserv"
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <FaGithub size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>

      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("LinkedIn")}
          delay="750"
        >
          <Button
            href="https://www.linkedin.com/in/jarrod-servilla/"
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <FaLinkedin size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>
      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("DevPost")}
          delay="750"
        >
          <Button
            href="https://devpost.com/jcserv"
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <FaDev size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>
      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("Resume")}
          delay="750"
        >
          <Button
            href={require("../data/resume.pdf")}
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <IoMdDocument size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>
      <ListGroup.Item>
        <OverlayTrigger
          trigger="hover"
          placement="right"
          overlay={tooltip("Email")}
          delay="750"
        >
          <Button
            href="mailto:jarrod.servilla@gmail.com"
            target="_blank"
            variant="secondary"
            className="list-group-item"
          >
            <MdEmail size="1.25em" />
          </Button>
        </OverlayTrigger>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ContactList;
