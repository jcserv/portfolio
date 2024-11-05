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
