<script lang='ts'>
	import { buildList } from '$lib/stores.svelte';
	import { Check, ExternalLink, Plus } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	const {
		product,
	}: {
		product: {
			title: string;
			price: string;
			url: string;
			img?: string;
			source: string;
		};
	} = $props();

	const isAdded = $derived(
		buildList.value.some(p => p.title === product.title),
	);

	function addToBuild() {
		if (!isAdded) {
			buildList.value = [
				...buildList.value,
				{
					title: product.title,
					price: product.price,
					url: product.url,
					img: product.img,
					source: product.source,
					amount: 1,
				},
			];
		}
	}
</script>

<div
	in:fade={{ duration: 200 }}
	class='card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
>
	<div class='card-body p-4 sm:p-5 gap-3'>
		<div class='flex items-start justify-between gap-2'>
			<div class='flex-1 min-w-0'>
				<span class='badge badge-sm badge-primary font-semibold'
				>{product.source}</span
				>
				<h2 class='card-title text-sm sm:text-base mt-1 line-clamp-2'>
					{product.title}
				</h2>
			</div>
			<div class='text-right shrink-0'>
				<p class='text-xl sm:text-2xl font-extrabold text-primary'>
					₺{product.price}
				</p>
			</div>
		</div>

		<div class='card-actions justify-end mt-auto gap-2'>
			<a
				href={product.url}
				target='_blank'
				rel='noopener noreferrer'
				class='btn btn-ghost btn-sm gap-1'
			>
				<ExternalLink class='size-4' />
				<span class='hidden sm:inline'>Siteye Git</span>
			</a>
			<button
				class='btn btn-sm gap-1'
				class:btn-primary={!isAdded}
				class:btn-success={isAdded}
				onclick={addToBuild}
				disabled={isAdded}
			>
				{#if isAdded}
					<Check class='size-4' />
					Eklendi
				{:else}
					<Plus class='size-4' />
					Ekle
				{/if}
			</button>
		</div>
	</div>
</div>
