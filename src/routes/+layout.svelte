<script>
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import "../app.css";
</script>

<div class="lg:w-1.5 bg-cta h-full fixed ml-20" />
<Header />
<slot />
<Footer />
