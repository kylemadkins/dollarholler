<script lang="ts">
	import Tag from "$lib/components/Tag.svelte";
	import View from "$lib/components/Icon/View.svelte";
	import ThreeDots from "$lib/components/Icon/ThreeDots.svelte";

	export let status: InvoiceStatus;
	export let dueDate: string;
	export let number: string;
	export let clientName: string;
	export let amount: number;

	let variant = {
		draft: "inverted",
		sent: "success",
		paid: "archived"
	}[status] as "inverted" | "success" | "archived";

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0
	});
</script>

<div
	class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
>
	<div class="status"><Tag label={status} {variant} class="ml-auto lg:ml-0" /></div>
	<div class="due-date text-sm lg:text-lg">{dueDate}</div>
	<div class="invoice-number text-sm lg:text-lg">{number}</div>
	<div class="client-name text-base font-bold lg:text-xl">{clientName}</div>
	<div class="amount text-right font-mono text-sm font-bold lg:text-lg">
		{formatter.format(amount)}
	</div>
	<div class="view-button lg:center hidden text-sm lg:text-lg">
		<a href="/" class="text-pastelPurple hover:text-daisyBush"><View /></a>
	</div>
	<div class="more-button lg:center hidden text-sm lg:text-lg">
		<button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
	</div>
</div>

<style lang="postcss">
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
