<script lang="ts">
    import { onMount } from "svelte";

    let {
        src,
        fallbackSrc,
        alt,
        scaleOnHover,
        style,
    }: {
        src: string;
        fallbackSrc: string;
        alt: string;
        scaleOnHover?: boolean;
        style?: string;
    } = $props();
    let loaded = $state(false);

    onMount(() => {
        fetch(src)
            .then(() => (loaded = true))
            .catch(console.error);
    });
</script>

<div class="container">
    {#if loaded}
        <img
            {alt}
            {src}
            {style}
            class={["img", "blur-off", scaleOnHover ? "scale-on-hover" : null]}
        />
    {:else}
        <img {alt} src={fallbackSrc} class={["img", "blur"]} {style} />
    {/if}
</div>

<style>
    .container {
        overflow: hidden;
        height: 100%;
        width: 100%;
    }

    .img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        color: white;
        border-radius: 5px;
        transition: transform 0.6s ease-in;
    }

    .scale-on-hover:hover {
        transform: scale(1.1);
        transition: transform 0.6s ease-out;
    }

    .blur {
        filter: blur(25px);
        overflow: hidden;
    }

    .blur-off {
        filter: blur(25px);
        animation: no-filter 0.15s linear forwards;
    }

    @keyframes no-filter {
        100% {
            filter: none;
        }
    }
</style>
