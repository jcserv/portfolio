export type ProjectLink = {
  label: string;
  icon: string;
  url: string;
};

export type Project = {
  name: string;
  tech: string[];
  links: ProjectLink[];
  type?: string;
  description?: string;
  subtitle?: string;
  pic?: string;
};

/** Used to generate searchable content */
export function projectsToContent(projects: Project[]): string[] {
    return projects.map((project) => {
        return [
            project.name,
            project.description,
            project.subtitle,
            ...project.tech,
        ].join(" ");
    });
}
