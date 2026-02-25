import type { ScrapedProduct } from '$lib/server/scrapers';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { scraperNames, scrapers } from '$lib/server/scrapers';
import { error, json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

function saveProductsToDB(results: ScrapedProduct[]) {
	for (const p of results) {
		try {
			const existing = db
				.select()
				.from(products)
				.where(eq(products.url, p.url))
				.get();

			if (existing) {
				const prices = existing.prices as { price: string; date: string }[];
				const lastPrice = prices[prices.length - 1]?.price;
				if (lastPrice !== p.price) {
					prices.push({ price: p.price, date: new Date().toISOString() });
					db.update(products)
						.set({
							prices,
							img: existing.img || p.img || null,
							updatedAt: new Date().toISOString(),
						})
						.where(eq(products.id, existing.id))
						.run();
				}
			}
			else {
				db.insert(products)
					.values({
						title: p.title,
						url: p.url,
						img: p.img ?? null,
						source: p.source,
						prices: [{ price: p.price, date: new Date().toISOString() }],
					})
					.run();
			}
		}
		catch (err) {
			console.error(`Error saving product ${p.title}:`, err);
		}
	}
}

export const GET: RequestHandler = async ({ params }) => {
	const { store, search } = params;

	if (!scraperNames.includes(store)) {
		error(404, `Store '${store}' not found. Available: ${scraperNames.join(', ')}`);
	}

	try {
		const scraper = scrapers[store];
		const results = await scraper(search);

		// Save to DB in background (non-blocking)
		saveProductsToDB(results);

		return json(results);
	}
	catch (err) {
		console.error(`Scraper error for ${store}:`, err);
		return json([], { status: 500 });
	}
};
