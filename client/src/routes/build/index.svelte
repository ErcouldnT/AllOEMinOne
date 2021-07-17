<script>
  import { build } from '../../stores/build';
  import { fade } from 'svelte/transition';
  import OEM from '../../lib/Build/Product.svelte';

  let builds = $build;
  let total = 0;
  let name = "";
  let owner = "";
  let slug = "";
  
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

  let share_button = 'Paylaş';
  let link = '';

  const handleClick = async (e) => {
    e.preventDefault();
    const system = {
      name,
      slug,
      owner,
      build: builds
    };
    // console.log(sistem);
    const res = await fetch('/api/build', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(system)
    });
    const ok = await res.json();
    console.log(ok);
    if (ok.message) {
      share_button = 'Url değiştir.'
      slug = '';
    } else {
      share_button = 'Paylaşıldı';
      link = slug;
      name = "";
      owner = "";
      slug = '';
    }
  };
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
  <div in:fade class="flex flex-col justify-center items-center p-6 gap-3">
    <p class="text-center max-w-md text-xl">
      Toplam: <span class="font-bold">₺{total}</span>
    </p>

    <form class="gap-2 mt-5">
      <label class="block">
        <span class="text-gray-700">Sistem adı</span>
        <input bind:value={name} class="form-input mt-1 block w-full border-2" placeholder="Technopat Temmuz 2021">
      </label>
      <label class="block">
        <span class="text-gray-700">İsminiz</span>
        <input bind:value={owner} class="form-input mt-1 block w-full border-2" placeholder="Ercode">
      </label>
      <label class="block">
        <span class="text-gray-700">bul.erkuttekoglu.com/build/???</span>
        <input bind:value={slug} class="form-input mt-1 block w-full border-2" placeholder="sistem1">
      </label>
      <div class="flex justify-end">
        <button on:click={handleClick} class="mt-3 items-center bg-blue-500 hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded text-lg">{share_button}</button>
      </div>
    </form>

  </div>
{/if}

{#if share_button === 'Paylaşıldı'}
  <a href={`/build/${link}`} class="flex flex-col justify-center items-center">Sistem {link} linkiyle paylaşılabilir.</a>
  <a href={`/build/${link}`} class="flex flex-col justify-center items-center">{`https://bul.erkuttekoglu.com/build/${link}`}</a>
{/if}

