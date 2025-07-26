<script lang="ts">
    import type { MediaImage, MediaVideo } from "$lib/model";

    let { selectedItem }: { selectedItem: MediaImage | MediaVideo; } = $props();
    const backgroundSrc = $derived(
        selectedItem.type === "image" ? selectedItem.src : selectedItem.poster,
    );
</script>

{#if selectedItem.enableBackgroundBlur}
    <img
        alt={selectedItem.type === "image"
            ? selectedItem.alt || selectedItem.title
            : selectedItem.title}
        src={backgroundSrc}
        class="selected-image-background"
    />
{/if}

{#if selectedItem.type === "image"}
    <img
        alt={selectedItem.alt || selectedItem.title}
        src={selectedItem.src}
        class="selected-image"
    />
{/if}

{#if selectedItem.type === "video"}
    <video
        id="video-studio-player_html5_api"
        style="font-family: Inter;"
        tabindex="-1"
        preload="auto"
        loop={true}
        muted={true}
        autoplay={true}
        poster={selectedItem.poster}
        src={selectedItem.src}
        class="selected-video"
    ></video>
{/if}

<style>
    .selected-image-background,
    .selected-video,
    .selected-image {
        height: 100%;
        max-width: 100%;
    }

    .selected-image-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        object-fit: cover;
        filter: blur(4px) brightness(0.9);
    }

    .selected-image,
    .selected-video {
        background-color: black;
        margin: 0 auto;
        display: block;
        position: relative;
        box-sizing: border-box;
        padding-bottom: 72px;
        box-shadow:
            5px 0px 20px rgba(0, 0, 0, 0.05),
            -5px 0px 10px rgba(0, 0, 0, 0.05);
    }

    .selected-image {
        object-fit: contain;
    }
</style>
