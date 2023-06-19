<script lang="ts">
  export let imgSrc = "Un problème est survenu";
  export let titleProject = "Un problème est survenu";
  export let descProject = "Un problème est survenu";
  export let langProject = "Un problème est survenu";
  export let urlProject = "Un problème est survenu";
  export let typeProject = "Un problème est survenu";
</script>

<div class="z-10 button-project flex flex-col gap-2 w-fit relative">
  <a
    rel="noopener"
    target="_blank"
    href={urlProject}
    class=" w-96 text-base flex gap-4"
  >
    <img class="w-24 rounded-md" src={imgSrc} alt="" />
    <div class="flex flex-col justify-between">
      <div class="flex flex-col">
        <p class="font-bold">{titleProject} / {typeProject}</p>
        <p class="w-fit">{descProject}</p>
      </div>
      <p class="mb-2">{langProject}</p>
    </div>
  </a>
  <div class="line" />
</div>

<style>
  .line {
    position: absolute;
    bottom: -8px;
    background-color: #ee3900;
    width: 100%;
    height: 2px;
    visibility: hidden;
  }

  .button-project:hover .line {
    visibility: visible;
  }
</style>
