export interface Project {
  image: string;
  name: string;
  stack: string[];
  type: string;
  url: string;
  description: string;
}

export const projects: Project[] = [
  // {
  //     image:"../images/boulder.jpg",
  //     name: "Eat",
  //     language: "Figma",
  //     type: "Maquettes",
  //     url: "https://www.figma.com/proto/LnVLcnQnJ7XQWwfB6mlIcf/App-Recettes-TDAH?page-id=0%3A1&node-id=34-267&starting-point-node-id=1%3A2",
  //     description:"cc",
  // },
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
  // {
  //     image:"../images/boulder.jpg",
  //     name: "Tuto Alternance",
  //     language: "Premiere Pro/After Effect",
  //     type: "Motion Design",
  //     url: "https://www.behance.net/gallery/161642071/Stage-BUTMMI-1-CFA-Motion-Design",
  //     description:"cc",

  // },
  // {
  //     image:"../images/boulder.jpg",
  //     name: "L'agenda Setting",
  //     language: "Premiere Pro/After Effect",
  //     type: "Motion Design",
  //     url: "https://www.youtube.com/watch?v=69cmyUYI_t8",
  //     description:"cc",

  // },
  // {
  //     image:"../images/boulder.jpg",
  //     name: "Seinen Jump",
  //     language: "Ruby On Rails",
  //     type: "Web App",
  //     url: "https://seinentopapp.osc-fr1.scalingo.io/",
  //     description:"cc",

  // },
  {
    image: "../images/helovelo.png",
    name: "Hélo Vélo",
    stack: ["Figma"],
    type: "Maquette refonte V3",
    url: "https://www.figma.com/proto/PoJFuMCJeNoz1ehQIS0HOw/UX-design-project?page-id=516%3A36&node-id=516-3397&viewport=1164%2C140%2C0.11&scaling=scale-down&starting-point-node-id=516%3A3397&show-proto-sidebar=1",
    description: "Refonte de l'app V3 Bordeaux",
  },
  // {   image:"../images/mission.png",
  //     name: "Mission Goroskhova",
  //     language: "HTML/CSS",
  //     type: "Site web",
  //     url: "https://missiongorokhova.netlify.app/",
  //     description:"cc",

  // },
  // {
  //     image:"../images/boulder.jpg",
  //     name: "Greener",
  //     language: "Osuny de Noesya",
  //     type: "Site web",
  //     url: "https://ecoconception.mmibordeaux.com/",
  //     description:"cc",

  // },

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
