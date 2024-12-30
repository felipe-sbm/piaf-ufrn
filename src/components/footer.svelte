<script lang="ts">
  import Otsuki from "../lib/public/imgs/otsuki-dark.webp"
  import { Link } from "lucide-svelte"
  import "../global.css"
</script>

<footer>
  <div>
    <a href="https://" target="_blank" rel="noopener noreferrer"
      >Contato <Link class="w-4" /></a
    >
    <a href="https://www.ufrn.br/" target="_blank" rel="noopener noreferrer"
      >A UFRN <Link class="w-4" />
    </a>
    <a href="/sobre"> Sobre a PIAF </a>
    <a class="no-underline" href="/privacidade">Politica de privacidade</a>
  </div>
  <div>
    <a
      href="https://github.com/otsuki-dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Otsuki} alt="Logo da Otsuki Development" class="otsuki" />
      <p class="ml-1">Otsuki Development</p>
      <Link class="w-4" />
    </a>
  </div>
    <p class="mx-10">
      © MIT 2025 PIAF - Portal de Inscrições de Atividades Físicas da UFRN
    </p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 4rem);
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.25rem;
    background-color: #f2f2f2;
    padding: 2rem 0 0 0;
    border-radius: 1rem 1rem 0 0;
    margin: 0 1rem 0 1rem;
    box-sizing: border-box;
  }
  footer > div {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 2rem;
    max-width: 100%;
    overflow: hidden;
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
  .otsuki {
    width: 4rem;
    height: auto;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
</style>
