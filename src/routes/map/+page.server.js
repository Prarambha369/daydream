

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// API keys and external integrations removed
	return {
		locations: []
	};
}
