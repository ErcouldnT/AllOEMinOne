import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeInventus(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.inventus.com.tr/arama?q=${search}&sort=price-asc`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.product-item').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.product-title').text().trim();
			const $price = $el.find('.product-price').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0],
					url: `https://www.inventus.com.tr${$el.find('a').attr('href')}`,
					source: 'inventus',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('Inventus scraper error:', error);
		return [];
	}
}
