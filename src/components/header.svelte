<script lang="ts">
  import { page } from "$app/stores"
  import { SignIn, SignOut } from "@auth/sveltekit/components"
  import PIAF from "../lib/public/imgs/piaf.webp"
  import "../global.css";
</script>

<header class="poppins-regular">
  <!-- Header da PIAF -->
  <nav class="">
    <!-- Header do Header -->
    <ul class="navItems">
      <li class="Brasil fade-in">
        <div class="navItem">
          <!-- Link para o website do governo -->
          <a
            href="https://www.gov.br/pt-br"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              class="Brasil"
              src="https://flagsapi.com/BR/shiny/24.png"
              alt="Bandeira do Brasil"
            />BRASIL</a
          >
        </div>
      </li>
      <ol class="rightItems fade-in">
        <!-- Seleção de menus -->
        <li class="navItem"><a href="/">Início</a></li>
        <li class="navItem"><a href="/inscricoes">Inscrições</a></li>
        <li class="navItem"><a href="/resultados">Resultados</a></li>
        <li class="navItem">
          <a href="/professores">Conheça os professores</a>
        </li>
        <li class="navItem"><a href="/perfil">Perfil</a></li>
      </ol>
    </ul>
  </nav>
  <div class="signedInStatus">
    <!-- Botão de Login -->
    <div class="nojs-show loaded">
      <!-- Logo da PIAF com opção de retorno a tela inicial -->
      <a href="/" class="logo">
        <img src={PIAF} alt="Logo da PIAF" class="w-32" />
      </a>
      <!-- Verificador de Login -->
      {#if $page.data.session}
        <div class="userProfile">
          <!-- Imagem do Usuário -->
          <img
            alt="User avatar"
            src={$page.data?.session?.user?.image ??
              `https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(Math.random() * 100000) + 1}&randomizeIds=true`}
            class="avatar"
          />
          <span class="notSignedInText"
            >Olá, {$page.data?.session?.user} 😊</span
          >
        </div>
        <span class="signedInText">
          {$page.data.session.user?.email ?? $page.data.session.user?.name}
        </span>
        <SignOut>
          <div slot="submitButton" class="buttonPrimary">Sair</div>
        </SignOut>
      {:else}
        <span class="notSignedInText">Você não está no sistema ℹ️</span>
        <SignIn>
          <div slot="submitButton" class="buttonPrimary poppins-thin">
            Entrar
          </div>
        </SignIn>
      {/if}
    </div>
  </div>
</header>

<!-- Estilos do Header -->
<style>
  .nojs-show {
    opacity: 1;
    top: 0;
  }
  .signedInStatus {
    display: block;
    min-height: 4rem;
    justify-content: space-between;
  }
  .loaded {
    position: relative;
    top: 0;
    opacity: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    margin: 0;
    background-color: #f2f2f2;
    transition: all 0.2s ease-in;
  }
  .signedInText,
  .notSignedInText {
    justify-content: end;
    padding-left: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inherit;
    line-height: 1.3rem;
    flex: 1;
  }
  .signedInText {
    padding-top: 0rem;
    left: 4.6rem;
  }
  .avatar {
    border-radius: 2rem;
    float: left;
    height: 2.8rem;
    width: 2.8rem;
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .buttonPrimary {
    font-weight: 600;
    border-radius: 0.7rem;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.4rem;
    position: relative;
    justify-self: end;
    background-color: #992613;
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
    padding: 0.7rem 1.4rem;
  }
  .buttonPrimary:hover {
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.2);
  }
  .navItems {
    padding: 0;
    list-style: none;
    background-color: #dbdbdb;
    padding: 0 0.5rem 0 1.5rem;
    display: flex;
    justify-content: space-between;
  }
  .rightItems {
    display: flex;
    margin-left: auto;
    margin-right: 5.5rem;
  }
  .Brasil {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }
  .navItem {
    display: inline-block;
    margin-right: 1rem;
    border-right: 2px solid #c4c4c4;
    padding-right: 1rem;
  }
  :global(form button) {
    border: none !important;
  }
  .logo {
    display: inline-block;
    margin-left: -0.2rem;
  }
  li a {
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
  }
  .fade-in {
    opacity: 0;
    animation: fadeIn 1.5s forwards;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }


  @media (max-width: 768px) {
    .navItems {
      flex-direction: column;
      align-items: flex-start;
    }
    .rightItems {
      flex-direction: column;
      margin-left: 0;
      margin-right: 0;
    }
    .navItem {
      margin-right: 0;
      border-right: none;
      padding-right: 0;
      margin-bottom: 0.5rem;
    }
    .Brasil {
      margin-right: 0;
    }
    .signedInStatus {
      flex-direction: column;
      align-items: flex-start;
    }
    .signedInText,
    .notSignedInText {
      padding-left: 0;
    }
    .logo {
      margin-bottom: 1rem;
    }
  }
</style>
