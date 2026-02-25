<script lang='ts'>
	import type { BuildProduct } from '$lib/server/db/schema';
	import { buildList } from '$lib/stores.svelte';
	import { ExternalLink, Plus, Trash2 } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	const { product }: { product: BuildProduct } = $props();

	function removeFromBuild() {
		buildList.value = buildList.value.filter(
			p => p.title !== product.title || p.url !== product.url,
		);
	}

	function incrementAmount() {
		buildList.value = buildList.value.map(p =>
			p.title === product.title && p.url === product.url
				? { ...p, amount: p.amount + 1 }
				: p,
		);
	}
</script>

<div in:fade={{ duration: 200 }} class='card bg-base-200 shadow-md'>
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
				{#if product.amount > 1}
					<p class='text-xs opacity-60'>
						x{product.amount} = ₺{Number(product.price)
							* product.amount}
					</p>
				{/if}
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
			</a>
			<button
				class='btn btn-sm btn-outline gap-1'
				onclick={incrementAmount}
			>
				<Plus class='size-4' />
				Adet: {product.amount}
			</button>
			<button
				class='btn btn-sm btn-error btn-outline gap-1'
				onclick={removeFromBuild}
			>
				<Trash2 class='size-4' />
			</button>
		</div>
	</div>
</div>
