import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        open: true,
        port: 8080,
        fs: {
            allow: ['.']
        }
    },
    preview: {
        open: true,
        port: 8080,
    },
});
