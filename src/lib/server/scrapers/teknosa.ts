import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeTeknosa(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.teknosa.com/arama/?s=${search}&srt=PRICE_ASC`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.product-item, .prd-item').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.product-title, .prd-name').text().trim();
			const $price = $el.find('.product-price, .prd-price').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: `https://www.teknosa.com${$el.find('a').attr('href') ?? ''}`,
					source: 'teknosa',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('Teknosa scraper error:', error);
		return [];
	}
}
