<script lang="ts">
	interface Props {
		visible?: boolean;
	}

	let { visible = false }: Props = $props();
</script>

<a href="#top" class="btt" class:show={visible} aria-label="Back to top">
	<ion-icon name="chevron-up"></ion-icon>
</a>

<style>
	.btt {
		position: fixed;
		right: 12px;
		bottom: 12px;
		z-index: 35;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--gold);
		color: #0a0a0b;
		display: grid;
		place-items: center;
		border: 1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
		opacity: 0;
		visibility: hidden;
		transform: translateY(8px);
		transition: all 0.35s var(--ease);
	}
	@media (min-width: 640px) {
		.btt {
			right: 18px;
			bottom: 18px;
			width: 46px;
			height: 46px;
		}
	}
	.btt.show {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
	.btt:hover {
		transform: translateY(-2px);
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42);
	}
	.btt ion-icon {
		font-size: 18px;
	}
	@media (min-width: 640px) {
		.btt ion-icon {
			font-size: 20px;
		}
	}
	@media (max-width: 480px) {
		.btt {
			right: 10px;
			bottom: 10px;
			width: 42px;
			height: 42px;
		}
	}
</style>
