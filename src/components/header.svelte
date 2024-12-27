<script lang="ts">
  import { page } from "$app/stores"
  import { SignIn, SignOut } from "@auth/sveltekit/components"
</script>

<header>
  <nav>
    <ul class="navItems">
      <li class="Brasil fade-in">
        <div class="navItem">
          <a href="https://www.gov.br/pt-br"
            ><img
              class="Brasil"
              src="https://flagsapi.com/BR/shiny/24.png"
              alt="Bandeira do Brasil"
            />BRASIL</a
          >
        </div>
      </li>
      <ol class="rightItems fade-in">
        <li class="navItem"><a href="/">Início</a></li>
        <li class="navItem"><a href="/inscricoes">Inscrições</a></li>
        <li class="navItem"><a href="/perfil">Perfil</a></li>
      </ol>
    </ul>
  </nav>
  <div class="signedInStatus">
    <div class="nojs-show loaded">
      <div class="userProfile">
        <img
          alt="User avatar"
          src={$page.data?.session?.user?.image ??
            `https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(Math.random() * 100000) + 1}&randomizeIds=true`}
          class="avatar"
        />
      </div>
      <div class="logoPIAF">
        <img src="/imgs/piaf.webp" alt="Logo da PIAF" />
      </div>
      {#if $page.data.session}
        <div class="singedIn flex">
          <span class="signedInText">
            {$page.data.session.user?.email ?? $page.data.session.user?.name}
          </span>
          <SignOut>
            <span class="notSignedInText">Você está no sistema 😊</span>
            <div slot="submitButton" class="buttonPrimary">Sair</div>
          </SignOut>
        </div>
      {:else}
        <div class="notSingedIn flex">
          <span class="notSignedInText">Você não está no sistema 🧐</span>
          <SignIn>
            <div slot="submitButton" class="buttonPrimary">Entrar</div>
          </SignIn>
        </div>
      {/if}
    </div>
  </div>
</header>

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
    border-radius: 0 0 1rem 1rem;
    padding: 0.6rem 1rem;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.05);
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
    font-weight: 500;
    border-radius: 0.7rem;
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

  .fade-in {
    opacity: 0;
    animation: fadeIn 1.5s forwards;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>
