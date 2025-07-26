<script lang="ts">
    import { scrollToAnchor } from "$utils/navigation";

    let {
        postId,
        title,
        summary,
        underConstruction,
    }: {
        postId: string;
        title: string;
        summary: string;
        underConstruction?: boolean;
    } = $props();

    const handleCopyLink = () => {
        const url = new URL(window.location.href);
        url.hash = postId;
        navigator.clipboard.writeText(new URL(url.href).toString());
        scrollToAnchor(url.href);
    };
    const handleCopyLinkKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCopyLink();
        }
    };
</script>

<header class="max-width">
    <h3 class="post-title">
        {title}
        {#if underConstruction}
            <span class="tag">
                <span class={["icon", "construction-icon"]}></span>Under construction
            </span>
        {/if}
        <span
            role="button"
            tabindex="0"
            class={["icon", "icon-button", "link-icon"]}
            title="Copy link to this article"
            onclick={handleCopyLink}
            onkeydown={handleCopyLinkKeyDown}
        ></span>
    </h3>
    <p class="summary">{summary}</p>
</header>

<style>
    .post-title {
        margin: 0;
        font-size: 24px;
    }

    .summary {
        color: var(--color-secondary);
    }

    .tag {
        margin-left: 10px;
        font-weight: 400;
        font-size: 12px;
        background-color: var(--color-primary);
        color: var(--color-text-white);
        border-radius: 4px;
        padding: 2px 5px;
        column-gap: 5px;
        display: inline-flex;
        align-items: center;
    }

    .tag .construction-icon {
        width: 20px;
        height: 20px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' d='M41.332 16.08L5.5 16.988v-5.453l35.832.909z' stroke-width='1'/%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' d='M17.963 41.918h-7.79l1.559-35.836h4.673z' stroke-width='1'/%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' d='M41.332 16.08L5.5 16.988v-5.453l35.832.909zM10.953 34.907h6.231m-6.231-7.012h6.231m-5.842-5.453h5.453m5.842-6.232v-3.896m6.231 3.896v-3.896M35.1 24.78V12.313M27.7 24.78h14.8v3.115H27.7z' stroke-width='1'/%3E%3C/svg%3E");
        background-color: var(--color-text-white);
    }
    .link-icon {
        opacity: 0;
        width: 29px;
        height: 20px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-dasharray='28' stroke-dashoffset='28' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.6s' values='28;0'/%3E%3C/path%3E%3C/svg%3E");
        background-color: var(--color-primary);
    }
</style>
