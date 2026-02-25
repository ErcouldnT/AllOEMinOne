import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { builds } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export const load: PageServerLoad = async () => {
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

	return { systems };
};
