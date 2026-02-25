import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { builds } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { desc } from 'drizzle-orm';

export const GET: RequestHandler = async () => {
	try {
		const systems = db
			.select({
				id: builds.id,
				name: builds.name,
				slug: builds.slug,
				owner: builds.owner,
				views: builds.views,
				build: builds.build,
				createdAt: builds.createdAt,
			})
			.from(builds)
			.orderBy(desc(builds.createdAt))
			.all();

		return json(systems);
	}
	catch (error) {
		console.error('Latest systems error:', error);
		return json([], { status: 500 });
	}
};
