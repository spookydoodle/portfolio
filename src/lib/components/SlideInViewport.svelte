<script lang="ts">
    import { onMount, type Snippet } from "svelte";
    import { observeEnteredViewport } from "$utils/intersection";

    let { children, animationDelay }: { children: Snippet, animationDelay?: string } = $props();

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

<div
    bind:this={container}
    class={["container", enteredViewport ? "entered" : null]}
    style:animation-delay={animationDelay}
>
    {@render children()}
</div>

<style>
    .container {
        opacity: 0;
        transform: translateY(64px);
    }
    .container.entered {
        animation: no-transform 1s 0.4s cubic-bezier(0, 0.5, 0, 1) forwards;
    }
</style>
