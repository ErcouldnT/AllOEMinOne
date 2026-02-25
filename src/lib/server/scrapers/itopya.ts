import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeItopya(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.itopya.com/arama/?s=${search}`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.product-item, .productItem').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.product-title, .productTitle').text().trim();
			const $price = $el.find('.product-price, .productPrice').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: `https://www.itopya.com${$el.find('a').attr('href') ?? ''}`,
					source: 'itopya',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('Itopya scraper error:', error);
		return [];
	}
}
