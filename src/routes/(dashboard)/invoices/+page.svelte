<script lang="ts">
	import Search from "$lib/components/Search.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import View from "$lib/components/Icon/View.svelte";
	import ThreeDots from "$lib/components/Icon/ThreeDots.svelte";
	import CircledAmount from "$lib/components/CircledAmount.svelte";
</script>

<svelte:head>
	<title>Invoices | The Dollar Holler</title>
</svelte:head>

<div
	class="mb-7 flex flex-col-reverse items-start justify-between gap-y-6 md:flex-row md:items-center md:gap-y-4 lg:mb-16"
>
	<Search />
	<div>
		<button
			class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 font-sansSerif text-base font-black text-white shadow-color transition-all hover:-translate-y-2 hover:shadow-colorHover lg:px-10 lg:py-3 lg:text-xl"
			>+ Invoice</button
		>
	</div>
</div>

<div>
	<div class="table-header invoice-table hidden text-daisyBush lg:grid">
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3>Amount</h3>
		<div />
		<div />
	</div>

	<div
		class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
	>
		<div class="status"><Tag label="Draft" variant="inverted" class="ml-auto lg:ml-0" /></div>
		<div class="due-date text-sm lg:text-lg">8/1/2022</div>
		<div class="invoice-number text-sm lg:text-lg">12345</div>
		<div class="client-name text-base font-bold lg:text-xl">Compressed.fm</div>
		<div class="amount text-right font-mono text-sm font-bold lg:text-lg">$504.00</div>
		<div class="view-button lg:center hidden text-sm lg:text-lg">
			<a href="/" class="text-pastelPurple hover:text-daisyBush"><View /></a>
		</div>
		<div class="more-button lg:center hidden text-sm lg:text-lg">
			<button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
		</div>
	</div>
</div>

<div>
	<CircledAmount label="Total" amount="$1,144.00" />
</div>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug;
	}

	.invoice-row {
		grid-template-areas:
			"invoice-number invoice-number"
			"client-name amount"
			"due-date status";
	}

	@media (min-width: 1024px) {
		.invoice-row {
			grid-template-areas: "status due-date invoice-number client-name amount view-button more-button";
		}
	}

	.invoice-row .status {
		grid-area: status;
	}

	.invoice-row .due-date {
		grid-area: due-date;
	}

	.invoice-row .invoice-number {
		grid-area: invoice-number;
	}

	.invoice-row .client-name {
		grid-area: client-name;
	}

	.invoice-row .amount {
		grid-area: amount;
	}

	.invoice-row .view-button {
		grid-area: view-button;
	}

	.invoice-row .more-button {
		grid-area: more-button;
	}
</style>
