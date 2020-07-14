import React from "react";
import Project from "../Components/Project";
import { projects } from "../data/projects";
import Fade from "react-reveal/Fade";
import "../css/Containers/Projects.css";

export function Projects() {
  function renderProjects() {
    const proj_list = projects.map((project, index) => {
      return (
        <Project
          data={project}
          alternate={index % 2 === 1}
          key={"proj-" + index}
        />
      );
    });
    return proj_list;
  }

  return (
    <div id="projects" className="projects">
      <Fade>
        <h1 style={{ paddingTop: "2vw" }}>Projects</h1>
      </Fade>
      {renderProjects()}
    </div>
  );
}

export default Projects;
