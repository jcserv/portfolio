import React from "react";

import MoreProjectsGrid from "../MoreProjectsGrid";
import SectionContainer from "../SectionContainer";

export default function MoreProjects() {
  return (
    <SectionContainer
      id="more-projects"
      name="more-projects"
      headerText="More Projects"
      useHeaderStyle
    >
      <MoreProjectsGrid />
    </SectionContainer>
  );
}
