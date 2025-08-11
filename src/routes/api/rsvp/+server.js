// RSVP endpoint disabled: Airtable integration removed
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const { email } = await request.json();
		if (!email) {
			return json({ error: 'Email is required' }, { status: 400 });
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email format' }, { status: 400 });
		}
		// No database save, just return success
		return json({ success: true, info: 'RSVP saving disabled' }, { status: 200 });
	} catch (error) {
		return json({ error: 'Unknown error' }, { status: 500 });
	}
}
