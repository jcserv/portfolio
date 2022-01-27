const projects = [
  {
    name: "ULinks.io",
    description:
      "ULinks.io is a platform for students to browse & upload academic group chats to stay connected during online school",
    pic: "/ulinks.PNG",
    tech: ["React", "GraphQL", "Node.js"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/ulinks",
      },
    ],
  },
  {
    name: "UTM TA Application System",
    description:
      "UTAP is the central platform for all MCS TA postings @ UTM enabling students and instructors to apply for postings and manage applications.",
    pic: "/utap.png",
    tech: ["React", "Node.js"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://utap.utm.utoronto.ca/utap/",
      },
    ],
  },
  {
    name: "PostureAI",
    description:
      "PostureAI is an AI powered posture improvement web app, used by 200 monthly active users, that helps you maintain healthy posture while working.",
    subtitle: "1st Place in Best Use of GCP",
    pic: "/postureai.png",
    tech: ["React", "TypeScript"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://postureai.tech/",
      },
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/PostureAI",
      },
      {
        label: "Demo",
        icon: "youtube",
        url: "https://www.youtube.com/watch?v=SqUmP6npKYM",
      },
      {
        label: "Devpost",
        icon: "devpost",
        url: "https://devpost.com/software/placeholder-9gjdst",
      },
    ],
  },
];

export const extraProjects = [
  {
    name: "SQL Automarker",
    type: "Research",
    description:
      "Microservices architecture enabling SQL automarking with admin panel",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    links: [
      {
        label: "Project",
        icon: "link",
        url: "https://www.michaelliut.ca/projects.html",
      },
    ],
  },
  {
    name: "ResumeWords",
    type: "Personal",
    description:
      "A tool that identifies keywords in job postings using ML that will improve your chances of getting a job.",
    tech: ["React", "TypeScript", "Docker"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://resume-words.com/",
      },
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/ShahmeerShahid/ResumeWords",
      },
    ],
  },
  {
    name: "AnonBot",
    type: "Personal",
    description: "Discord bot for anonymous messaging, with 2100 messages sent",
    tech: ["Node.js"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/white-van/WVAnonBot",
      },
    ],
  },
  {
    name: "Citrade",
    type: "Work",
    description:
      "Citrade is a proof-of-concept for a retail investment brokerage, equipped with an easy-to-use UI and detailed analytics.",
    tech: ["React", "AWS"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/citrade-frontend",
      },
      {
        label: "Website",
        icon: "link",
        url: "https://main.d2mbmzkt6yj28g.amplifyapp.com/",
      },
    ],
  },
  {
    name: "UTM CSSC Website",
    type: "Work",
    description:
      "The CSSC Website is an open space for UTM CS students to ask questions, use academic tools, and get connected within the CS community.",
    tech: ["Vue"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/utm-cssc/website",
      },
      {
        label: "Website",
        icon: "link",
        url: "https://cssc.utm.utoronto.ca/",
      },
    ],
  },
  {
    name: "CollabCloud",
    type: "School",
    description:
      "Social networking platform allowing users to find collaborators for software projects.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/collabcloud/project-collabcloud",
      },
      {
        label: "Demo",
        icon: "youtube",
        url: "https://youtu.be/bPAOhb8r5Co",
      },
    ],
  },
  {
    name: "freeflo.io",
    type: "Hackathon",
    description:
      "Full stack web application enabling collaborative & open source journalism",
    tech: ["React", "Redux", "Next.js"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/white-van/freeflo.io",
      },
      {
        label: "Demo",
        icon: "youtube",
        url: "https://www.youtube.com/watch?v=pXDF2kgQGtk",
      },
    ],
  },
  {
    name: "Portfolio V1",
    type: "Personal",
    description: "My old personal portfolio, deployed with Heroku",
    tech: ["React", "Express", "MongoDB"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/portfoliov1",
      },
      {
        label: "Website",
        icon: "link",
        url: "https://infinite-inlet-11529.herokuapp.com/",
      },
    ],
  },
  {
    name: "HarMoney",
    type: "Hackathon",
    description: "Mobile application enabling users to split transactions",
    tech: ["React Native", "Node.js"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/matthuynh/harmoney",
      },
      {
        label: "Demo",
        icon: "youtube",
        url: "https://youtu.be/s13y0c__6u4",
      },
      {
        label: "Devpost",
        icon: "devpost",
        url: "https://devpost.com/software/harmoney-ci42yp",
      },
    ],
  },
  {
    name: "InsurApp",
    type: "Hackathon",
    description: "Micro insurance mobile app using image recognition",
    tech: ["Android Studio", "Flask", "AWS"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/InsurApp",
      },
    ],
  },
  {
    name: "VapeSafe",
    type: "Hackathon",
    description:
      "Mobile + hardware solution allowing users to quit vaping, won 3rd Place",
    tech: ["Android Studio", "Arduino"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/leviaviv28/VapeSafe-EngHack2019",
      },
      {
        label: "Devpost",
        icon: "devpost",
        url: "https://devpost.com/software/vapesafe/",
      },
    ],
  },
  {
    name: "ETH-Aion Atomic Swap",
    type: "Hackathon",
    description:
      "Atomic swap protocol for ETH & Aion cryptocurrencies, earning Top 6",
    tech: ["Java"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/jcserv/AtomicSwap",
      },
    ],
  },
];

export default projects;
