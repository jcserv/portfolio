const pt = {
  resume: "Currículo",
  landing: {
    title: "Olá, eu sou Filipe Lehmann, um desenvolvedor web.",
    strong: "desenvolvedor web",
    about: "Saiba Mais",
  },
  about: {
    title: "Sobre Mim",
    effect: "Quero ser uma ponte entre as pessoas e a tecnologia.",
    myself:
      "Sou um desenvolvedor bem organizado, solucionador de problemas, independente e com atenção aos detalhes.",
    main1: "Estou me formando em Engenharia de Computação pelo ",
    main2:
      " e em busca de novas experiências. Em minha trajetória como desenvolvedor fui Estagiário em Desenvolvimento Web na ",
    main3: " e fiz diversos projetos pessoais e acadêmicos.",
    cta: "Me chame para um projeto.",
    strong: {
      s1: "Engenharia de Computação",
      s2: "Estagiário em Desenvolvimento Web",
    },
  },
  experience: {
    title: "Experiência",
  },
  projects: {
    title: "Projetos em Destaque",
    list: [
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
            label: "Github",
            icon: "github",
            url: "",
          },
        ],
      },
      {
        name: "Desafio ACME Inc.",
        description:
          "Aplicativo web, feito como desafio de front-end, para exibir os produtos da empresa fictícia Acme Inc. O aplicativo exibe 15 itens, de maneira responsiva, com imagens, descrições e valores gerados aleatoriamente a partir de bases de dados internas ou a partir de APIs.",
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
          "Web app no qual o usuário pode obter localizações por meio de endereços de IP, com exibição em mapa. Ao carregar a página, o app retorna o endereço físico e de IP associado ao próprio usuário.",
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
          "Playlister é um criador de playlists, que disponibiliza e compartilha as entradas entre os usuários. Possui autenticação, autorização, banco de dados e hospedagem via Firebase. O projeto é uma prova de conceito e não permite armazenamento de formatos em áudio.",
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
    title: "Outros Projetos",
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
    ],
  },
  contact: {
    title: "Entre em Contato",
    main: "Seja uma oportunidade de trabalho, sugestões ou feedback, seu contato será bem vindo!",
  },
  entities: {
    1: {
      name: "IFMG",
      link: "https://www.bambui.ifmg.edu.br/portal/",
    },
    2: {
      name: "Guarani Sistemas",
      link: "https://www.guaranisistemas.com.br/",
    },
  },
  footer: {
    cta: "Voltar para o topo",
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
      label: "Currículo",
      icon: "document",
      url: "/resume.pdf",
    },
  ],
  navbar: {
    buttons: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    tooltip: "Alternar idiomas",
  },
};

export default pt;
