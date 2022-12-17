<script lang="ts">
	import Navigation from "$lib/components/Navigation.svelte";
</script>

<div class="grid min-h-screen grid-cols-12 bg-whisper md:gap-x-16">
	<Navigation />

	<main class="col-span-12 md:col-span-8 md:pt-12">
		<slot />
	</main>
</div>
