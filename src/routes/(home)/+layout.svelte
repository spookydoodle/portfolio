<script lang="ts">
    import { onMount, type Snippet } from "svelte";
    import { fade, fly } from "svelte/transition";
    import {
        LayoutContainer,
        Header,
        Aside,
        SideNav,
        Main,
        Footer,
    } from "$components";
    import Toasts from "$components/layout/Toasts.svelte";
    import { handleAnchorClick } from "$utils/navigation";
    import { MainAnchors } from "$utils/pages";

    let { children }: { children: Snippet } = $props();
    let showScrollToTopIcon = $state<boolean>(false);
    let currentPositionIndex = $state(0);
    let offsetHandle = $state(100);

    const navItems: { title: string; href: string }[] = [
        { title: "Home", href: "#" + MainAnchors.Intro },
        { title: "About", href: "#" + MainAnchors.About},
        { title: "Timeline", href: "#" + MainAnchors.Timeline },
        { title: "Skills", href: "#" + MainAnchors.Skills },
        { title: "Projects", href: "#" + MainAnchors.Projects },
    ];

    onMount(() => {
        let timeout: number;
        const handleScroll = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const offsets = navItems
                    .map(
                        ({ href }) =>
                            document.querySelector(
                                href,
                            ) as HTMLDivElement | null,
                    )
                    .map((el) => el?.offsetTop ?? 0);
                const windowScroll = Math.round(window.scrollY);
                currentPositionIndex =
                    windowScroll > offsets[offsets.length - 1] - 50
                        ? offsets.length
                        : offsets.findIndex((o) => o > window.scrollY);
                const sliceCount = navItems.length + 1;
                const currentPositionPercentage =
                    currentPositionIndex / sliceCount;

                const inner = offsets[currentPositionIndex - 1];
                const pc =
                    currentPositionIndex === offsets.length
                        ? 0
                        : (windowScroll - inner) /
                          (offsets[currentPositionIndex] - inner);
                const slice = 1 / sliceCount;
                const slicePercentage = pc * slice;

                offsetHandle = Math.round(
                    (currentPositionPercentage + slicePercentage) * 100,
                );
            }, 20);
        };

        handleScroll();
        const handleScrollEnd = () =>
            (showScrollToTopIcon = window.scrollY > 0);

        document.addEventListener("resize", handleScroll);
        document.addEventListener("scroll", handleScroll);
        document.addEventListener("scrollend", handleScrollEnd);

        return () => {
            document.removeEventListener("resize", handleScroll);
            document.removeEventListener("scroll", handleScroll);
            document.removeEventListener("scrollend", handleScrollEnd);
            clearTimeout(timeout);
        };
    });
</script>

<LayoutContainer class="home-layout">
    <Header>
        <span class="header-spacer"></span>
    </Header>

    <Main>
        {@render children()}
    </Main>

    <SideNav variant="fixed">
        <div class="side-nav-container">
            <span class="handle" style:top={`${offsetHandle}%`}></span>
            <div class="side-nav">
                {#each navItems as item, i}
                    <a
                        href={item.href}
                        onclick={handleAnchorClick}
                        class={[
                            currentPositionIndex - 1 === i ? "active" : null,
                        ]}>{item.title}</a
                    >
                {/each}
            </div>
        </div>
    </SideNav>

    <Aside variant="fixed">
        <div class="aside">
            {#if showScrollToTopIcon}
                <a
                    href="#intro"
                    aria-label="Scroll to top"
                    title="Scroll to top"
                    class="scroll-to-top"
                    onclick={handleAnchorClick}
                    transition:fade={{ delay: 1000 }}
                >
                    <span class={["icon", "icon-button", "nav-up-icon"]}></span>
                </a>
            {/if}
        </div>
    </Aside>

    <Footer />

    <Toasts />
</LayoutContainer>

<style>
    :global(.home-layout) {
        display: grid;
        grid-template-areas:
            "header"
            "main"
            "footer";
        grid-template-columns: auto;
        grid-template-rows: var(--header-height) auto max-content;
        background-color: var(--color-background-dark);
    }
    :global(.home-layout h1),
    :global(.home-layout h2),
    :global(.home-layout h3),
    :global(.home-layout h4),
    :global(.home-layout h5),
    :global(.home-layout h6),
    :global(.home-layout p),
    :global(.home-layout a),
    :global(.home-layout li) {
        color: var(--color-primary);
    }

    .header-spacer {
        width: 40px;
        display: block;
    }

    .side-nav-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
    }

    .side-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: calc(100% - 18px);
        padding-top: 12px;
        overflow: hidden;
        transform: translateX(-50px);
        animation: no-transform 0.2s 2s ease-in forwards;
    }

    .handle {
        background-color: var(--color-secondary);
        border-radius: 50%;
        width: 8px;
        height: 8px;
        display: block;
        position: absolute;
        left: 21px;
        box-sizing: border-box;
        transition: all 0.2s cubic-bezier(0, 0.5, 0, 1);
        transform: translateX(-50px);
        animation: no-transform 0.2s 3s ease-in forwards;
    }

    @media only screen and (min-width: 550px) and (min-height: 450px) {
        .side-nav-container {
            display: block;
        }
    }

    .side-nav > a {
        transform: rotate(-90deg);
    }

    .side-nav > a.active {
        color: var(--color-secondary);
        transition: color 0.2s ease-in;
    }

    .aside {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: var(--side-width);
        align-items: center;
        padding: 10px 0;
        box-sizing: border-box;
    }

    .scroll-to-top {
        margin-top: auto;
    }
    .nav-up-icon {
        width: 24px;
        height: 24px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2.5L8 7h8zm0 7.5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2'/%3E%3C/svg%3E");
        background-color: var(--color-secondary);
    }
</style>
