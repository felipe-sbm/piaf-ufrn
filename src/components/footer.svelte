<script lang="ts">
  import PIAF from "$components/piaf-icon.svelte"
  import Otsuki from "$lib/public/imgs/otsuki-dark.webp"
  import { Link } from "lucide-svelte"
  import "../global.css"
</script>

<footer>
  <div
    class="flex items-center justify-center grayscale transition hover:grayscale-0"
  >
    <PIAF className="h-10 w-10 opacity-75 shadow-md rounded-full" />
    <a class="ml-2 text-sm text-red-800 font-bold" href="/admin"
      >Bem-vindo(a) à PIAF :)</a
    >
  </div>
  <div class="links">
    <a href="https://www.instagram.com/piaf_ufrn" target="_blank" rel="noopener noreferrer">
      Contato <Link class="w-4" />
    </a>
    <a href="https://www.ufrn.br/" target="_blank" rel="noopener noreferrer">
      A UFRN <Link class="w-4" />
    </a>
    <a class="no-underline" href="/sobre">Sobre a PIAF</a>
    <a class="no-underline" href="/privacidade">Política de privacidade</a>
  </div>
  <div class="branding grayscale transition hover:grayscale-0">
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
</footer>
<p class="copyright">
  © MIT 2025 PIAF - Portal de Inscrições de Atividades Físicas da UFRN
</p>

<style>
  footer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    background-color: #f5f5f4;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  .links,
  .branding {
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
    font-size: 0.875rem;
    color: #666;
    background-color: #e7e5e4;
    width: 100%;
    padding: 0.5rem 4rem;
    border-bottom: 7px solid #992613;
  }
  @media (min-width: 768px) {
    footer {
      flex-direction: row;
      justify-content: space-between;
      padding: 2rem 4rem;
    }
    .links,
    .branding {
      flex-direction: row;
      margin-bottom: 0;
    }
  }
</style>
