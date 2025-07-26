<script lang="ts">
    import type { Post } from "$lib/model";
    import SinglePost from "./SinglePost.svelte";

    let { id, title, posts }: { id: string; title: string; posts: Post[] } = $props();
</script>

<div id={id} class="container">
    <h2 class="title">{title}</h2>
    {#each posts as post, i}
        {#if i > 0}
            <hr class="divider" />
        {/if}
        <SinglePost post={post} />
    {/each}
</div>

<style>
    .container {
        margin: 0 20px;
    }

    .title {
        margin: var(--header-height) 0 0 0;
        font-size: 36px;
    }

    .divider {
        color: var(--color-secondary);
        border-style: solid;
    }

    @media only screen and (min-width: 800px) {
        .container {
            margin: 0 50px;
        }
        
        .title {
            font-size: 56px;
        }
    }
</style>
