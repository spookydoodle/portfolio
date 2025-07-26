<script lang="ts">
    const cards = [
        {
            name: "Rent a spaceship",
            body: "Feel like leaving our planet? Rent a space ship and discover the galaxy!",
        },
        {
            name: "Unlimited miles",
            body: "You can fly unlimited miles.",
        },
        {
            name: "Journey assistance",
            body: "24 hours flight assistance.",
        },
        {
            name: "Sign up",
            body: " Create your ultimate itinerary now!",
        },
    ];
</script>

<main class="cards">
    {#each cards as item, i}
        <div class="card">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-body">
                {item.body}
                {#if i === cards.length - 1}
                    <span class={["icon", "play-icon"]}></span>
                {/if}
            </p>
        </div>
    {/each}
</main>

<style>
    .cards {
        font-size: 20px;
        text-transform: uppercase;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content max-content auto;
        row-gap: 15px;
        margin-left: 35px;
        margin-top: 40px;
        margin-bottom: 40px;
        min-height: calc(100vh - 200px);
    }

    .card {
        background-color: rgba(0, 0, 0, 0.6);
        border: 2px solid rgba(255, 255, 255, 0.87);
        padding-top: 5px;
        padding-bottom: 5px;
        transform: skew(-15deg) translateX(-100px);
        transition: transform 0.2s cubic-bezier(0, 0.5, 0, 1);
    }

    .card:nth-child(1) {
        padding-left: 120px;
        max-width: 60%;
        transition-delay: 1.4s;
    }

    .card:nth-child(2) {
        padding-left: 100px;
        max-width: calc(60% - 5px);
        transition-delay: 1.6s;
    }

    .card:nth-child(3) {
        padding-left: 80px;
        max-width: calc(60% - 5px);
        transition-delay: 1.8s;
    }

    .card:nth-child(4) {
        margin-left: auto;
        margin-top: auto;
        padding-left: 20px;
        padding-right: 120px;
        max-width: 90%;
        transition-delay: 2.4s;
        transform: skew(-15deg) translateX(100px);
    }

    .card-title {
        color: var(--secondary);
        margin: 0;
        font-weight: 500;
    }

    .card-body {
        margin: 0;
        color: rgba(255, 255, 255, 0.87);
    }

    .card-title,
    .card-body {
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 10px;
    }

    .play-icon {
        width: 20px;
        height: 20px;
        margin-left: 12px;
        cursor: pointer;
        background-color: var(--primary);
        opacity: 0;
        animation: no-transform 1s 0.6s cubic-bezier(0, 0.5, 0, 1) forwards;
        transition: transform 0.2s ease-out;
        transform-origin: center;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28M8 6.69v18.62L24.925 16Z'/%3E%3C/svg%3E");
    }

    .play-icon:hover {
        transform: scale(1.2);
        transition: transform 0.2s ease-in;
    }

    @media only screen and (min-width: 800px) {
        .card-title,
        .card-body {
            font-size: 24px;
            line-height: 24px;
            margin-bottom: 10px;
        }

        .card {
            width: 40%;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .card:nth-child(1) {
            width: 625px;
        }

        .card:nth-child(2) {
            width: 610px;
        }

        .card:nth-child(3) {
            width: 600px;
        }

        .card:nth-child(4) {
            width: 600px;
        }
    }

    @starting-style {
        .card {
            transform: skew(-15deg) translateX(-120%);
        }
        .card:nth-child(4) {
            transform: skew(-15deg) translateX(120%);
        }
    }
</style>
