<script lang="ts">
    import type { MediaIframe } from "$lib/model";

    let { iframes }: { iframes: MediaIframe[] } = $props();
</script>

{#each iframes as iframe}
    <div>
        <h5 class="title">
            {iframe.title}
        </h5>
        <p class="max-width">{@html iframe.description}</p>
        <iframe
            height={iframe.height ?? 500}
            width="100%"
            src={iframe.src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={iframe.title}
            class="iframe"
        ></iframe>
    </div>
{/each}

<style>
    .title {
        font-size: 16px;
        margin-top: 40px;
        margin-bottom: 0px;
    }

    .iframe {
        max-height: calc(100vh - 40px);
    }
</style>
