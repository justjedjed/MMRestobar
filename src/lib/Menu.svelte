<script>
  let selected = $state('All');
  let popupOpen = $state(false);
  let page = $state(0);

  const categories = ['All','Biryani','Kebab'];

  const items = [
    { name:"Chicken Biryani", cat:"Biryani", img:"/assets/images/Chicken Biryani.webp", prices:["Good for 1 + Karak — ₱458","Good for 2 + Karak — ₱698","Good for 3 + Karak — ₱1,158","Family (4–5) + Karak — ₱1,858"], popular:true },
    { name:"Mutton Biryani", cat:"Biryani", img:"/assets/images/Mutton Biryani.webp", prices:["Good for 1 + Karak — ₱768","Good for 2 + Karak — ₱1,168","Good for 3 + Karak — ₱1,985","Family + Karak — ₱3,078"], popular:true },
    { name:"Beef Biryani", cat:"Biryani", img:"/assets/images/Beef Biryani.webp", prices:["Good for 1 + Karak — ₱508","Good for 2 + Karak — ₱778","Good for 3 + Karak — ₱1,288","Family + Karak — ₱2,058"], popular:false },
    { name:"Fish Biryani", cat:"Biryani", img:"/assets/images/Fish Biryani.webp", prices:["Good for 1 + Karak — ₱588"], popular:false },
    { name:"Chicken Kebab", cat:"Kebab", img:"/assets/images/Chicken Kebab.webp", prices:["Good for 1 + Karak — ₱398"], popular:false },
    { name:"Beef Kebab", cat:"Kebab", img:"/assets/images/Beef Kebab.webp", prices:["Good for 1 + Karak — ₱478"], popular:false },
    { name:"Shish Tawook", cat:"Kebab", img:"/assets/images/Shis Tauwok.webp", prices:["Good for 1 + Karak — ₱568"], popular:true },
    { name:"Chicken Tikka Kabab", cat:"Kebab", img:"/assets/images/Chicken Tikka Kabab.webp", prices:["Good for 1 + Karak — ₱528"], popular:false },
    { name:"Chicken Tikka Masala",  img:"/assets/images/Chicken Tikka-Masala.webp", prices:["Good for 1 + Karak — ₱238"], popular:false },
  ];

  const filtered = $derived(selected==='All' ? items : items.filter(i=> i.cat===selected));

  const pages = [
    "/assets/images/Page 1.webp",
    "/assets/images/Page 2.webp",
    "/assets/images/page 3.webp",
    "/assets/images/Page 4.webp",
    "/assets/images/Page 5.webp",
    "/assets/images/Page 6.webp",
    "/assets/images/Page 7.webp",
    "/assets/images/Page 8.webp",
    "/assets/images/Page 9.webp",
    "/assets/images/Page 10.webp",
  ];

  function openPopup(){ popupOpen = true; document.body.style.overflow='hidden' }
  function closePopup(){ popupOpen = false; document.body.style.overflow='' }
  function nextPage(){ page = (page+1) % pages.length }
  function prevPage(){ page = (page-1+pages.length) % pages.length }

  /** @param {KeyboardEvent} e */
  function handleKey(e){
    if(!popupOpen) return;
    if(e.key==='Escape') closePopup();
    if(e.key==='ArrowRight') nextPage();
    if(e.key==='ArrowLeft') prevPage();
  }
</script>

<svelte:window onkeydown={handleKey} />

<section id="menu" class="section menu">
  <div class="container">
    <div class="head">
      <p class="eyebrow">Special Selection</p>
      <h2 class="headline">Delicious Menu</h2>
      <p class="lead center">Authentic Arabian flavors — marinated, slow-cooked, and served with karak tea.</p>

      <div class="filters" role="tablist">
        {#each categories as c}
          <button class="chip" class:active={selected===c} onclick={()=>selected=c} role="tab" aria-selected={selected===c}>{c}</button>
        {/each}
      </div>
    </div>

    <div class="grid">
      {#each filtered as item (item.name)}
        <article class="menu-card">
          <div class="thumb">
            <img src={item.img} alt={item.name} loading="lazy" width="100" height="100" />
          </div>
          <div class="info">
            <div class="title-row">
              <h3>{item.name}</h3>
              {#if item.popular}<span class="badge">Popular</span>{/if}
            </div>
            <span class="cat">{item.cat}</span>
            <ul class="prices">
              {#each item.prices as p}
                <li><span class="dot"></span>{p}</li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </div>

    <div class="cta">
      <button class="btn btn-primary" onclick={openPopup}>View Full Menu — 10 Pages <ion-icon name="images-outline"></ion-icon></button>
      <p class="hint">Swipe or use arrows inside the gallery. Portions good for sharing.</p>
    </div>
  </div>

  <img src="/assets/images/shape-5.webp" alt="" class="shape s1" />
  <img src="/assets/images/shape-6.webp" alt="" class="shape s2" />
</section>

{#if popupOpen}
  <div class="popup" role="dialog" aria-modal="true">
    <button class="backdrop" onclick={closePopup} aria-label="Close"></button>
    <div class="panel">
      <div class="panel-head">
        <div>
          <p class="kicker">Michaela's Menu</p>
          <h3>Delicious Menu</h3>
          <span class="count">Page {page+1} of {pages.length}</span>
        </div>
        <button class="close" onclick={closePopup} aria-label="Close menu"><ion-icon name="close-outline"></ion-icon></button>
      </div>
      <div class="viewer">
        <button class="arrow left" onclick={prevPage} aria-label="Previous"><ion-icon name="chevron-back"></ion-icon></button>
        <img src={pages[page]} alt="Menu page {page+1}" />
        <button class="arrow right" onclick={nextPage} aria-label="Next"><ion-icon name="chevron-forward"></ion-icon></button>
      </div>
      <div class="panel-foot">
        <button class="btn btn-ghost btn-small" onclick={prevPage}>Previous</button>
        <div class="progress"><span style="width:{(page+1)/pages.length*100}%"></span></div>
        <button class="btn btn-primary btn-small" onclick={nextPage}>Next</button>
      </div>
    </div>
  </div>
{/if}

<style>
.menu{ background: var(--bg); border-top:1px solid rgba(255,255,255,0.04)}
.head{ text-align:center; display:flex; flex-direction:column; align-items:center; gap:14px; margin-bottom:36px}
.lead.center{ text-align:center}
.filters{ display:flex; gap:8px; flex-wrap:wrap; justify-content:center; margin-top:14px; padding:0 8px}
@media(min-width:640px){ .filters{gap:10px; padding:0} }
.chip{
  padding:9px 14px; border-radius:999px; min-height:38px;
  border:1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.02);
  font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:700;
  color:rgba(255,255,255,0.68); transition: all .25s; white-space:nowrap;
}
@media(min-width:640px){ .chip{padding:10px 18px; font-size:0.78rem; letter-spacing:0.14em; min-height:40px} }
.chip.active, .chip:hover{ border-color:var(--gold); color:var(--gold); background: rgba(201,168,106,0.1)}
.grid{ display:grid; gap:14px}
@media(min-width:640px){ .grid{gap:18px} }
@media(min-width:768px){ .grid{grid-template-columns:repeat(2,1fr)} }
.menu-card{
  display:flex; gap:12px; align-items:flex-start;
  background: var(--bg-card);
  border:1px solid rgba(255,255,255,0.06);
  border-radius:20px; padding:14px;
  transition: all .35s var(--ease);
}
@media(min-width:640px){ .menu-card{gap:16px; padding:16px} }
.menu-card:hover{ border-color:rgba(201,168,106,0.18); transform:translateY(-3px); box-shadow:0 16px 40px rgba(0,0,0,0.38)}
.thumb{ width:64px; height:64px; border-radius:14px; overflow:hidden; flex-shrink:0; background:#1e1e20; border:1px solid rgba(255,255,255,0.04)}
@media(min-width:480px){ .thumb{width:74px; height:74px; border-radius:16px} }
@media(min-width:640px){ .thumb{width:84px; height:84px} }
.thumb img{ width:100%; height:100%; object-fit:cover}
.info{ flex:1; min-width:0}
.title-row{ display:flex; align-items:center; gap:8px; flex-wrap:wrap}
@media(min-width:640px){ .title-row{gap:10px} }
.title-row h3{ font-family:var(--font-heading); font-size: clamp(1.05rem, 3.2vw, 1.18rem); line-height:1.1; font-weight:600}
.badge{ font-size:0.58rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:800; color:#0A0A0B; background:var(--gold); padding:3px 7px; border-radius:999px; white-space:nowrap}
@media(min-width:640px){ .badge{font-size:0.62rem; letter-spacing:0.14em; padding:4px 8px} }
.cat{ font-size:0.68rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); font-weight:700; display:block; margin-top:2px}
@media(min-width:640px){ .cat{font-size:0.72rem; letter-spacing:0.14em} }
.prices{ margin-top:8px; display:flex; flex-direction:column; gap:5px}
@media(min-width:640px){ .prices{margin-top:10px; gap:6px} }
.prices li{ display:flex; align-items:flex-start; gap:8px; font-size:0.82rem; color:rgba(255,255,255,0.72); line-height:1.4}
@media(min-width:640px){ .prices li{font-size:0.86rem} }
.dot{ width:5px; height:5px; border-radius:50%; background:var(--gold); flex-shrink:0; opacity:0.9; margin-top:6px}
@media(min-width:640px){ .dot{margin-top:7px} }
.cta{ display:flex; flex-direction:column; align-items:center; gap:10px; margin-top:28px; padding:0 12px; text-align:center}
@media(min-width:640px){ .cta{gap:12px; margin-top:36px; padding:0} }
.cta .btn{width:100%; max-width:340px; justify-content:center}
@media(min-width:480px){ .cta .btn{width:auto; max-width:none} }
.hint{ font-size:0.78rem; color:var(--muted); line-height:1.5; max-width:38ch}
@media(min-width:640px){ .hint{font-size:0.82rem} }
.shape{ position:absolute; pointer-events:none; opacity:0.3; display:none}
@media(min-width:1024px){ .shape{display:block; opacity:0.4} }
.s1{ left:-60px; top:8%; width:360px}
@media(min-width:1280px){ .s1{left:-80px; width:520px} }
.s2{ right:-20px; bottom:4%; width:160px; animation: float 7s ease-in-out infinite}
@media(min-width:1280px){ .s2{right:-40px; width:220px} }

/* Popup — fully responsive */
.popup{ position:fixed; inset:0; z-index:70; display:grid; place-items:center; padding:12px}
@media(min-width:640px){ .popup{padding:18px} }
.backdrop{ position:absolute; inset:0; background:rgba(0,0,0,0.74); backdrop-filter: blur(8px)}
.panel{
  position:relative; z-index:1;
  width:min(920px, 100%); max-height: min(92dvh, 860px);
  background: linear-gradient(180deg, #141416 0%, #0E0E10 100%);
  border:1px solid rgba(201,168,106,0.18);
  border-radius:20px; overflow:hidden;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6);
  display:flex; flex-direction:column;
}
@media(min-width:640px){ .panel{border-radius:24px} }
.panel-head{
  display:flex; align-items:flex-start; justify-content:space-between; gap:12px;
  padding:14px 14px 12px; border-bottom:1px solid rgba(255,255,255,0.06)
}
@media(min-width:640px){ .panel-head{gap:16px; padding:18px 18px 14px} }
.panel-head h3{ font-family:var(--font-heading); font-size: clamp(1.2rem, 3.5vw, 1.5rem); line-height:1}
.count{ font-size:0.74rem; color:var(--muted); display:block; margin-top:4px}
@media(min-width:640px){ .count{font-size:0.78rem} }
.close{ width:38px; height:38px; border-radius:50%; border:1px solid rgba(201,168,106,0.22); display:grid; place-items:center; transition:.25s; flex-shrink:0}
@media(min-width:640px){ .close{width:42px; height:42px} }
.close:hover{ background:rgba(201,168,106,0.1); color:var(--gold)}
.viewer{
  position:relative; flex:1; min-height:300px; display:grid; place-items:center;
  background: #0A0A0B; padding:12px;
}
@media(min-width:480px){ .viewer{min-height:340px; padding:16px} }
@media(min-width:640px){ .viewer{min-height:360px; padding:18px} }
.viewer img{ max-width:100%; max-height:58vh; width:auto; height:auto; border-radius:12px; box-shadow:0 16px 40px rgba(0,0,0,0.5)}
@media(min-width:640px){ .viewer img{max-height:64vh; border-radius:14px} }
.arrow{
  position:absolute; top:50%; transform:translateY(-50%);
  width:38px; height:38px; border-radius:50%;
  background: rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.14);
  backdrop-filter: blur(8px); display:grid; place-items:center; color:white; transition:.25s;
}
@media(min-width:480px){ .arrow{width:42px; height:42px} }
@media(min-width:640px){ .arrow{width:46px; height:46px} }
.arrow:hover{ border-color:var(--gold); color:var(--gold); background:rgba(201,168,106,0.12)}
.arrow.left{ left:8px}
.arrow.right{ right:8px}
@media(min-width:640px){ .arrow.left{left:14px} .arrow.right{right:14px} }
.panel-foot{ display:flex; align-items:center; gap:10px; padding:12px 14px; border-top:1px solid rgba(255,255,255,0.06); background:rgba(255,255,255,0.01); flex-wrap:wrap}
@media(min-width:480px){ .panel-foot{gap:14px; padding:14px 18px} }
.panel-foot .btn{flex:1 1 auto; min-width:0}
@media(min-width:480px){ .panel-foot .btn{flex:0 1 auto} }
.progress{ flex:1; min-width:60px; height:4px; border-radius:999px; background:rgba(255,255,255,0.08); overflow:hidden}
.progress span{ display:block; height:100%; background:var(--gold); transition: width .35s var(--ease)}
</style>
