<script lang="ts">
    import type { MediaIframe } from "$lib/model";

    let { videos }: { videos: MediaIframe[] } = $props();
</script>

{#each videos as video}
    <div>
        <h5 class="title">
            {video.title}
        </h5>
        <p class="max-width">{video.description}</p>
        <div class="player">
            <iframe
                src={video.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            ></iframe>
        </div>
    </div>
{/each}

<style>
    .title {
        font-size: 16px;
        margin-top: 40px;
        margin-bottom: 0px;
    }

    .player {
        max-height: calc(100vh - 40px);
        display: flex;
        justify-content: center;
        margin-top: 20px;
        height: 200px;
    }

    .player iframe {
        width: 100%;
    }

    @media only screen and (min-width: 600px) {
        .player {
            height: 300px;
        }
    }
    @media only screen and (min-width: 1000px) {
        .player {
            height: 500px;
        }
    }
</style>
