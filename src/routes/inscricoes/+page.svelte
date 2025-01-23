<script lang="ts">
  import { page } from "$app/stores"
  import Undraw from "$lib/public/imgs/undraw_fitness-tracker.svg"
  import { SignIn } from "@auth/sveltekit/components"
  import { FileUser, Dumbbell, GlobeLock } from "lucide-svelte"
  import Loading from "$components/loading-process.svelte"
</script>

<svelte:head>
  <title>Inscrições | PIAF</title>
</svelte:head>

<div></div>

<main class="antialasing">
  <!-- TOPO DA PÁGINA -->
  <div class="introduction">
    <div class="xl:mx-12 lg:mx-10 md:mx-8 ml:mx-4 xm:mx-2">
      <h1 class="text-4xl font-extrabold mb-4 text-yellow-100">
        Página de Inscrições
      </h1>
      <p class="text-lg text-yellow-50 sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit
        odio molestiae eaque tempora sapiente possimus nulla ipsa amet veritatis
        nisi accusamus molestias, fuga iure dolores error temporibus vero
        doloribus!
      </p>
    </div>
    <img
      class="ml-2 py-16 introduction-img"
      src={Undraw}
      alt="Desenho do tipo Undraw"
    />
  </div>
  <p>
    Essas são as inscrições em andamento, selecione uma e preencha o formulário
    com seus dados.
  </p>
  {#if $page.data.session}
    <p>Sua sessão expira em: {$page.data.session?.expires}</p>
  {:else}
    <h1>Nenhuma inscrição em andamento 😞</h1>
  {/if}
</main>

<style>
  .introduction {
    position: relative;
    height: 50%;
    width: 100%;
    background: #992613;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .introduction-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    background-color: #bf776c;
    margin-right: 7rem;
  }
  @media (max-width: 640px) {
    .introduction-img {
      margin-right: 0;
    }
  }
  @media (min-width: 640px) {
    .introduction {
      height: 25%;
    }
  }
</style>
