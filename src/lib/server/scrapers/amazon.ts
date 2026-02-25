import type { ScrapedProduct } from './types';
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { selector } from './selector';

puppeteer.use(StealthPlugin());

export async function scrapeAmazon(search: string): Promise<ScrapedProduct[]> {
	const products: ScrapedProduct[] = [];
	try {
		const url = `https://www.amazon.com.tr/s?k=${search}&s=price-asc-rank`;
		const browser = await puppeteer.launch({
			args: ['--no-sandbox', '--lang=tr-TR,tr'],
			headless: true,
		});
		const page = await browser.newPage();
		await page.setExtraHTTPHeaders({
			'Accept-Language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
		});
		await page.setUserAgent(
			'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		);
		await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
		const content = await page.content();

		const $ = cheerio.load(content);
		$('.s-result-item[data-asin]').each((_i, e) => {
			const $el = $(e);
			const title = $el.find('h2 span, .a-text-normal').text().trim();
			const $price = $el.find('.a-price .a-offscreen').first().text().trim()
				|| $el.find('.a-price-whole').text().trim();

			if ($price && title && selector(title, search)) {
				const asin = $el.attr('data-asin');
				products.push({
					title,
					price: $price.replace('.', '').split(',')[0].replace(/\D/g, ''),
					url: asin ? `https://www.amazon.com.tr/dp/${asin}` : '',
					source: 'amazon',
				});
			}
		});

		await browser.close();
	}
	catch (error) {
		console.error('Amazon scraper error:', error);
	}
	return products.sort((a, b) => Number(a.price) - Number(b.price));
}
