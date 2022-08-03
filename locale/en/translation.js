const en = {
  resume: "Resume",
  landing: {
    title: "Hello, I'm Filipe Lehmann, a web developer.",
    strong: "web developer",
    about: "Learn More",
  },
  about: {
    title: "About Me",
    effect: "I want to be a bridge between people and technology.",
    myself:
      "I love to solve problems in a well organized, independent way, with attention to details.",
    main1: "I'm majoring in Computer Engineering at ",
    main2:
      " and looking for new experiences. In my trajectory as a developer I was a Web Development Intern at ",
    main3: " and I did several personal and academic projects.",
    cta: "Invite me for a project.",
    strong: {
      s1: "Computer Engineering",
      s2: "Web Development Intern",
    },
  },
  experience: {
    title: "Experience",
  },
  projects: {
    title: "Featured Projects",
    list: [
      {
        name: "Issue Tracker",
        description:
          "Issue tracker is a project that proposes to track issues for development teams. As a starting point, a Software Requirements Specification (SRS) file and a Product Backlog were produced to guide weekly Sprints. Will use MERN Stack.",
        subtitle: "(Under development!)",
        pic: "/issue_tracker.jpg",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        links: [
          {
            label: "SRS",
            icon: "document",
            url: "/srs-eit-ieee.pdf",
          },
          {
            label: "Github",
            icon: "github",
            url: "",
          },
        ],
      },
      {
        name: "Desafio ACME Inc.",
        description:
          "Web application, made as a front-end challenge, to showcase the products of the fictional company Acme Inc. The application displays 15 items, in a responsive way, with images, descriptions and values generated randomly from internal databases or from APIs.",
        pic: "/acme.png",
        tech: ["React.js", "Chakra-UI", "Front-end Challenge"],
        links: [
          {
            label: "Website",
            icon: "link",
            url: "https://desafio-acme-flp.netlify.app/",
          },
          {
            label: "Github",
            icon: "github",
            url: "https://github.com/LehmannPi/desafio-acme-inc",
          },
        ],
      },
      {
        name: "IP Adress Tracker",
        description:
          "Web app in which the user can obtain locations through IP addresses, with a map view. When loading the page, the app returns the physical and IP address associated with the user itself.",
        pic: "/ip_tracker_done.jpg",
        tech: ["Vue.js", "Leaflet", "AbstractAPI"],
        links: [
          {
            label: "Website",
            icon: "link",
            url: "https://ipadresstracker-project.netlify.app/",
          },
          {
            label: "Github",
            icon: "github",
            url: "https://github.com/LehmannPi/ip-adress-tracker/tree/develop",
          },
        ],
      },
      {
        name: "Playlister",
        description:
          "Playlister is a playlist creator, which makes available and shares entries among users. It has authentication, authorization, database and hosting via Firebase. The project is a proof of concept and does not allow storage of audio formats.",
        pic: "/playlister.jpg",
        tech: ["Vue.js", "Firebase", "Node.js"],
        links: [
          {
            label: "Website",
            icon: "link",
            url: "https://playlist-vue-project-a4e60.web.app/",
          },
          {
            label: "Github",
            icon: "github",
            url: "https://github.com/LehmannPi/playlist-creator-vue",
          },
        ],
      },
    ],
  },
  moreProjects: {
    title: "Other Projects",
    list: [
      {
        name: "Mock Car Rental",
        type: "Projeto",
        description:
          "Aplicativo de gerenciamento de aluguel de carros, permitindo registro de veículos, clientes, aluguéis e pagamentos. Consultas com multiplas condicionais e geração de 3 tipos de relatório.",
        tech: ["Pascal", "SQLite3", "PostgreSQL"],
        links: [
          {
            label: "Github",
            icon: "github",
            url: "https://github.com/LehmannPi/mock-car-rental-project",
          },
        ],
      },
      {
        name: "Front-end Projects",
        type: "Work",
        description:
          "Projects for learning and developing the fundamentals of HTML, CSS and JavaScript. Last project, called Infusion, hosted via Netlify.",
        tech: ["HTML", "CSS", "JS"],
        links: [
          {
            label: "Website",
            icon: "link",
            url: "https://projeto-infusion-curso-filipe.netlify.app/#",
          },
          {
            label: "Github",
            icon: "github",
            url: "https://github.com/LehmannPi/projetos-treinamento-front",
          },
        ],
      },
      {
        name: "Machine Learning Practices",
        type: "Curso",
        description:
          "Machine Learning records and implementations done in progress by IBM.",
        tech: ["Python", "Jupyter Notebook", "Scikit-learn"],
        links: [
          {
            label: "Github",
            icon: "github",
            url: "https://github.com/LehmannPi/ml-practices",
          },
        ],
      },
      {
        name: "Competitive Programming",
        type: "Personal",
        description:
          "88 Competitive Programming Exercises Solved in Python on the Beecrowd Platform, Former URI Online Judge.",
        tech: ["Python"],
        links: [
          {
            label: "Beecrowd",
            icon: "link",
            url: "https://www.beecrowd.com.br/",
          },
          {
            label: "Github",
            icon: "github",
            url: "https://github.com/LehmannPi/URIOnlineJudge",
          },
        ],
      },
    ],
  },
  contact: {
    title: "Get in Contact",
    main: "Whether it's a job opportunity, suggestions or feedback, your contact will be welcome!",
  },
  footer: {
    cta: "Back to top",
  },
  links: [
    {
      label: "Github",
      icon: "github",
      url: "https://github.com/LehmannPi/",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/filipe-lehmann-pereira/",
    },
    {
      label: "CV",
      icon: "document",
      url: "/resume.pdf",
    },
  ],
  navbar: {
    buttons: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    tooltip: "Switch languages",
  },
};
export default en;
