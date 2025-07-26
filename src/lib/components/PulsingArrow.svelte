<script lang="ts">
    let {
        animation,
        animationDelay = "0s",
        animationDuration = "1.8s",
        color = "var(--color-primary)",
    }: {
        animation:
            | "pulse-opacity"
            | "pulse-partial-opacity"
            | "pulse-opacity-scale";
        animationDelay?: string;
        animationDuration?: string;
        color?: string;
    } = $props();
</script>

<span
    class={["icon", "arrow-down"]}
    style:animation={`${animation} ${animationDuration} linear ${animationDelay} infinite`}
    style:background={color}
></span>

<style>
    .arrow-down {
        width: 32px;
        height: 32px;
        --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z'/%3E%3C/svg%3E");
    }
</style>
