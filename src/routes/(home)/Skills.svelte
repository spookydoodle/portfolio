<script lang="ts">
    import { Rating } from "$components";
    import { addToast } from "$lib/store/toasts";
    import { MainAnchors } from "$utils/pages";
    import type { SkillsData, SkillsDataItem } from "./data";

    let { data }: { data: SkillsData } = $props();
    const charts = Object.entries(data.skills) as [string, SkillsDataItem[]][];
    let clickedRatings = $state<Map<string, number>>(new Map());
    const maxLevel = $derived(
        Math.max(...charts.flatMap(([_, ch]) => ch.map((row) => row.level))),
    );
    const maxRating = $derived(
        Math.max(...charts.flatMap(([_, ch]) => ch.map((row) => row.rating))),
    );
    const confidence = (level: number): string => {
        if (level <= (1 * maxLevel) / 4) return "not that proficient with it";
        if (level <= (2 * maxLevel) / 4) return "still planning to upskill";
        if (level <= (3 * maxLevel) / 4) return "relatively good with it";
        return "confident using it";
    };
    const sentiment = (rating: number): string => {
        if (rating <= (1 * maxRating) / 4) return "poor";
        if (rating <= (2 * maxRating) / 4) return "subpar";
        if (rating <= (3 * maxRating) / 4) return "fair";
        return "excellent";
    };
    const separator = (level: number, rating: number): string => {
        if (level <= maxLevel / 2 && rating > maxRating / 2) return "but";
        if (rating <= maxRating / 2 && level > maxLevel / 2) return "but";
        return "and";
    };
</script>

<div id={MainAnchors.Skills} class="container">
    <h2 class="header">{data.title}</h2>
    <p class="subheader">
        favorite <span class={["icon", "good-icon"]}></span> -
        <span class={["icon", "bad-icon"]}></span> necessary evil
    </p>
    <p class="subheader">Opaqueness = my perceived confidence</p>
    <p class="caption">
        {data.note}
    </p>
    <button
        onclick={() => (clickedRatings = new Map())}
        onkeydown={(e) => {
            if (e.key === "Enter") clickedRatings = new Map();
        }}
        class={["reset", clickedRatings.size === 0 ? "disabled" : null]}
    >
        RESET
    </button>

    <div class="charts">
        {#each charts as [type, chart]}
            <div>
                <h3>{type}</h3>
                <div class="chart">
                    {#each chart.toSorted((a, b) => b.level - a.level) as item}
                        <p
                            style:opacity={`${(0.2 + (item.level / maxLevel) * 0.8).toFixed(2)}`}
                            title={`My sentiment on ${item.title} is ${sentiment(item.rating)} ${separator(item.level, item.rating)} I am ${confidence(item.level)}.`}
                        >
                            {item.title}
                        </p>
                        <Rating
                            rating={clickedRatings.get(item.title) ??
                                item.rating}
                            changed={clickedRatings.has(item.title)}
                            onClick={(rating) => {
                                const nextRatings = new Map(clickedRatings).set(
                                    item.title,
                                    rating,
                                );
                                clickedRatings = nextRatings;
                                addToast({
                                    id: item.title,
                                    header: item.title,
                                    message:
                                        rating === item.rating
                                            ? "I agree"
                                            : rating > item.rating
                                              ? item.reaction.higher
                                              : item.reaction.lower,
                                });
                            }}
                        />
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        background-color: var(--color-background-light);
        margin: 0 auto;
        padding: 80px 20px 100px 20px;
        position: relative;
    }

    .header {
        text-align: center;
        margin: 0;
    }

    .subheader {
        text-align: center;
        color: var(--color-primary);
    }
    .subheader:first-of-type {
        padding-left: 45px;
    }

    .caption {
        text-align: center;
        color: var(--color-secondary-dark);
    }

    .subheader {
        margin: 5px;
    }

    .caption {
        font-size: 14px;
    }

    .reset {
        cursor: pointer;
        margin: 0 auto;
        background-color: var(--color-primary);
        border-color: var(--color-primary);
        padding: 2px 4px;
        border-radius: 4px;
        border-style: solid;
        outline: none;
        color: var(--color-text-white);
        font-weight: bold;
        display: block;
    }

    .reset.disabled {
        cursor: not-allowed;
        background-color: lightgray;
        border-color: lightgray;
    }

    .charts {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        row-gap: 40px;
        column-gap: 40px;
        max-width: 100%;
        overflow-x: auto;
        position: relative;
    }

    .chart {
        display: grid;
        grid-template-columns: 180px max-content;
        column-gap: 10px;
        align-items: center;
    }

    .chart p {
        margin: 0;
    }

    .bad-icon,
    .good-icon {
        width: 20px;
        height: 20px;
        background-color: var(--color-primary);
    }

    .bad-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81'/%3E%3C/svg%3E");
    }

    .good-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='m256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32c-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65c.56 55.68-19.71 107-62 157c-40.09 47.49-94.22 79.78-137 108.35Z'/%3E%3C/svg%3E");
    }

    @media only screen and (min-width: 800px) {
        .container {
            padding: 80px var(--side-width) 100px var(--side-width);
        }
    }
</style>
