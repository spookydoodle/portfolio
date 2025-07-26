<script lang="ts">
    import { SuspenseImg } from "$components";

    let { landing, landingMin }: { landing: string; landingMin: string } =
        $props();
</script>

<div id="header" class="header">
    <SuspenseImg src={landing} fallbackSrc={landingMin} alt="landing image" />
    <nav id="nav-bar" class="nav-bar">
        <span class={["icon", "car-battery-icon"]}></span>
        <a class="nav-bar-item" href="/"> ABOUT </a>
        <a class="nav-bar-item" href="/"> EXPERIENCES </a>
        <a class="nav-bar-item" href="/"> WHY CHOOSE US </a>
        <a class="nav-bar-item" href="/"> CONTACT </a>
        <span class={["icon", "menu-icon"]}></span>
    </nav>
</div>

<style>
    .header {
        height: 40vh;
        position: relative;
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
    }

    .header::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.1) 75%,
            rgba(0, 0, 0, 1)
        );
    }

    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid rgba(255, 255, 255, 0.87);
        color: rgba(255, 255, 255, 0.87);
        text-transform: uppercase;
        height: 72px;
        padding: 0 36px;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(-4em);
        animation: no-transform 1s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .car-battery-icon {
        width: 28px;
        height: 28px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M480 128h-32V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v48H192V80c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v48H32c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32M192 264c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8zm256 0c0 4.42-3.58 8-8 8h-40v40c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-40h-40c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h40v-40c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v40h40c4.42 0 8 3.58 8 8z'/%3E%3C/svg%3E");
        background-color: rgba(255, 255, 255, 0.87);
    }
    
    .nav-bar-item {
        display: none;
        font-size: 16px;
        text-shadow: var(--color-text-black) 0 0 8px;
    }

    .menu-icon {
        width: 32px;
        height: 32px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -7 24 24'%3E%3Cpath fill='%23000' d='M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2'/%3E%3C/svg%3E");
        background-color: rgba(255, 255, 255, 0.87);
    }

    @media only screen and (min-width: 1000px) {
        .nav-bar {
            height: 80px;
            padding: 0 80px;
            box-sizing: border-box;
        }

        .nav-bar-item {
            display: block;
        }
    }
</style>
