<script>
  const features = [
    { title:"Hygienic Food", icon:"/assets/images/features-icon-1.webp" },
    { title:"Fresh Environment", icon:"/assets/images/features-icon-2.webp" },
    { title:"Skilled Chefs", icon:"/assets/images/features-icon-3.webp" },
    { title:"Event & Party", icon:"/assets/images/features-icon-4.webp" },
  ];
</script>

<section class="section features">
  <div class="container">
    <div class="head">
      <p class="eyebrow">Why Choose Us</p>
      <h2 class="headline">Our Strength</h2>
      <p class="lead">Clean, welcoming, and crafted for memorable meals — every visit feels like celebration.</p>
    </div>

    <div class="grid-4">
      {#each features as f}
        <div class="feat">
          <div class="icon">
            <img src={f.icon} alt="" width="100" height="80" loading="lazy" />
          </div>
          <h3>{f.title}</h3>
          <span class="line"></span>
        </div>
      {/each}
    </div>
  </div>
  <img src="/assets/images/shape-8.webp" alt="" class="shape" />
</section>

<style>
.features{ background: var(--bg); border-top:1px solid rgba(255,255,255,0.04); text-align:center}
.head{ display:flex; flex-direction:column; align-items:center; gap:12px; margin-bottom:28px; padding:0 8px}
@media(min-width:640px){ .head{gap:14px; margin-bottom:40px} }
.lead{ text-align:center; padding:0 8px}
@media(min-width:640px){ .lead{padding:0} }
.feat{
  background: var(--bg-card);
  border:1px solid rgba(255,255,255,0.06);
  border-radius:20px; padding:24px 18px 22px;
  display:flex; flex-direction:column; align-items:center; gap:14px;
  transition: all .35s var(--ease);
}
@media(min-width:640px){ .feat{border-radius:24px; padding:30px 22px 28px; gap:16px} }
.feat:hover{ transform:translateY(-4px); border-color:rgba(201,168,106,0.16); box-shadow:0 18px 50px rgba(0,0,0,0.4)}
.icon{
  width:72px; height:72px; border-radius:50%;
  background: radial-gradient(circle at 30% 30%, rgba(201,168,106,0.18), rgba(201,168,106,0.04));
  border:1px solid rgba(201,168,106,0.14);
  display:grid; place-items:center; padding:14px;
}
@media(min-width:640px){ .icon{width:86px; height:86px; padding:18px} }
.icon img{ width:46px; height:auto; object-fit:contain; filter: brightness(1.05)}
@media(min-width:640px){ .icon img{width:56px} }
.feat h3{ font-family:var(--font-heading); font-size: clamp(1.05rem, 3vw, 1.25rem); font-weight:600; line-height:1.1}
.line{ width:28px; height:2px; background:var(--gold); opacity:0.6; border-radius:999px}
.shape{ position:absolute; right:16px; bottom:16px; width:60px; opacity:0.25; pointer-events:none}
@media(min-width:768px){ .shape{right:30px; bottom:30px; width:90px; opacity:0.35} }
@media(max-width:640px){
  :global(.features .grid-4){gap:14px}
}
</style>
