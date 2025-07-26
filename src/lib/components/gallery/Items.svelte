<script lang="ts">
    import type { MediaImage, MediaVideo } from "$lib/model";

    let {
        items,
        selectedIndex,
        onSelect,
        onPrevious,
        onNext,
    }: {
        items: (MediaImage | MediaVideo)[];
        selectedIndex: number;
        onSelect: (index: number) => void;
        onPrevious: () => void;
        onNext: () => void;
    } = $props();

    const handleSelect = (i: number) => () => onSelect(i);

    const handleKeyDown = (i: number) => (e: KeyboardEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (e.key === "Enter") onSelect(i);
        if (e.key === "ArrowLeft") onPrevious();
        if (e.key === "ArrowRight") onNext();
    };
</script>

{#each items as img, i}
    <div
        role="button"
        tabindex="0"
        onclick={handleSelect(i)}
        onkeydown={handleKeyDown(i)}
        class="button"
    >
        <img
            alt={img.type === "image" ? img.alt || img.title : img.title}
            src={img.type === "image" ? img.src : img.poster}
            title={img.title}
            class={["image", selectedIndex === i ? "selected" : null]}
        />
        {#if img.type === "video"}
            <span title="Video" class={["icon", "video-icon"]}></span>
        {/if}
    </div>
{/each}

<style>
    .button {
        position: relative;
    }

    .image {
        height: 80px;
        border: 2px solid var(--color-background-light);
        object-fit: cover;
        cursor: pointer;
        filter: brightness(0.85);
        background-color: black;
    }

    .image.selected,
    .image:hover {
        border-color: var(--color-primary);
        filter: brightness(1);
    }

    .image:active,
    .image:focus,
    .image:focus-visible {
        outline-width: 2px;
        outline-style: solid;
        outline-color: var(--color-secondary);
    }

    .video-icon {
        position: absolute;
        left: 3px;
        bottom: 6px;
        width: 16px;
        height: 16px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM5 5v14h14V5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332'/%3E%3C/svg%3E");
        background-color: var(--color-text-white);
    }
</style>
