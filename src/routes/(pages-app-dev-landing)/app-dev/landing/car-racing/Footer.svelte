<script lang="ts">
    import SuspenseImg from "$components/SuspenseImg.svelte";

    let { footer, footerMin }: { footer: string; footerMin: string } = $props();
</script>

<div class="footer">
    <div class="footer-img">
        <SuspenseImg src={footer} fallbackSrc={footerMin} alt="image" />
    </div>
    <div class="footer-form">
        <h1>Ready, steady, Go!</h1>
        <h5>Sign up to receive our newsletter</h5>
        <div>
            <form class="form" noValidate autoComplete="off">
                <input id="field-name" name="name" placeholder="Name" />
                <input id="field-email" name="email" placeholder="E-mail" />
                <input type="submit" value="Sign up" />
            </form>
        </div>
    </div>
    <div class="footer-content">
        <div>
            <p>About</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
        <div>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Testimonials</p>
        </div>
        <div>
            <p>About</p>
            <p>Careers</p>
            <p>Contact</p>
        </div>
    </div>
</div>

<style>
    .footer {
        position: relative;
    }

    .footer::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        border-top: 40px solid black;
        border-left: 50vw solid transparent;
        border-right: 50vw solid transparent;
    }

    :global(.footer .footer-img img) {
        width: 100vw;
        height: 640px;
        position: relative;
        opacity: .6;
    }

    .footer-form {
        position: absolute;
        height: 600px;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: rgba(255, 255, 255, 0.87);
    }

    .form {
        display: flex;
        flex-wrap: wrap;
        row-gap: 4px;
        justify-content: center;
    }

    :global(.form > *) {
        margin: 8px auto;
        display: block;
        width: 200px;
        display: inline-block;
    }

    .form input {
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.87);
        color: rgba(255, 255, 255, 0.87);
        height: 24px;
        box-sizing: border-box;
        padding: 0 10px;
        margin: 0;
    }

    .form input::placeholder {
        color: rgba(255, 255, 255, 0.87);
    }

    .footer-content {
        display: flex;
        flex-wrap: wrap;
        flex: 1 1 0;
        justify-content: space-evenly;
        align-items: center;
        column-gap: 10px;
        background-color: black;
        min-height: 320px;
        padding: 32px;
        box-sizing: border-box;
        color: rgba(255, 255, 255, 0.87);
    }

    .footer-content > div {
        min-width: 200px;
        text-align: center;
    }

    @media only screen and (min-width: 1000px) {
        :global(.form > *) {
            display: inline-block;
        }
    }
</style>
