const de = {
  resume: "Lebenslauf",
  landing: {
    title: "Hallo, ich bin Filipe Lehmann, ein Webentwickler.",
    strong: "Webentwickler",
    about: "Lern Mehr",
  },
  about: {
    title: "Über Mich",
    effect: "Ich möchte eine Brücke zwischen Mensch und Technik sein.",
    myself:
      "Ich liebe es, Probleme gut organisiert, unabhängig und mit Liebe zum Detail zu lösen.",
    main1: "Ich studiere Technische Informatik an der ",
    main2:
      " und auf der Suche nach neuen Erfahrungen. In meiner Laufbahn als Entwickler war ich Praktikant in der Webentwicklung bei ",
    main3:
      " und ich habe mehrere persönliche und akademische Projekte durchgeführt.",
    cta: "Laden Sie mich zu einem Projekt ein.",
    strong: {
      s1: "Technische Informatik",
      s2: "Praktikant in der Webentwicklung",
    },
  },
  experience: {
    title: "Erfahrung",
  },
  projects: {
    title: "Empfohlene Projekte",
    list: [
      {
        name: "Issue Tracker",
        description:
          "Issue Tracker ist ein Projekt, das vorschlägt, Probleme für Entwicklungsteams zu verfolgen. Als Ausgangspunkt wurden eine Software Requirements Specification (SRS)-Datei und ein Product Backlog erstellt, um die wöchentlichen Sprints zu leiten. Wird MERN Stack verwenden.",
        subtitle: "(In Entwicklung!)",
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
        name: "ACME Inc-Herausforderung",
        description:
          "Webanwendung, die als Front-End-Herausforderung erstellt wurde, um die Produkte des fiktiven Unternehmens Acme Inc. zu präsentieren. Die Anwendung zeigt 15 Elemente reaktionsschnell mit Bildern, Beschreibungen und Werten an, die zufällig aus internen Datenbanken oder APIs generiert werden.",
        pic: "/acme.png",
        tech: ["React.js", "Chakra-UI", "Front-end Challenge"],
        links: [
          {
            label: "Webseite",
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
          "Web-App, in der der Benutzer Standorte über IP-Adressen erhalten kann, mit einer Kartenansicht. Beim Laden der Seite gibt die App die dem Benutzer zugeordnete physische und IP-Adresse zurück.",
        pic: "/ip_tracker_done.jpg",
        tech: ["Vue.js", "Leaflet", "AbstractAPI"],
        links: [
          {
            label: "Webseite",
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
          "Playlister ist ein Playlist-Ersteller, der Einträge verfügbar macht und unter Benutzern teilt. Es verfügt über Authentifizierung, Autorisierung, Datenbank und Hosting über Firebase. Das Projekt ist ein Proof of Concept und erlaubt keine Speicherung von Audioformaten.",
        pic: "/playlister.jpg",
        tech: ["Vue.js", "Firebase", "Node.js"],
        links: [
          {
            label: "Webseite",
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
    title: "Weitere Projekte",
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
        name: "Frontend-Projekte",
        type: "Work",
        description:
          "Projekte zum Erlernen und Entwickeln der Grundlagen von HTML, CSS und JavaScript. Letztes Projekt namens Infusion, gehostet über Netlify.",
        tech: ["HTML", "CSS", "JS"],
        links: [
          {
            label: "Webseite",
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
        name: "Praktiken des maschinellen Lernens",
        type: "Curso",
        description:
          "Machine Learning-Aufzeichnungen und -Implementierungen, die von IBM durchgeführt werden.",
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
        name: "Wettbewerbsprogrammierung",
        type: "Personal",
        description:
          "88 Competitive Programming Exercises Solved in Python on the Beecrowd Platform, Ehemaliger URI Online Judge.",
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
    title: "In Kontakt kommen",
    main: "Egal, ob es sich um ein Stellenangebot, Vorschläge oder Feedback handelt, Ihr Kontakt ist willkommen!",
  },
  footer: {
    cta: "Zurück nach oben",
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
      label: "Lebenslauf",
      icon: "document",
      url: "/resume.pdf",
    },
  ],
  navbar: {
    buttons: {
      about: "Über",
      experience: "Erfahrung",
      projects: "Projekte",
      contact: "Kontakt",
    },
    tooltip: "Sprache wechseln",
  },
};
export default de;
