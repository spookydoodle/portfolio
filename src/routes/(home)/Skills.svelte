<script lang="ts">
    import { Rating } from "$components";
    import { addToast } from "$lib/store/toasts";
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

<div id="skills">
    <h2 class="header">{data.title}</h2>
    <p class="subheader">
        Rated from 5:{data.subtitleGood} <span class={["icon", "good-icon"]}></span> to 1:{data.subtitleBad}
        <span class={["icon", "bad-icon"]}></span>;
    </p>
    <p class="subheader">Opaqueness visualises my perceived confidence.</p>
    <p class="caption">
        {data.note}
        {#if clickedRatings.size > 0}
            <span
                role="button"
                tabindex="0"
                onclick={() => (clickedRatings = new Map())}
                onkeydown={(e) => {
                    if (e.key === "Enter") clickedRatings = new Map();
                }}
                class="reset"
            >
                RESET
            </span>
        {/if}
    </p>

    <div class="charts">
        {#each charts as [type, chart]}
            <div>
                <h3>{type}</h3>
                <div class="chart">
                    {#each chart.toSorted((a, b) => b.rating - a.rating) as item}
                        <p
                            style:opacity={`${(item.level / maxLevel).toFixed(2)}`}
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
    #skills {
        background-color: var(--color-background-light);
        margin: 0 auto;
        padding: 60px var(--side-width) 100px var(--side-width);
        position: relative;
    }

    #skills .header {
        text-align: center;
        margin: 0;
    }

    #skills .subheader,
    #skills .caption {
        text-align: center;
        color: var(--color-secondary);
    }

    .subheader {
        margin: 5px;
    }

    #skills .caption {
        font-size: 12px;
    }

    #skills .caption .reset {
        cursor: pointer;
    }

    #skills .charts {
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

    #skills .chart {
        display: grid;
        grid-template-columns: 180px max-content;
        column-gap: 10px;
        align-items: center;
    }

    #skills .chart p {
        margin: 0;
    }

    .bad-icon,
    .good-icon {
        width: 20px;
        height: 20px;
        background-color: var(--color-secondary);
    }

    .bad-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='m118.1 20.63l-2.9 20.19l-53.11-2.48l49.01 31.6L96.24 174.2A28.31 28.31 0 0 0 79.43 200a28.31 28.31 0 0 0 10.04 21.6l-6.55 45.9l20.78 2.4l12.4-42.9a28 28 0 0 0 3.1-1.2l61.1 28.9l49.1-30.9l26 61.1l-73 79.3l11.2 78.7l-38.6 48.5h48.5l19.6-46.4l-11.9-68.8l43.5-21.1l6.3 49.2l56.2 2.1l2.8-47.1l65.3 35.1l3.5 51.3l-10.2 45.7h62.2l-30.2-45.7l-5.6-68.1l-80.1-80.8l26.7-82.1l61.8 21l-27.2 25.3a28.3 28.3 0 0 0-6.8-.8a28.31 28.31 0 0 0-28.3 28.3a28.31 28.31 0 0 0 28.3 28.3a28.31 28.31 0 0 0 28.3-28.3a28.3 28.3 0 0 0-1.5-9.2l43.7-49.2L333 155.3a42.7 62.07 0 0 0 1.1-13.9a42.7 62.07 0 0 0-2.4-20.2c55.4-12.5 61.7-67.54 15.5-97.18c8.6 26.64 22.2 51.09-33 64.97a42.7 62.07 0 0 0-22.8-9.69a42.7 62.07 0 0 0-23.5 10.32c-58.2-13.78-44.2-38.57-35.5-65.6c-47 30.17-39.6 86.68 18.5 97.98a42.7 62.07 0 0 0-2.2 19.4a42.7 62.07 0 0 0 2.7 21.6l-73.2 61.5l-43.1-17.4a28.3 28.3 0 0 0 .9-7.1a28.3 28.3 0 0 0-6.8-18.3l42-145.18zM280.2 126.5a10.43 10.43 0 0 1 10.5 10.4a10.43 10.43 0 0 1-10.5 10.4a10.43 10.43 0 0 1-10.4-10.4a10.43 10.43 0 0 1 10.4-10.4m34.5 0a10.43 10.43 0 0 1 10.5 10.4a10.43 10.43 0 0 1-10.5 10.4a10.43 10.43 0 0 1-10.4-10.4a10.43 10.43 0 0 1 10.4-10.4'/%3E%3C/svg%3E");
    }

    .good-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='%23000'%3E%3Cpath d='M26.225 6.135a.45.45 0 0 1 .503-.1a.4.4 0 0 1 .272.395v.363l-3.146 3.146a1.5 1.5 0 0 0 0 2.122l1.969 1.969a3.47 3.47 0 0 1 2.634 1.013l.543.543V6.43c0-2.252-2.712-3.196-4.194-1.705L20.558 9H11.57L7.203 4.719C5.723 3.245 3 4.169 3 6.429v9.157l.543-.543a3.47 3.47 0 0 1 2.635-1.013l1.968-1.97a1.5 1.5 0 0 0 0-2.12L5 6.792V6.43a.4.4 0 0 1 .276-.394a.47.47 0 0 1 .517.1l.007.008L10.753 11H21.39zM27 13.793l-2.44-2.44a.5.5 0 0 1 0-.707L27 8.208zm-19.56-2.44L5 13.794V8.207l2.44 2.44a.5.5 0 0 1 0 .707M5 23.136c-.627.3-1.325.4-2 .303v1.134l2-1zm24 .303a3.5 3.5 0 0 1-2-.303v.437l2 1zM24.082 29c1.228 0 2.355-.9 2.76-2.152l1.798.899C27.917 29.603 26.178 31 24.082 31H7.918c-2.104 0-3.877-1.36-4.587-3.239l1.804-.901C5.513 28.112 6.642 29 7.918 29zm-9.125-13h2.086a.5.5 0 0 1 .353.854l-1.042 1.042a.5.5 0 0 1-.708 0l-1.042-1.042a.5.5 0 0 1 .353-.854M16 19.106c-.538.539-1.457.894-2.5.894c-1.032 0-1.942-.347-2.482-.876c.12.724.928 4.376 4.982 4.376s4.861-3.652 4.982-4.376c-.54.529-1.45.876-2.482.876c-1.044 0-1.963-.355-2.5-.894'/%3E%3Cpath d='M9.646 14.646C9.91 14.384 10.57 14 11.5 14s1.591.384 1.854.646a.5.5 0 0 1-.708.708c-.07-.071-.476-.354-1.146-.354s-1.075.283-1.146.354a.5.5 0 0 1-.708-.708m9 0c.263-.262.924-.646 1.854-.646s1.591.384 1.854.646a.5.5 0 0 1-.708.708c-.07-.071-.476-.354-1.146-.354s-1.075.283-1.146.354a.5.5 0 0 1-.708-.708M2.724 26.947a.5.5 0 1 1-.448-.894l4-2a.5.5 0 1 1 .448.894zm26.553 0a.5.5 0 1 0 .447-.894l-4-2a.5.5 0 1 0-.448.894zM7.75 19.25l-2.5 2.5a2.475 2.475 0 1 1-3.5-3.5l2.5-2.5a2.475 2.475 0 1 1 3.5 3.5m16.5 0l2.5 2.5a2.475 2.475 0 1 0 3.5-3.5l-2.5-2.5a2.475 2.475 0 1 0-3.5 3.5'/%3E%3C/g%3E%3C/svg%3E");
    }
</style>
