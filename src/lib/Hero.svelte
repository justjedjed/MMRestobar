<script>
  let current = $state(0);
  let paused = $state(false);

  const slides = [
    {
      image: "/assets/images/slider2.webp",
      eyebrow: "Authentic • Hygienic • Heartfelt",
      title: "Food Made<br/>with Love",
      sub: "Gather around the table and create delicious memories — served with care.",
      cta: "Explore Menu"
    },
    {
      image: "/assets/images/slider1.webp",
      eyebrow: "Savor the Flavors of Arabia",
      title: "Taste of<br/>Arabian Royalty",
      sub: "Experience the rich, aromatic spices of Arabia with every bite.",
      cta: "View Biryani"
    },
    {
      image: "/assets/images/slider3.webp",
      eyebrow: "Where Every Flavor Tells a Story",
      title: "Come for Food,<br/>Stay for Family",
      sub: "Bring your loved ones and feel the joy of mouthwatering food.",
      cta: "Book a Table"
    }
  ];

  function next(){ current = (current + 1) % slides.length }
  function prev(){ current = (current - 1 + slides.length) % slides.length }
  function go(i){ current = i }

  let interval;
  $effect(() => {
    if (paused) return;
    interval = setInterval(next, 5200);
    return () => clearInterval(interval);
  });
</script>

<section id="home" class="hero" aria-label="Hero" onmouseenter={()=>paused=true} onmouseleave={()=>paused=false}>
  <div class="track">
    {#each slides as s, i}
      <div class="slide" class:active={i===current}>
        <div class="bg" style="background-image:url({s.image})"></div>
        <div class="overlay"></div>
        <div class="container content">
          <p class="eyebrow reveal" style="animation-delay:.1s">{s.eyebrow}</p>
          <h1 class="display title reveal" style="animation-delay:.22s">{@html s.title}</h1>
          <p class="desc reveal" style="animation-delay:.34s">{s.sub}</p>
          <div class="cta-row reveal" style="animation-delay:.46s">
            <a href="#menu" class="btn btn-primary"> {s.cta} <ion-icon name="arrow-forward-outline"></ion-icon></a>
            <a href="#reservation" class="btn btn-ghost">Book Table</a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="controls">
    <button class="navbtn prev" aria-label="Previous slide" onclick={prev}><ion-icon name="chevron-back"></ion-icon></button>
    <button class="navbtn next" aria-label="Next slide" onclick={next}><ion-icon name="chevron-forward"></ion-icon></button>
  </div>

  <div class="dots" aria-label="Hero slides">
    {#each slides as _, i}
      <button class="dot" class:active={i===current} aria-label="Go to slide {i+1}" aria-current={i===current ? 'true' : undefined} onclick={()=>go(i)}></button>
    {/each}
  </div>

  <a href="#reservation" class="book-fab" aria-label="Book a Table">
    <span class="icon"><img src="/assets/images/hero-icon.webp" alt="" width="28" height="28" /></span>
    <span class="label">Book<br/>Table</span>
  </a>

  <div class="scroll-hint" aria-hidden="true">
    <span>Scroll</span>
    <i></i>
  </div>
</section>

<style>
.hero{
  position:relative;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  min-height: 560px;
  max-height: 900px;
  overflow:hidden; background:#070709;
  display:grid;
}
@media(max-height:600px){ .hero{min-height:500px} }
.track{ position:relative; height:100%}
.slide{
  position:absolute; inset:0;
  opacity:0; visibility:hidden; transition: opacity .85s ease, visibility .85s;
  display:grid; place-items:center; text-align:center;
  padding: 70px 0 80px;
}
@media(min-width:640px){ .slide{padding-top:70px; padding-bottom:40px} }
@media(min-width:1024px){ .slide{padding-top:70px} }
.slide.active{ opacity:1; visibility:visible}
.bg{
  position:absolute; inset:0;
  background-size:cover; background-position:center;
  transform:scale(1.04); transition: transform 7s linear;
  filter: saturate(1.05) contrast(1.02);
}
.slide.active .bg{ transform:scale(1)}
.overlay{
  position:absolute; inset:0;
  background:
    radial-gradient(900px 500px at 50% 30%, rgba(201,168,106,0.08), transparent 60%),
    linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.42) 52%, rgba(0,0,0,0.22) 100%);
}
.content{
  position:relative; z-index:2;
  display:flex; flex-direction:column; align-items:center; gap:14px;
  max-width:860px; padding-inline:16px;
}
@media(min-width:640px){ .content{gap:18px; padding-inline:18px} }
.eyebrow{
  color:var(--gold); font-size: clamp(0.60rem, 1.8vw, 0.72rem); letter-spacing:0.18em; text-transform:uppercase; font-weight:700;
  display:inline-flex; align-items:center; gap:8px; text-align:center; flex-wrap:wrap; justify-content:center;
}
@media(min-width:640px){ .eyebrow{font-size:0.72rem; letter-spacing:0.32em; gap:12px} }
.eyebrow:before,.eyebrow:after{ content:""; width:18px; height:1px; background:var(--gold); opacity:.6; flex-shrink:0}
@media(min-width:640px){ .eyebrow:before,.eyebrow:after{width:26px} }
.title{ color:white; text-shadow: 0 8px 40px rgba(0,0,0,0.55); line-height:0.95; max-width:100%; overflow-wrap:break-word}
.desc{ color:rgba(255,255,255,0.72); max-width:46ch; font-size: clamp(0.92rem, 2.4vw, 1.12rem); line-height:1.6; padding:0 4px}
@media(min-width:640px){ .desc{padding:0} }
.cta-row{
  display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-top:6px; width:100%;
  padding:0 8px;
}
@media(min-width:480px){ .cta-row{padding:0; gap:12px; margin-top:10px} }
.cta-row .btn{flex:1 1 auto; min-width:0; max-width:100%}
@media(min-width:480px){ .cta-row .btn{flex:0 1 auto} }
@media(max-width:380px){
  .cta-row{flex-direction:column; gap:10px}
  .cta-row .btn{width:100%}
}
.controls{
  position:absolute; inset:0; pointer-events:none;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 10px; z-index:3;
}
@media(min-width:640px){ .controls{padding:0 clamp(12px, 3vw, 34px)} }
.navbtn{
  pointer-events:auto;
  width:40px;height:40px;border-radius:50%;
  border:1px solid rgba(255,255,255,0.18);
  background: rgba(0,0,0,0.24); backdrop-filter: blur(8px);
  display:grid; place-items:center; color:white; transition: all .3s; flex-shrink:0;
}
@media(min-width:640px){ .navbtn{width:52px;height:52px} }
.navbtn:hover{ border-color:var(--gold); background: rgba(201,168,106,0.14); color:var(--gold)}
.navbtn:active{transform:scale(0.96)}
.navbtn ion-icon{font-size:18px}
@media(min-width:640px){ .navbtn ion-icon{font-size:20px} }
.dots{
  position:absolute; left:50%; bottom:14px; transform:translateX(-50%);
  display:flex; gap:8px; z-index:3; align-items:center;
  background: rgba(0,0,0,0.22); backdrop-filter: blur(10px);
  border:1px solid rgba(255,255,255,0.08); padding:8px 12px; border-radius:999px;
}
@media(min-width:480px){ .dots{bottom:20px; gap:10px; padding:10px 16px} }
@media(min-width:640px){ .dots{bottom:28px} }
.dot{
  width:22px; height:3px; border-radius:999px; background:rgba(255,255,255,0.32); transition: all .35s; border:none; padding:0; cursor:pointer;
}
@media(min-width:640px){ .dot{width:28px} }
.dot.active{ background:var(--gold); width:28px; box-shadow:0 0 10px rgba(201,168,106,0.5)}
@media(min-width:640px){ .dot.active{width:36px} }
.book-fab{
  position:absolute; right: 12px; bottom: 62px; z-index:3;
  width:64px; height:64px; border-radius:50%;
  background: var(--gold); color:#0A0A0B;
  display:grid; place-items:center; text-align:center; gap:2px;
  box-shadow: 0 12px 30px rgba(201,168,106,0.35);
  border:1px solid rgba(255,255,255,0.18);
  transition: transform .3s, box-shadow .3s;
}
@media(min-width:480px){ .book-fab{right:16px; bottom:68px; width:72px; height:72px} }
@media(min-width:640px){ .book-fab{right: clamp(14px, 3vw, 32px); bottom: 28px; width:84px; height:84px} }
.book-fab:hover{ transform:translateY(-3px) scale(1.02); box-shadow:0 18px 40px rgba(201,168,106,0.42)}
.book-fab .icon{ width:28px; height:28px; border-radius:50%; background:rgba(0,0,0,0.08); display:grid; place-items:center}
@media(min-width:640px){ .book-fab .icon{width:34px; height:34px} }
.book-fab .icon img{ width:18px; height:18px; object-fit:contain}
@media(min-width:640px){ .book-fab .icon img{width:22px; height:22px} }
.book-fab .label{ font-size:0.52rem; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; line-height:1.1}
@media(min-width:640px){ .book-fab .label{font-size:0.62rem; letter-spacing:0.14em} }
.scroll-hint{
  position:absolute; left: clamp(14px, 3vw, 32px); bottom:28px; z-index:3;
  display:none; flex-direction:column; align-items:center; gap:10px;
  color:rgba(255,255,255,0.52); font-size:0.62rem; letter-spacing:0.22em; text-transform:uppercase;
}
@media(min-width:1024px){ .scroll-hint{display:flex} }
.scroll-hint i{
  width:1px; height:42px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.42), transparent);
  display:block; position:relative; overflow:hidden;
}
.scroll-hint i:after{
  content:""; position:absolute; top:0; left:0; width:100%; height:14px; background:var(--gold);
  animation: scrollLine 1.8s ease-in-out infinite;
}
@keyframes scrollLine{0%{transform:translateY(-14px)}100%{transform:translateY(42px)}}

/* Ultra small */
@media(max-width:360px){
  .hero{min-height:520px}
  .content{gap:12px}
  .title{font-size: clamp(1.9rem, 9vw, 2.4rem)}
}

</style>
