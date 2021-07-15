<script>
  import {theme} from '../stores/theme';

</script>

<h1>Theme: {$theme}</h1>

<button on:click={() => theme.set('light')}>
  Light
</button>

<button on:click={() => theme.set('dark')}>
  Dark
</button>
