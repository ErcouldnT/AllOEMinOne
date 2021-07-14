<script>
  import { fade } from 'svelte/transition';
  import { build } from '../stores/build';

  export let product;
  let isChoosed = false;

  const sendItToBuild = (e) => {
    e.preventDefault();
		$build.push(product);
    isChoosed = true;
	};
</script>

<a in:fade target="_blank" class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md
flex flex-col items-center z-0" href={product.url}>
  <h2>{`(${product.source}) ${product.title}`}</h2>
  <h3>{product.price} TL</h3>
  <button on:click|once={sendItToBuild} class="font-bold z-10">{isChoosed ? "Eklendi" : "Ekle"}</button>
</a>

<!-- <div transition:fade target="_blank" class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md
flex flex-col items-center">
  <a href={product.url}>
    <h2>{`(${product.source}) ${product.title}`}</h2>
    <h3>{product.price} TL</h3>
  </a>
  <button on:click|once={sendItToBuild} class="font-bold">Seç</button>
</div> -->
