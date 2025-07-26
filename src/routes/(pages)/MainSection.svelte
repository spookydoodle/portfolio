<script lang="ts">
    import { LinkButton } from "$components";
    import type { Link } from "$lib/model";

    let {
        paragraphs,
        stack,
        links,
    }: { paragraphs: string[]; stack: string[]; links?: Link[] } = $props();
</script>

<section class="max-width">
    {#each paragraphs as paragraph}
        <p class="post-paragraph">{@html paragraph}</p>
    {/each}
    <p class="stack">{stack.join(", ")}</p>
    {#if links}
        <div class="links">
            {#each links as link}
                <LinkButton title={link.title} href={link.href} />
            {/each}
        </div>
    {/if}
</section>

<style>
    :global(.post-paragraph a) {
        font-weight: bold !important;
    }

    .stack {
        color: var(--color-secondary);
        font-size: 12px;
    }

    .links {
        column-gap: 10px;
        row-gap: 10px;
        display: flex;
        justify-content: baseline;
        flex-wrap: wrap;
    }
</style>
