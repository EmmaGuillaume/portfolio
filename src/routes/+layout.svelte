<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
</script>

<main class="">
  <div class="lg:w-[4px] bg-cta h-full absolute left-16 z-50" />
  <Header />
  <slot />
  <Footer />
</main>
