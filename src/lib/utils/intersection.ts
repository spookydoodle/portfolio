/**
 * Creates and intersection observer which triggers given callback when given element first intersects with viewport.
 * Unobserves after the first intersection observation.
 * @returns cleanup function which allows to cancel the observation.
 */
export const observeEnteredViewport = (element: HTMLElement, callback: () => void) => {
    const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) {
                callback();
                observer.unobserve(element);
            }
        },
    );

    observer.observe(element);

    return {
        cleanup: () => {
            observer.unobserve(element);
        }
    };
};
