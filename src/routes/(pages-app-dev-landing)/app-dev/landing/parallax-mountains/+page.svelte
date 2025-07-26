<script lang="ts">
    import { onMount } from "svelte";
    import type { DataProps } from "./+page.server";
    import { SuspenseImg } from "$components";
    import SlideInViewport from "$components/SlideInViewport.svelte";
    import Card from "./Card.svelte";

    let { data }: { data: DataProps } = $props();
    const {
        mountains1,
        mountains2,
        mountains3,
        background,
        backgroundMin,
        layer,
        layerMin,
    } = data;

    let mounted = $state(false);
    let layerBgOffset = $state(0);
    let layerTopOffset = $state(0);

    onMount(() => {
        Promise.all([background, layer].map((img) => fetch(img)))
            .then(() => (mounted = true))
            .catch(console.error);
    });

    $effect(() => {
        const handler = (e: Event) => {
            const y = window.pageYOffset;
            layerBgOffset = y * 0.6;
            layerTopOffset = y * 0.2;
        };
        document.addEventListener("scroll", handler);

        return () => {
            document.removeEventListener("scroll", handler);
        };
    });

    const items: { title: string; description: string; img: string }[] = [
        {
            title: "Lorem ipsum",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            img: mountains1,
        },
        {
            title: "Dolor sit",
            description:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: mountains2,
        },
        {
            title: "Adipiscing elit",
            description:
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: mountains3,
        },
    ];
</script>

{#if mounted}
    <div id="mountains" class="container">
        <header class="bg-container">
            <SuspenseImg
                src={background}
                fallbackSrc={backgroundMin}
                alt="background image"
                style={`top:${layerBgOffset}px;`}
            />

            <h1 class="header-title">Discover Mountains</h1>

            <SuspenseImg
                src={layer}
                fallbackSrc={layerMin}
                alt="background image"
                style={`top:${layerTopOffset}px;`}
            />
            <div class="social-icons">
                <span class={["icon", "icon-common", "in-icon"]}></span>
                <span class={["icon", "icon-common", "fb-icon"]}></span>
                <span class={["icon", "icon-common", "tw-icon"]}></span>
            </div>
        </header>

        <div class="content">
            {#each items as { title, description, img }, i}
                <Card index={i} {title} {description} {img} />
            {/each}
        </div>

        <div id="footer" class="footer"></div>
    </div>
{:else}
    <div class="loading"></div>
{/if}

<style>
    :global(body) {
        background-color: black;
        font-family:
            Darker Grotesque,
            Roboto,
            Open Sans,
            Arial;
        color: rgba(255, 255, 255, 0.87);
    }

    .loading {
        width: 100%;
        height: 100%;
        background-color: black;
    }

    .container {
        background-color: black;
        overflow: hidden;
    }

    .bg-container {
        width: 100%;
        height: 110vh;
        padding-bottom: 10vh;
        position: relative;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .bg-container::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 10;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 1)
        );
    }

    :global(.bg-container img) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 50%;
        width: 50%;
        object-fit: cover;
    }

    .bg-container .header-title {
        color: white;
        position: absolute;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        font-family: Dela Gothic One;
        font-size: 36px;
    }

    .social-icons {
        position: absolute;
        left: 0;
        top: calc(100vh - 48px);
        height: 48px;
        padding: 12px;
        display: flex;
        z-index: 20;
    }

    .icon-common {
        background-color: rgba(255, 255, 255, 0.87);
        margin: 0 12px;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

    .icon-common:hover {
        background-color: white;
    }

    .tw-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029'/%3E%3C/svg%3E");
    }

    .in-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33'/%3E%3C/svg%3E");
    }

    .fb-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z'/%3E%3C/svg%3E");
    }

    .content {
        margin: 10px 0;
        padding: 40px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;
    }

    @media only screen and (min-width: 600px) {
        .bg-container .header-title {
            font-size: 56px;
        }
    }
    @media only screen and (min-width: 800px) {
        .bg-container .header-title {
            font-size: 96px;
        }
    }
    @media only screen and (min-width: 1200px) {
        .bg-container .header-title {
            font-size: 144px;
            line-height: 180px;
        }
    }
</style>
