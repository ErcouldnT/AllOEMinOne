<script>
  import { fade } from 'svelte/transition';
  import Product from '../components/Product.svelte';

  let results = [];
  let searchTerm = '';
  let loadingText = '';
  let maxPrice = '';
  let time = 0;
  let amCheck = false;
  let itCheck = false;
  let vbCheck = false;
  let hbCheck = true;
  let sinCheck = true;
  let tbCheck = true;
  let inCheck = true;
  let mmCheck = true;
  let tekCheck = true;

  $: results.sort((a, b) => a.price - b.price);

  const amazon = async (search) => {
    const url = `/api/amazon/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

  const hepsiburada = async (search) => {
    const url = `/api/hepsiburada/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

  const itopya = async (search) => {
    const url = `/api/itopya/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

  const inventus = async (search) => {
    const url = `/api/inventus/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

  const mediamarkt = async (search) => {
    const url = `/api/mediamarkt/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

  const sinerji = async (search) => {
    const url = `/api/sinerji/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

  const teknobiyotik = async (search) => {
    const url = `/api/teknobiyotik/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

  const teknosa = async (search) => {
    const url = `/api/teknosa/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

  const vatanbilgisayar = async (search) => {
    const url = `/api/vatanbilgisayar/${search}`;
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data);
  };

	const handleClick = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      // alert(searchTerm);
      results = [];
      loadingText = 'Hemen ustaya sorup geliyorum abi biraz bekleticem...'
      if (sinCheck) {
        await sinerji(searchTerm);
      }
      if (inCheck) {
        await inventus(searchTerm);
      }
      if (mmCheck) {
        await mediamarkt(searchTerm);
      }
      if (tbCheck) {
        await teknobiyotik(searchTerm);
      }
      if (tekCheck) {
        await teknosa(searchTerm);
      }
      if (hbCheck) {
        await hepsiburada(searchTerm);
      }
      if (vbCheck) {
        await vatanbilgisayar(searchTerm);
      }
      if (amCheck) {
        await amazon(searchTerm);
      }
      if (itCheck) {
        await itopya(searchTerm);
      }
      loadingText = results.length > 0 ? `${results.length} adet ${searchTerm.trim()} var abi buyur:` : 'Abime onu vermiyim.';
    };
	};

</script>
<svelte:head>
  <title>AllOEMinOne</title>
</svelte:head>
<h1 class="text-4xl text-center my-8">Ne vereyim abime?</h1>
<p class="text-center m-3 italic">Kısaca "ryzen 5600" şeklinde arama yapabilirsin.</p>

<form class="flex flex-row justify-center p-4">
  <input class="w-auto rounded-md text-lg p-4 border-2 border-gray-200" 
  type="text" bind:value={searchTerm} placeholder="Ürün ara">
  
  <button on:click={handleClick} disabled={!searchTerm} class="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
  px-4 rounded">Go!</button>
</form>

<div class="flex justify-center items-center p-3">
  <div class="grid grid-cols-2 md:grid-cols-3 md:gap-5 max-w-md gap-2">
    <label>
      <input type=checkbox bind:checked={amCheck}>
      Amazon
    </label>
    <label>
      <input type=checkbox bind:checked={hbCheck}>
      Hepsiburada
    </label>
    <label>
      <input type=checkbox bind:checked={sinCheck}>
      Sinerji
    </label>
    <label>
      <input type=checkbox bind:checked={itCheck}>
      İtopya
    </label>
    <label>
      <input type=checkbox bind:checked={tbCheck}>
      Teknobiyotik
    </label>
    <label>
      <input type=checkbox bind:checked={inCheck}>
      Inventus
    </label>
    <label>
      <input type=checkbox bind:checked={mmCheck}>
      Mediamarkt
    </label>
    <label>
      <input type=checkbox bind:checked={tekCheck}>
      Teknosa
    </label>
    <label>
      <input type=checkbox bind:checked={vbCheck}>
      Vatanbilgisayar
    </label>
  </div>
</div>

{#if loadingText}
  <p transition:fade class="text-center m-5 font-bold text-lg">{loadingText}</p>
{/if}

<div class="p-6 grid gap-4 grid-cols-1">
  {#each results as result}
    <Product product={result}/>
  {/each}
</div>
