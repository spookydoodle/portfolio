<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
        variant = "grid",
    }: { children: Snippet; variant?: "grid" | "fixed" } = $props();
</script>

<nav class={["side-nav", variant]}>
    {@render children()}
</nav>

<style>
    .side-nav {
        height: calc(100vh - var(--header-height));
        top: var(--header-height);
        width: var(--side-width);
        box-sizing: border-box;
        z-index: 1;
    }

    .side-nav.grid {
        grid-area: side-nav;
        position: sticky;
    }

    .side-nav.fixed {
        position: fixed;
        left: 0;
        box-sizing: border-box;
    }
</style>
