import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapePttavm(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.pttavm.com/arama?q=${search}&sort=price_asc`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.product-item, .p-item').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.product-title, .p-name').text().trim();
			const $price = $el.find('.product-price, .p-price').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: `https://www.pttavm.com${$el.find('a').attr('href') ?? ''}`,
					source: 'pttavm',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('PttAVM scraper error:', error);
		return [];
	}
}
