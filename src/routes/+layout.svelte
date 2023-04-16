<script>
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import "../app.css";
</script>

<main class="relative w-screen">
    <div class="lg:w-1.5 bg-cta h-full absolute left-16" />
    <Header />
    <slot />
    <Footer />
</main>
