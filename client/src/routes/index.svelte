<script>
  import Product from '../components/Product.svelte';

  let results = [];
  let searchTerm = '';

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
      // await itopya(searchTerm);
      await amazon(searchTerm);
      await inventus(searchTerm);
      await mediamarkt(searchTerm);
      await sinerji(searchTerm);
      await teknobiyotik(searchTerm);
      await teknosa(searchTerm);
      await vatanbilgisayar(searchTerm);
      await hepsiburada(searchTerm);
    };
	};

</script>
<svelte:head>
  <title>Ucuzcu baba</title>
</svelte:head>
<h1 class="text-4xl text-center my-8">Welcome to PC-part-picker!</h1>

<form class="flex flex-row justify-center">
  <input class="rounded-md text-lg p-4 border-2 border-gray-200" 
  type="text" bind:value={searchTerm} placeholder="Ürün ara">
  
  <button on:click={handleClick} class="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
  px-4 rounded">Go!</button>
</form>

<div class="p-6 grid gap-4 grid-cols-1">
  {#each results as result}
    <Product product={result}/>
  {/each}
</div>
