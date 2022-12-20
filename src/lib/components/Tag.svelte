<script lang="ts">
	export let label: string;
	export let variant: "inverted" | "success" | "alert" | "archived";
</script>

<div
	class={`text-md w-20 rounded-full border-1 border-pastelPurple text-center font-bold capitalize text-pastelPurple ${variant} ${$$props.class}`}
>
	{label}
</div>

<style lang="postcss">
	.inverted {
		@apply border-pastelPurple text-pastelPurple;
	}

	.success {
		@apply border-robinEggBlue bg-robinEggBlue text-blueGem;
	}

	.alert {
		@apply border-scarlet bg-scarlet text-goldenFizz;
	}

	.archived {
		@apply border-pastelPurple bg-pastelPurple text-white;
	}
</style>
