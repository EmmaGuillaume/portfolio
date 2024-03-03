<script lang="ts">
  export let imgSrc = "Un problème est survenu";
  export let titleProject = "Un problème est survenu";
  export let descProject = "Un problème est survenu";
  export let langProject = ["Un problème est survenu"];
  export let urlProject = "Un problème est survenu";
  export let typeProject = "Un problème est survenu";
</script>

<div class="group z-10 button-project flex flex-col gap-2 relative">
  <div class="w-full text-base flex gap-4">
    <img
      class="w-24 h-fit rounded-md group-hover:-rotate-6 duration-300"
      src={imgSrc}
      alt=""
    />
    <div class="flex flex-col justify-between gap-2 w-full">
      <div class="flex flex-col w-full">
        <div class="flex flex-wrap flex-row gap-1">
          {#each langProject as project}
            <p class="border-2 border-cta w-fit rounded-full text-cta px-3">
              #{project}
            </p>
          {/each}
        </div>
        <p class="font-bold mt-2">{titleProject} / {typeProject}</p>
        <p class="w-fit opacity-60">{@html descProject}</p>
        <a
          rel="noopener"
          target="_blank"
          class="bg-cta rounded-full w-fit px-3 border-2 border-cta text-background mt-2"
          href={urlProject}>Découvrir</a
        >
      </div>
    </div>
  </div>
</div>
