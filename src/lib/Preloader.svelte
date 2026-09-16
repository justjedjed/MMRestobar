<script>
  let { show = true } = $props();
</script>

{#if show}
<div class="preloader" role="status" aria-label="Loading">
  <div class="inner">
    <!-- Michaela's Logo -->
    <div class="logo-wrap">
      <img
        src="/assets/images/logo.webp"
        alt="Michaela's Arabic Restobar"
        class="preload-logo"
        width="220"
        height="68"
        decoding="async"
        fetchpriority="high"
      />
    </div>

    <!-- Gold loading ring -->
    <div class="ring" aria-hidden="true">
      <span class="dot"></span>
    </div>

    <div class="bar" aria-hidden="true"><span></span></div>
    <p class="hint">Preparing your table — authentic Arabian hospitality</p>
  </div>
  <div class="glow"></div>
</div>
{/if}

<style>
.preloader{
  position:fixed; inset:0; z-index:9999;
  display:grid; place-items:center;
  background:
    radial-gradient(900px 600px at 50% 45%, rgba(201,168,106,0.12), transparent 60%),
    radial-gradient(700px 700px at 50% 100%, #17130a 0%, #0a0a0b 55%, #000 100%);
  transition: opacity .6s ease, visibility .6s;
}
.inner{
  position:relative; z-index:2;
  display:flex; flex-direction:column; align-items:center; gap:18px;
  text-align:center; padding:24px;
}
.logo-wrap{
  position:relative;
  display:grid; place-items:center;
  padding:14px 18px;
  background: rgba(255,255,255,0.02);
  border:1px solid rgba(201,168,106,0.14);
  border-radius:20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,168,106,0.04);
  animation: logoFloat 3.2s ease-in-out infinite;
}
@keyframes logoFloat{
  0%,100%{ transform: translateY(0)}
  50%{ transform: translateY(-4px)}
}
.preload-logo{
  width: clamp(160px, 38vw, 240px);
  height:auto;
  display:block;
  object-fit:contain;
  filter: drop-shadow(0 0 18px rgba(201,168,106,0.28)) drop-shadow(0 6px 24px rgba(0,0,0,0.45));
  animation: logoShimmer 3s ease-in-out infinite;
}
@keyframes logoShimmer{
  0%,100%{ filter: drop-shadow(0 0 18px rgba(201,168,106,0.28)) drop-shadow(0 6px 24px rgba(0,0,0,0.45)) brightness(1)}
  50%{ filter: drop-shadow(0 0 26px rgba(201,168,106,0.42)) drop-shadow(0 8px 28px rgba(0,0,0,0.5)) brightness(1.06)}
}
.ring{
  width:92px; height:92px; border-radius:50%;
  border:1px solid rgba(201,168,106,0.18);
  display:grid; place-items:center;
  position:relative;
  background: rgba(255,255,255,0.02);
  box-shadow: 0 0 40px rgba(201,168,106,0.08), inset 0 0 20px rgba(201,168,106,0.04);
  animation: pulse 2s ease-in-out infinite;
}
.ring:before{
  content:""; position:absolute; inset:-3px; border-radius:50%;
  background: conic-gradient(from 0deg, transparent 0 45deg, #C9A86A 95deg, #E7C78A 150deg, transparent 270deg);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  padding:2px;
  animation: spin 1.6s linear infinite;
}
.dot{
  width:8px;height:8px;border-radius:50%; background:var(--gold);
  box-shadow:0 0 12px var(--gold), 0 0 22px rgba(201,168,106,0.7);
}
.bar{ width:180px; height:2px; background:rgba(255,255,255,0.08); overflow:hidden; border-radius:999px; margin-top:2px}
.bar span{
  display:block; height:100%; width:40%;
  background: linear-gradient(90deg, #8e6d20, #D4AF37, #FFE9A8);
  animation: load 1.1s ease-in-out infinite;
}
@keyframes load{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}
.hint{ font-size: clamp(0.62rem, 2vw, 0.74rem); color:rgba(255,255,255,0.42); letter-spacing:0.1em; text-transform:uppercase; padding:0 12px; line-height:1.4; max-width:32ch}
@media(min-width:640px){ .hint{letter-spacing:0.12em} }
.glow{
  position:absolute; width: min(560px, 90vw); height: min(560px, 90vw); border-radius:50%;
  background: radial-gradient(circle, rgba(201,168,106,0.09), transparent 70%);
  filter:blur(18px); animation: glowPulse 4s ease-in-out infinite;
}
@media(max-width:480px){
  .logo-wrap{padding:10px 14px; border-radius:16px}
  .preload-logo{width: clamp(150px, 44vw, 190px)}
  .ring{width:78px; height:78px}
  .bar{width:140px}
  .inner{padding:16px; gap:14px}
}
@keyframes glowPulse{0%,100%{transform:scale(.9); opacity:.6}50%{transform:scale(1.08); opacity:1}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{0%,100%{transform:scale(.98)}50%{transform:scale(1.03)}}
</style>
