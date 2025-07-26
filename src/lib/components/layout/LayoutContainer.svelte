<script lang="ts">
    import type { Snippet } from "svelte";

    let { children, ...props }: { children: Snippet; class: string } = $props();
</script>

<div class={`layout ${props.class}`}>
    {@render children()}
</div>

<style>
    .layout {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-height: 100vh;
        max-width: 100vw;
        font-family:
            Karla,
            Roboto,
            Open Sans,
            Verdana,
            sans-serif;
    }
</style>
