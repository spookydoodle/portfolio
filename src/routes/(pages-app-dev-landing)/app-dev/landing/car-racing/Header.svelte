<header id="main-header">
    <div class="title-container">
        <div class="titles">
            <h1 class="title">Book your ultimate driving experience</h1>
            <hr class="underline" />
            <h3 class="subtitle">Unleash the racer in you</h3>
        </div>
        <div class="description">
            <p class="body">
                Would you like to get behind the wheel of a real sports car and
                drive through the city or do a few circuits on a private racing
                track? Or would you prefer to travel back in time and drive in a
                beautiful vintage car? Whatever your dream is, we will help you
                book an incredible car driving experience.
            </p>
        </div>
    </div>
</header>

<style>
    .title-container {
        padding: 80px 20px;
        box-sizing: border-box;
        position: relative;
        color: rgba(255, 255, 255, 0.87);
        background-color: #000;
        display: block;
        width: 100%;
    }

    .title-container h1,
    .title-container h3,
    .title-container hr {
        text-align: center;
        font-weight: lighter;
        text-transform: capitalize;
        opacity: 0;
        animation: no-transform 1s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    .title-container h1 {
        transform: translateY(20px);
        font-size: 36px;
    }

    .title-container h3 {
        font-size: 24px;
        transform: translateX(-100px);
    }

    .title-container hr {
        transform: translateX(100px);
    }

    .titles {
        max-width: 1000px;
        margin: 0 auto;
    }

    .description {
        margin: 0 auto;
        max-width: 800px;
        text-align: center;
    }

    .underline {
        margin: 20px auto;
        max-width: 800px;
        width: 90%;
        height: 0;
        border: 1px solid #fff;
    }

    .subtitle {
        margin-bottom: 20px;
    }

    .body {
        font-size: 20px;
        line-height: 40px;
        transform: translateY(100px);
        animation: no-transform 0.5s 1.25s cubic-bezier(0, 0.5, 0, 1) forwards;
    }

    @media only screen and (min-width: 600px) {
        .title-container h1 {
            font-size: 42px;
        }

        .title-container h3 {
            font-size: 30px;
        }
    }

    @media only screen and (min-width: 1000px) {
        .title-container h1 {
            font-size: 48px;
        }

        .title-container h3 {
            font-size: 36px;
        }
    }
</style>
