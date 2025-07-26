<script lang="ts">
    import type { GameIframe } from "$lib/model";
    import Game from "./Game.svelte";

    let { games }: { games: GameIframe[] } = $props();
</script>

{#each games as game}
    <div>
        <h5 class="title">
            {game.title}
        </h5>
        {#if game.paragraphs}
            {#each game.paragraphs as paragraph}
                <p class="max-width">{paragraph}</p>
            {/each}
        {/if}
        <Game {game} />
    </div>
{/each}

<style>
    .title {
        font-size: 16px;
        margin-top: 40px;
        margin-bottom: 0px;
    }
</style>
