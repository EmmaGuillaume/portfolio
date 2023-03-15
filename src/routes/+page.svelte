<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import LastProject from "$lib/components/LastProject.svelte";
    import ButtonDevProject from "$lib/components/ButtonDevProject.svelte";
    import { projets } from "$lib/projet";
</script>

<svelte:head>
    <title>Portfolio - Emma Guillaume</title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="robots" content="all" />
    <meta name="target" content="all" />

    <meta name="author" content="Emma Guillaume" />
    <meta name="owner" content="Emma Guillaume" />
    <meta name="language" content="fr" />
    <meta http-equiv="content-language" content="fr" />

    <meta name="url" content="emmaguillaume.fr" />
    <meta name="identifier-URL" content="emmaguillaume.fr" />
    <link rel="canonical" href="emmaguillaume.fr" />

    <meta name="subject" content="Seo" />
    <meta
        name="description"
        content="Portfolio d'Emma Guillaume, étudiante en MMI Bordeaux, découvrez tous mes projets de développements web faits avec passion !"
    />

    <meta property="og:title" content="Portfolio" />
    <meta property="og:type" content="website" />
    <meta
        property="og:description"
        content="Portfolio d'Emma Guillaume, étudiante en MMI Bordeaux, découvrez tous mes projets de développements web faits avec passion !"
    />
    <meta property="og:site_name" content="Emma Guillaume " />
    <meta property="og:url" content="emmaguillaume.fr" />
    <meta property="og:locale" content="fr" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Portfolio" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#79A671" />
    <meta name="theme-color" content="#79A671" />
</svelte:head>
<main class="container  lg:ml-28 text-p">
    <section class="flex flex-row justify-start gap-24">
        <div class="text-lg">
            <h2 class="text-2xl font-bold">
                Développeuse web junior passionnée
            </h2>
            <p class="lg:pr-20">
                Étudiante en MMI et alternante chez l’agence web Ideclap, je
                cherche une nouvelle alternance en développement web front-end.
            </p>
            <section class="mb-8">
                <div class="mt-2">
                    <p class="font-medium">Me définir en 3 mots :</p>
                    <p>Curieuse, motivée, dynamique</p>
                </div>
                <div>
                    <p class="font-medium">Je maitrise :</p>
                    <p>HTML/CSS</p>
                </div>
                <div>
                    <p class="font-medium">J'apprends :</p>
                    <p>Javascript, Typescript, Svelte, Tailwind</p>
                </div>
            </section>
            <a href="#projects" class="text-cta font-bold text-xl underline"
                >Voir mes projets dev</a
            >
            <!-- <a href="#">Voir mes autres projets</a> -->
        </div>
        <!-- <img
            src="images/emma-guillaume-developpeuse-web-bordeaux.jpg"
            alt="fleche vers le bas"
            class="invisible lg:visible w-56 h-56 rounded-md "
        /> -->
    </section>
    <!-- <LastProject /> -->
    <div class="flex flex-row items-center align-middle mt-12 lg:w-11/12">
        <div class="h-1.5 bg-cta w-full mt-4 mb-3 lg:hidden" />
        <a
            href="#projects"
            class="w-11/12 flex justify-center lg:w-fit lg:pr-14"
            ><img
                src="images/arrow-bottom.png"
                alt="fleche vers le bas"
                class="m-0"
            /></a
        >
        <div class="h-1.5 bg-cta w-11/12 mt-4 mb-3" />
    </div>
    <div class=" mt-8 lg:mt-8">
        <h2 id="projects" class="text-2xl font-bold">Mes projets</h2>
        <ul class="mt-4">
            {#each projets as project}
                <li class="list-disc text-cta my-1 ">
                    <a
                        href={project.url}
                        class="text-cta font-bold text-lg underline "
                        >{project.name} - {project.type} - {project.language}</a
                    >
                </li>
            {/each}
        </ul>
    </div>
    <!-- <ButtonDevProject /> -->
</main>

<style>
    /* .separation {
        margin: 5vh 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    h2 {
        font-size: 24px;
    }
    .presentation__button {
        margin: 2vh 0;
        display: flex;
        flex-direction: column;
    }
    .presentation__button a {
        font-weight: 500;
        color: #79a671;
        text-decoration: underline;
    }
    .presentation__category--p {
        font-weight: 500;
    }
    .presentation__category p {
        padding: 0;
        margin: 0;
    }
    @media screen and (min-width: 868px) {
        .separation__line--left {
            display: none;
        }
        .separation img {
            margin-right: 2vw;
            max-width: 70%;
        }
    } */
</style>
