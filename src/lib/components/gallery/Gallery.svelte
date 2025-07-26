<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import type { MediaImage, MediaVideo } from "$lib/model";
    import Items from "./Items.svelte";
    import SelectedItem from "./SelectedItem.svelte";
    import SelectedItemTitle from "./SelectedItemTitle.svelte";

    let {
        postId,
        items,
    }: { postId: string; items: (MediaImage | MediaVideo)[] } = $props();

    let selectedIndex = $state(0);
    let fullScreen = $state(false);;

    const selectedItem: MediaImage | MediaVideo = $derived(
        items[selectedIndex] || items[0],
    );

    const handleFullScreenToggle = () => {
        fullScreen = !fullScreen;
    };
    const handleFullScreenToggleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleFullScreenToggle();
        }
    };
    const handleSelect = (i: number) => {
        selectedIndex = i;
    };
    const handlePrevious = () => {
        handleSelect((selectedIndex - 1 + items.length) % items.length);
    };
    const handleNext = () => {
        handleSelect((selectedIndex + 1) % items.length);
    };

    $effect(() => {
        if (fullScreen) {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    handleFullScreenToggle();
                }
            };
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            };
        }
    });
</script>

<div class={["outer-container", fullScreen ? "fullscreen" : null]}>
    <div class="container">
        <SelectedItem {selectedItem} />
        <SelectedItemTitle
            {selectedItem}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
        <span
            role="button"
            tabindex="0"
            title={fullScreen
                ? "Exit full screen mode"
                : "Enter full screen mode"}
            onclick={handleFullScreenToggle}
            onkeydown={handleFullScreenToggleKeyDown}
            class={["icon", "icon-button", "fullscreen-icon"]}
        ></span>
    </div>
    <div class="images-container">
        <Items
            {items}
            {selectedIndex}
            onSelect={handleSelect}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    </div>
</div>

<style>
    .outer-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto max-content;
        row-gap: 10px;
    }

    .outer-container:not(.fullscreen) {
        position: relative;
        height: min(calc(100vh - 40px), 550px);
    }

    .outer-container.fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        z-index: 2;
        background-color: black;
    }

    .container {
        background-color: black;
        overflow: hidden;
        position: relative;
    }

    .images-container {
        display: flex;
        align-items: center;
        column-gap: 6px;
        row-gap: 6px;
        width: 100%;
        overflow-x: auto;
        padding: 0px 20px 10px 0;
        box-sizing: border-box;
        position: relative;
    }

    .fullscreen-icon {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 20px;
        height: 20px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2'/%3E%3Crect width='10' height='8' x='7' y='8' rx='1'/%3E%3C/g%3E%3C/svg%3E");
        background-color: var(--color-primary);
    }
</style>
