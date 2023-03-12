<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import LastProject from "$lib/components/LastProject.svelte";
    import ButtonDevProject from "$lib/components/ButtonDevProject.svelte";
    import { projets } from "$lib/projet";
</script>

<Header />

<main>
    <div class="body__line" />
    <div class="presentation">
        <h2>Développeuse web junior passionnée</h2>
        <p>
            Étudiante en MMI et alternante chez l’agence web Ideclap, je cherche
            une nouvelle alternance en développement web front-end.
        </p>
        <div class="presentation__category">
            <div class="presentation__mots">
                <p class="presentation__category--p">Me définir en 3 mots :</p>
                <p>Curieuse, motivée, dynamique</p>
            </div>
            <div class="presentation__maitrise">
                <p class="presentation__category--p">Je maitrise :</p>
                <p>HTML/CSS</p>
            </div>
            <div class="presentation__learning">
                <p class="presentation__category--p">J'apprends :</p>
                <p>Javascript, Typescript, Svelte</p>
            </div>
        </div>
        <div class="presentation__button">
            <a href="#projects">Voir mes projets dev</a>
            <!-- <a href="#">Voir mes autres projets</a> -->
        </div>
    </div>
    <!-- <LastProject /> -->
    <div class="separation">
        <div class="separation__line--left" />
        <a href="#projects"
            ><img src="images/arrow-bottom.png" alt="fleche vers le bas" /></a
        >
        <div class="separation__line--right" />
    </div>
    <div class="projets">
        <h2 id="projects">Mes projets</h2>
        <ul>
            {#each projets as project}
                <li>
                    <a href={project.url}
                        >{project.name} - {project.type} - {project.language}</a
                    >
                </li>
            {/each}
        </ul>
    </div>
    <!-- <ButtonDevProject /> -->
</main>
<Footer />

<style>
    .separation {
        margin: 5vh 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .separation__line--left {
        margin-top: 1vh;
        background-color: #79a671;
        width: 100%;
        height: 5px;
    }
    .separation__line--right {
        margin-top: 1vh;
        background-color: #79a671;
        width: 100%;
        height: 5px;
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
    }
</style>
