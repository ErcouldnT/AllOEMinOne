<script>
  import { fade } from 'svelte/transition';
  import { build } from '../../stores/build';

  export let product;
  let builds = $build;
  // let isChoosed = $build.includes(product);
  
  // todo: add onMount function
  let isChoosed = !!$build.find(p => {
    return p.title === product.title;
  });

  const sendItToBuild = (e) => {
    e.preventDefault();
    // todo zaten varsa yenisini ekleme, varolanın miktarını artır.
    product.amount = 1;
		builds.push(product);
    isChoosed = true;
	};

  $: $build = builds;
  
</script>

<a in:fade target="_blank" class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md
flex flex-col items-center z-0" href={product.url}>
  <h2>{`(${product.source}) ${product.title}`}</h2>
  <h3>₺{product.price}</h3>
  <button on:click|once={!isChoosed ? sendItToBuild : null} class="font-bold z-10">{isChoosed ? "Eklendi" : "Ekle"}</button>
</a>

<!-- <div transition:fade target="_blank" class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md
flex flex-col items-center">
  <a href={product.url}>
    <h2>{`(${product.source}) ${product.title}`}</h2>
    <h3>{product.price} TL</h3>
  </a>
  <button on:click|once={sendItToBuild} class="font-bold">Seç</button>
</div> -->
