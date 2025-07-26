<script lang="ts">
    import { onMount, type Snippet } from "svelte";
    import type { LayoutProps } from "./$types";
    import { LayoutContainer, Header, Aside, Main, Footer } from "$components";
    import { handleAnchorClick } from "$utils/navigation";

    let { children, data }: { children: Snippet } & LayoutProps = $props();
    let activeIds = $state<string[]>([]);

    $effect(() => {
        const elements = data.posts
            .map((post) => document.querySelector(`#${post.id}`))
            .filter(Boolean) as Element[];

        let timeout: number;
        const handler = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                activeIds = elements
                    .filter((element) => {
                        const { top, bottom } = element.getBoundingClientRect();
                        return (
                            (top >= 0 && top < window.innerHeight) ||
                            (bottom >= 0 && bottom < window.innerHeight) ||
                            (top <= 0 && bottom >= window.innerHeight)
                        );
                    })
                    .map((element) => element.id);
            }, 20);
        };

        handler();
        document.addEventListener("scroll", handler);

        return () => {
            document.removeEventListener("scroll", handler);
            clearTimeout(timeout);
        };
    });
</script>

<LayoutContainer class="pages-layout">
    <Header />

    <Aside>
        <h4>Contents</h4>
        <ul class="list">
            {#each data.posts as post}
                <a href={`#${post.id}`} onclick={handleAnchorClick}>
                    <li
                        class={activeIds.includes(post.id)
                            ? "active"
                            : undefined}
                    >
                        {post.title}
                    </li>
                </a>
            {/each}
        </ul>
    </Aside>

    <Main>
        {@render children()}
    </Main>

    <Footer />
</LayoutContainer>

<style>
    :global(.pages-layout) {
        display: grid;
        grid-template-areas:
            "header"
            "main"
            "footer";
        grid-template-columns: 100%;
        grid-template-rows: var(--header-height) auto max-content;
        background-color: var(--color-background-light);
        color: var(--color-primary);
    }

    :global(.pages-layout .aside) {
        display: none;
        border: 2px solid var(--color-secondary);
        background: bottom / contain no-repeat
            url(https://res.cloudinary.com/spookydoodle/image/upload/main/doodles/rabbit.jpg);
        padding: 0 20px;
        box-sizing: border-box;
    }

    :global(.pages-layout .footer) {
        background-color: var(--color-background-dark);
    }

    .list {
        box-sizing: border-box;
        padding: 0;
    }

    .list li {
        list-style: disc;
        font-size: 14px;
        text-shadow:
            var(--color-background-light) 1px 1px 2px,
            var(--color-background-light) -1px -1px 2px;
        background-color: rgba(249, 249, 249, 0.85);
    }

    .list li::marker {
        color: transparent;
        transition: color 0.2s ease-out;
    }

    .list li.active::marker {
        color: var(--color-secondary);
        transition: color 0.2s ease-in;
    }

    @media only screen and (min-width: 801px) {
        :global(.pages-layout) {
            grid-template-areas:
                "header header"
                "main aside"
                "footer aside";
        grid-template-columns: calc(100% - 220px) 220px;
        }
        :global(.pages-layout .aside) {
            display: initial;
        }
    }

    @media only screen and (min-width: 600px) {
        :global(.pages-layout nav) {
            backdrop-filter: blur(1px);
        }

        :global(.pages-layout nav a) {
            text-shadow:
                var(--color-background-light) 1px 1px 4px,
                var(--color-background-light) -1px -1px 2px;
            background-color: rgba(249, 249, 249, 0.85);
            border-radius: 2px;
            padding: 2px 8px;
        }
    }
</style>
