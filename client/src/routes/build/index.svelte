<script>
  import { build } from '../../stores/build';
  import { fade } from 'svelte/transition';
  import OEM from '../../lib/OEM.svelte';

  let builds = $build;
  let total = 0;
  
  $: {
    total = 0;
    for (let i = 0; i < $build.length; i++) {
      const e = $build[i];
      total += Number(e.price);
    };
  }

  $: {
    $build = builds;
  }

</script>

<svelte:head>
  <title>AllOEMinOne Sistem</title>
</svelte:head>
<h1 class="text-4xl text-center my-8">Sistemin:</h1>

<div class="grid gap-4 grid-cols-1">
  {#each $build as product}
    <OEM product={product}/>
  {/each}
</div>

{#if $build.length === 0}
  <div class="flex justify-center items-center">
    <p class="text-center max-w-md">
      Ürün bul'dan OEM ekleyerek başlayabilirsin.
    </p>
  </div>
{:else}
  <div in:fade class="flex justify-center items-center p-6">
    <p class="text-center max-w-md font-bold text-xl">
      Toplam fiyat: {total} TL
    </p>
  </div>
{/if}
