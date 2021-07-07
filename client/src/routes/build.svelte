<script>
  import { build } from '../stores/build';
  import Product from '../components/Product.svelte';
  console.log($build);
</script>
<svelte:head>
  <title>AllOEMinOne Sistem</title>
</svelte:head>
<h1 class="text-4xl text-center my-8">Sistemin:</h1>

<div class="grid gap-4 grid-cols-1">
  {#each $build as product}
    <Product product={product}/>
  {/each}
</div>
