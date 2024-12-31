<script lang="ts">
  import Run from "$lib/public/imgs/pexels-ketut-subiyanto-4719931.webp"
</script>

<svelte:head>
  <title>Portal de Inscrições de Atividades Físicas da UFRN | PIAF</title>
</svelte:head>

<main class="mx-12">
  <div class="mx-12 poppins-regular flex flex-row items-start">
    <div class="border-4 w-96">
      <img src={Run} alt="Homem correndo, imagem Stock" />
    </div>
    <div class="ml-8">
      <h1 class="text-2xl">Facilidade no seu ritmo</h1>
      <p>
        A PIAF foi planejada cuidadosamente para fornecer a usuários de qualquer
        idade a possibilidade de se inscrever em atividades físicas de forma
        simples e rápida. Com vários professores, o setor de Educação Física da
        UFRN irá te instruir a obter o seu melhor, te ajudando a alcançar seus
        objetivos.
      </p>
    </div>
  </div>
  <div class="w-full mt-8"></div>
  <h2 class="text-3xl mb-4">Nossas responsabilidades</h2>
  <div class="flex flex-row justify-between">
    <div class="w-1/3 p-4 border-2">
      <h3 class="text-xl mb-2">Realização dos processos seletivos</h3>
      <p>
        Todos os processos seletivos de esportes e atividades físicas são
        realizados pela plataforma da <i>PIAF</i>, não sendo necessário sair e
        retornar diversas vezes. Vale ressaltar que os processos seletivos não
        possuem <strong>nepotismo</strong>, pois todos são realizados por
        computadores confiáveis.
      </p>
    </div>
    <div class="w-1/3 p-4 border-2">
      <h3 class="text-xl mb-2">Vasta gama de modalidades</h3>
      <p>
        No setor de Educação Física é disponibilizado diversas atividades que
        podem ser realizada a inscrição através do nosso sistema, sendo muito
        mais fácil do que o modelo anterior. As atividades são de diversos
        tipos, como modalidades aquáticas, aeróbicas e anaeróbicas etc.
      </p>
    </div>
    <div class="w-1/3 p-4 border-2">
      <h3 class="text-xl mb-2">Privacidade e segurança</h3>
      <p>
        Os seus dados estão criptografados, não permitindo com que ocorra o
        vazamento de seu CPF ou e-mail, somente o seu nome será publico, os
        demais estão seguros. Não é necessário nenhum custo para se inscrever,
        assim tendo uma segurança maior aos seus dados pessoais e monetários.
      </p>
    </div>
  </div>
</main>

<style>
  main {
    flex: 1;
  }
</style>
