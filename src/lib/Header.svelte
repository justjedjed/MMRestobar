<script>
  let { scrolled = false, menuOpen = false, onToggle = ()=>{}, onClose = ()=>{} } = $props();
</script>

<header class="hdr" class:scrolled>
  <div class="container row">
    <a href="#home" class="logo" aria-label="Michaela's Home">
      <img src="/assets/images/logo.webp" alt="Michaela's Arabic Restobar" width="150" height="44" />
    </a>

    <nav class="nav desktop" aria-label="Primary">
      <a href="#home">Home</a>
      <a href="#menu">Menus</a>
      <a href="#reservation">Book Table</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="actions">
      <a href="#reservation" class="btn btn-primary desktop cta">Reserve Table</a>
      <button class="burger" aria-label="Open menu" aria-expanded={menuOpen} onclick={onToggle}>
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile drawer -->
<div class="drawer" class:open={menuOpen} role="dialog" aria-modal="true" aria-label="Navigation menu">
  <div class="drawer-head">
    <img src="/assets/images/logo.webp" alt="Michaela's" width="140" />
    <button class="close" aria-label="Close menu" onclick={onClose}>
      <ion-icon name="close-outline"></ion-icon>
    </button>
  </div>
  <nav class="drawer-nav" aria-label="Mobile navigation">
    <a href="#home" onclick={onClose}><span>Home</span><ion-icon name="arrow-forward-outline"></ion-icon></a>
    <a href="#menu" onclick={onClose}><span>Menus</span><ion-icon name="arrow-forward-outline"></ion-icon></a>
    <a href="#reservation" onclick={onClose}><span>Book Table</span><ion-icon name="arrow-forward-outline"></ion-icon></a>
    <a href="#contact" onclick={onClose}><span>Contact</span><ion-icon name="arrow-forward-outline"></ion-icon></a>
  </nav>
  <div class="drawer-foot">
    <p class="kicker">Visit Us</p>
    <p class="muted">Prk-3A Karaus, San Francisco<br/>Agusan del Sur — 10AM to 12AM</p>
    <a href="tel:+639241846483" class="phone">+63 924 184 6483</a>
    <a href="#reservation" class="btn btn-primary full" onclick={onClose}>Reserve Your Table</a>
  </div>
</div>
<button class="overlay" class:show={menuOpen} aria-label="Close menu overlay" onclick={onClose}></button>

<style>
.hdr{
  position:fixed; top:0; left:0; right:0; z-index:40;
  padding:14px 0;
  transition: background .35s var(--ease), padding .35s, border-color .35s, backdrop-filter .35s;
  border-bottom:1px solid transparent;
}
@media(min-width:640px){ .hdr{padding:16px 0} }
@media(min-width:1024px){ .hdr{padding:18px 0} }
.hdr.scrolled{
  background: rgba(10,10,11,0.78);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border-color: rgba(201,168,106,0.14);
  padding:10px 0;
  box-shadow: 0 10px 40px rgba(0,0,0,0.35);
}
@media(min-width:640px){ .hdr.scrolled{padding:12px 0} }
.row{ display:flex; align-items:center; justify-content:space-between; gap:12px}
@media(min-width:640px){ .row{gap:20px} }
.logo img{ width: clamp(120px, 28vw, 150px); height:auto; filter: drop-shadow(0 2px 12px rgba(0,0,0,0.4)); transition: transform .3s}
@media(min-width:640px){ .logo img{width:150px} }
.logo:hover img{ transform:translateY(-1px)}
.nav{ display:none; gap: clamp(18px, 2vw, 30px); align-items:center}
@media(min-width:1024px){ .nav{display:flex} }
.nav a{
  font-size:0.78rem; letter-spacing:0.18em; text-transform:uppercase; font-weight:600;
  color:rgba(255,255,255,0.72); position:relative; padding:8px 0; transition:color .25s;
  white-space:nowrap;
}
.nav a:after{
  content:""; position:absolute; left:0; bottom:0; width:0; height:1px;
  background: linear-gradient(90deg, var(--gold), var(--gold-3)); transition:width .35s var(--ease);
}
.nav a:hover{ color:var(--gold)}
.nav a:hover:after{ width:100%}

.actions{ display:flex; align-items:center; gap:10px; margin-left:auto}
@media(min-width:640px){ .actions{gap:14px} }
@media(min-width:1024px){ .actions{margin-left:0} }
.cta.desktop{ display:none}
@media(min-width:1024px){ .cta.desktop{display:inline-flex; padding:14px 26px; font-size:0.74rem} }
@media(min-width:1280px){ .cta.desktop{padding:16px 30px; font-size:0.78rem} }

.burger{
  width:42px; height:42px; border-radius:50%;
  border:1px solid rgba(201,168,106,0.32);
  display:grid; place-items:center; gap:5px;
  background: rgba(0,0,0,0.2); transition: all .3s; flex-shrink:0;
}
@media(min-width:640px){ .burger{width:46px; height:46px} }
.burger span{ display:block; width:18px; height:1.5px; background:white; transition:all .3s; border-radius:999px}
@media(min-width:640px){ .burger span{width:20px} }
.burger:hover{ border-color:var(--gold); background: rgba(201,168,106,0.08)}
.burger:hover span{ background:var(--gold)}
@media(min-width:1024px){ .burger{display:none} }

/* Drawer */
.drawer{
  position:fixed; inset:0 auto 0 0; width:min(360px, 86vw); z-index:60;
  background: linear-gradient(180deg, #0f0f0f 0%, #070708 100%);
  border-right:1px solid rgba(201,168,106,0.14);
  padding:18px 18px 24px;
  display:flex; flex-direction:column; gap:24px;
  transform: translateX(-100%); transition: transform .48s cubic-bezier(.77,0,.18,1);
  overflow:auto; overscroll-behavior:contain;
}
@media(min-width:480px){ .drawer{width:min(380px, 84vw); padding:22px 22px 28px; gap:28px} }
.drawer.open{ transform:translateX(0)}
.drawer-head{ display:flex; align-items:center; justify-content:space-between; gap:12px}
.drawer-head img{ width: clamp(120px, 30vw, 140px); height:auto}
.close{
  width:40px;height:40px;border-radius:50%; border:1px solid rgba(201,168,106,0.28);
  display:grid; place-items:center; color:white; transition:.3s; flex-shrink:0;
}
@media(min-width:640px){ .close{width:42px;height:42px} }
.close:hover{ background:rgba(201,168,106,0.1); color:var(--gold); transform:rotate(90deg)}
.close ion-icon{font-size:20px}
@media(min-width:640px){ .close ion-icon{font-size:22px} }
.drawer-nav{ display:flex; flex-direction:column; border-top:1px solid rgba(255,255,255,0.06); border-bottom:1px solid rgba(255,255,255,0.06); }
.drawer-nav a{
  display:flex; align-items:center; justify-content:space-between;
  padding:16px 4px; border-bottom:1px solid rgba(255,255,255,0.04);
  font-size:0.84rem; letter-spacing:0.16em; text-transform:uppercase; font-weight:600; color:rgba(255,255,255,0.82);
  transition: color .25s, padding-left .25s; min-height:48px;
}
@media(min-width:640px){ .drawer-nav a{padding:18px 4px; font-size:0.86rem; letter-spacing:0.18em} }
.drawer-nav a:last-child{border-bottom:none}
.drawer-nav a:hover{ color:var(--gold); padding-left:8px}
.drawer-foot{ margin-top:auto; display:flex; flex-direction:column; gap:10px; text-align:left}
@media(min-width:640px){ .drawer-foot{gap:12px} }
.drawer-foot .muted{ color:rgba(255,255,255,0.55); line-height:1.6; font-size:0.88rem}
@media(min-width:640px){ .drawer-foot .muted{font-size:0.92rem} }
.phone{ color:var(--gold); font-weight:700; font-size:1rem; word-break:break-all}
@media(min-width:640px){ .phone{font-size:1.05rem} }
.full{ width:100%; margin-top:8px; min-height:48px}
.overlay{
  position:fixed; inset:0; z-index:50;
  background: rgba(0,0,0,0.62); backdrop-filter: blur(4px);
  opacity:0; visibility:hidden; transition: .35s;
  border:none; padding:0; cursor:pointer;
}
.overlay.show{ opacity:1; visibility:visible}

</style>
