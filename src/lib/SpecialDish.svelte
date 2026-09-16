<script lang="ts">
</script>

<section class="special">
  <div class="split">
    <div class="visual">
      <img src="/assets/images/Best seller.webp" alt="Chicken Biryani — Best Seller" width="940" height="900" loading="lazy" />
      <div class="tag">
        <img src="/assets/images/badge-1.webp" alt="" width="28" height="41" />
        <span>Best Seller</span>
      </div>
    </div>
    <div class="content">
      <div class="inner">
        <p class="eyebrow">Chef's Recommendation</p>
        <h2 class="headline">Chicken<br/><em>Biryani</em></h2>
        <p class="lead">Fragrant basmati, tender chicken marinated in aromatic spices, layered and slow-cooked — served with karak tea. Our most loved signature.</p>
        <ul class="points">
          <li><ion-icon name="checkmark-circle"></ion-icon> Slow-cooked • Authentic spices</li>
          <li><ion-icon name="checkmark-circle"></ion-icon> Served with Karak Tea</li>
          <li><ion-icon name="checkmark-circle"></ion-icon> Good for sharing • Family size available</li>
        </ul>
        <div class="price-row">
          <div>
            <span class="from">From</span>
            <span class="price">₱458</span>
          </div>
          <a href="#menu" class="btn btn-primary">View All Menu <ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
        <img src="/assets/images/shape-4.webp" alt="" class="shape" width="179" height="359" />
      </div>
    </div>
  </div>
</section>

<style>
.special{ background: #0E0E10; border-top:1px solid rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.04)}
.split{ display:grid}
@media(min-width:900px){ .split{grid-template-columns: 1.1fr 0.9fr; min-height:640px} }
.visual{ position:relative; overflow:hidden; min-height:320px; background:#111}
@media(min-width:480px){ .visual{min-height:380px} }
@media(min-width:640px){ .visual{min-height:440px} }
@media(min-width:900px){ .visual{min-height:640px} }
.visual img{ width:100%; height:100%; object-fit:cover}
.tag{
  position:absolute; top:16px; left:16px;
  display:inline-flex; align-items:center; gap:8px;
  background: rgba(0,0,0,0.55); backdrop-filter: blur(10px);
  border:1px solid rgba(201,168,106,0.22); padding:8px 12px; border-radius:999px;
  color:white; font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; font-weight:700;
}
@media(min-width:640px){ .tag{top:24px; left:24px; gap:10px; padding:10px 14px; font-size:0.78rem; letter-spacing:0.16em} }
.content{ display:grid; place-items:center; padding: clamp(24px, 6vw, 64px); position:relative; background: var(--bg-soft)}
@media(max-width:480px){ .content{padding:28px 20px} }
.inner{ max-width:520px; width:100%; display:flex; flex-direction:column; gap:14px; position:relative}
@media(min-width:640px){ .inner{gap:18px} }
.headline{ font-size: clamp(2rem, 8vw, 3.8rem); line-height:1}
@media(min-width:640px){ .headline{font-size: clamp(2.6rem, 5vw, 3.8rem)} }
.headline em{ color:var(--gold); font-family:var(--font-heading); font-style:italic; font-weight:500}
.points{ display:flex; flex-direction:column; gap:8px; margin:4px 0 8px}
@media(min-width:640px){ .points{gap:10px; margin:6px 0 10px} }
.points li{ display:flex; align-items:center; gap:10px; color:rgba(255,255,255,0.72); font-size:0.90rem; line-height:1.4}
@media(min-width:640px){ .points li{font-size:0.94rem} }
.points ion-icon{ color:var(--gold); font-size:18px; flex-shrink:0}
.price-row{ display:flex; align-items:center; gap:14px; flex-wrap:wrap; margin-top:6px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.06)}
@media(min-width:480px){ .price-row{gap:18px; margin-top:8px; padding-top:18px} }
.price-row .btn{flex:1 1 auto}
@media(min-width:480px){ .price-row .btn{flex:0 1 auto} }
.from{ display:block; font-size:0.68rem; letter-spacing:0.16em; text-transform:uppercase; color:var(--muted)}
@media(min-width:640px){ .from{font-size:0.72rem; letter-spacing:0.18em} }
.price{ font-family:var(--font-heading); font-size: clamp(1.6rem, 5vw, 2rem); color:var(--gold); font-weight:700; line-height:1}
.shape{ position:absolute; right:-30px; bottom:-10px; width:110px; opacity:0.35; pointer-events:none; display:none}
@media(min-width:900px){ .shape{display:block; right:-40px; bottom:-20px; width:140px; opacity:0.45} }
@media(max-width:900px){ .visual{max-height:52vh} }
</style>
