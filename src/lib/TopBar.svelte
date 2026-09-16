<script>
</script>

<div class="topbar">
  <div class="container inner">
    <a class="item" href="https://www.google.com/maps/place/Michaelas+Arabic+Restobar/@8.4918119,125.9739134,959m/data=!3m2!1e3!4b1!4m6!3m5!1s0x32fdfd0038cf762b:0xe91bce6f4fd84100!8m2!3d8.4918066!4d125.9764883" target="_blank" rel="noopener">
      <ion-icon name="location-outline"></ion-icon>
      <span>Prk-3A Karaus, San Francisco, Agusan del Sur</span>
    </a>
    <span class="sep"></span>
    <span class="item"><ion-icon name="time-outline"></ion-icon> Daily 10:00 AM — 12:00 Midnight</span>
    <span class="sep"></span>
    <a class="item" href="tel:+639241846483"><ion-icon name="call-outline"></ion-icon> +63 924 184 6483</a>
    <span class="sep"></span>
    <a class="item" href="mailto:michaelarestobar@gmail.com"><ion-icon name="mail-outline"></ion-icon> michaelarestobar@gmail.com</a>
  </div>
</div>

<style>
.topbar{
  display:none;
  border-bottom:1px solid rgba(255,255,255,0.06);
  background: rgba(10,10,11,0.85);
  backdrop-filter: blur(8px);
  font-size:0.74rem;
  color: rgba(255,255,255,0.62);
}
@media(min-width:1024px){ .topbar{display:block} }
@media(min-width:1280px){ .topbar{font-size:0.78rem} }
.inner{
  display:flex; align-items:center; justify-content:center; gap:12px;
  padding:10px 0;
  flex-wrap:wrap;
}
@media(min-width:1280px){ .inner{gap:18px} }
@media(min-width:1536px){ .inner{gap:22px} }
.item{ display:inline-flex; align-items:center; gap:6px; transition:color .2s; white-space:nowrap; font-size:0.72rem}
@media(min-width:1280px){ .item{gap:8px; font-size:0.78rem} }
.item span{overflow:hidden; text-overflow:ellipsis; max-width:100%}
.item:hover{ color:var(--gold)}
.item ion-icon{font-size:14px; color:var(--gold); --ionicon-stroke-width:36px; flex-shrink:0}
@media(min-width:1280px){ .item ion-icon{font-size:15px} }
.sep{ width: 6px; height:6px; border:1px solid var(--gold); transform:rotate(45deg); opacity:.5; flex-shrink:0; display:none}
@media(min-width:1280px){ .sep{display:block} }
</style>
