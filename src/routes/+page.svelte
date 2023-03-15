<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import LastProject from "$lib/components/LastProject.svelte";
    import ButtonDevProject from "$lib/components/ButtonDevProject.svelte";
    import { projets } from "$lib/projet";
</script>

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
    <div class="flex flex-row align-middle mt-12 lg:w-11/12">
        <div class="h-1.5 bg-cta w-full mt-4 mb-3 lg:hidden" />
        <a href="#projects" class="w-2/3 lg:w-fit pr-14"
            ><img src="images/arrow-bottom.png" alt="fleche vers le bas" /></a
        >
        <div class="h-1.5 bg-cta w-11/12 mt-4 mb-3" />
    </div>
    <div class="projets">
        <h2 id="projects" class="text-2xl font-bold">Mes projets</h2>
        <ul class="mt2">
            {#each projets as project}
                <li class="list-disc text-cta">
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
