import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const url = decodeURIComponent(params.url);
		const product = db
			.select()
			.from(products)
			.where(eq(products.url, url))
			.get();

		if (product) {
			return json(product);
		}

		return json({ message: 'Product not found.' }, { status: 404 });
	}
	catch (error) {
		console.error('Product lookup error:', error);
		return json({ message: 'Internal server error' }, { status: 500 });
	}
};
