<script lang="ts">
    import type { Link } from "$lib/model";

    let { title, href }: Link = $props();
    const external = $derived(href.startsWith("http"));
</script>

<a {href} class="link" target="_blank" rel="noopener noreferrer">
    {title}
</a>

<style>
    .link {
        color: var(--color-text-white);
        background-color: var(--color-secondary);
        background: linear-gradient(
            20deg,
            var(--color-primary),
            var(--color-secondary) 90%
        );
        box-shadow:
            rgba(0, 0, 0, 0.2) 0px 1px 4px -1px,
            rgba(0, 0, 0, 0.14) 0px 3px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
        padding: 10px;
        border-radius: 4px;
        font-size: 14px;
    }

    .link:hover {
        background: none;
        background-color: var(--color-secondary);
        text-decoration: none;
    }
</style>
