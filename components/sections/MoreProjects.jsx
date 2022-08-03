import React from "react";

import MoreProjectsGrid from "../MoreProjectsGrid";
import SectionContainer from "../SectionContainer";

export default function MoreProjects({ translationFile }) {
  return (
    <SectionContainer
      id="more-projects"
      name="more-projects"
      headerText={translationFile.moreProjects.title}
      useHeaderStyle
    >
      <MoreProjectsGrid translationFile={translationFile} />
    </SectionContainer>
  );
}
