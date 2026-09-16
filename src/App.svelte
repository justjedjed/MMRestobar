<script>
  import Preloader from './lib/Preloader.svelte'
  import TopBar from './lib/TopBar.svelte'
  import Header from './lib/Header.svelte'
  import Hero from './lib/Hero.svelte'
  import Services from './lib/Services.svelte'
  import SpecialDish from './lib/SpecialDish.svelte'
  import Menu from './lib/Menu.svelte'
  import Reservation from './lib/Reservation.svelte'
  import Features from './lib/Features.svelte'
  import Footer from './lib/Footer.svelte'
  import BackToTop from './lib/BackToTop.svelte'

  let loading = $state(true);
  let scrolled = $state(false);
  let menuOpen = $state(false);
  let showTop = $state(false);

  // preloader timer
  $effect(() => {
    const t = setTimeout(()=> loading = false, 1400);
    return ()=> clearTimeout(t);
  });

  function onScroll(){
    scrolled = window.scrollY > 40;
    showTop = window.scrollY > 500;
  }
  $effect(()=>{
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
    return ()=> window.removeEventListener('scroll', onScroll);
  });

  function toggleMenu(){ menuOpen = !menuOpen; document.body.style.overflow = menuOpen ? 'hidden' : '' }
  function closeMenu(){ menuOpen = false; document.body.style.overflow = '' }

  // prevent scroll when loading
  $effect(()=>{
    if(loading) document.body.style.overflow='hidden';
    else if(!menuOpen) document.body.style.overflow='';
  });
</script>

<div id="top"></div>

{#if loading}
  <Preloader show={loading} />
{/if}

<TopBar />
<Header {scrolled} {menuOpen} onToggle={toggleMenu} onClose={closeMenu} />

<main>
  <Hero />
  <Services />
  <SpecialDish />
  <Menu />
  <!-- subtle testimonial divider -->
  <section class="testi">
    <div class="container">
      <div class="quote">
        <span class="mark">“</span>
        <p>I wanted to thank you for that amazing dinner — the food was extraordinary. Michaela's feels like home, with flavors that transport you to Arabia.</p>
        <span class="author">— Happy Guest • San Francisco</span>
      </div>
    </div>
  </section>
  <Reservation />
  <Features />
</main>

<Footer />
<BackToTop visible={showTop} />

<style>
  main{ display:block; overflow-x:hidden}
  .testi{
    position:relative; padding:clamp(36px, 6vw, 64px) 0;
    background: linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url('/assets/images/testimonialbg.webp');
    background-size:cover; background-position:center;
    /* fixed attachment causes jank on mobile — only use on large */
    border-top:1px solid rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.04);
    text-align:center;
  }
  @media(min-width:1024px){ .testi{background-attachment:fixed} }
  .quote{
    max-width:760px; margin:0 auto;
    background: rgba(0,0,0,0.42); backdrop-filter: blur(12px);
    border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:24px 18px;
    display:flex; flex-direction:column; align-items:center; gap:12px;
  }
  @media(min-width:640px){ .quote{border-radius:28px; padding:36px 28px; gap:14px} }
  .mark{ font-family:var(--font-heading); font-size: clamp(2.8rem, 8vw, 4rem); line-height:0.6; color:var(--gold); opacity:0.9}
  .quote p{ font-family:var(--font-heading); font-size: clamp(1.05rem, 3.5vw, 1.55rem); line-height:1.45; color:white; font-style:italic; max-width:36ch}
  @media(min-width:640px){ .quote p{max-width:none} }
  .author{ font-size: clamp(0.68rem, 1.8vw, 0.78rem); letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.62); font-weight:700; line-height:1.4; text-align:center}
  @media(min-width:640px){ .author{letter-spacing:0.18em} }
</style>
