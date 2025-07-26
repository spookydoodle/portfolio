<script lang="ts">
    import type { PageProps } from "./$types";
    import Posts from "../Posts.svelte";

    let { data }: PageProps = $props();
    const { title, posts } = data;
</script>

<Posts id="3d" {title} {posts} />
