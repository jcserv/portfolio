import React from "react";

import { ContinueIndicator } from "@/components/ContinueIndicator";
import { Button } from "@/components/ui/button";
import { StyledLink } from "@/components/Link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Experience = {
  workplace: string;
  position: string;
  duration: string[];
  description: string[];
  url?: string;
};

const experiences: Experience[] = [
  {
    workplace: "dbt Labs",
    position: "Software Engineer",
    duration: ["Aug 2024 - Present"],
    description: [
      "Developed and maintained customer-facing features for dbt Explorer using React, Django, and GraphQL to enhance user experience and product capabilities",
      "Collaborated closely with engineers and product managers to understand requirements and build quality solutions",
      "Participated in code reviews and provide constructive feedback to maintain code quality",
    ],
    url: "https://getdbt.com/",
  },
  {
    workplace: "SailPoint",
    position: "Senior Software Engineer",
    duration: ["Jan 2022 - Jul 2024"],
    description: [
      "Developed large-scale features for Workflows, a low-code automation platform built with Go, resulting in increased usage of SailPoint APIs",
      "Re-architected execution flow to improve DynamoDB read/write patterns, leading to 38% increased throughput and 53% cost savings",
      "Led development project of actions versioning feature, enabling team to develop/patch new & existing actions without risk",
      "Successfully rolled out operational improvements to various teams",
    ],
    url: "https://sailpoint.com/",
  },
  {
    workplace: "Citi",
    position: "Software Developer Intern",
    duration: ["May 2021 - Aug 2021", "Jul 2020 - Aug 2020"],
    description: [
      "Migrated legacy infrastructure from monolithic architecture into microservices, resulting in a 32.6% processing time decrease",
      "Created internal dev tools using Angular and Java/Spring, yielding a 15.6% productivity increase",
      "Managed a team of 4 software developers to build portfolio management service PoC with React",
    ],
    url: "https://www.citigroup.com/citi/",
  },
  {
    workplace: "Citylitics",
    position: "Software Developer Intern",
    duration: ["Aug 2020 - April 2021"],
    description: [
      "Overhauled querying engine by developing highly requested features using React and Redux, improving lead generation efficiency by 150%",
      "Implemented RESTful APIs using Django to allow for storage of consumer data, generating a 30% increase in size of key dataset in just 90 days",
      "Wrote tests in Jest verifying standard user flows, increasing code coverage to 78%",
    ],
    url: "https://citylitics.com/",
  },
  {
    workplace: "U of T",
    position: "Head TA",
    duration: ["Jan 2020 - Dec 2021"],
    description: [
      "Created microservices assignment using Java backend APIs with a JavaScript/React frontend, built and deployed with Docker",
      "Provided technical mentorship for multiple full stack projects over a 4-month scrum development cycle",
      "Answered questions on course forums with 1000+ students, with 3rd highest contributions amongst TAs",
    ],
  },
  {
    workplace: "PAL Lab",
    position: "Social Robotics Programmer",
    duration: ["May 2019 - Dec 2019"],
    description: [
      "Implemented tooling for researchers enabling subject/robot engagement, leveraging Furhat API",
      "Developed a React web application for researchers to remotely control run robot actions",
      "Designed the PAL Lab website",
    ],
    url: "https://www.psycholinguistics.ca/",
  },
];

export const Experience: React.FC = () => {
  const [currExperience, setCurrExperience] = React.useState<number>(0);
  return (
    <section
      id="experience"
      className="flex justify-center items-center px-4 h-[60vh] min-h-screen page-section"
    >
      <div className="w-full max-w-4xl">
        <h1 className="mb-20 font-semibold text-[#1ca7d0] text-4xl text-center dark:text-[#90cdf4]">
          Experience
        </h1>
        <div className="flex md:flex-row flex-col items-center md:items-start">
          {/* Button navigation shows up when viewport >= md */}
          <div className="flex flex-col justify-center items-center space-y-4 max-md:hidden w-full md:w-1/3 self-center">
            {experiences.map((exp, idx) => (
              <Button
                key={`${exp.workplace}`}
                onClick={() => setCurrExperience(idx)}
                className={`w-2/3 ${currExperience === idx ? "bg-[#1ca7d0] dark:bg-[#90cdf4]" : ""}`}
              >
                {exp.workplace}
              </Button>
            ))}
          </div>
          <div className="flex justify-center md:hidden w-full">
            <Select
              value={`${currExperience}`}
              onValueChange={(value) => setCurrExperience(+value)}
            >
              <SelectTrigger className="mb-8 w-1/2">
                <SelectValue placeholder="View past roles" />
              </SelectTrigger>
              <SelectContent onSelect={() => {}}>
                <SelectGroup>
                  {experiences.map((exp, idx) => (
                    <SelectItem key={`${exp.workplace}`} value={`${idx}`}>
                      {exp.workplace}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col justify-start w-full md:w-1/2 h-full overflow-y-auto self-center">
            <h3 className="scroll-m-20 mb-1 font-semibold text-2xl text-left tracking-tight">
              {experiences[currExperience].position} @{" "}
              {experiences[currExperience].url ? (
                <StyledLink href={experiences[currExperience].url}>
                  {experiences[currExperience].workplace}
                </StyledLink>
              ) : (
                experiences[currExperience].workplace
              )}
            </h3>
            {experiences[currExperience].duration.map((dur, idx) => (
              <p key={`duration-${idx}`} className="text-left">
                {dur}
              </p>
            ))}
            <ul className="mt-1">
              {experiences[currExperience].description.map((desc, idx) => (
                <li key={`desc-point-${idx}`} className="text-left">
                  • {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContinueIndicator
          nextSection="projects"
          className="flex justify-center pt-8"
        />
      </div>
    </section>
  );
};
