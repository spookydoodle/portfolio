<script lang="ts">
    import type { GameIframe } from "$lib/model";

    let { game }: { game: GameIframe } = $props();
    let play = $state(false);
</script>

<div class={["container", !play ? "no-play" : null]}>
    {#if play}
        <iframe
            src={game.src}
            allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad"
            title={game.title}
        ></iframe>
    {/if}
    <button class={["button", play ? "play" : null]} onclick={() => (play = !play)}>
        <!-- Icons -->
        {play ? "Stop game" : "Run game"}
    </button>
    {#if !play}
        <p>Total size: {game.size}</p>
    {/if}
</div>

<style>
    .container {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 200px;
        width: auto;
        background-color: black;
        border: none;
        position: relative;
        padding-top: 32px;
    }

    .container iframe {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .container p {
        font-weight: bold;
        font-size: 20px;
    }

    .container.no-play {
        border: 2px solid var(--color-primary);
    }

    .button {
        background-color: var(--color-primary);
        border: none;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 10px 20px;
        text-transform: uppercase;
        color: var(--color-text-white);
        font-size: 14px;
        cursor: pointer;
    }

    .button:hover {
        background-color: var(--color-primary-dark);
    }

    .button.play {
        position: absolute;
        transition: all 1s ease-in;
        right: 20px;
        top: 20px;
    }

    @media only screen and (min-width: 600px) {
        .container {
            height: 300px;
        }
    }

    @media only screen and (min-width: 1000px) {
        .container {
            height: 500px;
        }
    }
</style>
