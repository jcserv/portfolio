import React from "react";

import ProjectsOverview from "../ProjectsOverview";
import SectionContainer from "../SectionContainer";

export default function Projects({ translationFile }) {
  return (
    <SectionContainer
      id="projects"
      name="projects"
      headerText={translationFile.projects.title}
      useHeaderStyle
    >
      <ProjectsOverview translationFile={translationFile} />
    </SectionContainer>
  );
}
