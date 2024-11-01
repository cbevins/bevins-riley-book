import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$book: "src/lib/book",
			$bevins: "src/lib/content/bevins-lineage",
			$collins: "src/lib/content/collins-lineage",
			$heddens: "src/lib/content/heddens-lineage",
			$sylvan: "src/lib/sylvan"
		}
	}
};

export default config;
