import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeTrendyol(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.trendyol.com/sr?q=${search}&siralama=PRICE_BY_ASC`;
		const { data } = await axios.get(url, {
			headers: {
				'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
			},
		});
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.p-card-wrppr, .product-item').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.prdct-desc-cntnr-name, .product-title').text().trim();
			const $price = $el.find('.prc-box-dscntd, .prc-box-sllng').text().trim();

			if ($price && selector(title, search)) {
				const href = $el.find('a').attr('href') ?? '';
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: href.startsWith('http') ? href : `https://www.trendyol.com${href}`,
					source: 'trendyol',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('Trendyol scraper error:', error);
		return [];
	}
}
