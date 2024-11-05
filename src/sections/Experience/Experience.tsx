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
import experiences from "@/assets/experience.json";
import { Experience } from "@/types/experience";
import { useActiveExp } from "@/context/ActiveExpProvider";

export const ExperienceSection: React.FC = () => {
  const { activeExp, setActiveExp } = useActiveExp();

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
            {experiences.map((exp: Experience, idx) => (
              <Button
                key={`${exp.workplace}`}
                onClick={() => setActiveExp(`${idx}`)}
                className={`w-2/3 ${activeExp === `${idx}` ? "bg-[#1ca7d0] dark:bg-[#90cdf4]" : ""}`}
              >
                {exp.workplace}
              </Button>
            ))}
          </div>
          <div className="flex justify-center md:hidden w-full">
            <Select
              value={`${activeExp}`}
              onValueChange={(value) => setActiveExp(value)}
              aria-label="Select experience"
            >
              <SelectTrigger className="mb-8 w-1/2" aria-label="Select experience">
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
              {experiences[+activeExp].position} @{" "}
              {experiences[+activeExp].url ? (
                <StyledLink href={experiences[+activeExp].url || "#"}>
                  {experiences[+activeExp].workplace}
                </StyledLink>
              ) : (
                experiences[+activeExp].workplace
              )}
            </h3>
            {experiences[+activeExp].duration.map((dur, idx) => (
              <p key={`duration-${idx}`} className="text-left">
                {dur}
              </p>
            ))}
            <ul className="mt-1">
              {experiences[+activeExp].description.map((desc, idx) => (
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
