<script lang='ts'>
	import { browser } from '$app/environment';
	import { Moon, Sun } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let isDark = $state(true);

	function toggleTheme() {
		isDark = !isDark;
		applyTheme();
	}

	function applyTheme() {
		if (browser) {
			const theme = isDark ? 'sunset' : 'emerald';
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
		}
	}

	onMount(() => {
		const saved = localStorage.getItem('theme');
		isDark = saved !== 'emerald';
		applyTheme();
	});
</script>

<button
	class='btn btn-ghost btn-circle'
	onclick={toggleTheme}
	aria-label='Tema değiştir'
>
	{#if isDark}
		<Sun class='size-5' />
	{:else}
		<Moon class='size-5' />
	{/if}
</button>
