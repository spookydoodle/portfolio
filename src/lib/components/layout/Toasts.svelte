<script lang="ts">
    import { slide } from "svelte/transition";
    import { toasts, removeToast } from "$lib/store/toasts";
</script>

{#if $toasts.length > 0}
    <div class="toasts" transition:slide={{ axis: "y", duration: 100 }}>
        {#each $toasts as toast (toast.id)}
            <div class="toast" transition:slide={{ axis: "y", duration: 100 }}>
                <div class="header-container">
                    <h6 class="header">{toast.header}</h6>
                    <span
                        role="button"
                        tabindex="0"
                        aria-label="Close toast"
                        title="Close"
                        class={["icon", "icon-button", "close-icon"]}
                        onclick={() => removeToast(toast.id)}
                        onkeydown={(e) => {
                            if (e.key === "Enter") {
                                removeToast(toast.id);
                            }
                        }}
                    ></span>
                </div>
                <p class="message">{toast.message}</p>
            </div>
        {/each}
    </div>
{/if}

<style>
    .toasts {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 10px;
        position: fixed;
        width: min(280px, 90vw);
        bottom: 20px;
        right: 20px;
        max-height: calc(100vh - 40px);
    }

    .toast {
        background-color: var(--color-primary);
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.22);
        padding: 10px;
        animation: slide-in 100ms cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .header-container {
        display: flex;
        justify-content: space-between;
    }

    .header {
        margin: 0 0 8px 0;
        color: var(--color-text-white);
        font-size: 16px;
    }

    .message {
        margin: 0;
        color: var(--color-text-white);
        font-size: 14px;
    }

    .close-icon {
        width: 16px;
        height: 16px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z'/%3E%3C/svg%3E");
        background-color: var(--color-text-white);
    }

    .close-icon:hover {
        background-color: white;
    }

    @keyframes slide-in {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }

        100% {
            opacity: 1;
            transform: none;
        }
    }
</style>
