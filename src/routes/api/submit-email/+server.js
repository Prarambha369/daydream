
import { json } from '@sveltejs/kit';

export async function POST({ request, getClientAddress }) {
	try {
		const { email } = await request.json();
		
		if (!email) {
			return json({ error: 'Email is required' }, { status: 400 });
		}
		
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email format' }, { status: 400 });
		}
		
		// get IP address
		const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || getClientAddress();
		// No-op: Email saving disabled
		return new Response(null, { status: 200 });
	} catch (error) {
		return new Response(null, { status: 418 });
	}
}
