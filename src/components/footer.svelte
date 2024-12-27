<script lang="ts">
  import packageJSON from "@auth/sveltekit/package.json"
  import ExternalIcon from "./external-icon.svelte"
</script>

<footer>
  <div>
    <a href="https://sveltekit.authjs.dev">Contato <ExternalIcon /></a>
    <a href="https://www.ufrn.br/"
      >A UFRN <ExternalIcon />
    </a>
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
</footer>

<style>
  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.25rem;
    margin-block: 2rem;
  }
  footer > div {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
  .no-underline {
    text-decoration: none;
  }
</style>
