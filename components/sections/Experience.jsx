import React from "react";

import ExperienceOverview from "../ExperienceOverview";
import SectionContainer from "../SectionContainer";

export default function Experience() {
  return (
    <SectionContainer
      id="experience"
      name="experience"
      headerText="Experience"
      useHeaderStyle
    >
      <ExperienceOverview />
    </SectionContainer>
  );
}
