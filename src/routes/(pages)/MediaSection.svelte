<script lang="ts">
    import { slide } from "svelte/transition";
    import { Gallery, Videos, Iframes, Games } from "$components";
    import type {
        GameIframe,
        MediaImage,
        MediaIframe,
        MediaVideo,
    } from "$lib/model";

    let {
        postId,
        gallery,
        youtubeVideos,
        iframes,
        games,
    }: {
        postId: string;
        gallery?: (MediaImage | MediaVideo)[];
        youtubeVideos?: MediaIframe[];
        iframes?: MediaIframe[];
        games?: GameIframe[];
    } = $props();
    let expandMedia = $state(true);
    const imageCount = $derived(
        (gallery?.filter((el) => el.type === "image") ?? []).length,
    );
    const videoCount = $derived(
        (gallery?.filter((el) => el.type === "video") ?? []).length,
    );
    const youtubeVideoCount = $derived((youtubeVideos ?? []).length);
    const iframeCount = $derived((iframes ?? []).length);
    const getLabel = (counter: number, label: string) =>
        counter > 0 ? `${counter} ${label}${counter > 1 ? "s" : ""}` : null;
    const mediaDescription = $derived(
        [
            getLabel(imageCount, "image"),
            getLabel(videoCount, "video"),
            getLabel(youtubeVideoCount, "YouTube video"),
            getLabel(iframeCount, "iframe"),
        ]
            .filter(Boolean)
            .join(", "),
    );
    const handleExpand = () => {
        expandMedia = !expandMedia;
    };
    const handleExpandKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleExpand();
        }
    };
</script>

<section>
    <button
        title={`${expandMedia ? "Collapse" : "Expand"} media`}
        onclick={handleExpand}
        onkeydown={handleExpandKeyDown}
        class={["media-button", expandMedia ? "expanded" : null]}
    >
        <span>Media<span class="media-subtitle">{mediaDescription}</span></span>
        <span class={["icon", "icon-button", "expand-icon", expandMedia ? "expanded" : null]}></span>
    </button>
    {#if expandMedia}
        <div transition:slide={{ axis: "y", duration: 200 }}>
            {#if gallery && gallery.length > 0}
                <Gallery {postId} items={gallery} />
            {/if}
            {#if youtubeVideos && youtubeVideos.length > 0}
                <Videos videos={youtubeVideos} />
            {/if}
            {#if iframes && iframes.length > 0}
                <Iframes {iframes} />
            {/if}
            {#if games && games.length > 0}
                <Games {games} />
            {/if}
        </div>
    {/if}
</section>

<style>
    .media-button {
        cursor: pointer;
        margin-top: 40px;
        font-size: 16px;
        background-color: transparent;
        color: var(--color-primary);
        font-size: 16px;
        border: 2px solid var(--color-primary);
        border-radius: 4px;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .media-button.expanded {
        margin-bottom: 20px;
    }

    .media-button:hover {
        background-color: rgba(226, 132, 19, 0.08);
    }

    .media-subtitle {
        margin-left: 20px;
        color: var(--color-secondary);
        font-size: 12px;
    }

    .expand-icon {
        width: 24px;
        height: 24px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M4 18h11v6.172l-2.586-2.586L11 23l5 5l5-5l-1.414-1.414L17 24.172V18h11v-2H4zM26 4H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h20z'/%3E%3C/svg%3E");
        background-color: var(--color-primary);
    }

    .expand-icon.expanded {
        transform: rotate(180deg);
        transition: transform 0.1s ease-out;
    }
    .expand-icon.expanded:hover {
        transform: rotate(180deg) scale(1.1);
    }
</style>
