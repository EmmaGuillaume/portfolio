export interface Project {
  image: string;
  name: string;
  stack: string[];
  type: string;
  url: string;
  description: string;
}

export const projects: Project[] = [
  {
    image: "../images/cookie.jpg",
    name: "Cookie Clicker",
    stack: ["Java", "Swing"],
    type: "Logiciel",
    url: "https://github.com/EmmaGuillaume/java-cookie-clicker",
    description:
      "Premier projet en Java, inspiré du jeu <a class='underline' href='https://orteil.dashnet.org/cookieclicker/' target='_blank'>Cookie Clicker</a>. Suivre le README.md. Souci de téléchargement pour l'utilisateur, en cours de fix.",
  },
  {
    image: "../images/labotanique.jpg",
    name: "Le Labotanique",
    stack: ["Svelte", "Tailwind"],
    type: "Site web",
    url: "https://le-labotanique.netlify.app/",
    description: "Observations et notes sur les plantes",
  },
  {
    image: "../images/numerise.jpg",
    name: "Nous n'avons pas numérisé",
    stack: ["Osuny", "PagedJS"],
    type: "Site web",
    url: "https://nousnavonspasnumerise.mmibordeaux.com/",
    description:
      "MMI Workshop - Recherches et réponse face à la numérisation de l'application Bild (autre projet)",
  },
  {
    image: "../images/shiseido.jpg",
    name: "Shiseido",
    stack: ["Svelte", "Tailwind"],
    type: "Web App",
    url: "https://shiseido-dev.netlify.app/",
    description:
      "Maquettes réalisées par <a class='underline' href='https://www.behance.net/leilo' target='_blank'>Leïly Coquard Misono</a>",
  },
  {
    image: "../images/bild.png",
    name: "Bild",
    stack: ["Svelte", "Tailwind", "TS"],
    type: "Maquettes / Web App",
    url: "https://bild.ptitdom.fr/",
    description: "WebApp aidant les psychologues de l'association PtitDom",
  },
  {
    image: "../images/helovelo.png",
    name: "Hélo Vélo",
    stack: ["Figma"],
    type: "Maquette refonte V3",
    url: "https://www.figma.com/proto/PoJFuMCJeNoz1ehQIS0HOw/UX-design-project?page-id=516%3A36&node-id=516-3397&viewport=1164%2C140%2C0.11&scaling=scale-down&starting-point-node-id=516%3A3397&show-proto-sidebar=1",
    description: "Refonte de l'app V3 Bordeaux",
  },

  {
    image: "../images/yurushi.png",
    name: "Yurushi",
    stack: ["Unity", "C#"],
    type: "Jeu vidéo",
    url: "https://yurushi-game.netlify.app/",
    description: "Création d'un jeu vidéo",
  },
  {
    image: "../images/embrouille-au-musee.png",
    name: "Embrouille au musée",
    stack: ["Svelte", "Tailwind", "TS"],
    type: "Web App",
    url: "https://embrouille-au-musee.netlify.app/",
    description: "WebApp réalisée pour la baccanight 2023",
  },

  {
    image: "../images/olena.jpg",
    name: "Les 3600 km d’Olena",
    stack: ["Svelte", "Tailwind", "TS", "ThreeJS"],
    type: "Web App",
    url: "https://olena.les-voix-errantes-de-kyiv.fr/",
    description:
      "WebApp réalisée avec <a class='underline' href='https://arthaudproust.fr/' target='_blank'>Arthaud Proust</a>",
  },
];
