import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeVatanbilgisayar(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.vatanbilgisayar.com/arama/${search}/?srt=UP`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.product-list-item, .product-item').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.product-title, .product-name').text().trim();
			const $price = $el.find('.product-price, .price').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: `https://www.vatanbilgisayar.com${$el.find('a').attr('href') ?? ''}`,
					source: 'vatanbilgisayar',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('Vatanbilgisayar scraper error:', error);
		return [];
	}
}
