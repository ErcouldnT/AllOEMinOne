import type { BuildProduct } from '$lib/server/db/schema';
import type { ScrapedProduct } from '$lib/server/scrapers/types';
import { browser } from '$app/environment';

// ─── Persisted state helper ────────────────────────────────
function persisted<T>(key: string, initial: T): { value: T } {
    let stored = initial;
    if (browser) {
        try {
            const raw = localStorage.getItem(key);
            if (raw !== null) {
                stored = JSON.parse(raw);
            }
        }
        catch {
            // ignore parse errors
        }
    }

    const state = $state({ value: stored });

    if (browser) {
        $effect.root(() => {
            $effect(() => {
                localStorage.setItem(key, JSON.stringify(state.value));
            });
        });
    }

    return state;
}

// ─── Stores ────────────────────────────────────────────────
export const searchTerm = persisted<string>('search', '');
export const results = persisted<ScrapedProduct[]>('result', []);
export const buildList = persisted<BuildProduct[]>('build', []);

export interface StoreFilter {
    [key: string]: boolean;
}

export const filter = persisted<StoreFilter>('filter', {
    sinerji: true,
    inventus: true,
    mediamarkt: true,
    qp: true,
    teknobiyotik: true,
    teknosa: true,
    hepsiburada: false,
    vatanbilgisayar: false,
    amazon: true,
    itopya: false,
    n11: true,
    incehesap: true,
    trendyol: true,
    pttavm: true,
    ciceksepeti: true,
});

// ─── Store display names for UI ────────────────────────────
export const storeDisplayNames: Record<string, string> = {
    sinerji: 'Sinerji',
    inventus: 'Inventus',
    mediamarkt: 'Mediamarkt',
    qp: 'QP',
    teknobiyotik: 'Teknobiyotik',
    teknosa: 'Teknosa',
    hepsiburada: 'Hepsiburada',
    vatanbilgisayar: 'Vatanbilgisayar',
    amazon: 'Amazon',
    itopya: 'İtopya',
    n11: 'n11',
    incehesap: 'İncehesap',
    trendyol: 'Trendyol',
    pttavm: 'pttAVM',
    ciceksepeti: 'Çiçeksepeti',
};
