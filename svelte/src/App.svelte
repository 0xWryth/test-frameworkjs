<script>
	import CounterButton from "./CounterButton.svelte";

	export let counter;

	export function increment() {
		counter++;
	}

	export function decrement() {
		counter--;
	}
</script>

<div id="app">
	<span>{counter}</span>
	<div class="button-group">
		<CounterButton action={increment} label="Incrémenter" />
		<CounterButton action={decrement} label="Décrémenter" />
	</div>
</div>