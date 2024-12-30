<script lang="ts">
  import { page } from "$app/stores"
  import "../global.css"
</script>

<svelte:head>
  <title>Inscrições da PIAF</title>
</svelte:head>

<div>
  <h1 class="text-2xl">Inscrições em andamento</h1>
  <p>
    Essas são as inscrições em andamento, selecione uma e preencha o formulário
    com seus dados.
  </p>
  {#if $page.data.session}
    <p>Session expiry: {$page.data.session?.expires}</p>
  {:else}
    <h1>Nenhuma inscrição em andamento 😞</h1>
  {/if}
</div>
