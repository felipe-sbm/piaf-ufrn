<script lang="ts">
  import Otsuki from "../lib/public/imgs/otsuki-dark.webp"
  import { Link } from "lucide-svelte"
  import "../global.css"
</script>

<footer>
  <div class="links">
    <a href="https://" target="_blank" rel="noopener noreferrer">
      Contato <Link class="w-4" />
    </a>
    <a href="https://www.ufrn.br/" target="_blank" rel="noopener noreferrer">
      A UFRN <Link class="w-4" />
    </a>
    <a href="/sobre">Sobre a PIAF</a>
    <a class="no-underline" href="/privacidade">Política de privacidade</a>
  </div>
  <div class="branding">
    <a href="https://github.com/otsuki-dev" target="_blank" rel="noopener noreferrer">
      <img src={Otsuki} alt="Logo da Otsuki Development" class="otsuki" />
      <p class="ml-1">Otsuki Development</p>
      <Link class="w-4" />
    </a>
  </div>
  <p class="copyright">
    © MIT 2025 PIAF - Portal de Inscrições de Atividades Físicas da UFRN
  </p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    background-color: #f2f2f2;
    border-radius: 1rem 1rem 0 0;
    box-sizing: border-box;
  }
  .links, .branding {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .links a {
    color: #333;
    text-underline-offset: 4px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .branding a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: #333;
  }
  .otsuki {
    width: 4rem;
    height: auto;
    object-fit: contain;
  }
  .copyright {
    text-align: center;
    font-size: 0.875rem;
    color: #666;
  }
  @media (min-width: 768px) {
    footer {
      flex-direction: row;
      justify-content: space-between;
      padding: 2rem 4rem;
    }
    .links, .branding {
      flex-direction: row;
      margin-bottom: 0;
    }
  }
</style>
