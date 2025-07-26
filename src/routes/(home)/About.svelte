<script lang="ts">
    import { PulsingArrow, SlideInViewport } from "$components";
    import { handleAnchorClick } from "$utils/navigation";
    import type { AboutDataItem } from "./data";

    let { data }: { data: AboutDataItem[] } = $props();
    let container: HTMLDivElement;
</script>

<div id="about" bind:this={container} class="container">
    <SlideInViewport>
        <h3>Full stack software engineer.</h3>
        <div class="description">
            {#each data as { title, tldr }}
                <h4 class="title">{title}</h4>
                <div class="tldr">
                    {#each tldr as el}
                        <p class="paragraph">
                            {@html el}
                        </p>
                    {/each}
                </div>
            {/each}
        </div>
        <div class="arrow-container" title="Scroll to timeline">
            <a href="#timeline" onclick={handleAnchorClick} class="arrows">
                {#each [null, null, null] as _, i}
                    <PulsingArrow
                        animation="pulse-opacity"
                        color="var(--color-secondary)"
                        animationDuration="1.8s"
                        animationDelay={`${i * 0.6}s`}
                    />
                {/each}
            </a>
        </div>
    </SlideInViewport>
</div>

<style>
    .container {
        min-height: 100vh;
        padding: 0 50px 0 70px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .description .title {
        margin: 32px 0 16px 0;
    }

    .description .tldr {
        margin: 16px 0;
    }

    .description .tldr .paragraph {
        color: var(--color-secondary);
        margin: 0;
    }

    .arrow-container {
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        display: flex;
        flex-basis: 100%;
        margin: var(--header-height) 0;
        position: relative;
    }

    .arrow-container .arrows {
        --offset: 7px;
        display: block;
        position: relative;
    }

    .arrow-container .arrows :global(*) {
        position: absolute;
    }

    .arrow-container .arrows :global(*:nth-child(1)) {
        transform: translateY(var(--offset));
    }

    .arrow-container .arrows :global(*:nth-child(2)) {
        transform: translateY(calc(var(--offset) * 2));
    }

    @media only screen and (min-width: 800px) {
        .container {
            width: min(600px, calc(100% - 160px));
        }

        .description {
            display: grid;
            grid-template-columns: max-content auto;
            column-gap: 20px;
        }

        .description .title {
            margin: 16px 0;
        }
    }
</style>
