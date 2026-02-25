import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { builds } from '$lib/server/db/schema';
import { eq, sql } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug.toLowerCase();

	const build = db
		.select()
		.from(builds)
		.where(eq(builds.slug, slug))
		.get();

	if (build) {
		// Increment views
		db.update(builds)
			.set({ views: sql`${builds.views} + 1` })
			.where(eq(builds.id, build.id))
			.run();

		const { pw: _, ...safeBuild } = build;
		return { build: safeBuild, found: true };
	}

	return {
		build: {
			name: 'Sistem bulunamadı',
			slug,
			owner: '',
			build: [],
			views: 0,
			createdAt: '',
		},
		found: false,
	};
};
