<script>
  import { fade } from 'svelte/transition';
  export let product;
</script>

<a transition:fade target="_blank" class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md
flex flex-col items-center" href={product.url}>
  <h2>{`(${product.source}) ${product.title}`}</h2>
  <h3>{product.price} TL</h3>
</a>
