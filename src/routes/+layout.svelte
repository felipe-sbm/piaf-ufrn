<script lang="ts">
  import { page } from "$app/stores"
  import Header from "$components/header.svelte"
  import Footer from "$components/footer.svelte"
  import "../global.css"
</script>

<div class="container">
  <Header />
  <slot />
  <Footer />
</div>

<style>
  :global(body) {
    font-family:
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Helvetica Neue",
      Arial,
      "Noto Sans",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji";
    width: 100%;
    margin: 0;
    background: #fff;
    color: #333;
  }
  :global(li),
  :global(p) {
    line-height: 1.5rem;
  }
  :global(a) {
    font-weight: 500;
  }
  :global(hr) {
    border: 1px solid #ddd;
  }
  :global(iframe) {
    background: #ccc;
    border: 1px solid #ccc;
    height: 10rem;
    width: 100%;
    border-radius: 0.5rem;
    filter: invert(1);
  }
  .container {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    max-width: 100%;
    box-sizing: border-box;
  }
</style>
