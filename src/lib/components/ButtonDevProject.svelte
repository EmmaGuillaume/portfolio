<script>
    import { projets } from "$lib/projet";
    let projectName = projets[0].name;
    let projectLanguage = projets[0].language;
    let projectTime = projets[0].time;
    let imgProject = projets[0].imgUrl;
</script>

<a href="#">
    <h3>{projectName}</h3>
    <div class="button__p">
        <p>Langage-s utilisé-s :</p>
        <p>{projectLanguage}</p>
    </div>
    <div class="button__p">
        <p>Temps de développement :</p>
        <p>{projectTime}</p>
    </div>
</a>

<style>
    a {
        background-color: blueviolet;
    }
</style>
