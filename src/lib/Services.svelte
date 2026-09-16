<script>
  const services = [
    { title:"Breakfast", img:"/assets/images/1.webp" },
    { title:"Appetizers", img:"/assets/images/2.webp" },
    { title:"Drinks", img:"/assets/images/3.webp" }
  ];
</script>

<section class="section services">
  <div class="container">
    <div class="head">
      <p class="eyebrow">A Taste of Arabian Royalty</p>
      <h2 class="headline">We Offer <span>Top Notch</span></h2>
      <p class="lead">Where exceptional cuisine, elegant ambiance, and heartfelt hospitality come together to create unforgettable moments.</p>
    </div>

    <div class="grid-3">
      {#each services as s, i}
        <a href="#menu" class="card premium-card" aria-label="View {s.title} menu">
          <div class="media">
            <img src={s.img} alt={s.title} loading="lazy" width="600" height="750" />
            <div class="overlay"></div>
            <div class="shine" aria-hidden="true"></div>

            <!-- Gold corner accents -->
            <span class="corner tl" aria-hidden="true"></span>
            <span class="corner br" aria-hidden="true"></span>

            <!-- Number badge -->
            <div class="badge">
              <span class="num">0{i+1}</span>
              <span class="line"></span>
            </div>
          </div>

          <div class="body">
            <h3 class="t">{s.title}</h3>
            <span class="link">
              <span>View Menu</span>
              <span class="arrow"><ion-icon name="arrow-forward-outline"></ion-icon></span>
            </span>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <img src="/assets/images/shape-1.webp" alt="" class="shape s1" aria-hidden="true" />
  <img src="/assets/images/shape-2.webp" alt="" class="shape s2" aria-hidden="true" />
</section>

<style>
.services{
  background: var(--bg);
  border-top:1px solid rgba(255,255,255,0.04);
  position:relative;
  overflow:hidden;
}
.head{
  text-align:center;
  display:flex; flex-direction:column; align-items:center;
  gap:12px; margin-bottom:32px; padding:0 4px;
}
@media(min-width:640px){ .head{gap:14px; margin-bottom:48px} }
.headline span{
  color:var(--gold);
  font-style:italic;
  font-family:var(--font-heading);
  font-weight:500;
}
.lead{ text-align:center; padding:0 8px; max-width:58ch}
@media(min-width:640px){ .lead{padding:0} }

/* Premium card */
.premium-card{
  position:relative;
  background: linear-gradient(180deg, #1A1A1E 0%, #141418 100%);
  border:1px solid rgba(255,255,255,0.06);
  border-radius:32px;
  overflow:hidden;
  display:flex; flex-direction:column;
  transition: transform .55s var(--ease), border-color .4s var(--ease), box-shadow .5s var(--ease);
  isolation:isolate;
}
.premium-card:hover{
  transform: translateY(-10px);
  border-color: rgba(201,168,106,0.22);
  box-shadow:
    0 24px 60px rgba(0,0,0,0.55),
    0 0 0 1px rgba(201,168,106,0.08),
    0 0 40px rgba(201,168,106,0.08);
}
.premium-card:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:2px;
}

/* Media — premium image */
.media{
  position:relative;
  aspect-ratio: 4 / 4.8;
  overflow:hidden;
  background:#0f0f12;
}
@media(max-width:640px){ .media{ aspect-ratio: 16 / 11 } }
@media(min-width:641px) and (max-width:1023px){ .media{ aspect-ratio: 4 / 4.2 } }
.media img{
  width:100%; height:100%; object-fit:cover;
  transition: transform 1.1s var(--ease), filter .6s var(--ease);
  filter: saturate(1.04) contrast(1.02);
}
.premium-card:hover .media img{
  transform: scale(1.09);
  filter: saturate(1.08) contrast(1.06);
}
.overlay{
  position:absolute; inset:0;
  background:
    radial-gradient(600px 280px at 50% 0%, rgba(201,168,106,0.07), transparent 60%),
    linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 45%, transparent 72%);
  pointer-events:none;
}

/* Shine sweep on hover */
.shine{
  position:absolute; top:0; left:-120%;
  width:55%; height:100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%);
  transform: skewX(-14deg);
  transition: left .85s var(--ease);
  pointer-events:none;
  opacity:0.9;
}
.premium-card:hover .shine{ left:130% }

/* Gold corners */
.corner{
  position:absolute; width:28px; height:28px;
  border-color: rgba(201,168,106,0.72);
  border-style:solid; pointer-events:none; opacity:0.85;
  transition: opacity .35s, transform .35s;
}
.corner.tl{ top:14px; right:14px; left:auto; border-width:1.5px 1.5px 0 0; border-radius:0 14px 0 0}
.corner.br{ bottom:14px; left:14px; border-width:0 0 1.5px 1.5px; border-radius:0 0 0 14px}
.premium-card:hover .corner{ opacity:1; border-color: var(--gold) }

/* Badge */
.badge{
  position:absolute; top:16px; left:16px; z-index:2;
  display:inline-flex; align-items:center; gap:10px;
  background: rgba(10,10,11,0.72);
  backdrop-filter: blur(12px);
  border:1px solid rgba(201,168,106,0.22);
  border-radius:999px;
  padding:7px 12px 7px 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.35);
}
.badge .num{
  width:28px; height:28px; border-radius:50%;
  display:grid; place-items:center;
  background: var(--gold);
  color:#0A0A0B;
  font-size:0.72rem; font-weight:800; letter-spacing:0.04em;
  flex-shrink:0;
}
.badge .line{
  width:18px; height:1px; background: var(--gold); opacity:0.7; border-radius:999px;
}

/* Body */
.body{
  padding:20px 20px 22px;
  display:flex; flex-direction:column; gap:10px;
  flex:1;
  background: linear-gradient(180deg, rgba(255,255,255,0.01) 0%, transparent 100%);
}
@media(min-width:640px){ .body{ padding:24px 24px 26px } }
.t{
  font-family:var(--font-heading);
  font-size: clamp(1.35rem, 3.6vw, 1.65rem);
  font-weight:700; line-height:1.1; letter-spacing:-0.01em;
  color:white;
}
.link{
  margin-top:8px;
  display:inline-flex; align-items:center; justify-content:space-between;
  gap:12px;
  padding:12px 14px 12px 18px;
  background: rgba(255,255,255,0.02);
  border:1px solid rgba(255,255,255,0.06);
  border-radius:999px;
  color:var(--gold);
  font-size:0.74rem; letter-spacing:0.14em; text-transform:uppercase; font-weight:800;
  transition: all .35s var(--ease);
}
@media(min-width:640px){
  .link{ font-size:0.76rem; letter-spacing:0.16em; padding:12px 14px 12px 18px}
}
.link .arrow{
  width:32px; height:32px; border-radius:50%;
  display:grid; place-items:center;
  background: var(--gold);
  color:#0A0A0B;
  flex-shrink:0;
  transition: transform .35s var(--ease), background .35s;
}
.link .arrow ion-icon{ font-size:16px; --ionicon-stroke-width:42px}
.premium-card:hover .link{
  background: rgba(201,168,106,0.08);
  border-color: rgba(201,168,106,0.22);
  color:white;
  gap:14px;
}
.premium-card:hover .link .arrow{
  transform: translateX(2px) scale(1.04);
  background: white;
}

/* Shapes */
.shape{ position:absolute; pointer-events:none; opacity:0.32; display:none}
@media(min-width:1024px){ .shape{display:block; opacity:0.42} }
@media(min-width:1280px){ .shape{opacity:0.5} }
.s1{ left:-40px; top:14%; width:180px; animation: float 7s ease-in-out infinite}
@media(min-width:1280px){ .s1{width:220px} }
.s2{ right:-30px; bottom:6%; width:220px; animation: float 8s ease-in-out infinite reverse}
@media(min-width:1280px){ .s2{width:280px} }

@media(max-width:380px){
  .badge{ top:12px; left:12px; padding:6px 10px 6px 8px; gap:8px}
  .badge .num{ width:26px; height:26px; font-size:0.68rem}
  .body{ padding:18px 16px 18px}
}
</style>
