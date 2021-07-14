<script>
  import { fade } from 'svelte/transition';
  import { build } from '../stores/build';

  export let product;

  const deleteIt = (e) => {
    e.preventDefault();
		const result = $build.filter(p => p !== product);
    $build = result;
	};

  const quantityControl = (e) => {
    e.preventDefault();
		// todo
	};

</script>

<a in:fade target="_blank" class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md
flex flex-col items-center z-0" href={product.url}>
  <h2>{`(${product.source}) ${product.title}`}</h2>
  <h3>{product.price} TL</h3>
  <div class="flex gap-10">
    <button on:click={quantityControl} class="font-bold z-10">Miktar</button>
    <button on:click={deleteIt} class="font-bold z-10">Sil</button>
  </div>
</a>
