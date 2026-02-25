import type { ScrapedProduct } from './types';
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { selector } from './selector';

puppeteer.use(StealthPlugin());

export async function scrapeHepsiburada(search: string): Promise<ScrapedProduct[]> {
	const products: ScrapedProduct[] = [];
	try {
		const url = `https://www.hepsiburada.com/ara?q=${search}`;
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
		$('ul.product-list li.search-item, [data-test-id="product-card"]').each((_i, e) => {
			const $el = $(e);
			let $price = $el.find('div.price-value, [data-test-id="price-current-price"]').text().trim().split('\n')[0];
			if (!$price) {
				$price = $el.find('span.product-price').text().trim().split(' ')[0];
			}
			if ($price) {
				const title = ($el.find('h3.product-title, [data-test-id="product-card-name"]').attr('title')
					|| $el.find('h3.product-title, [data-test-id="product-card-name"]').text()).trim();
				if (selector(title, search)) {
					products.push({
						title,
						price: $price.split(',')[0].replace('.', '').replace(/\D/g, ''),
						url: `https://www.hepsiburada.com${$el.find('a').attr('href') ?? ''}`,
						source: 'hepsiburada',
					});
				}
			}
		});

		await browser.close();
	}
	catch (error) {
		console.error('Hepsiburada scraper error:', error);
	}
	return products.sort((a, b) => Number(a.price) - Number(b.price));
}
