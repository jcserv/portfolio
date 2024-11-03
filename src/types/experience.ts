export type Experience = {
  workplace: string;
  position: string;
  duration: string[];
  description: string[];
  url?: string;
};

/** Used to generate searchable content */
export function experienceToContent(experience: Experience[]): string[] {
  return experience.map((exp) => {
    return [
      exp.workplace,
      ...exp.description,
    ].join(" ");
  });
}