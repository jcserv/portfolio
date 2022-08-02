import React from "react";

import MoreProjectsGrid from "../MoreProjectsGrid";
import SectionContainer from "../SectionContainer";

export default function MoreProjects({ t }) {
  return (
    <SectionContainer
      id="more-projects"
      name="more-projects"
      headerText="Mais Projetos"
      useHeaderStyle
    >
      <MoreProjectsGrid />
    </SectionContainer>
  );
}
