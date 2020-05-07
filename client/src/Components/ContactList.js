import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import "../css/Components/ContactList.css";

export function ContactList(props) {
  return (
    <ListGroup
      horizontal={props.isHorizontal}
      className="list-group list-group-sidebar"
    >
      <ListGroup.Item>
        <Button
          href="https://github.com/jcserv"
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <FaGithub />
        </Button>
      </ListGroup.Item>

      <ListGroup.Item>
        <Button
          href="https://www.linkedin.com/in/jarrod-servilla/"
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <FaLinkedin />
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button
          href="https://devpost.com/jcserv"
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <FaDev />
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button
          href={require("../data/resume.pdf")}
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <IoMdDocument />
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button
          href="mailto:jarrod.servilla@gmail.com"
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <MdEmail />
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ContactList;
