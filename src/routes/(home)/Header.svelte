<script lang="ts">
    import { PulsingArrow, SpringImage } from "$components";
    import { handleAnchorClick } from "$utils/navigation";
    import { onMount } from "svelte";
    import type { IntroData } from "./data";

    let { data }: { data: IntroData } = $props();
    let startTypewriting = $state(false);

    const typewriter = (
        node: Element,
        options: {
            duration?: number;
            delay?: number;
            cursor?: boolean;
        } = {},
    ) => {
        const { duration = 1600, delay = 0, cursor } = options;
        const text = node.textContent ?? "";

        if (!cursor) {
            return {
                duration,
                delay,
                tick: (t: number) => {
                    const i = Math.trunc(text.length * t);
                    node.textContent = text.slice(0, i);
                },
            };
        }

        const cursorDuration = 1200;
        const totalDuration = duration + cursorDuration;

        return {
            duration: totalDuration,
            delay,
            tick: (t: number) => {
                if (t * totalDuration <= cursorDuration) {
                    node.textContent = Math.floor(t * 10) % 2 === 0 ? " " : "_";
                } else {
                    const pc = (t * totalDuration - cursorDuration) / duration;
                    const i = Math.trunc(text.length * pc);
                    node.textContent = text.slice(0, i);
                }
            },
        };
    };

    onMount(() => {
        let timeout = setTimeout(() => {
            startTypewriting = true;
        }, 500);
        return () => clearTimeout(timeout);
    });
</script>

<header id="intro" class="container">
    <div class="spacer"></div>
    <div class="avatar">
        <SpringImage
            src="https://res.cloudinary.com/spookydoodle/image/upload/main/doodles/avatar.jpg"
            alt="avatar"
            title="Pull me"
            hiddenText="Boo!"
            slideAnimation="from-left"
        />
    </div>
    <div class="titles">
        <h1 class="title">
            {#if startTypewriting}
                <span transition:typewriter={{ delay: 200, cursor: true }}>
                    {data.title}
                </span>
            {/if}
        </h1>
        <h2 class="subtitle">
            {#if startTypewriting}
                <span transition:typewriter={{ duration: 1000, delay: 3100 }}>
                    {data.subtitle}
                </span>
            {/if}
        </h2>
    </div>
    <div class="arrow-container" title="Scroll to about">
        <a href="#about" onclick={handleAnchorClick}>
            <PulsingArrow animation="pulse-partial-opacity" />
        </a>
    </div>
</header>

<style>
    .container {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        flex-wrap: wrap;
        margin: 0 var(--side-width);
        justify-content: center;
        align-items: center;
        padding: 40px 30px;
        box-sizing: border-box;
        min-height: calc(100vh - var(--header-height));
    }

     .spacer {
        flex-basis: 100%;
        height: 36px;
        box-sizing: border-box;
        margin-bottom: auto;
    }

     .avatar {
        width: 160px;
        height: 160px;
    }

     .titles {
        flex-grow: 0.1;
    }

     .titles .title {
        font-size: 48px;
        margin: 18px 0;
        min-height: 56px;
    }

     .titles .subtitle {
        color: var(--color-secondary);
        font-size: 32px;
        margin: 16px 0;
        min-height: 38px;
    }

     .arrow-container {
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        justify-content: center;
        display: flex;
        flex-basis: 100%;
        bottom: 0;
        opacity: 0;
        animation: no-transform 1s 5200ms cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    @media only screen and (min-width: 800px) {
        .container {
            flex-direction: row;
            column-gap: 12%;
        }

         .titles {
            flex-grow: 0.1;
            width: 550px;
        }

         .titles .title {
            font-size: 72px;
            margin: 18px 0;
            min-height: 85px;
        }

         .titles .subtitle > span {
            font-size: 48px;
            margin: 16px 0;
            min-height: 56px;
        }

         .avatar {
            width: 220px;
            height: 220px;
        }
    }
</style>
