<script lang="ts">
    let {
        rating,
        changed,
        onClick,
    }: {
        rating: number;
        changed: boolean;
        onClick?: (rating: number) => void;
    } = $props();
    let hoveredRating = $state(0);

    const effectiveRating = $derived(hoveredRating || rating);
</script>

<div
    role="listitem"
    class="hearts-row"
    onmouseleave={() => (hoveredRating = 0)}
>
    {#each [1, 2, 3, 4, 5] as index}
        <span class="heart">
            <span class={["icon", "heart-outline-icon"]}></span>
            {#if effectiveRating === index * 2 - 1}
                <span
                    class={[
                        "icon",
                        "heart-half-icon",
                        changed || hoveredRating > 0 ? "hovered" : null,
                    ]}
                ></span>
            {/if}
            {#if effectiveRating >= index * 2}
                <span
                    class={[
                        "icon",
                        "heart-icon",
                        changed || hoveredRating > 0 ? "hovered" : null,
                    ]}
                ></span>
            {/if}
            <span
                role="button"
                tabindex="0"
                class="left"
                aria-label={`Change rating to ${index * 2 - 1}`}
                title={`Change rating to ${index * 2 - 1}`}
                onmouseenter={() => (hoveredRating = index * 2 - 1)}
                onclick={() => onClick?.(index * 2 - 1)}
                onkeydown={(e) => {
                    if (e.key === "Enter") onClick?.(index * 2 - 1);
                }}
            ></span>
            <span
                role="button"
                tabindex="0"
                aria-label={`Change rating to ${index * 2}`}
                title={`Change rating to ${index * 2}`}
                class="right"
                onmouseenter={() => (hoveredRating = index * 2)}
                onclick={() => onClick?.(index * 2)}
                onkeydown={(e) => {
                    if (e.key === "Enter") onClick?.(index * 2);
                }}
            ></span>
        </span>
    {/each}
</div>

<style>
    .hearts-row {
        display: flex;
        column-gap: 4px;
    }

    .heart {
        position: relative;
        transition: transform 0.1s ease-in;
    }

    .heart:hover {
        transform: scale(1.5);
        transform-origin: center;
        transition: transform 0.05s ease-out;
    }

    .heart-outline-icon,
    .heart-half-icon,
    .heart-icon {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }

    .heart-half-icon,
    .heart-icon {
        position: absolute;
        top: 0;
        left: 0;
    }

    .heart-half-icon.hovered,
    .heart-icon.hovered {
        background-color: var(--color-secondary);
    }

    .heart-outline-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81'/%3E%3C/svg%3E");
        background-color: rgb(166, 166, 166);
    }

    .heart-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='m256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32c-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65c.56 55.68-19.71 107-62 157c-40.09 47.49-94.22 79.78-137 108.35Z'/%3E%3C/svg%3E");
        background-color: var(--color-primary);
    }
    
    .heart-half-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64C98.46 64 48.63 114.54 48 176.65c-.56 55.68 19.71 107 62 157c40.12 47.46 94.25 79.75 137 108.32l9 6l9-6c42.78-28.57 96.91-60.86 137-108.32c42.25-50 62.52-101.35 62-157C463.37 114.54 413.54 64 352.92 64m24.67 249c-31.78 37.6-74.68 65.75-112.52 90.59l-9.07 6V162.23l24.59-29.54C294.53 116 318.38 96 352.92 96c43.15 0 78.62 36.32 79.07 81a178.6 178.6 0 0 1-12.69 68.59c-9.03 22.84-22.67 44.91-41.71 67.41'/%3E%3C/svg%3E");
        background-color: var(--color-primary);
    }

    .heart .left,
    .heart .right {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 50%;
        cursor: pointer;
    }

    .heart .left {
        left: 0;
    }

    .heart .right {
        right: 0;
    }
</style>
