<script lang="ts">
	const gmailLink: string =
		'https://mail.google.com/mail/?view=cm&fs=1&to=michaelarestobar@gmail.com&su=Table%20Reservation&body=Hello%20Michaela%20Arabic%20Restobar,%0A%0AI%20would%20like%20to%20reserve%20a%20table.%0A%0AReservation%20Details:%0AName:%20%0ADate:%20%0ATime:%20%0ANumber%20of%20Guests:%20%0AContact%20Number:%20';
</script>

<section id="reservation" class="section reservation">
	<div class="container">
		<div class="frame">
			<div class="left">
				<p class="kicker">Online Reservation</p>
				<h2 class="headline">Book a <em>Table</em></h2>
				<p class="lead">
					To reserve a table, simply send us an email with your preferred date, time, number of
					guests, and any special requests. We'll confirm within minutes.
				</p>
				<ul class="bullets">
					<li><ion-icon name="time-outline"></ion-icon> Daily 10:00 AM — 12:00 Midnight</li>
					<li><ion-icon name="people-outline"></ion-icon> Groups & family gatherings welcome</li>
					<li><ion-icon name="restaurant-outline"></ion-icon> Dine-in & take-out available</li>
				</ul>
				<a href={gmailLink} target="_blank" rel="noopener" class="btn btn-primary large">
					Reserve Your Table <ion-icon name="mail-outline"></ion-icon>
				</a>
				<span class="note">Via Gmail — opens with pre-filled reservation details</span>
			</div>

			<div class="right">
				<div class="card">
					<h3>Contact Us</h3>
					<div class="block">
						<span class="label">Booking Request</span>
						<a href="tel:+639241846483" class="value gold">+63 924 184 6483</a>
						<a href="tel:+639815037298" class="value small">For Take-Out: +63 981 503 7298</a>
					</div>
					<div class="sep"></div>
					<div class="block">
						<span class="label">Email</span>
						<a href="mailto:michaelarestobar@gmail.com" class="value">michaelarestobar@gmail.com</a>
					</div>
					<div class="sep"></div>
					<div class="block">
						<span class="label">Location</span>
						<address class="value small">
							Prk. 3A Karaus, San Francisco<br />Agusan del Sur 8501
						</address>
					</div>
					<div class="hours">Monday to Sunday<br />10:00 AM — 12:00 Midnight</div>
					<a
						href="https://www.google.com/maps/place/Michaelas+Arabic+Restobar/@8.4918119,125.9739134,959m/data=!3m2!1e3!4b1!4m6!3m5!1s0x32fdfd0038cf762b:0xe91bce6f4fd84100!8m2!3d8.4918066!4d125.9764883"
						target="_blank"
						rel="noopener"
						class="map">Open in Google Maps <ion-icon name="open-outline"></ion-icon></a
					>
				</div>
				<div class="pattern"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.reservation {
		background: #0e0e10;
		border-top: 1px solid rgba(255, 255, 255, 0.04);
	}
	.frame {
		display: grid;
		overflow: hidden;
		background: var(--bg-card);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 20px;
		box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
	}
	@media (min-width: 640px) {
		.frame {
			border-radius: 28px;
		}
	}
	@media (min-width: 1024px) {
		.frame {
			border-radius: 32px;
		}
	}
	@media (min-width: 900px) {
		.frame {
			grid-template-columns: 1.05fr 0.85fr;
		}
	}
	.left {
		padding: clamp(20px, 5vw, 48px);
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	@media (min-width: 640px) {
		.left {
			gap: 16px;
		}
	}
	.kicker {
		font-size: 0.62rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--gold);
		font-weight: 700;
	}
	@media (min-width: 640px) {
		.kicker {
			font-size: 0.68rem;
			letter-spacing: 0.28em;
		}
	}
	.headline {
		font-size: clamp(1.85rem, 6vw, 3rem);
		line-height: 1;
	}
	.headline em {
		font-family: var(--font-heading);
		font-style: italic;
		color: var(--gold);
		font-weight: 500;
	}
	.lead {
		color: var(--muted);
		max-width: 52ch;
		font-size: clamp(0.92rem, 2.2vw, 1rem);
		line-height: 1.65;
	}
	@media (min-width: 640px) {
		.lead {
			font-size: 1rem;
			line-height: 1.7;
		}
	}
	.bullets {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin: 8px 0 4px;
	}
	@media (min-width: 640px) {
		.bullets {
			gap: 10px;
			margin: 10px 0 6px;
		}
	}
	.bullets li {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		color: rgba(255, 255, 255, 0.72);
		font-size: 0.9rem;
		line-height: 1.4;
	}
	@media (min-width: 640px) {
		.bullets li {
			font-size: 0.95rem;
		}
	}
	.bullets ion-icon {
		color: var(--gold);
		margin-top: 2px;
		flex-shrink: 0;
	}
	.large {
		margin-top: 6px;
		padding: 16px 22px;
		width: 100%;
		max-width: 100%;
	}
	@media (min-width: 480px) {
		.large {
			width: auto;
			max-width: 360px;
			padding: 18px 26px;
			margin-top: 8px;
		}
	}
	.note {
		font-size: 0.74rem;
		color: var(--muted);
		margin-top: -4px;
		line-height: 1.4;
		text-align: center;
	}
	@media (min-width: 480px) {
		.note {
			text-align: left;
			font-size: 0.78rem;
		}
	}
	.right {
		position: relative;
		background: #111113;
		padding: clamp(20px, 5vw, 48px);
		display: grid;
		place-items: center;
		overflow: hidden;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}
	@media (min-width: 900px) {
		.right {
			border-top: none;
			border-left: 1px solid rgba(255, 255, 255, 0.06);
		}
	}
	.card {
		position: relative;
		z-index: 1;
		width: 100%;
		max-width: 420px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 20px;
		padding: 22px 18px;
		backdrop-filter: blur(10px);
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	@media (min-width: 640px) {
		.card {
			border-radius: 24px;
			padding: 28px;
			gap: 18px;
		}
	}
	.card h3 {
		font-family: var(--font-heading);
		font-size: clamp(1.5rem, 4vw, 1.9rem);
		line-height: 1;
	}
	.block {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.label {
		font-size: 0.62rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--gold);
		font-weight: 700;
	}
	@media (min-width: 640px) {
		.label {
			font-size: 0.68rem;
			letter-spacing: 0.22em;
		}
	}
	.value {
		font-size: 0.92rem;
		color: white;
		word-break: break-word;
		line-height: 1.4;
	}
	@media (min-width: 640px) {
		.value {
			font-size: 0.98rem;
		}
	}
	.value.gold {
		color: var(--gold);
		font-size: 1.1rem;
		font-weight: 700;
	}
	@media (min-width: 640px) {
		.value.gold {
			font-size: 1.22rem;
		}
	}
	.value.small {
		font-size: 0.86rem;
		color: rgba(255, 255, 255, 0.78);
	}
	@media (min-width: 640px) {
		.value.small {
			font-size: 0.92rem;
		}
	}
	.sep {
		width: 40px;
		height: 1px;
		background: rgba(201, 168, 106, 0.22);
		margin: 0 auto;
	}
	.hours {
		font-size: 0.84rem;
		color: var(--muted);
		line-height: 1.6;
	}
	@media (min-width: 640px) {
		.hours {
			font-size: 0.88rem;
		}
	}
	.map {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-top: 4px;
		padding: 12px 14px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 700;
		transition: 0.25s;
		width: 100%;
		max-width: 100%;
		text-align: center;
	}
	@media (min-width: 640px) {
		.map {
			padding: 12px 16px;
			font-size: 0.78rem;
			letter-spacing: 0.12em;
			width: auto;
		}
	}
	.map:hover {
		border-color: var(--gold);
		color: var(--gold);
	}
	.pattern {
		position: absolute;
		inset: 0;
		opacity: 0.06;
		background-image: url('/assets/images/form-pattern.webp');
		background-size: 320px;
		background-repeat: repeat;
	}
</style>
