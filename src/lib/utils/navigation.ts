import { goto } from "$app/navigation";

/**
 * Smoothly scrolls to the `href` element and updates URL.
 * @param event 
 */
export function handleAnchorClick(
    event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement },
) {
    event.preventDefault();
    scrollToAnchor(event.currentTarget.href);
}

/**
 * Smoothly scrolls to the `href` element.
 * @param event 
 */
export function scrollToAnchor(
   href: string,
) {
    const updateUrl = () => {
        console.log("update url", href)
        goto(new URL(href).toString());
        document.removeEventListener("scrollend", updateUrl);
    };
    document.addEventListener("scrollend", updateUrl);

    const anchorId = new URL(href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    console.log({anchorId, top: anchor?.offsetTop})
    window.scrollTo({
        top: anchor?.offsetTop,
        behavior: "smooth",
    });
}