<script lang='ts'>
	import type { PageData } from './$types';
	import { ArrowRight, Calendar, Eye } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>AllOEMinOne — Hazır Sistemler</title>
</svelte:head>

<div class='space-y-6 sm:space-y-8'>
	<div class='text-center pt-4 sm:pt-8'>
		<h1 class='text-3xl sm:text-4xl font-extrabold'>
			<span
				class='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
			>
				Hazır Sistemler
			</span>
		</h1>
		<p class='text-sm opacity-60 mt-2'>
			Topluluk tarafından oluşturulan bilgisayar sistemleri
		</p>
	</div>

	{#if data.systems.length === 0}
		<div
			class='flex flex-col items-center justify-center py-16 space-y-4'
			in:fade
		>
			<p class='text-center max-w-md opacity-60'>
				Henüz paylaşılmış bir sistem yok. <a
					href='/build'
					class='link link-primary'>Sistem Diz</a
				> sayfasından ilk sistemi oluştur!
			</p>
		</div>
	{:else}
		<div class='grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2'>
			{#each data.systems as system (system.id)}
				<a
					href='/{system.slug}'
					class='card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group'
					in:fade
				>
					<div class='card-body p-4 sm:p-5'>
						<h2
							class='card-title text-base sm:text-lg group-hover:text-primary transition-colors'
						>
							{system.name}
							<ArrowRight
								class='size-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto'
							/>
						</h2>
						<p class='text-sm opacity-60'>by {system.owner}</p>
						<div
							class='flex items-center gap-4 mt-2 text-xs opacity-50'
						>
							<span class='flex items-center gap-1'>
								<Eye class='size-3' />
								{system.views}
							</span>
							<span class='flex items-center gap-1'>
								<Calendar class='size-3' />
								{new Date(system.createdAt).toLocaleDateString(
									'tr-TR',
								)}
							</span>
							<span class='badge badge-sm badge-ghost'
							>{system.build.length} parça</span
							>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
