import type { ScraperFn } from './types';
import { scrapeAmazon } from './amazon';
import { scrapeCiceksepeti } from './ciceksepeti';
import { scrapeHepsiburada } from './hepsiburada';
import { scrapeIncehesap } from './incehesap';
import { scrapeInventus } from './inventus';
import { scrapeItopya } from './itopya';
import { scrapeMediamarkt } from './mediamarkt';
import { scrapeN11 } from './n11';
import { scrapePttavm } from './pttavm';
import { scrapeQp } from './qp';
import { scrapeSinerji } from './sinerji';
import { scrapeTeknobiyotik } from './teknobiyotik';
import { scrapeTeknosa } from './teknosa';
import { scrapeTrendyol } from './trendyol';
import { scrapeVatanbilgisayar } from './vatanbilgisayar';

export type { ScrapedProduct, ScraperFn } from './types';

export const scrapers: Record<string, ScraperFn> = {
	sinerji: scrapeSinerji,
	inventus: scrapeInventus,
	itopya: scrapeItopya,
	mediamarkt: scrapeMediamarkt,
	teknobiyotik: scrapeTeknobiyotik,
	teknosa: scrapeTeknosa,
	vatanbilgisayar: scrapeVatanbilgisayar,
	qp: scrapeQp,
	n11: scrapeN11,
	incehesap: scrapeIncehesap,
	trendyol: scrapeTrendyol,
	pttavm: scrapePttavm,
	ciceksepeti: scrapeCiceksepeti,
	hepsiburada: scrapeHepsiburada,
	amazon: scrapeAmazon,
};

export const scraperNames = Object.keys(scrapers);
