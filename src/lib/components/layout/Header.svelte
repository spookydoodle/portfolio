<script lang="ts">
    import type { Snippet } from "svelte";
    import { slide } from "svelte/transition";
    import { page } from "$app/state";
    import { SitePath } from "$utils/pages";

    let { children }: { children?: Snippet } = $props();
    let showMenu = $state(false);
    let menuElement: HTMLDivElement;

    const addClickAway = (e: MouseEvent) => {
        if (menuElement && !menuElement.contains(e.target as Node | null)) {
            showMenu = false;
        }
    };

    $effect(() => {
        if (showMenu) {
            document.addEventListener("click", addClickAway);
        } else {
            document.removeEventListener("click", addClickAway);
        }
    });

    const items: { title: string; href: string }[] = [
        { title: "Home", href: SitePath.Home },
        { title: "App Dev", href: SitePath.AppDev },
        { title: "3D & Game Dev", href: SitePath.ThreeD },
        { title: "Blog", href: SitePath.Blog },
    ];
</script>

<nav class={["nav", page.url.pathname === SitePath.Home ? "home" : null]}>
    {#if children}
        {@render children()}
    {/if}
    {#each items as item}
        <a
            href={item.href}
            class={[page.url.pathname === item.href ? "active" : null]}
            >{item.title}</a
        >
    {/each}
    <span
        aria-label="Menu"
        title="Menu"
        role="button"
        tabindex="0"
        class={[
            "icon",
            "icon-button",
            "menu-icon",
            showMenu ? "expanded" : null,
        ]}
        onclick={(e) => {
            e.stopPropagation();
            showMenu = !showMenu;
        }}
        onkeydown={(e) => {
            if (e.key === "Enter") showMenu = !showMenu;
        }}
    ></span>
    {#if showMenu}
        <div
            bind:this={menuElement}
            class="menu"
            transition:slide={{ axis: "y", duration: 100 }}
        >
            <ul>
                {#each items as item}
                    <a href={item.href}><li>{item.title}</li></a>
                {/each}
            </ul>
        </div>
    {/if}
</nav>

<style>
    .nav {
        grid-area: header;
        box-sizing: border-box;
        position: sticky;
        top: 0;
        z-index: 1;
        padding: 10px;
        display: flex;
        align-items: center;
        column-gap: 10px;
    }

    .nav.home {
        transform: translateY(-50px);
        animation: no-transform 0.2s 0.2s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .nav > a:not(:first-of-type) {
        display: none;
    }

    .nav > a.active {
        font-weight: 800;
    }

    .menu {
        background-color: var(--color-primary);
        position: fixed;
        top: 0;
        right: 0;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    }

    .menu ul {
        margin: 0;
        padding: 0 0 10px 0;
        margin-top: var(--header-height);
    }

    .menu a:hover {
        text-decoration: none;
    }

    .menu li {
        list-style: none;
        padding: 5px 40px 5px 20px;
        margin: 0;
        color: var(--color-text-black);
    }
    
    .menu li:hover {
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .menu-icon {
        z-index: 1;
        margin-left: auto;
        width: 30px;
        height: 30px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23000' d='M2 9.5h12m-12-3h12m-12-3h12m-12 9h12' stroke-width='1'/%3E%3C/svg%3E");
        background-color: var(--color-primary);
    }

    .menu-icon.expanded {
        background-color: var(--color-text-black);
    }

    @media only screen and (min-width: 600px) {
        .nav a:not(:first-of-type) {
            display: initial;
        }
        .menu-icon {
            display: none;
        }
    }
</style>
