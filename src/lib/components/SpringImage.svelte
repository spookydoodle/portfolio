<script lang="ts">
    import { onMount } from "svelte";
    import { Spring } from "svelte/motion";
    import { fade } from "svelte/transition";
    import { observeEnteredViewport } from "$utils/intersection";

    type AnimationType =
        | "from-left"
        | "from-right"
        | "from-bottom"
        | "from-top";
    let {
        src,
        alt,
        title,
        hiddenText,
        size = "100%",
        stiffness = 0.2,
        damping = 0.15,
        slideAnimation,
    }: {
        src: string;
        alt: string;
        title?: string;
        hiddenText?: string;
        size?: string;
        stiffness?: number;
        damping?: number;
        slideAnimation?:
            | AnimationType
            | {
                  [key in "large-screen" | "small-screen"]?: AnimationType;
              };
    } = $props();

    let container: HTMLDivElement;
    let enteredViewport = $state<boolean>(false);

    onMount(() => {
        const { cleanup } = observeEnteredViewport(
            container,
            () => (enteredViewport = true),
        );

        return cleanup;
    });

    let coords = new Spring({ x: 0, y: 0 }, { stiffness, damping });

    let dragState = $state<
        | { isDragging: true; startingPosition: { x: number; y: number } }
        | { isDragging: false }
    >({ isDragging: false });

    const initializeDragState = (x: number, y: number) => {
        coords.set({ x: 0, y: 0 });
        dragState = {
            isDragging: true,
            startingPosition: { x, y },
        };
    };

    const clearDragState = () => {
        if (dragState.isDragging) {
            dragState = { isDragging: false };
            coords.set({ x: 0, y: 0 });
        }
    };

    const updateDrag = (x: number, y: number) => {
        if (dragState.isDragging) {
            coords.set({
                x: x - dragState.startingPosition.x,
                y: y - dragState.startingPosition.y,
            });
        }
    };

    onMount(() => {
        const handleMouseMove = (e: MouseEvent) => {
            updateDrag(e.clientX, e.clientY);
        };

        const handleMouseDown = (e: MouseEvent) => {
            initializeDragState(e.clientX, e.clientY);
            document.addEventListener("mousemove", handleMouseMove);
        };

        const handleMouseUp = () => {
            clearDragState();
            document.removeEventListener("mousemove", handleMouseMove);
        };

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length !== 1) {
                return;
            }
            const touch = e.touches[0];
            initializeDragState(touch.clientX, touch.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length !== 1) {
                return;
            }
            e.preventDefault();
            const touch = e.touches[0];
            updateDrag(touch.clientX, touch.clientY);
        };

        container.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        container.addEventListener("touchstart", handleTouchStart);
        container.addEventListener("touchmove", handleTouchMove, {
            passive: false,
        });
        document.addEventListener("touchend", clearDragState);

        return () => {
            container.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);

            document.removeEventListener("touchend", clearDragState);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    });
</script>

<div class="outer">
    {#if hiddenText}
        <span class={["hidden-text", enteredViewport ? "entered" : null]}>{hiddenText}</span>
    {/if}
    <div
        bind:this={container}
        role="button"
        tabindex="0"
        {title}
        class="parent"
        style:transform={`translate(${coords.current.x}px, ${coords.current.y}px)`}
        style:width={size}
        style:height={size}
    >
        <div
            class={[
                "container",
                enteredViewport ? "entered" : null,
                !slideAnimation
                    ? null
                    : typeof slideAnimation === "string"
                      ? `all-screens-${slideAnimation}`
                      : `${Object.entries(slideAnimation)
                            .map((el) => el.join("-"))
                            .join(" ")}`,
            ]}
        >
            <img {src} {alt} unselectable="on" draggable="false" />
        </div>
    </div>
</div>

<style>
    .outer {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .outer .hidden-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--color-secondary);
        font-weight: bold;
        display: block;;
        font-size: 24px;
        opacity: 0;
        user-select: none;
    }
    .outer .hidden-text.entered {
        animation: show 0.2s 1.4s ease-in forwards;
    }

    .parent {
        position: relative;
        border-radius: 50%;
    }

    .container {
        border-radius: 50%;
        cursor: pointer;
        height: 100%;
        width: 100%;
        overflow: hidden;
        opacity: 0;
    }

    .container.entered {
        animation: no-transform 1s 0.2s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .container:hover {
        box-shadow: -1px 1px 20px white;
    }

    .container > img {
        pointer-events: none;
        object-fit: cover;
        user-select: none;
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

    @media only screen and (min-width: 800px) {
        .container.all-screens-from-left,
        .container.large-screen-from-left {
            transform: translateX(-64px);
        }
        .container.all-screens-from-right,
        .container.large-screen-from-right {
            transform: translateX(64px);
        }
        .container.all-screens-from-top,
        .container.large-screen-from-top {
            transform: translateY(-64px);
        }
        .container.all-screens-from-bottom,
        .container.large-screen-from-bottom {
            transform: translateY(64px);
        }
    }
    @media only screen and (max-width: 800px) {
        .container.all-screens-from-left,
        .container.small-screen-from-left {
            transform: translateX(-64px);
        }

        .container.all-screens-from-right,
        .container.small-screen-from-right {
            transform: translateX(64px);
        }

        .container.all-screens-from-top,
        .container.small-screen-from-top {
            transform: translateY(-64px);
        }

        .container.all-screens-from-bottom,
        .container.small-screen-from-bottom {
            transform: translateY(64px);
        }
    }

    @keyframes show {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
