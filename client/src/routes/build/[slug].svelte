<script context="module">
  export const load = async ({ page, fetch }) => {
    const slug = page.params.slug;
    const url = `/api/build/${slug}`;
    const res = await fetch(url);

    if (res.ok) {
      const build = await res.json();
			return {
				props: { build, slug }
			};
		}

    const { message } = await res.json();
		return {
			error: new Error(message)
		};
  };
</script>

<script>
  export let build;
  export let slug;

  import { fade } from 'svelte/transition';
  import Else from '../../lib/Build/Else.svelte';

  let builds = build.build;
  let total = 0;
  
  $: {
    total = 0;
    for (let i = 0; i < builds.length; i++) {
      const e = builds[i];
      total += Number(e.price);
    };
  }
</script>

<svelte:head>
  <title>AllOEMinOne {build.owner} Sistem</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">{build.name}</h1>

<div class="grid gap-4 grid-cols-1">
  {#each builds as product}
    <Else product={product}/>
  {/each}
</div>

{#if builds.length === 0}
  <div class="flex justify-center items-center">
    <p class="text-center max-w-md">
      <span class="font-bold text-xl">{slug}</span> isimli kayıt bulunamadı.
    </p>
  </div>
{:else}
  <div in:fade class="flex justify-center items-center p-6">
    <p class="text-center max-w-md text-xl">
      Toplam: <span class="font-bold">₺{total}</span>
    </p>
  </div>
{/if}
