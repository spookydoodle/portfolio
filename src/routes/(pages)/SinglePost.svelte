<script lang="ts">
    import ArticleHeader from "./ArticleHeader.svelte";
    import MainSection from "./MainSection.svelte";
    import MediaSection from "./MediaSection.svelte";
    import ArticleFooter from "./ArticleFooter.svelte";
    import type { Post } from "$lib/model";

    let { post }: { post: Post } = $props();
    const {
        id,
        title,
        summary,
        paragraphs,
        stack,
        links,
        underConstruction,
        gallery,
        youtubeVideos,
        iframes,
        games,
    } = post;
</script>

<article {id} class="post">
    <ArticleHeader postId={id} {title} {summary} {underConstruction} />
    <MainSection {paragraphs} {stack} {links} />
    {#if gallery || youtubeVideos || iframes || games}
        <MediaSection postId={id} {gallery} {youtubeVideos} {iframes} {games} />
    {/if}
    <!-- <ArticleFooter /> -->
</article>

<style>
    :global(.max-width) {
        width: min(800px, 100%);
    }

    :global(.post:hover .link-icon) {
        opacity: 1;
    }

    .post {
        padding: var(--header-height) 0;
        box-sizing: border-box;
    }
</style>
