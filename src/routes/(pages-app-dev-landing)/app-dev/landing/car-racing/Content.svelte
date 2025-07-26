<script lang="ts">
    import { onMount } from "svelte";
    import { SuspenseImg } from "$components";
    import { observeEnteredViewport } from "$utils/intersection";
    import type { Card } from "./+page.server";

    let { cards }: { cards: Card[] } = $props();

    let enteredViewport = $state<boolean>(false);

    let container: HTMLDivElement;
    onMount(() => {
        const { cleanup } = observeEnteredViewport(
            container,
            () => (enteredViewport = true),
        );

        return cleanup;
    });
</script>

<div class="content" bind:this={container}>
    {#each cards as { title, subtitle, body, imgPrimary, imgSecondary, inViewport, time, location, price }}
        <div class={["card", enteredViewport ? "entered" : null]}>
            <div class="card-img">
                <SuspenseImg
                    src={imgPrimary}
                    fallbackSrc={imgPrimary}
                    alt="image"
                />
            </div>
            <div class="card-img-secondary">
                <SuspenseImg
                    src={imgSecondary}
                    fallbackSrc={imgSecondary}
                    alt="image"
                />
            </div>
            <div class="card-content">
                <div>
                    <h5>{title}</h5>
                    <p>{subtitle}</p>
                    <p>{body}</p>
                </div>

                <div class="icons">
                    <div>
                        <span class={["icon", "clock-icon"]}></span>
                        <span>{time}</span>
                    </div>
                    <div>
                        <span class={["icon", "location-icon"]}></span>
                        {" "}
                        <span>{location}</span>
                    </div>
                    <div>
                        <span>{price}</span>
                    </div>
                </div>

                <div class="card-actions">
                    <button class="ghost"> Details </button>
                    <button class="primary"> Book now </button>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 10px;
        min-height: 100vh;
        width: 100%;
        padding: 180px 32px;
        max-width: 1600px;
        box-sizing: border-box;
        margin: 0 auto;
        position: relative;
    }

    .card {
        flex: 1 1 0px;
        min-width: 240px;
        opacity: 0;
        transform: translateX(160px);
        margin: 16px 0;
        border: 1px solid black;
        padding: 4px;
        position: relative;
        color: rgba(255, 255, 255, 0.87);
    }

    :global(.card:hover .card-img-secondary img) {
        opacity: 1;
        transition: opacity 0.2s ease-out;
    }

    .card.entered {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.6s cubic-bezier(0, 0.5, 0, 1);
    }

    .card.entered:nth-child(1) {
        transition-delay: 0.6s;
    }
    .card.entered:nth-child(2) {
        transition-delay: 0.8s;
    }
    .card.entered:nth-child(3) {
        transition-delay: 1s;
    }

    :global(.card .card-img img) {
        height: 160px;
        object-fit: cover;
        border-radius: 0;
    }

    :global(.card .card-img-secondary img) {
        height: 160px;
        object-fit: cover;
        border-radius: 0;
        position: absolute;
        top: 4px;
        left: 0;
        right: 0;
        padding: 0 4px;
        opacity: 0;
        transition: opacity 0.2s ease-in;
    }

    .card-content {
        padding: 16px;
        min-height: 342px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-actions {
        display: flex;
        justify-content: flex-end;
    }

    .card-actions button {
        margin-left: 16px;
        border-radius: 0;
        height: 32px;
        padding: 0 10px;
        text-transform: uppercase;
        cursor: pointer;
    }

    .card-actions .ghost {
        color: rgb(220, 73, 58);
        border: 1px solid rgba(220, 73, 58, 0.7);
        background-color: transparent;
    }

    .card-actions .ghost:hover {
        border-color: rgba(220, 73, 58, 1);
    }

    .card-actions .primary {
        background-color: rgb(220, 73, 58);
        color: rgba(255, 255, 255, 0.87);
        border: 1px solid rgb(220, 73, 58);
    }

    .card-actions .primary:hover {
        background-color: rgb(187, 52, 47);
    }

    .icons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: auto;
        margin-bottom: 20px;
        height: 60px;
    }

    .clock-icon {
        width: 20px;
        height: 20px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M11 8v5h5'/%3E%3C/g%3E%3C/svg%3E");
        background-color: rgba(255, 255, 255, 0.7);
    }

    .location-icon {
        width: 20px;
        height: 20px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5m0 1A3.5 3.5 0 0 0 2.5 5c0 1.355 1.059 2.918 3.224 4.653L6 9.871l.276-.218C8.441 7.918 9.5 6.355 9.5 5A3.5 3.5 0 0 0 6 1.5M6 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2'/%3E%3C/svg%3E");
        background-color: rgba(255, 255, 255, 0.7);
    }

    @media only screen and (min-width: 1000px) {
        .content {
            padding: 200px 64px;
        }

        .card {
            margin: 16px;
        }
    }
</style>
