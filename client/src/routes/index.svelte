<script>
  import { fade } from 'svelte/transition';
  import { result } from '../stores/result';
  import { filter } from '../stores/filter';
  import { search } from '../stores/search';
  import Product from '../lib/Finder/Product.svelte';

  let results = $result;
  let searchTerm = '';
  // let searchInput = '';
  let isSearching = false;
  let loadingText = '';
  // let loadingText = results.length > 0 ? `${results.length} adet ${searchTerm.trim()} var abi buyur:` : '';
  let maxPrice = '';
  let lowestPrice = '';
  let time = 0;
  
  // let amCheck = true;
  // let itCheck = true;
  // let sinCheck = true;
  // let tbCheck = true;
  // let inCheck = true;
  // let mmCheck = true;
  // let tekCheck = true;
  // let qpCheck = true;
  // let vbCheck = false;
  // let hbCheck = false;

  $: {
    $result = results.sort((a, b) => a.price - b.price);
    // console.log($result);
  }

  const n11 = async (search) => {
    const url = `/api/n11/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const qp = async (search) => {
    const url = `/api/qp/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const amazon = async (search) => {
    const url = `/api/amazon/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const hepsiburada = async (search) => {
    const url = `/api/hepsiburada/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const itopya = async (search) => {
    const url = `/api/itopya/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const inventus = async (search) => {
    const url = `/api/inventus/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const mediamarkt = async (search) => {
    const url = `/api/mediamarkt/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const sinerji = async (search) => {
    const url = `/api/sinerji/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const teknobiyotik = async (search) => {
    const url = `/api/teknobiyotik/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const teknosa = async (search) => {
    const url = `/api/teknosa/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const vatanbilgisayar = async (search) => {
    const url = `/api/vatanbilgisayar/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    if (isSearching) {
      results = results.concat(data);
    }
  };

  const searchCheck = async (search) => {
    const url = `/api/search/${search}`;
    await fetch(url);
  };

  const stopSearch = (e) => {
    e.preventDefault();
    isSearching = false;
  };

	const startSearch = async (e) => {
    e.preventDefault();
    // if (isSearching) {
    //   alert("Lütfen önceki aramanın tamamlanmasını bekleyin.");
    //   return
    // }
    isSearching = true;
    searchTerm = $search;
    if (searchTerm) {
      results = [];
      await searchCheck(searchTerm);
      // loadingText = 'Hemen ustaya sorup geliyorum abi biraz bekleticem...'
      if ($filter.sinCheck && isSearching) {
        loadingText = "Sinerji'yi arıyorum...";
        await sinerji(searchTerm);
      }
      if ($filter.inCheck && isSearching) {
        loadingText = "Inventus'u arıyorum...";
        await inventus(searchTerm);
      }
      if ($filter.mmCheck && isSearching) {
        loadingText = "Mediamarkt'ı arıyorum...";
        await mediamarkt(searchTerm);
      }
      if ($filter.qpCheck && isSearching) {
        loadingText = "Qp'yi arıyorum...";
        await qp(searchTerm);
      }
      if ($filter.tbCheck && isSearching) {
        loadingText = "Teknobiyotik'i arıyorum...";
        await teknobiyotik(searchTerm);
      }
      if ($filter.tekCheck && isSearching) {
        loadingText = "Teknosa'yı arıyorum...";
        await teknosa(searchTerm);
      }
      if ($filter.hbCheck && isSearching) {
        loadingText = "Hepsiburada'yı arıyorum...";
        await hepsiburada(searchTerm);
      }
      if ($filter.vbCheck && isSearching) {
        loadingText = "Vatanbilgisayar'ı arıyorum...";
        await vatanbilgisayar(searchTerm);
      }
      if ($filter.amCheck && isSearching) {
        loadingText = "Amazon'u arıyorum...";
        await amazon(searchTerm);
      }
      if ($filter.itCheck && isSearching) {
        loadingText = "İtopya'yı arıyorum...";
        await itopya(searchTerm);
      }
      if ($filter.n11Check && isSearching) {
        loadingText = "n11'i arıyorum...";
        await n11(searchTerm);
      }
      loadingText = results.length > 0 ? `${results.length} adet ${searchTerm.trim()} var abi buyur:` : 'Abime onu vermiyim.';
      isSearching = false;
    };
	};
</script>

<svelte:head>
  <title>AllOEMinOne</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Ne vereyim abime?</h1>
<p class="text-center m-3 italic">Kısaca "ryzen 5600" şeklinde arama yapabilirsin.</p>

<form class="flex flex-row justify-center p-4">
  <input bind:value={$search}
  class="w-auto rounded-md text-lg p-4 border-2 border-gray-200" 
  type="text" placeholder="Ürün ara">
  
  <button on:click={isSearching ? stopSearch : startSearch} disabled={!$search}
    class="items-center text-white font-bold py-2 px-4 rounded transition-all
    {isSearching ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"}">
    {#if isSearching}
      <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    {:else}
      Go!
    {/if}
  </button>
</form>

<div class="flex justify-center items-center p-3">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.amCheck}>
      Amazon
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.hbCheck}>
      Hepsiburada
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.itCheck}>
      İtopya
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.inCheck}>
      Inventus
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.mmCheck}>
      Mediamarkt
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.n11Check}>
      n11
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.qpCheck}>
      Qp
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.sinCheck}>
      Sinerji
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.tbCheck}>
      Teknobiyotik
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.tekCheck}>
      Teknosa
    </label>
    <label class="cursor-pointer">
      <input type=checkbox bind:checked={$filter.vbCheck}>
      Vatanbilgisayar
    </label>
  </div>
</div>

{#if loadingText}
  <p in:fade class="text-center m-5 font-bold text-lg">{loadingText}</p>
{/if}

<div class="p-6 grid gap-4 grid-cols-1">
  {#each $result as product}
    <Product product={product}/>
  {/each}
</div>
