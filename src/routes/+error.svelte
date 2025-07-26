<script lang="ts">
    import { page } from "$app/state";
    import { SitePath } from "$utils/pages";
</script>

<div class="container">
    <div>
        <img
            src="https://res.cloudinary.com/spookydoodle/image/upload/main/3d/winst0n-space-top.png"
            alt="404 page background"
            class="background"
        />
        <img
            src="https://res.cloudinary.com/spookydoodle/image/upload/main/3d/winst0n-space-top-transparent.png"
            alt="404 page background"
            class="background-anim"
        />
    </div>

    <div class="title">
        <h1 class="header">{page.error?.message ?? ""}</h1>
        <a href={SitePath.Home}>
            <h2 class="message">Go back home</h2>
        </a>
    </div>
</div>

<style>
    .container {
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
        background-color: var(--color-background-dark);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        padding: 20px;
        font-family:
            Karla,
            Roboto,
            Open Sans,
            Verdana,
            sans-serif;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    .background-anim {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        animation: pulse 4s linear infinite;
        transform-origin: 35% 25%;
        filter: blur(0);
    }

    .title {
        z-index: 1;
        font-weight: bold;
        text-align: center;
        width: 100%;
    }

    @media only screen and (min-width: 800px) {
        .title {
            width: 50%;
        }
    }

    .header,
    .message {
        color: var(--color-secondary);
        margin: 40px 0;
    }

    .header {
        font-size: 48px;
    }

    .message {
        display: inline-block;
        font-size: 64px;
        margin: 0 0 100px 0;
    }

    .message:hover {
        text-shadow:
            8px 8px 10px var(--color-primary),
            2px 2px 5px var(--color-secondary);
    }
</style>
