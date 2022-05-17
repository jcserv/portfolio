const projects = [
  {
    name: "Issue Tracker",
    description:
      "Issue tracker é um projeto que propõe fazer o rastreamento de tarefas para equipes de desenvolvimento. Como ponto de partida, foi produzido um arquivo de Especificação de Requisitos de Software (SRS) e um Backlog de Produto para guiar Sprints semanais. Utilizará Stack MERN.",
    subtitle: "(Em desenvolvimento!)",
    pic: "/issue_tracker.jpg",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    links: [
      {
        label: "SRS",
        icon: "document",
        url: "/srs-eit-ieee.pdf",
      },
      {
        label: "Figma",
        icon: "figma",
        url: "",
      },
      {
        label: "Github",
        icon: "github",
        url: "",
      },
    ],
  },
  {
    name: "Playlister",
    description:
      "Playlister é um criador de playlists web que disponibiliza e compartilha as entradas entre os usuários. Possui autenticação, autorização, banco de dados e hosting via Firebase.",
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
  {
    name: "IP Adress Tracker",
    description:
      "Web app no qual o usuário pode obter localizações por meio de endereços de IP, com exibição em mapa. Ao carregar a página, o app retorna o endereço físico e de IP associado ao próprio usuário.",
    pic: "/ip_tracker_done.jpg",
    tech: ["Vue.js", "Leaflet", "Node.js", "AbstractAPI"],
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
];

export const extraProjects = [
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
    name: "Projetos Front-end",
    type: "Work",
    description:
      "Projetos para aprendizagem e desenvolvimento dos fundamentos de HTML, CSS e JavaScript. Último projeto, chamado Infusion, hospedado via Netlify.",
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
    name: "Práticas de Machine Learning",
    type: "Curso",
    description:
      "Registros e implementações de Machine Learning feitas em curso pela IBM.",
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
    name: "Programação Competitiva",
    type: "Personal",
    description:
      "88 exercícios de programação competitiva solucionados em Python na plataforma Beecrowd, antiga URI Online Judge",
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
];

export default projects;
