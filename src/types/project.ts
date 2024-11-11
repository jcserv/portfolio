export type ProjectLink = {
  label: string;
  icon: string;
  url: string;
};

export type Project = {
  name: string;
  subtitle?: string;
  description?: string;
  tech: string[];
  links: ProjectLink[];
  type?: string;
  pic?: string;
};
