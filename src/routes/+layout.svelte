<script lang='ts'>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';

	const { children } = $props();
</script>

<div class='min-h-screen flex flex-col'>
	<header class='p-4'>
		<Nav />
	</header>

	<main class='flex-1 w-full max-w-5xl mx-auto px-4 pb-8'>
		{@render children()}
	</main>

	<footer
		class='footer sm:footer-horizontal footer-center bg-base-200/50 text-base-content p-6'
	>
		<aside>
			<p class='text-sm opacity-60'>
				© {new Date().getFullYear()}
				<a
					href='https://github.com/ErcouldnT'
					target='_blank'
					rel='noopener noreferrer'
					class='link link-hover'>Ercode</a
				>
				— AllOEMinOne
			</p>
		</aside>
	</footer>
</div>
