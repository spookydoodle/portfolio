<script lang="ts">
    import { onMount } from "svelte";
    import type { DataProps } from "./+page.server";

    let { data }: { data: DataProps } = $props();
    const { landing } = data;

    let mounted = $state(false);

    onMount(() => {
        fetch(landing)
            .then(() => (mounted = true))
            .catch(console.error);
    });
</script>

{#if mounted}
    <div id="vr-experience" class="container">
        <aside class="side-bar">
            {#each [1, 2, 3] as _}
                <span class="circle"></span>
            {/each}
        </aside>

        <nav id="navbar" class="navbar">
            <span class={["icon", "marker-icon"]} title="Yeah"></span>
            <div class="nav-buttons">
                {#each ["About", "Experiences", "Products", "News"] as text}
                    <span class="nav-button">{text}</span>
                {/each}
            </div>
            <div class="menu-icon-container" title="Menu">
                <span class={["icon", "menu-icon"]}></span>
            </div>
        </nav>

        <header class="header" style:background-image={`url(${landing})`}>
            <h1 class="title">
                <strong>VR</strong>OOM
            </h1>
            <p class="subtitle">
                Experience virtual reality <span
                    class={["icon", "arrow-right-icon"]}
                ></span>
            </p>
        </header>

        <footer class="footer">
            <article class="footer-content">
                <h3 class="footer-title">Try it out</h3>
                <p class="footer-body">
                    Have you ever experienced a video game in a VR cube with
                    your friends? <strong><a href="">Read more...</a></strong>
                </p>
            </article>
            <div class="social">
                {#each ["TW", "FB", "LN"] as text}
                    <span class="social-icon" title={text}>{text}</span>
                {/each}
            </div>
        </footer>
    </div>
{:else}
    <div class="loading-screen">
        <div class="circular-progress"></div>
    </div>{/if}

<style>
    .container {
        height: 100vh;
        width: 100%;
        overflow: hidden;
        position: relative;
        font-family:
            Darker Grotesque,
            Roboto,
            Open Sans,
            Arial;
    }

    .navbar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 0;
        height: 48px;
        border-bottom: solid 1px rgba(255, 255, 255, 0.87);
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgba(255, 255, 255, 0.87);
        animation: width-100 1s 0.4s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .marker-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M256 32L32 224h128l96-80l96 80h128zm0 176l-52 39H32v18h172l52 39l52-39h172v-18H308zM32 288l224 192l224-192H352l-96 80l-96-80z'/%3E%3C/svg%3E");
        background-color: rgba(255, 255, 255, 0.87);
        height: 32px;
        width: 32px;
        margin: 8px;
        cursor: pointer;
        transition: 0.2s;
    }

    .marker-icon:hover {
        color: white;
        transform: scale(1.05);
        transition: 0.2s;
        transform-origin: center;
    }

    .arrow-right-icon {
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'/%3E%3C/svg%3E");
        height: 32px;
        width: 32px;
        background-color: rgba(255, 255, 255, 0.87);
        cursor: pointer;
        transform: translateY(10px);
    }

    .nav-buttons {
        flex-wrap: nowrap;
        opacity: 0;
        animation: no-transform 0.4s 1.4s cubic-bezier(0, 0.5, 0, 1) forwards;
        display: none;
        font-size: 24px;
    }

    .nav-button {
        display: block;
        text-transform: uppercase;
        width: 160px;
        text-align: center;
    }

    .nav-button:hover {
        color: white;
        font-weight: bold;
        cursor: pointer;
    }

    .menu-icon-container {
        background-color: rgba(255, 255, 255, 0.4);
        height: 48px;
        width: 48px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(-100px) translateX(100px);
        animation: no-transform 0.4s 1s ease-in forwards;
    }

    .menu-icon-container:hover {
        background-color: rgba(255, 255, 255, 0.6);
    }

    .menu-icon {
        width: 38px;
        height: 38px;
        margin: 8px;
        background-color: rgba(255, 255, 255, 0.87);
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z'/%3E%3C/svg%3E");
    }

    .side-bar {
        position: absolute;
        left: auto;
        right: 0;
        bottom: 0;
        height: 0;
        width: 48px;
        border-left: solid 1px rgba(255, 255, 255, 0.87);
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgba(255, 255, 255, 0.87);
        animation: height-100 1s 0.4s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .side-bar > .circle {
        display: block;
        width: 12px;
        height: 12px;
        margin: 16px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.87);
        cursor: pointer;
        transform: translateX(50px);
        opacity: 0;
        animation: no-transform 0.2s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .side-bar > .circle:hover {
        background-color: rgba(255, 255, 255, 0.87);
    }

    .side-bar > .circle:nth-child(1) {
        animation-delay: 1.2s;
    }
    .side-bar > .circle:nth-child(2) {
        animation-delay: 1.4s;
    }
    .side-bar > .circle:nth-child(3) {
        animation-delay: 1.6s;
    }

    .header {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: cover;
        background-position: center;
        padding: 64px;
        color: rgba(255, 255, 255, 0.87);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    .title {
        font-weight: 400;
        font-size: 72px;
        margin: 60px 0 0 0;
        opacity: 0;
        animation: no-transform 1s 0.6s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .subtitle {
        margin: 0;
        font-size: 24px;
        text-transform: capitalize;
        opacity: 0;
        animation: no-transform 1s 1.4s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .footer {
        position: absolute;
        bottom: 0;
        right: 0;
        padding-left: 16px;
        width: 400px;
        max-width: 90%;
        background-color: rgba(255, 255, 255, 0.75);
        border-top-left-radius: 15px;
        color: rgba(0, 0, 0, 0.87);
        transform: translateY(120px);
        opacity: 0;
        animation: no-transform 0.4s 2s cubic-bezier(0, 0.5, 0, 1) forwards;
        display: flex;
        align-items: center;
        z-index: 2;
    }

    .footer-content {
        padding: 16px;
    }

    .footer-title {
        font-size: 32px;
        margin: 0;
        text-transform: uppercase;
        font-weight: bold;
        font-weight: 400;
    }

    .footer-body {
        font-size: 24px;
    }

    .social {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-left: auto;
        min-width: 48px;
        right: 0;
        font-size: 24px;
    }

    .social-icon {
        padding: 4px 0;
        font-size: 24px;
        font-weight: 400;
        font-weight: bold;
        cursor: pointer;
    }

    .loading-screen {
        height: 100vh;
        width: 100vw;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .circular-progress {
    }

    @media only screen and (min-width: 800px) {
        .navbar {
            height: 64px;
        }
        .nav-buttons {
            display: flex;
        }

        .nav-button {
            width: 224px;
        }
        
        .marker-icon {
            height: 40px;
            width: 40px;
        }

        .menu-icon-container {
            height: 64px;
            width: 64px;
        }

        .side-bar {
            width: 64px;
        }

        .header {
            padding-left: 128px;
        }

        .title {
            margin: 100px 0 0 0;
            font-size: 100px;
        }

        .subtitle {
            font-size: 24px;
        }

        .footer {
            width: 720px;
        }

        .footer-title {
            font-size: 54px;
        }

        .footer-body {
            font-size: 24px;
        }

        .social {
            min-width: 64px;
        }
    }

    @keyframes width-100 {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }

    @keyframes height-100 {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    }
</style>
