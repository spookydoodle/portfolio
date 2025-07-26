<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<main class="main">
    {@render children()}
</main>

<style>
    .main {
        grid-area: main;
        box-sizing: border-box;
    }
</style>
