import React from "react";

import ExperienceOverview from "../ExperienceOverview";
import SectionContainer from "../SectionContainer";

export default function Experience({ locale, translationFile }) {
  return (
    <SectionContainer
      id="experience"
      name="experience"
      headerText={translationFile.experience.title}
      useHeaderStyle
    >
      <ExperienceOverview locale={locale} />
    </SectionContainer>
  );
}
