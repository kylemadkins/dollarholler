<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
	let id: string = data.id;
</script>

<h1>Invoice ID#{id}</h1>
