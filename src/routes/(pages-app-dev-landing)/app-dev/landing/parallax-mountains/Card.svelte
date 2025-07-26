<script lang="ts">
    import { observeEnteredViewport } from "$utils/intersection";
    import { onMount } from "svelte";

    let {
        index,
        title,
        description,
        img,
    }: { index: number; title: string; description: string; img: string } =
        $props();

    let container: HTMLDivElement;
    let enteredViewport = $state<boolean>(false);

    onMount(() => {
        const { cleanup } = observeEnteredViewport(
            container,
            () => (enteredViewport = true),
        );

        return cleanup;
    });
</script>

<div
    bind:this={container}
    class={["card", "in-viewport-base", enteredViewport ? "in-viewport" : null]}
    style:transition-delay={`${(index + 1) * 0.2}s`}
>
    <div class="img-container">
        <img src={img} alt={`Mountains image ${index + 1}`} class="img" />
    </div>
    <h5 class="title">{title}</h5>
    <p class="description">{description}</p>
</div>

<style>
    .card {
        margin: 12px 24px;
        width: 340px;
        max-width: calc(100% - 48px);
    }

    .img-container {
        padding: 5px;
        width: 100%;
        height: 180px;
        border: 1px solid rgba(255, 255, 255, 0.27);
        color: rgba(255, 255, 255, 0.87);
        position: relative;
        overflow: hidden;
        margin-bottom: 12px;
    }

    .img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }

    .in-viewport-base {
        opacity: 0;
        transform: translateY(120px);
    }

    .in-viewport {
        opacity: 1;
        transform: translateX(0);
        transition: 0.8s cubic-bezier(0, 0.5, 0, 1);
    }

    .title {
        font-size: 24px;
        font-weight: 400;
        margin: 10px;
    }

    .description {
        font-size: 20px;
        margin: 10px;
    }
</style>
