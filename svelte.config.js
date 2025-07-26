import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
        alias: {
			'$components': 'src/lib/components',
			'$hoooks': 'src/lib/hooks',
			'$utils': 'src/lib/utils',
        }
	}
};

export default config;
