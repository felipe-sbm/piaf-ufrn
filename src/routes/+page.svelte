<script lang="ts">
  import Undraw from "$lib/public/imgs/undraw_fitness-tracker.svg"
  import Run from "$lib/public/imgs/pexels-ketut-subiyanto-4719931.webp"
  import Computer from "$lib/public/imgs/pexels-ivan-samkov-4458553.webp"
  import { SignIn } from "@auth/sveltekit/components"
  import { FileUser, Dumbbell, GlobeLock } from "lucide-svelte"
  import Loading from "$components/loading-process.svelte"
</script>

<svelte:head>
  <title>Portal de Inscrições de Atividades Físicas da UFRN | PIAF</title>
</svelte:head>

<main class="antialasing">
  <!-- TOPO DA PÁGINA -->
  <div class="introduction">
    <div class="xl:mx-12 lg:mx-10 md:mx-8 ml:mx-4 xm:mx-2">
      <h1 class="text-4xl font-extrabold mb-4 text-yellow-100">
        Facilidade no seu ritmo
      </h1>
      <p class="text-lg text-yellow-50 sm:text-base md:text-lg lg:text-xl">
        A PIAF é uma plataforma de inscrição em atividades físicas da UFRN que
        visa facilitar o processo das inscrições de diversas modalidades de
        esportes da Universidade. Com a PIAF, você pode se inscrever em diversas
        atividades físicas de forma simples e rápida, sem precisar sair de casa.
      </p>
    </div>
    <img
      class="ml-2 py-16 introduction-img"
      src={Undraw}
      alt="Desenho do tipo Undraw"
    />
  </div>

  <!-- INTRODUÇÃO A INSCRIÇÃO -->
  <div
    class="mt-24 mb-24 mx-4 md:mx-8 lg:mx-16 xl:mx-24 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
  >
    <img src={Run} alt="Homem correndo, imagem Stock" class="homeImages" />
    <div class="text-center md:text-left">
      <h1 class="text-4xl font-extrabold mb-4 text-slate-800">
        Crie sua conta e comece hoje mesmo!
      </h1>
      <p class="text-lg text-slate-600">
        A PIAF foi planejada cuidadosamente para fornecer aos usuários de
        qualquer idade a possibilidade de se inscrever em atividades físicas de
        forma simples e rápida. Crie sua conta agora mesmo e aguarde um processo
        seletivo abrir!
      </p>
      <div class="flex mt-4 items-end">
        <SignIn>
          <div slot="submitButton" class="buttonPrimary poppins-thin">
            Criar conta
          </div>
        </SignIn>
        <p class="text-sm text-slate-600 ml-2">
          ℹ️ Não pedimos nenhuma informação fora da PIAF!
        </p>
      </div>
    </div>
  </div>

  <!-- RESPONSABILIDADES -->
  <div class="responsabilities">
    <div class="mx-4 md:mx-8 lg:mx-12 pt-8 pb-12">
      <h2 class="text-3xl text-center font-bold mb-4">
        Nossas responsabilidades
      </h2>

      <!-- PAINEL DE RESPONSABILIDADES -->
      <div
        class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8"
      >
        <div
          class="bg-slate-50 w-full md:w-1/3 p-6 border-2 rounded-lg shadow-lg"
        >
          <h3 class="flex text-xl font-semibold mb-4">
            <FileUser class="mr-2" />Realização dos processos seletivos
          </h3>
          <p class="text-lg">
            Todos os processos seletivos de esportes e atividades físicas são
            realizados pela plataforma da <i>PIAF</i>, não sendo necessário sair
            e retornar diversas vezes. Vale ressaltar que os processos seletivos
            não possuem <strong>nepotismo</strong>, pois todos são realizados
            por computadores confiáveis.
          </p>
        </div>

        <div
          class="bg-slate-50 w-full md:w-1/3 p-6 border-2 rounded-lg shadow-lg"
        >
          <h3 class="flex text-xl font-semibold mb-4">
            <Dumbbell class="mr-2" />Vasta gama de modalidades
          </h3>
          <p class="text-lg">
            No setor de Educação Física é disponibilizado diversas atividades
            que podem ser realizada a inscrição através do nosso sistema, sendo
            muito mais fácil do que o modelo anterior. As atividades são de
            diversos tipos, como modalidades aquáticas, aeróbicas e anaeróbicas
            etc.
          </p>
        </div>

        <div
          class="bg-slate-50 w-full md:w-1/3 p-6 border-2 rounded-lg shadow-lg"
        >
          <h3 class="flex text-xl font-semibold mb-4">
            <GlobeLock class="mr-2" /> Privacidade e segurança
          </h3>
          <p class="text-lg">
            Os seus dados estão criptografados, não permitindo com que ocorra o
            vazamento de seu CPF ou e-mail, somente o seu nome será publico, os
            demais estão seguros. Não é necessário nenhum custo para se
            inscrever, assim tendo uma segurança maior aos seus dados pessoais e
            monetários.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- INFORMAÇÕES ADICIONAIS -->
  <div
    class="mt-24 mb-24 mx-4 md:mx-8 lg:mx-16 xl:mx-24 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
  >
    <div class="text-center md:text-right">
      <h1 class="text-4xl font-extrabold mb-4 text-slate-800">
        Não fique de fora das últimas notícias
      </h1>
      <p class="text-lg text-right text-slate-600">
        Nós temos um canal de notícias no Instagram, onde postamos informações
        importantes para você, avisando sobre atualizações. Está esperando o
        que?
      </p>
      <div class="flex mt-4 items-end justify-end">
        <a
          href="https://www.instagram.com/piaf_ufrn"
          class="buttonPrimary poppins-thin"
        >
          Siga o nosso Instagram
        </a>
      </div>
    </div>
    <img
      src={Computer}
      alt="Mulher sentada na cama utilizando o notebook, imagem Stock"
      class="homeImages"
    />
  </div>

  <!-- PROCESSOS SELETIVOS ANTERIORES -->
  <div class="responsabilities">
    <div class="mx-4 md:mx-8 lg:mx-12 pt-8 pb-12">
      <h2 class="text-3xl text-center font-bold mb-2">Últimos Resultados</h2>
      <p class="text-md text-slate-700 mb-4 text-center">
        Aqui vão alguns dos nossos últimos processos seletivos. Todos realizados
        dentro da nossa plataforma
      </p>
      <!-- LOADING FALSO, IMPLEMENTAÇÃO DO BANCO DE DADOS NECESSÁRIA -->
      <div
        class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8"
      >
        <Loading className="w-full md:w-1/5" />
        <Loading className="w-full md:w-1/5" />
        <Loading className="w-full md:w-1/5" />
        <Loading className="w-full md:w-1/5" />
        <Loading className="w-full md:w-1/5" />
      </div>
      <p class="text-md text-slate-700 mt-8 text-center">
        Quer ver algum outro? Procure por aqui!
      </p>
      <div class="flex justify-center mt-4">
        <a class="buttonPrimary poppins-thin" href="/resultados">
          Resultados anteriores
        </a>
      </div>
    </div>
  </div>
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
  .homeImages {
    width: 100%;
    max-width: 30rem;
    height: auto;
    border: 3px solid #bf776c;
  }
  .responsabilities {
    background: #f1f5f9;
  }
  .buttonPrimary {
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.4rem;
    position: relative;
    justify-self: end;
    background-color: #992613;
    color: #fff;
    text-decoration: none;
    padding: 0.7rem 1.4rem;
  }
  .buttonPrimary:hover {
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.2);
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
