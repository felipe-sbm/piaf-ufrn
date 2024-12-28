<script lang="ts">
  import packageJSON from "@auth/sveltekit/package.json"
  import ExternalIcon from "./external-icon.svelte"
</script>

<footer>
  <div>
    <a href="https://sveltekit.authjs.dev">Contato <ExternalIcon /></a>
    <a href="https://www.ufrn.br/">A UFRN <ExternalIcon /> </a>
    <a href="/sobre"> Sobre a PIAF </a>
    <a class="no-underline" href="/privacidade">Politica de privacidade</a>
  </div>
  <div>
    <img src="https://authjs.dev/img/logo-sm.png" alt="Auth.js Logo" />
    <a href="https://www.npmjs.com/package/@auth/sveltekit">
      @auth/sveltekit@{packageJSON.version}
      <ExternalIcon />
    </a>
  </div>
  <div class="copyright mx-5">
    <p class="mx-10">
      © 2024 PIAF - Portal de Integração a Atividades Físicas da UFRN
    </p>
  </div>
</footer>

<style>
  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.25rem;
    margin-block: 2rem;
    background-color: #f2f2f2;
    padding: 3rem 0 2rem 0;
    border-radius: 1rem 1rem 0 0;
  }
  footer > div {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 2rem;
  }
  footer a {
    color: #333;
    text-underline-offset: 4px;
    font-weight: 500;
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
  }
  footer img {
    width: 24px;
    height: 24px;
  }
  .copyright {
    font-size: 0.75rem;
    color: cornsilk;
    margin-top: 1rem;
    background-color: #992613;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .no-underline {
    text-decoration: none;
  }
</style>
