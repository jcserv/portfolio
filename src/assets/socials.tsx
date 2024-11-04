import { File, Github, Linkedin } from "lucide-react";

export const getSocials = (className: string) => [
  {
    label: "Github",
    icon: (
      <Github
        aria-label="Github Profile"
        className={className}
      />
    ),
    url: "https://github.com/jcserv",
  },
  {
    label: "LinkedIn",
    icon: (
      <Linkedin
        aria-label="LinkedIn Profile"
        className={className}
      />
    ),
    url: "https://linkedin.com/in/jarrod-servilla",
  },
  {
    label: "Resume",
    icon: (
      <File
        aria-label="Jarrod Servilla's Resume"
        className={className}
      />
    ),
    url: "/resume.pdf",
  },
]