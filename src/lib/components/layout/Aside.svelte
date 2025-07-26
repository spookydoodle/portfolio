<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
        variant = "grid",
    }: { children: Snippet; variant?: "grid" | "fixed" } = $props();
</script>

<aside class={["aside", variant]}>
    {@render children()}
</aside>

<style>
    .aside {
        top: var(--header-height);
        height: calc(100vh - var(--header-height));
        box-sizing: border-box;
        overflow-y: auto;
    }

    .aside.grid {
        grid-area: aside;
        position: sticky;
    }

    .aside.fixed {
        position: fixed;
        right: 0;
    }
</style>
