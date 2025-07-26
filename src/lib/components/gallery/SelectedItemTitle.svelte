<script lang="ts">
    import type { MediaImage, MediaVideo } from "$lib/model";

    let {
        selectedItem,
        onPrevious,
        onNext,
    }: {
        selectedItem: MediaImage | MediaVideo;
        onPrevious: () => void;
        onNext: () => void;
    } = $props();
</script>

<div class="title-container">
    <h6 class="title" title={selectedItem.title}>{selectedItem.title}</h6>
    {#if selectedItem.description}
        <p class="description" title={selectedItem.description}>{selectedItem.description}</p>
    {/if}
    <button
        class="nav-button prev"
        title="Previous image"
        aria-label="Previous image"
        onclick={onPrevious}
        onkeydown={(e) => {
            if (e.key === "Enter") {
                onPrevious();
            }
        }}>{"<"}</button
    >
    <button
        class="nav-button next"
        title="Next image"
        onclick={onNext}
        onkeydown={(e) => {
            if (e.key === "Enter") {
                onNext();
            }
        }}>{">"}</button
    >
</div>

<style>
    .title-container {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0 50px;
        height: 52px;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2px);
        text-align: center;
        color: var(--color-text-white);
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    }

    .title,
    .description {
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        box-sizing: content-box;
        display: block;
    }

    .title {
        font-size: 16px;
        margin: 0;
        vertical-align: middle;
    }

    .description {
        font-size: 14px;
        margin: 0;
    }

    .nav-button {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50px;
        text-align: center;
        vertical-align: middle;
        font-size: 24px;
        font-weight: bold;
        padding: 0;
        margin: 0;
        background-color: transparent;
        border: none;
        color: var(--color-text-white);
        opacity: 0.85;
        cursor: pointer;
    }

    .nav-button:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.25);
    }

    .nav-button.prev {
        left: 0;
    }

    .nav-button.next {
        right: 0;
    }

    @media only screen and (min-width: 600px) {
        .title-container {
            padding: 10px 70px;
            height: 72px;
        }

        .nav-button {
            font-size: 36px;
            width: 70px;
        }
    }
</style>
