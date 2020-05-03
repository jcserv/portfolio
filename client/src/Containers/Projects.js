import React from "react";
import Project from "../Components/Project";
import { projects } from "../data/projects";
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
      <h1>Projects</h1>
      {renderProjects()}
    </div>
  );
}

export default Projects;
