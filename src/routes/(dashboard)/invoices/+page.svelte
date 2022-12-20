<script lang="ts">
	import { onMount } from "svelte";
	import { invoices, loadInvoices } from "$lib/stores/InvoiceStore";
	import Search from "$lib/components/Search.svelte";
	import CircledAmount from "$lib/components/CircledAmount.svelte";
	import Invoice from "$lib/components/Invoice.svelte";

	onMount(() => {
		loadInvoices();
	});
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

	{#each $invoices as invoice}
		<Invoice
			status={invoice.status}
			dueDate={invoice.dueDate}
			number={invoice.number}
			clientName={invoice.client.name}
			amount={invoice.lineItems?.reduce(
				(amount, lineItem) => amount + lineItem.quantity * lineItem.amount,
				0
			) ?? 0}
		/>
	{/each}
</div>

<div>
	<CircledAmount label="Total" amount="$1,144.00" />
</div>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-snug;
	}
</style>
