
export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	// Geocoding and API key usage removed
	return {
		location: null,
		geocoded: null
	};
}
