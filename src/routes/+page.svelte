<script lang="ts">
  import LastProject from "$lib/components/LastProject.svelte";
  import ButtonDevProject from "$lib/components/ButtonDevProject.svelte";
  import { projects } from "$lib/projet";
  import Project from "$lib/components/Project.svelte";
</script>

<svelte:head>
  <title>Emma Guillaume - Développeuse Web Portfolio</title>
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
  <link rel="canonical" href="https://emmaguillaume.fr/" />
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
  <meta property="og:site_name" content="Emma Guillaume" />
  <meta property="og:url" content="https://emmaguillaume.fr/" />
  <meta property="og:locale" content="fr" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://emmaguillaume.fr/" />
  <meta
    name="twitter:title"
    content="Emma Guillaume - Développeuse Web Portfolio"
  />
  <meta
    name="twitter:description"
    content="Portfolio d'Emma Guillaume, étudiante en MMI Bordeaux, découvrez tous mes projets de développements web faits avec passion !"
  />
  <meta
    name="twitter:image"
    content="https://media.licdn.com/dms/image/C4E03AQGGdQxYPGE_aQ/profile-displayphoto-shrink_800_800/0/1649773337004?e=2147483647&v=beta&t=k_aPJmzIm5YvstHqybiP_CNfGijJOehpS0wWVSy27Mg"
  />

  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="Portfolio" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#FEFFED" />
  <meta name="theme-color" content="#FEFFED" />
</svelte:head>
<main class="px-8 pt-36 lg:pt-48 md:px-16 lg:px-32 text-text">
  <section class="mb-24">
    <div class="text-base">
      <div class="flex flex-col gap-2 md:w-8/12">
        <h2 class="text-xl-mob md:text-xl font-bold">
          développeuse front-end junior passionnée .
        </h2>
        <p>
          Hello ! Moi c’est Emma et je suis en <a
            rel="noopener"
            target="_blank"
            class="underline underline-offset-2"
            href="https://www.mmibordeaux.com/">BUT MMI Bordeaux</a
          >
          . J’adore le développement web et c’est pour cela que je suis en alternance
          chez
          <a
            rel="noopener"
            target="_blank"
            class="underline underline-offset-2"
            href="https://www.theseus-ai.com/">Theseus Ai</a
          > en tant que développeuse front-end.
        </p>
      </div>

      <section class="my-8 flex flex-col gap-2">
        <div class="flex flex-col md:flex-row md:gap-2">
          <p class="font-medium">Me définir en 3 mots :</p>
          <p class="font-normal">Curieuse, motivée, dynamique</p>
        </div>
        <div class="flex flex-col md:flex-row md:gap-2">
          <p class="font-medium">Je travaille avec :</p>
          <p>NextJS, React, Typescript, TailwindCSS</p>
        </div>
        <div class="flex flex-col md:flex-row md:gap-2">
          <p class="font-medium">J'apprends :</p>
          <p>SvelteKit</p>
        </div>
      </section>
      <a
        rel="noopener"
        target="_blank"
        href="/images/emma-guillaume-cv.pdf"
        class="text-cta text-lg font-bold underline">voir mon cv</a
      >
    </div>
  </section>
  <div class="mt-12 flex flex-col">
    <h2 class="my-4 text-xl-mob md:text-xl font-bold">mes projets .</h2>
    <div class="flex flex-col gap-8">
      {#each projects as project}
        <Project
          imgSrc={project.image}
          urlProject={project.url}
          titleProject={project.name}
          typeProject={project.type}
          langProject={project.language}
          descProject={project.description}
        />
      {/each}
    </div>
  </div>
</main>
