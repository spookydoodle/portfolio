<script lang="ts">
    let { brandName, onClose }: { brandName: string; onClose: () => void; } = $props();
</script>

<div class="drawer">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class={["drawer-bar", "drawer-top-bar"]}
        onclick={(e) => e.stopPropagation()}
    >
        <div class="flex-center"></div>
        <div class="flex-center">
            <h6 class="drawer-title">Menu</h6>
            <span
                role="button"
                tabindex="0"
                onclick={onClose}
                onkeydown={(e) => {
                    if (e.key === "Enter") onClose();
                }}
                class={["icon", "icon-common", "menu-icon", "expanded"]}
            ></span>
        </div>
    </div>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="drawer-panel" onclick={(e) => e.stopPropagation()}>
        <ul class="drawer-list">
            {#each ["About", "Rent a space ship", "How it works", "Pricing", "Testimonials"] as item}
                <li class="drawer-item">
                    <span class="drawer-item-decoration"></span>
                    <p>{item}</p>
                </li>
            {/each}
        </ul>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class={["drawer-bar", "drawer-bottom-bar"]}
        onclick={(e) => e.stopPropagation()}
    >
        <div class="flex-center">
            <span class={["icon", "footer-icon", "in-icon"]}></span>
            <span class={["icon", "footer-icon", "fb-icon"]}></span>
            <span class={["icon", "footer-icon", "tw-icon"]}></span>
        </div>

        <div class="flex-center">
            <span class={["icon", "icon-common", "spaceship-icon"]}></span>
            <h6 class="drawer-title">{brandName}</h6>
        </div>
    </div>
</div>

<style>
    .menu-icon.expanded {
        background-color: var(--primary);
    }
    .menu-icon.expanded:hover {
        background-color: white;
    }
    .drawer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        color: rgba(255, 255, 255, 0.8);
        background-color: rgba(0, 0, 0, 0.8);
        text-transform: uppercase;
        overflow: hidden;
    }

    .drawer-panel {
        position: absolute;
        width: 60%;
        max-width: 300px;
        top: 0;
        bottom: 0;
        left: 20%;
        background-color: rgba(0, 0, 0, 0.8);
        border-left: 1px solid rgba(255, 255, 255, 0.87);
        border-right: 1px solid rgba(255, 255, 255, 0.87);
        padding: 20px 0;
        opacity: 0;
        transform: translateX(600px) skew(-15deg);
        animation: no-transform-skew 0.4s ease-out forwards;
    }

    .drawer-bar {
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        color: var(--secondary);
        background-color: rgba(0, 0, 0, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        z-index: 10;
        animation: height-10 0.2s ease-out forwards;
    }

    .drawer-bar > * {
        opacity: 0;
        animation: no-transform 0.4s 1.4s linear forwards;
    }

    .drawer-top-bar {
        top: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.87);
        height: 0;
    }

    .drawer-bottom-bar {
        bottom: 0;
        height: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.87);
    }

    .drawer-title {
        color: var(--primary);
        font-size: 24px;
        padding: 0;
        font-weight: 500;
    }

    .drawer-list {
        padding-left: 0;
        padding-top: 24px;
    }

    .drawer-item {
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        position: relative;
        cursor: pointer;
        list-style: none;
        color: rgba(255, 255, 255, 0.87);
        font-size: 24px;
        font-weight: 600;
    }

    .drawer-item:hover {
        color: var(--primary);
        border-top: 1px solid rgba(255, 255, 255, 0.87);
        border-bottom: 1px solid rgba(255, 255, 255, 0.87);
    }

    .drawer-item .drawer-item-decoration {
        position: absolute;
        left: -20px;
        width: 12px;
        top: 6px;
        bottom: 6px;
        background: linear-gradient(
            to left,
            rgba(255, 133, 0, 0.8),
            rgba(0, 0, 0, 0) 100%
        );
        opacity: 0;
    }

    .drawer-item .drawer-item-decoration::before {
        content: "";
        position: absolute;
        left: -18px;
        width: 12px;
        top: 0;
        bottom: 0;
        background: linear-gradient(
            to left,
            rgba(255, 133, 0, 0.8),
            rgba(0, 0, 0, 0) 100%
        );
        opacity: 0;
    }

    .drawer-item .drawer-item-decoration::after {
        content: "";
        position: absolute;
        left: -54px;
        width: 30px;
        top: 0;
        bottom: 0;
        background: linear-gradient(
                to left,
                rgba(255, 133, 0, 0.6),
                rgba(0, 0, 0, 0) 40%
            ),
            linear-gradient(
                320deg,
                rgba(255, 133, 0, 0.5),
                rgba(60, 9, 108, 0) 40%,
                rgba(0, 0, 0, 0) 100%
            ),
            linear-gradient(
                220deg,
                rgba(255, 133, 0, 0.5),
                rgba(255, 133, 0, 0) 40%,
                rgba(0, 0, 0, 0) 100%
            );
        opacity: 0;
    }

    .drawer-item:hover .drawer-item-decoration::before,
    .drawer-item:hover .drawer-item-decoration::after,
    .drawer-item:hover .drawer-item-decoration {
        opacity: 1;
    }

    .drawer-item p {
        padding: 8px 12px;
        margin: 0;
    }

    .flex-center {
        height: 100%;
        display: flex;
        align-items: center;
    }

    @media only screen and (min-width: 800px) {
        .drawer-panel {
            left: 40%;
        }

        .drawer-list {
            padding-top: 48px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .drawer-panel {
            left: 50%;
            max-width: 420px;
        }
    }

    @keyframes height-10 {
        0% {
            height: 0;
        }
        100% {
            height: 10vh;
        }
    }

    @keyframes no-transform-skew {
        100% {
            opacity: 1;
            transform: skew(-15deg);
        }
    }
</style>
