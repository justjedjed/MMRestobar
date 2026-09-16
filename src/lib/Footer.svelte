<script lang="ts">
	const year: number = new Date().getFullYear();
</script>

<footer id="contact" class="footer" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="bg" style="background-image:url('/assets/images/footerbg.webp')" aria-hidden="true"></div>
	<div class="overlay" aria-hidden="true"></div>
	<div class="hairline" aria-hidden="true"><span></span></div>

	<div class="container">
		<!-- Top eyebrow -->
		<div class="eyebrow-row">
			<span class="diamond"></span>
			<p class="eyebrow">Michaela's Arabic Restobar — San Francisco, Agusan del Sur</p>
			<span class="diamond"></span>
		</div>

		<!-- Main grid -->
		<div class="main">
			<!-- Brand -->
			<div class="col brand-col">
				<a href="#home" class="logo" aria-label="Home">
					<img
						src="/assets/images/logofooter.webp"
						alt="Michaela's Arabic Restobar"
						width="220"
						height="240"
						loading="lazy"
					/>
				</a>
				<p class="tagline">
					Authentic Arabian flavors — slow-cooked biryani, smoky kebabs & karak tea. Made with love,
					served with care.
				</p>
				<address class="addr">
					<ion-icon name="location-outline" aria-hidden="true"></ion-icon>
					<span>Prk-3A Karaus, San Francisco<br />Agusan del Sur 8501</span>
				</address>
				<div class="badges">
					<span><ion-icon name="time-outline"></ion-icon> Daily 10:00 AM–12:00 MN</span>
					<span><ion-icon name="restaurant-outline"></ion-icon> Dine-in • Take-out • Events</span>
				</div>
			</div>

			<!-- Explore -->
			<div class="col">
				<h3 class="col-title">Explore</h3>
				<nav class="fnav" aria-label="Footer navigate">
					<a href="#home"><span>Home</span><ion-icon name="arrow-forward-outline"></ion-icon></a>
					<a href="#menu"><span>Menus</span><ion-icon name="arrow-forward-outline"></ion-icon></a>
					<a href="#reservation"
						><span>Book a Table</span><ion-icon name="arrow-forward-outline"></ion-icon></a
					>
					<a href="#contact"><span>Contact</span><ion-icon name="arrow-forward-outline"></ion-icon></a>
					<a href="https://www.facebook.com/profile.php?id=61585706755256" target="_blank" rel="noopener"
						><span>Facebook</span><ion-icon name="open-outline"></ion-icon></a
					>
					<a href="https://www.tiktok.com/@johnmer.marketing" target="_blank" rel="noopener"
						><span>TikTok</span><ion-icon name="open-outline"></ion-icon></a
					>
					<a href="https://www.instagram.com/mmgroupcompanies/" target="_blank" rel="noopener"
						><span>Instagram</span><ion-icon name="open-outline"></ion-icon></a
					>
					<a href="https://www.youtube.com/@MMGroupofCompaniesOfficial" target="_blank" rel="noopener"
						><span>YouTube</span><ion-icon name="open-outline"></ion-icon></a
					>
					<a
						href="https://www.google.com/maps/place/Michaelas+Arabic+Restobar/@8.4918119,125.9739134,959m/data=!3m2!1e3!4b1!4m6!3m5!1s0x32fdfd0038cf762b:0xe91bce6f4fd84100!8m2!3d8.4918066!4d125.9764883"
						target="_blank"
						rel="noopener"><span>Google Maps</span><ion-icon name="open-outline"></ion-icon></a
					>
				</nav>
			</div>

			<!-- Contact -->
			<div class="col">
				<h3 class="col-title">Contact</h3>
				<ul class="contact-list">
					<li>
						<span class="icon"><ion-icon name="call-outline"></ion-icon></span>
						<div>
							<span class="label">Booking Request</span>
							<a href="tel:+639241846483" class="value">+63 924 184 6483</a>
						</div>
					</li>
					<li>
						<span class="icon"><ion-icon name="bag-handle-outline"></ion-icon></span>
						<div>
							<span class="label">Take-Out</span>
							<a href="tel:+639815037298" class="value">+63 981 503 7298</a>
						</div>
					</li>
					<li>
						<span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
						<div>
							<span class="label">Email</span>
							<a href="mailto:michaelarestobar@gmail.com" class="value email"
								>michaelarestobar@gmail.com</a
							>
						</div>
					</li>
				</ul>
				<div class="hours-card">
					<div class="hours-head"><ion-icon name="time-outline"></ion-icon> Opening Hours</div>
					<div class="hours-grid">
						<span>Monday – Sunday</span><strong>10:00 AM — 12:00 MN</strong>
					</div>
				</div>
			</div>

			<!-- Visit / CTA -->
			<div class="col">
				<h3 class="col-title">Visit Us</h3>
				<div class="visit-card">
					<div class="map-thumb">
						<img src="/assets/images/footer-bg.webp" alt="" loading="lazy" aria-hidden="true" />
						<a
							href="https://www.google.com/maps/place/Michaelas+Arabic+Restobar/@8.4918119,125.9739134,959m/data=!3m2!1e3!4b1!4m6!3m5!1s0x32fdfd0038cf762b:0xe91bce6f4fd84100!8m2!3d8.4918066!4d125.9764883"
							target="_blank"
							rel="noopener"
							class="map-btn"
						>
							<ion-icon name="navigate-outline"></ion-icon> Open Maps
						</a>
					</div>
					<p class="visit-text">
						Find us at Karaus. Easy parking, family-friendly dining, warm Arabian hospitality.
					</p>
					<a href="#reservation" class="btn btn-primary full"
						><ion-icon name="calendar-outline"></ion-icon> Reserve Table</a
					>
					<a href="mailto:michaelarestobar@gmail.com" class="btn btn-ghost full">Send Email</a>
				</div>
			</div>
		</div>

		<div class="divider" aria-hidden="true">
			<span class="line"></span>
			<span class="diamonds"><i></i><i></i><i></i><i></i><i></i><i></i></span>
			<span class="line"></span>
		</div>

		<div class="bottom">
			<p class="copy">
				© {year} Michaela's Arabic Restobar. All rights reserved. Crafted with love — Agusan del Sur.
			</p>
			<div class="bottom-right">
				<span class="craft">Authentic • Hygienic • Heartfelt</span>
				<div class="social">
					<a
						href="https://www.facebook.com/profile.php?id=61585706755256"
						target="_blank"
						rel="noopener"
						aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a
					>
					<a
						href="https://www.tiktok.com/@johnmer.marketing"
						target="_blank"
						rel="noopener"
						aria-label="TikTok"><ion-icon name="logo-tiktok"></ion-icon></a
					>
					<a
						href="https://www.instagram.com/mmgroupcompanies/"
						target="_blank"
						rel="noopener"
						aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a
					>
					<a
						href="https://www.youtube.com/@MMGroupofCompaniesOfficial"
						target="_blank"
						rel="noopener"
						aria-label="YouTube"><ion-icon name="logo-youtube"></ion-icon></a
					>
					<a
						href="https://www.google.com/maps/place/Michaelas+Arabic+Restobar/@8.4918119,125.9739134,959m/data=!3m2!1e3!4b1!4m6!3m5!1s0x32fdfd0038cf762b:0xe91bce6f4fd84100!8m2!3d8.4918066!4d125.9764883"
						target="_blank"
						rel="noopener"
						aria-label="Google Maps"><ion-icon name="location"></ion-icon></a
					>
					<a href="mailto:michaelarestobar@gmail.com" aria-label="Email"
						><ion-icon name="mail-outline"></ion-icon></a
					>
					<a href="tel:+639241846483" aria-label="Call"><ion-icon name="call-outline"></ion-icon></a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
	.footer {
		position: relative;
		overflow: hidden;
		isolation: isolate;
		padding: 0 0 clamp(22px, 3vw, 32px);
		color: rgba(255, 255, 255, 0.84);
		border-top: 1px solid rgba(201, 168, 106, 0.16);
		background: #070708;
	}
	.bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		filter: brightness(0.28) saturate(0.92) contrast(1.05);
	}
	.overlay {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(1100px 520px at 50% 0%, rgba(201, 168, 106, 0.08), transparent 60%),
			linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.55) 0%,
				rgba(0, 0, 0, 0.72) 45%,
				rgba(0, 0, 0, 0.88) 100%
			);
	}
	.hairline {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(201, 168, 106, 0.55), transparent);
		opacity: 0.9;
	}
	.hairline span {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		width: 10px;
		height: 10px;
		border: 1px solid var(--gold);
		background: #0a0a0b;
		box-shadow: 0 0 14px rgba(201, 168, 106, 0.45);
	}
	.container {
		position: relative;
		z-index: 1;
		padding-top: clamp(28px, 5vw, 52px);
	}

	.eyebrow-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		margin-bottom: clamp(22px, 4vw, 36px);
		text-align: center;
		flex-wrap: wrap;
	}
	.eyebrow-row .eyebrow {
		color: var(--gold);
		font-size: 0.68rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		font-weight: 700;
		line-height: 1.4;
	}
	.diamond {
		width: 7px;
		height: 7px;
		border: 1px solid var(--gold);
		transform: rotate(45deg);
		flex-shrink: 0;
		opacity: 0.7;
		box-shadow: 0 0 8px rgba(201, 168, 106, 0.35);
	}

	.main {
		display: grid;
		gap: clamp(28px, 4vw, 36px);
		grid-template-columns: 1fr;
		align-items: start;
	}
	@media (min-width: 640px) {
		.main {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1024px) {
		.main {
			grid-template-columns: 1.35fr 0.85fr 1fr 1fr;
			gap: 32px;
		}
	}
	@media (min-width: 1280px) {
		.main {
			gap: 40px;
		}
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: 16px;
		min-width: 0;
	}
	.col-title {
		font-family: var(--font-heading);
		font-size: 1.18rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: white;
		position: relative;
		padding-bottom: 12px;
	}
	.col-title:after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 32px;
		height: 1.5px;
		background: var(--gold);
		border-radius: 999px;
		opacity: 0.9;
	}
	.brand-col {
		align-items: flex-start;
	}
	.logo {
		display: block;
	}
	.logo img {
		width: clamp(160px, 18vw, 200px);
		height: auto;
		filter: drop-shadow(0 10px 28px rgba(0, 0, 0, 0.55));
		transition: transform 0.3s;
	}
	.logo:hover img {
		transform: translateY(-2px);
	}
	.tagline {
		color: rgba(255, 255, 255, 0.66);
		line-height: 1.7;
		font-size: clamp(0.92rem, 1.2vw, 0.98rem);
		max-width: 34ch;
	}
	.addr {
		display: flex;
		gap: 10px;
		align-items: flex-start;
		color: rgba(255, 255, 255, 0.78);
		font-style: normal;
		line-height: 1.6;
		font-size: 0.95rem;
	}
	.addr ion-icon {
		color: var(--gold);
		font-size: 18px;
		flex-shrink: 0;
		margin-top: 3px;
	}
	.badges {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 4px;
	}
	.badges span {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: rgba(255, 255, 255, 0.62);
		font-size: 0.84rem;
		letter-spacing: 0.06em;
	}
	.badges ion-icon {
		color: var(--gold);
		font-size: 15px;
	}

	.fnav {
		display: flex;
		flex-direction: column;
	}
	.fnav a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		padding: 12px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		color: rgba(255, 255, 255, 0.74);
		font-size: 0.92rem;
		transition: all 0.25s;
	}
	.fnav a:last-child {
		border-bottom: none;
	}
	.fnav a:hover {
		color: var(--gold);
		padding-left: 6px;
	}
	.fnav a span {
		letter-spacing: 0.02em;
	}
	.fnav ion-icon {
		font-size: 14px;
		opacity: 0.7;
		flex-shrink: 0;
	}
	.fnav a:hover ion-icon {
		opacity: 1;
		transform: translateX(2px);
		transition: transform 0.25s;
	}

	.contact-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.contact-list li {
		display: flex;
		gap: 14px;
		align-items: flex-start;
	}
	.contact-list .icon {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		flex-shrink: 0;
		display: grid;
		place-items: center;
		background: rgba(201, 168, 106, 0.09);
		border: 1px solid rgba(201, 168, 106, 0.18);
		color: var(--gold);
	}
	.contact-list ion-icon {
		font-size: 18px;
	}
	.label {
		display: block;
		font-size: 0.68rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--gold);
		font-weight: 700;
		line-height: 1;
	}
	.value {
		display: block;
		margin-top: 6px;
		color: white;
		font-weight: 600;
		word-break: break-word;
		font-size: clamp(0.95rem, 1.3vw, 1.02rem);
	}
	.value.email {
		font-size: 0.92rem;
		font-weight: 500;
	}
	.value:hover {
		color: var(--gold);
	}
	.hours-card {
		margin-top: 6px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		padding: 14px 16px;
		backdrop-filter: blur(8px);
	}
	.hours-head {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.74rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		font-weight: 700;
		color: var(--gold);
	}
	.hours-grid {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-top: 10px;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.72);
		line-height: 1.5;
	}
	.hours-grid strong {
		color: white;
		font-weight: 700;
		letter-spacing: 0.01em;
	}

	.visit-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 20px;
		overflow: hidden;
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	.map-thumb {
		position: relative;
		height: 148px;
		overflow: hidden;
		background: #18181a;
	}
	.map-thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.82) saturate(1.05);
		transition: transform 0.6s var(--ease);
	}
	.visit-card:hover .map-thumb img {
		transform: scale(1.04);
	}
	.map-btn {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: rgba(10, 10, 11, 0.88);
		border: 1px solid rgba(201, 168, 106, 0.22);
		color: white;
		padding: 10px 16px;
		border-radius: 999px;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		font-weight: 700;
		backdrop-filter: blur(8px);
		white-space: nowrap;
		transition: all 0.25s;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
	}
	.map-btn:hover {
		background: var(--gold);
		border-color: var(--gold);
		color: #0a0a0b;
	}
	.visit-text {
		padding: 14px 16px 0;
		color: rgba(255, 255, 255, 0.66);
		font-size: 0.9rem;
		line-height: 1.6;
	}
	.visit-card .btn {
		margin: 12px 16px 0;
	}
	.visit-card .btn:last-child {
		margin-bottom: 16px;
	}
	.full {
		width: calc(100% - 32px);
		justify-content: center;
	}
	@media (max-width: 640px) {
		.full {
			width: calc(100% - 32px);
		}
	}

	.divider {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
		margin: clamp(28px, 5vw, 44px) 0 clamp(18px, 3vw, 24px);
	}
	.divider .line {
		height: 1px;
		flex: 1;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
	}
	.diamonds {
		display: flex;
		gap: 8px;
		align-items: center;
	}
	.diamonds i {
		width: 6px;
		height: 6px;
		border: 1px solid var(--gold);
		transform: rotate(45deg);
		opacity: 0.55;
		display: block;
	}
	.diamonds i:nth-child(3),
	.diamonds i:nth-child(4) {
		width: 8px;
		height: 8px;
		opacity: 0.9;
		background: rgba(201, 168, 106, 0.12);
		box-shadow: 0 0 8px rgba(201, 168, 106, 0.3);
	}

	.bottom {
		display: flex;
		flex-direction: column;
		gap: 16px;
		align-items: center;
		text-align: center;
		padding-top: 18px;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}
	@media (min-width: 768px) {
		.bottom {
			flex-direction: row;
			justify-content: space-between;
			text-align: left;
		}
	}
	.copy {
		color: rgba(255, 255, 255, 0.48);
		font-size: clamp(0.78rem, 1.1vw, 0.84rem);
		line-height: 1.6;
		max-width: 48ch;
	}
	.bottom-right {
		display: flex;
		flex-direction: column;
		gap: 14px;
		align-items: center;
	}
	@media (min-width: 768px) {
		.bottom-right {
			align-items: flex-end;
		}
	}
	.craft {
		color: var(--gold);
		font-size: 0.68rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		font-weight: 700;
		opacity: 0.9;
	}
	.social {
		display: flex;
		gap: 10px;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}
	.social a {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		color: rgba(255, 255, 255, 0.82);
		transition: all 0.25s;
		backdrop-filter: blur(6px);
	}
	.social a:hover {
		transform: translateY(-2px);
		border-color: var(--gold);
		color: var(--gold);
		background: rgba(201, 168, 106, 0.1);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
	}
	.social ion-icon {
		font-size: 16px;
	}

	/* Very small phones */
	@media (max-width: 380px) {
		.main {
			gap: 28px;
		}
		.contact-list .icon {
			width: 38px;
			height: 38px;
		}
		.map-thumb {
			height: 132px;
		}
	}

	/* Large screens */
	@media (min-width: 1536px) {
		.container {
			width: min(calc(100% - 64px), 1360px);
		}
	}
</style>
