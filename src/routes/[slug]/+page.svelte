<script lang='ts'>
	import type { PageData } from './$types';
	import BuildView from '$lib/components/BuildView.svelte';
	import { AlertCircle } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	const { data }: { data: PageData } = $props();

	const total = $derived(
		data.build.build.reduce(
			(sum: number, p: any) => sum + Number(p.price) * (p.amount || 1),
			0,
		),
	);
</script>

<svelte:head>
	<title>AllOEMinOne — {data.build.name}</title>
</svelte:head>

<div class='space-y-6 sm:space-y-8'>
	<div class='text-center pt-4 sm:pt-8'>
		<h1 class='text-3xl sm:text-4xl font-extrabold'>
			<span
				class='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
			>
				{data.build.name}
			</span>
		</h1>
		{#if data.found && data.build.owner}
			<p class='text-sm opacity-60 mt-2'>by {data.build.owner}</p>
		{/if}
	</div>

	{#if !data.found}
		<div
			class='flex flex-col items-center justify-center py-16 space-y-4'
			in:fade
		>
			<AlertCircle class='size-16 text-error opacity-50' />
			<p class='text-center max-w-md opacity-60'>
				<span class='font-bold'>{data.build.slug}</span> isimli kayıt bulunamadı.
			</p>
			<a href='/' class='btn btn-primary'>Ana Sayfaya Dön</a>
		</div>
	{:else if data.build.build.length === 0}
		<div class='flex flex-col items-center justify-center py-16' in:fade>
			<p class='opacity-60'>Bu sistemde henüz parça yok.</p>
		</div>
	{:else}
		<div class='grid gap-3 sm:gap-4 grid-cols-1'>
			{#each data.build.build as product (product.url + product.source)}
				<BuildView {product} />
			{/each}
		</div>

		<div in:fade class='flex justify-center'>
			<div class='stats shadow bg-base-200'>
				<div class='stat'>
					<div class='stat-title'>Toplam</div>
					<div class='stat-value text-primary'>
						₺{total.toLocaleString('tr-TR')}
					</div>
					<div class='stat-desc'>{data.build.build.length} parça</div>
				</div>
			</div>
		</div>
	{/if}
</div>
