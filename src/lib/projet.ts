export interface Projet {
    name: string;
    language: string;
    type: string;
    url: string;
}

export const projets: Projet[] = [
    {
        name: "Seinen Jump",
        language: "Ruby On Rails",
        type: "Web App",
        url: "https://seinentopapp.osc-fr1.scalingo.io/",

    },
    {
        name: "Hélo Vélo",
        language: "HTML/CSS",
        type: "Site web",
        url: "https://helo-velo.netlify.app/",
    },
    {
        name: "Mission Goroskhova",
        language: "HTML/CSS",
        type: "Site web",
        url: "https://missiongorokhova.netlify.app/",
    },
    {
        name: "Greener",
        language: "Osuny de Noesya",
        type: "Site web",
        url: "https://ecoconception.mmibordeaux.com/",
    },
    // {
    //     name: "Louna C. Portfolio",
    //     language: "Ruby On Rails",
    //     type: "Web App",
    //     url: "https://helo-velo.netlify.app/",
    // },
    {
        name: "Yurushi",
        language: "Unity/C#",
        type: "Jeu vidéo",
        url: "https://yurushi-game.netlify.app/",
    },
    {
        name: "Embrouille au musée",
        language: "Svelte/Tailwind/TS/JS",
        type: "Web App",
        url: "https://embrouille-au-musee.netlify.app/",
    }
]