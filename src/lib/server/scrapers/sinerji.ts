import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeSinerji(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.sinerji.gen.tr/${search}-s?sx=PriceAsc`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('section.row.productList div').each((_i, e) => {
			const $el = $(e);
			const $price = $el.find('article div div span.price').text().trim();
			if ($price) {
				const title = $el.find('article div.title a').text().trim();
				if (selector(title, search)) {
					products.push({
						title,
						price: $price.split('\n')[1]?.replace('.', '') ?? '0',
						url: `https://www.sinerji.gen.tr${$el.find('article div.title a').attr('href')}`,
						source: 'sinerji',
					});
				}
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('Sinerji scraper error:', error);
		return [];
	}
}
