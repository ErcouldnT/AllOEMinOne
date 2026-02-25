<script lang='ts'>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import {
		filter,
		results,
		searchTerm,
		storeDisplayNames,
	} from '$lib/stores.svelte';
	import { Loader2, Search, X } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	let isSearching = $state(false);
	let loadingText = $state('');
	let currentStore = $state('');

	const storeKeys = Object.keys(storeDisplayNames);

	async function startSearch() {
		const term = searchTerm.value.trim();
		if (!term)
			return;

		isSearching = true;
		results.value = [];

		// Track search
		fetch(`/api/search/${encodeURIComponent(term)}`).catch(() => {});

		for (const store of storeKeys) {
			if (!isSearching)
				break;
			if (!filter.value[store])
				continue;

			currentStore = storeDisplayNames[store];
			loadingText = `${currentStore} aranıyor...`;

			try {
				const res = await fetch(
					`/api/${store}/${encodeURIComponent(term)}`,
				);
				if (res.ok) {
					const data = await res.json();
					if (isSearching) {
						results.value = [...results.value, ...data].sort(
							(a, b) => Number(a.price) - Number(b.price),
						);
					}
				}
			}
			catch (err) {
				console.error(`${store} error:`, err);
			}
		}

		if (isSearching) {
			loadingText
				= results.value.length > 0
					? `${results.value.length} sonuç bulundu`
					: 'Sonuç bulunamadı.';
		}

		isSearching = false;
		currentStore = '';
	}

	function stopSearch() {
		isSearching = false;
		loadingText
			= results.value.length > 0
				? `${results.value.length} sonuç (arama durduruldu)`
				: 'Arama durduruldu.';
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (isSearching)
				stopSearch();
			else startSearch();
		}
	}
</script>

<svelte:head>
	<title>AllOEMinOne — En Ucuz OEM</title>
</svelte:head>

<div class='space-y-6 sm:space-y-8'>
	<!-- Hero -->
	<div class='text-center space-y-3 pt-4 sm:pt-8'>
		<h1 class='text-3xl sm:text-5xl font-extrabold'>
			<span
				class='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
			>
				Ne vereyim abime?
			</span>
		</h1>
		<p class='text-sm sm:text-base opacity-60 italic'>
			Kısaca "ryzen 5600" şeklinde arama yapabilirsin.
		</p>
	</div>

	<!-- Search Bar -->
	<div class='flex justify-center px-2'>
		<div class='join w-full max-w-lg'>
			<input
				bind:value={searchTerm.value}
				onkeydown={handleKeydown}
				class='input input-bordered join-item flex-1 text-base sm:text-lg'
				type='text'
				placeholder='Ürün ara...'
			/>
			{#if isSearching}
				<button class='btn btn-error join-item' onclick={stopSearch}>
					<X class='size-5' />
					<span class='hidden sm:inline'>Durdur</span>
				</button>
			{:else}
				<button
					class='btn btn-primary join-item'
					onclick={startSearch}
					disabled={!searchTerm.value.trim()}
				>
					<Search class='size-5' />
					<span class='hidden sm:inline'>Ara</span>
				</button>
			{/if}
		</div>
	</div>

	<!-- Store Filters -->
	<div class='flex justify-center px-2'>
		<div
			class='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3'
		>
			{#each storeKeys as store}
				<label class='label cursor-pointer gap-2 justify-start'>
					<input
						type='checkbox'
						class='checkbox checkbox-primary checkbox-sm'
						bind:checked={filter.value[store]}
					/>
					<span class='label-text text-sm'
					>{storeDisplayNames[store]}</span
					>
				</label>
			{/each}
		</div>
	</div>

	<!-- Loading State -->
	{#if loadingText}
		<div in:fade class='text-center'>
			<div class='inline-flex items-center gap-2'>
				{#if isSearching}
					<Loader2 class='size-5 animate-spin text-primary' />
				{/if}
				<p class='font-semibold text-base sm:text-lg'>{loadingText}</p>
			</div>
		</div>
	{/if}

	<!-- Results Grid -->
	{#if results.value.length > 0}
		<div class='grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2'>
			{#each results.value as product (product.url + product.source)}
				<ProductCard {product} />
			{/each}
		</div>
	{/if}
</div>
