import React from "react";
import { Github, Youtube, Link } from "lucide-react";
import { SiDevpost } from "react-icons/si";

import { Card } from "@/components/ui/card";
import projects from "@/assets/projects.json";
import { TooltipProvider } from "@/components/ui/tooltip";
import { IconButton } from "@/components/Link";
import { ContinueIndicator } from "@/components/ContinueIndicator";
import { cn } from "@/lib/utils";

const FEATURED_PROJECTS_COUNT = 4;

type LinkType = "github" | "youtube" | "devpost" | "link";

const linkIcons: Map<LinkType, JSX.Element> = new Map([
  [
    "github",
    <Github
      key="github"
      aria-label="Github Repository"
      className="hover:text-[#1ca7d0] dark:hover:text-[#90cdf4]"
    />,
  ],
  [
    "youtube",
    <Youtube
      key="youtube"
      aria-label="YouTube Demo"
      className="hover:text-[#1ca7d0] dark:hover:text-[#90cdf4]"
    />,
  ],
  [
    "devpost",
    <SiDevpost
      key="devpost"
      aria-label="Devpost Project Page"
      className="hover:text-[#1ca7d0] dark:hover:text-[#90cdf4]"
    />,
  ],
  ["link", <Link key="link" />],
]);

type ProjectLink = {
  label: string;
  icon: string;
  url: string;
};

type Project = {
  name: string;
  tech: string[];
  links: ProjectLink[];
  type?: string;
  description?: string;
  subtitle?: string;
  pic?: string;
};

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex justify-center items-center px-4 py-20 h-full"
    >
      <div className="w-full">
        <h1 className="mb-8 font-semibold text-[#1ca7d0] text-4xl text-center dark:text-[#90cdf4]">
          Featured Projects
        </h1>
        <FeaturedProjects projects={projects.slice(0, FEATURED_PROJECTS_COUNT)} />
      </div>
    </section>
  );
};

type ProjectsDisplayProps = {
  projects: Project[];
};

const FeaturedProjects: React.FC<ProjectsDisplayProps> = ({
  projects,
}: ProjectsDisplayProps) => (
  <div>
    {projects.map((project, idx) => (
      <section
        id={`project-${idx}`}
        key={idx}
        className={cn(
          {
            "flex flex-col justify-center": idx !== 0,
            "h-[100vh]": idx !== 0 && idx !== FEATURED_PROJECTS_COUNT - 1,
            "h-[65vh]": idx === FEATURED_PROJECTS_COUNT - 1,
          })}
      >
        <ProjectCard {...project} reverse={idx % 2 === 0} />
        {idx !== (FEATURED_PROJECTS_COUNT - 1) && <ContinueIndicator
          nextSection={`project-${idx + 1}`}
          className="flex justify-center"
        />}
      </section>
    ))}
  </div>
);

type ProjectCardProps = Project & { reverse: boolean };

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  tech,
  links,
  description,
  pic,
  reverse,
}: ProjectCardProps) => {
  const card = (
    <Card className="flex flex-col justify-between p-6 h-1/2 max-md:h-full">
      <div>
        <h3 className="scroll-m-20 mb-4 font-semibold text-2xl tracking-tight">
          {name}
        </h3>
        <p className="mb-6 leading-7">{description}</p>
      </div>
      <div className="flex justify-between items-end">
        <ul className="flex flex-wrap gap-2">
          {tech.map((t, idx) => (
            <li key={idx}>
              <code className="relative bg-muted px-[0.3rem] py-[0.2rem] rounded font-mono text-sm">
                {t}
              </code>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <TooltipProvider>
            {links.map((link, idx) => (
              <IconButton key={idx} href={link.url} tooltip={link.label}>
                {linkIcons.get(link.icon as LinkType) ?? null}
              </IconButton>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </Card>
  );

  const image = (
    <img
      src={pic}
      alt={name}
      onClick={() => window.open(links[0].url, "_blank")}
      className="shadow-lg rounded-lg max-w-full h-auto cursor-pointer standout-image"
    />
  );

  return (
    <div className="flex md:flex-row flex-col gap-8 mx-4 h-[60vh]">
      <div
        className={`flex-1 justify-center items-center ${reverse ? "md:order-2" : "md:order-1"} order-1 self-center`}
      >
        {image}
      </div>
      <div
        className={`flex flex-1 justify-center items-center ${reverse ? "md:order-1" : "md:order-2"} order-2`}
      >
        {card}
      </div>
    </div>
  );
};
