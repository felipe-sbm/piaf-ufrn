<script lang="ts">
  export let professores: {
    nome: string
    departamento: string
    foto: string
  }[] = [] // Recebendo a lista de professores
</script>

<svelte:head>
  <title>Professores | PIAF</title>
  <!-- Título da página -->
</svelte:head>

<div class="mt-4">
  <h1 class="text-2xl">Nossos professores</h1>
  <p>Aqui estão nossos professores que estarão auxiliando vocês</p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {#each professores as professor}
      <div class="border p-4 rounded shadow">
        <img
          src={professor.foto}
          alt={professor.nome}
          class="w-full h-48 object-cover rounded mb-4"
        />
        <h2 class="text-xl font-bold">{professor.nome}</h2>
        <p class="text-gray-600">{professor.departamento}</p>
      </div>
    {/each}
  </div>
</div>
