import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeTeknobiyotik(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.teknobiyotik.com/arama?q=${search}&sort=fiyat-artan`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.product-item, .urun-item').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.product-title, .urun-title').text().trim();
			const $price = $el.find('.product-price, .urun-fiyat').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: `https://www.teknobiyotik.com${$el.find('a').attr('href') ?? ''}`,
					source: 'teknobiyotik',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('Teknobiyotik scraper error:', error);
		return [];
	}
}
