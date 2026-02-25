export interface ScrapedProduct {
	title: string;
	price: string;
	url: string;
	img?: string;
	source: string;
}

export type ScraperFn = (search: string) => Promise<ScrapedProduct[]>;
