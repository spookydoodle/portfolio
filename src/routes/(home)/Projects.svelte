<script lang="ts">
    import type { ProjectsDataItem } from "./data";

    let { data }: { data: ProjectsDataItem[] } = $props();
    
</script>

<div id="projects">
    {#each data as item}
        <a href={item.href}>
            <div class="button">
                <img src={item.imgSrc} alt={`Project ${item.title} image`} draggable="false" />
                <h3 class="title">{item.title}</h3>
            </div>
        </a>
    {/each}
</div>

<style>
    #projects {
        display: flex;
        row-gap: 30px;
        column-gap: 30px;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin: 0 var(--side-width);
        padding: 40px 20px;
        min-height: 100vh;
    }

    #projects .button {
        position: relative;
        border-radius: 50%;
        width: max(20vw, 200px);
        height: max(20vw, 200px);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-items: center;
        transition: transform .15s ease-in;
    }

    #projects .button:hover {
        box-shadow: -1px 1px 20px var(--color-secondary);
        transform: scale(1.1);
        transition: transform .1s ease-out;
    }

    #projects .button img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 10px;
        object-fit: cover;
        border-radius: 50%;
        user-select: none;
    }

    #projects .button:not(:hover) img {
        filter: brightness(75%)
    }

    #projects .button .title {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        color: var(--color-text-white);
    }

    #projects .button:hover .title {
        font-weight: bold;
        color: var(--color-secondary);
        text-shadow: var(--color-text-black) 0 0 8px;
    }
</style>
