import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeMediamarkt(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.mediamarkt.com.tr/tr/search.html?query=${search}&sort=price`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.product-wrapper, .product-item').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.product-title, h2').text().trim();
			const $price = $el.find('.price, .product-price').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: `https://www.mediamarkt.com.tr${$el.find('a').attr('href') ?? ''}`,
					source: 'mediamarkt',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('Mediamarkt scraper error:', error);
		return [];
	}
}
