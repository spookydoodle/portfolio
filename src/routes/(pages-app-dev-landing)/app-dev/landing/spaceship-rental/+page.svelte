<script lang="ts">
    import { onMount } from "svelte";
    import type { DataProps } from "./+page.server";
    import Drawer from "./Drawer.svelte";
    import Cards from "./Cards.svelte";

    let { data }: { data: DataProps } = $props();
    const { landing1, landing2, landing3, brandName } = data;

    let mounted = $state(false);
    let drawerOpen = $state(false);

    onMount(() => {
        Promise.all(
            [landing1, landing2, landing3].map((landing) => fetch(landing)),
        )
            .then(() => (mounted = true))
            .catch(console.error);
    });

    $effect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                drawerOpen = false;
            }
        };
        
        if (drawerOpen) {
            document.addEventListener("keydown", handler);
        } else {
            document.removeEventListener("keydown", handler);
        }

        return () => {
            document.removeEventListener("keydown", handler);
        };
    });
</script>

{#if mounted}
    <div
        id="spaceship-rental"
        class="background"
        style={`--landing-1: url(${landing1});--landing-2: url(${landing2});--landing-3: url(${landing3});`}
    >
        <div class="background-front"></div>
        <div class="container">
            <nav id="navbar" class="navbar">
                <div class="nav-title">
                    <span class={["icon", "icon-common", "spaceship-icon"]}
                    ></span>
                    <h6>{brandName}</h6>
                </div>
                <div
                    role="button"
                    tabindex="0"
                    onclick={() => (drawerOpen = true)}
                    onkeydown={(e) => {
                        if (e.key === "Enter") drawerOpen = true;
                    }}
                    class="menu-icon-container"
                >
                    <span class={["icon", "icon-common", "menu-icon"]}></span>
                </div>
            </nav>

            <aside id="sidebar" class="sidebar"></aside>

            <Cards />

            <footer id="footer" class="footer">
                <span class={["icon", "footer-icon", "in-icon"]}></span>
                <span class={["icon", "footer-icon", "fb-icon"]}></span>
                <span class={["icon", "footer-icon", "tw-icon"]}></span>
            </footer>

            {#if drawerOpen}
                <Drawer {brandName} onClose={() => (drawerOpen = false)} />
            {/if}
        </div>
    </div>
{:else}
    <div class="loading-container">
        {#each [1, 1, 1, 1, 1, 1] as _el, i}
            <span class="loading-item" style:animation-delay={`${i * 0.3}s`}
            ></span>
        {/each}
    </div>
{/if}

<style>
    :global(body) {
        background-color: black;
        font-family:
            Darker Grotesque,
            Roboto,
            Open Sans,
            Arial;
        --animation-duration: 15s;
        --primary: rgb(255, 133, 0);
        --secondary: rgb(90, 24, 154);
    }

    .background,
    .background-front {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
    }

    .background {
        animation: swap-img var(--animation-duration) ease-in-out infinite;
    }

    .background-front {
        animation:
            swap-img var(--animation-duration) ease-in-out infinite,
            background-opacity calc(var(--animation-duration) / 3) ease-in-out
                infinite;
        animation-delay: 1s;
    }

    .container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .navbar {
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgba(255, 255, 255, 0.87);
    }

    .nav-title {
        height: 100%;
        display: flex;
        align-items: center;
        color: var(--primary);
        opacity: 0;
        animation: no-transform 1s 0.6s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .nav-title h6 {
        font-size: 32px;
        font-weight: 400;
    }

    :global(.icon-common) {
        height: 24px;
        width: 24px;
        margin: 10px;
        opacity: 0;
        animation: no-transform 1s 0.6s cubic-bezier(0, 0.5, 0, 1) forwards;
        cursor: pointer;
        background-color: var(--primary);
        transition: 0.2s;
        transform-origin: center;
    }

    :global(.icon-common:hover) {
        background-color: #ffffff;
        transform: scale(1.05);
        transition: 0.2s;
    }

    :global(.spaceship-icon) {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M2.88 18.05a35.9 35.9 0 0 1 8.53-16.322a.8.8 0 0 1 1.178 0q.25.27.412.456a35.9 35.9 0 0 1 8.119 15.864a44 44 0 0 1-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44 44 0 0 1-6.584-.875m6.697-1.123l1.158.066L12 19.523l1.265-2.53l1.157-.066a42 42 0 0 0 4.227-.455a33.9 33.9 0 0 0-6.65-12.387a33.9 33.9 0 0 0-6.648 12.387a42 42 0 0 0 4.226.455M12 14.995a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2'/%3E%3C/svg%3E");
    }

    .menu-icon-container {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        position: relative;
        cursor: pointer;
        margin-right: 14px;
        border: 1px solid rgba(255, 255, 255, 0.6);
        transform: skew(-15deg) translateX(120px);
        opacity: 0;
        animation: no-transform-skew 0.4s 1s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .menu-icon-container:hover {
        border-color: var(--primary);
    }

    :global(.menu-icon) {
        transition: all 0.2s cubic-bezier(0, 0.5, 0, 1);
        background-color: white;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -7 24 24'%3E%3Cpath fill='%23000' d='M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2'/%3E%3C/svg%3E");
    }

    :global(.menu-icon:hover) {
        background-color: var(--primary);
    }

    :global(.footer-icon) {
        height: 18px;
        width: 18px;
        padding: 10px;
        margin: 10px;
        transition: 0.2s;
        transform-origin: center;
        cursor: pointer;
        background-color: var(--primary);
        opacity: 0;
        animation: no-transform 1s 0.6s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    :global(.footer-icon:hover) {
        background-color: white;
        transition: 0.2s;
        transform: scale(1.05);
    }

    .sidebar {
        position: fixed;
    }

    .footer {
        position: fixed;
        bottom: 0;
        color: rgba(255, 255, 255, 0.87);
        padding: 0 12px;
    }

    .loading-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading-item {
        height: 30px;
        width: 18px;
        transform: skew(-15deg);
        background: linear-gradient(
                227deg,
                rgba(157, 78, 221, 0.8),
                rgba(157, 78, 221, 0) 70.71%
            ),
            linear-gradient(
                140deg,
                rgba(60, 9, 108, 0.8),
                rgba(60, 9, 108, 0) 70.71%
            ),
            linear-gradient(
                36deg,
                rgba(60, 9, 108, 0.8),
                rgba(60, 9, 108, 0) 70.71%
            );
        margin: 5px;
        opacity: 0;
        animation: pulse-skew 2.4s ease-in-out infinite;
    }

    :global(.tw-icon) {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029'/%3E%3C/svg%3E");
    }

    :global(.in-icon) {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33'/%3E%3C/svg%3E");
    }

    :global(.fb-icon) {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z'/%3E%3C/svg%3E");
    }

    @media only screen and (min-width: 800px) {
        :global(.icon-common) {
            height: 32px;
            width: 32px;
            margin: 16px;
        }
        .navbar {
            height: 64px;
        }

        .nav-button {
            width: 208px;
        }
        .nav-icon {
            height: 64px;
            width: 64px;
        }

        :global(.footer-icon) {
            height: 20px;
            width: 20px;
            padding: 12px;
        }

        .menu-icon-container {
            height: 64px;
            width: 64px;
        }
    }

    @keyframes swap-img {
        0% {
            background: var(--landing-1);
            background-position: center;
            background-size: cover;
        }
        33% {
            background: var(--landing-1);
            background-position: center;
            background-size: cover;
        }
        34% {
            background: var(--landing-2);
            background-position: center;
            background-size: cover;
        }
        66% {
            background: var(--landing-2);
            background-position: center;
            background-size: cover;
        }
        67% {
            background: var(--landing-3);
            background-position: center;
            background-size: cover;
        }
        99% {
            background: var(--landing-3);
            background-position: center;
            background-size: cover;
        }
        100% {
            background: var(--landing-1);
            background-position: center;
            background-size: cover;
        }
    }
    @keyframes background-opacity {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes pulse-skew {
        0% {
            opacity: 0;
            transform: skew(-15deg) scaleY(0.2);
        }
        50% {
            opacity: 1;
            transform: skew(-15deg) scaleY(1.2);
        }
        100% {
            opacity: 0;
            transform: skew(-15deg) scaleY(0.2);
        }
    }

    @keyframes no-transform-skew {
        100% {
            opacity: 1;
            transform: skew(-15deg);
        }
    }
</style>
