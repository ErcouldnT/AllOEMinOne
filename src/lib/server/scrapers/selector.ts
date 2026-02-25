/**
 * Checks if a product title matches all words in the search term.
 */
export function selector(title: string, search: string): boolean {
	const normalizedTitle = title.toLowerCase();
	const words = search.toLowerCase().trim().split(/\s+/);

	return words.every(word => normalizedTitle.includes(word));
}
