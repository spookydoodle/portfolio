<script lang="ts">
    import type { DataProps } from "./+page.server";
    import Header from "./Header.svelte";
    import Navbar from "./Navbar.svelte";
    import Content from "./Content.svelte";
    import Footer from "./Footer.svelte";

    let { data }: { data: DataProps } = $props();
    const { cards, landing, landingMin, footer, footerMin } = data;
</script>

<div id="car-racing" class="container">
    <Navbar {landing} {landingMin} />
    <Header />
    <Content {cards} />
    <Footer {footer} {footerMin} />
</div>

<style>
    .container {
        min-height: 100vh;
        left: 0;
        right: 0;
        top: 0;
        overflow: hidden;
        background-color: black;
        font-family:
            Roboto-Mono,
            Open Sans,
            Arial;
    }
</style>
