<script lang="ts">
  import Undraw from "$lib/public/imgs/undraw_fitness-tracker.svg"
  import Run from "$lib/public/imgs/pexels-ketut-subiyanto-4719931.webp"
</script>

<svelte:head>
  <title>Portal de Inscrições de Atividades Físicas da UFRN | PIAF</title>
</svelte:head>

<main class="">
  <div class="introduction">
    <img src={Undraw} alt="Desenho do tipo Undraw">
  </div>
  <div class="mx-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
    <div class="border-4 border-gray-300 rounded-lg overflow-hidden shadow-lg w-full md:w-96">
      <img src={Run} alt="Homem correndo, imagem Stock" class="w-full h-auto" />
    </div>
    <div class="text-center md:text-left">
      <h1 class="text-4xl font-extrabold mb-4 text-gray-800">Facilidade no seu ritmo</h1>
      <p class="text-lg text-gray-600">
        A PIAF foi planejada cuidadosamente para fornecer a usuários de qualquer
        idade a possibilidade de se inscrever em atividades físicas de forma
        simples e rápida. Com vários professores, o setor de Educação Física da
        UFRN irá te instruir a obter o seu melhor, te ajudando a alcançar seus
        objetivos.
      </p>
    </div>
  </div>
  <div class="w-full mt-12"></div>
  <h2 class="text-3xl font-bold mb-8">Nossas responsabilidades</h2>
  <div class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
    <div class="w-full md:w-1/3 p-6 border-2 rounded-lg shadow-lg">
      <h3 class="text-xl font-semibold mb-4">Realização dos processos seletivos</h3>
      <p class="text-lg">
        Todos os processos seletivos de esportes e atividades físicas são
        realizados pela plataforma da <i>PIAF</i>, não sendo necessário sair e
        retornar diversas vezes. Vale ressaltar que os processos seletivos não
        possuem <strong>nepotismo</strong>, pois todos são realizados por
        computadores confiáveis.
      </p>
    </div>
    <div class="w-full md:w-1/3 p-6 border-2 rounded-lg shadow-lg">
      <h3 class="text-xl font-semibold mb-4">Vasta gama de modalidades</h3>
      <p class="text-lg">
        No setor de Educação Física é disponibilizado diversas atividades que
        podem ser realizada a inscrição através do nosso sistema, sendo muito
        mais fácil do que o modelo anterior. As atividades são de diversos
        tipos, como modalidades aquáticas, aeróbicas e anaeróbicas etc.
      </p>
    </div>
    <div class="w-full md:w-1/3 p-6 border-2 rounded-lg shadow-lg">
      <h3 class="text-xl font-semibold mb-4">Privacidade e segurança</h3>
      <p class="text-lg">
        Os seus dados estão criptografados, não permitindo com que ocorra o
        vazamento de seu CPF ou e-mail, somente o seu nome será publico, os
        demais estão seguros. Não é necessário nenhum custo para se inscrever,
        assim tendo uma segurança maior aos seus dados pessoais e monetários.
      </p>
    </div>
  </div>
</main>

<style>
  .introduction {
    position: relative;
    height: 50%;
    width: 100%;
    background: linear-gradient(135deg, #992613, #b33a2e, #cc5047, #e66661, #ff7c7a);
  }
  @media (min-width: 640px) {
    .introduction {
      height: 40%;
    }
  }
</style>
