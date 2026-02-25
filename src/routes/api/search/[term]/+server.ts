import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { searches } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { eq, sql } from 'drizzle-orm';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const term = params.term.trim().toLowerCase();

		const existing = db
			.select()
			.from(searches)
			.where(eq(searches.product, term))
			.get();

		if (existing) {
			db.update(searches)
				.set({
					count: sql`${searches.count} + 1`,
					updatedAt: new Date().toISOString(),
				})
				.where(eq(searches.id, existing.id))
				.run();
		}
		else {
			db.insert(searches).values({ product: term }).run();
		}

		return json({ success: true });
	}
	catch (error) {
		console.error('Search tracking error:', error);
		return json({ success: false }, { status: 500 });
	}
};
