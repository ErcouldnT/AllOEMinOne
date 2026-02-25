<script lang='ts'>
	import { page } from '$app/state';
	import { Cpu, List, Search } from '@lucide/svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	const navItems = [
		{ href: '/', label: 'Ürün Bul', icon: Search },
		{ href: '/build', label: 'Sistem Diz', icon: Cpu },
		{ href: '/latest', label: 'Hazır Kasa', icon: List },
	];
</script>

<div
	class='navbar bg-base-200/50 backdrop-blur-md rounded-box shadow-lg sticky top-4 z-50 mx-auto max-w-5xl'
>
	<div class='navbar-start'>
		<a href='/' class='btn btn-ghost text-xl font-extrabold tracking-tight'>
			<span
				class='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
			>
				AllOEMinOne
			</span>
		</a>
	</div>

	<!-- Desktop Nav -->
	<div class='navbar-center hidden md:flex'>
		<ul class='menu menu-horizontal gap-1'>
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class='font-medium transition-all duration-200'
						class:active={page.url.pathname === item.href}
					>
						<item.icon class='size-4' />
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class='navbar-end gap-2'>
		<ThemeToggle />

		<!-- Mobile dropdown -->
		<div class='dropdown dropdown-end md:hidden'>
			<div tabindex='0' role='button' class='btn btn-ghost btn-circle'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					class='h-5 w-5'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M4 6h16M4 12h8m-8 6h16'
					/>
				</svg>
			</div>
			<ul
				tabindex='0'
				class='menu menu-sm dropdown-content bg-base-200 rounded-box z-50 mt-3 w-52 p-2 shadow-xl'
			>
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class='font-medium'
							class:active={page.url.pathname === item.href}
						>
							<item.icon class='size-4' />
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
