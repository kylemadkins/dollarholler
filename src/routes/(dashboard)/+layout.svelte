<script lang="ts">
	import Navigation from "$lib/components/Navigation.svelte";
</script>

<div class="grid min-h-screen grid-cols-12 gap-x-16 bg-whisper">
	<Navigation />

	<main class="col-span-8 pt-12">
		<slot />
	</main>
</div>
