<script context="module">
  export const load = async ({ fetch }) => {
    const url = `/api/system/latest`;
    const res = await fetch(url);

    if (res.ok) {
      const list = await res.json();
			return {
				props: { list }
			};
		}

    const { message } = await res.json();
		return {
			error: new Error(message)
		};
  };
</script>

<script>
  import { fade } from 'svelte/transition';

  export let list;

</script>

<svelte:head>
  <title>AllOEMinOne Hazır Sistemler</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Hazır Sistemler</h1>
<div in:fade class="flex flex-col justify-center items-center gap-5">
  <!-- <p class="text-center max-w-md">
    En son kurulan sistemleri gösterir.
  </p> -->
  {#each list as system}
    <a class="text-lg" href="/{system.slug}">{system.name}</a>
    <!-- todo price will be added. -->
  {/each}
</div>
