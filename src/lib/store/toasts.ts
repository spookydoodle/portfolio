import { writable } from 'svelte/store';

export interface Toast {
    id: string;
    header?: string;
    message: string;
}

const timeouts: Map<string, number> = new Map();

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: Toast) => {
    toasts.update((prev): Toast[] => prev.filter((t) => t.id !== toast.id).concat([toast]));

    clearTimeout(timeouts.get(toast.id));
    timeouts.set(
        toast.id,
        setTimeout(() => removeToast(toast.id), 8000)
    );
};

export const removeToast = (id: string) => {
    clearTimeout(timeouts.get(id));
    timeouts.delete(id);
    toasts.update((prev): Toast[] => prev.filter((t) => t.id !== id));
};
