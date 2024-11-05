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
    content: [
      "Go, Python, Java, JavaScript, TypeScript, HTML, CSS",
      "React, Django, GraphQL, Angular, Express, NextJS, Spring",
      "PostgreSQL, DynamoDB, S3, MongoDB, Neo4j",
      "Git, AWS, Docker, Kafka, Prometheus, Grafana, Temporal",
    ]
  },
]