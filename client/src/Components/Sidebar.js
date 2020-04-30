import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

import "../css/Components/Sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <ListGroup>
        <ListGroup.Item>
          <FaGithub />
        </ListGroup.Item>
        <ListGroup.Item>
          <FaLinkedin />
        </ListGroup.Item>
        <ListGroup.Item>
          <FaDev />
        </ListGroup.Item>
        <ListGroup.Item>
          <GrDocumentText />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
