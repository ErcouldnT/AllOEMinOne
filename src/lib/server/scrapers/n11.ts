import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeN11(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.n11.com/arama?q=${search}&srt=PRICE_LOW`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.columnContent .pro').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.proName a').text().trim();
			const $price = $el.find('.proPrice .newPrice ins').text().trim()
				|| $el.find('.proPrice .newPrice').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: $el.find('.proName a').attr('href') ?? '',
					source: 'n11',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('N11 scraper error:', error);
		return [];
	}
}
