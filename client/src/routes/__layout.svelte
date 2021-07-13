<script>
  import Nav from '../lib/nav.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
  <Nav/>
</div>
<slot></slot>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
