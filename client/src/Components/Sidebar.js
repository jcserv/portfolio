import React from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

import "../css/Components/Sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="list-group list-group-sidebar">
        <Button
          href="https://github.com/jcserv"
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <FaGithub />
        </Button>
        <Button
          href="https://www.linkedin.com/in/jarrod-servilla/"
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <FaLinkedin />
        </Button>
        <Button
          href="https://devpost.com/jcserv"
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <FaDev />
        </Button>
        <Button
          href={require("../data/resume.pdf")}
          target="_blank"
          variant="secondary"
          className="list-group-item"
        >
          <IoMdDocument />
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
