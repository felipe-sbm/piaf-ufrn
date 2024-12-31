<script lang="ts">
    import { page } from "$app/stores"
  </script>
  
  <svelte:head>
    <title>ADMIN | PIAF</title>
  </svelte:head>
  
  <div>
    <h1 class="text-2xl">Página exclusiva para administradores</h1>
    <p>
     Não é possível ter acesso a essa página sem ser um administrador.
    </p>
    {#if $page.data.session}
      <p>Session expiry: {$page.data.session?.expires}</p>
    {:else}
      <h1>Faça o login com uma conta de administrador!</h1>
    {/if}
  </div>
  