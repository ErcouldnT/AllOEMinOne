import type { ScrapedProduct } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { selector } from './selector';

export async function scrapeQp(search: string): Promise<ScrapedProduct[]> {
	try {
		const url = `https://www.qp.com.tr/?s=${search}&post_type=product&orderby=price&order=ASC`;
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const products: ScrapedProduct[] = [];

		$('.product, .product-item').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('.woocommerce-loop-product__title, .product-title').text().trim();
			const $price = $el.find('.price .amount, .product-price').text().trim();

			if ($price && selector(title, search)) {
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: $el.find('a').attr('href') ?? '',
					source: 'qp',
				});
			}
		});

		return products.sort((a, b) => Number(a.price) - Number(b.price));
	}
	catch (error) {
		console.error('QP scraper error:', error);
		return [];
	}
}
