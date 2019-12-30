<script>
	import {wasmBrowserInstantiate} from './instantiate-wasm.js';

	const wasmTask = async () => {
		const response = await wasmBrowserInstantiate('index.wasm');

		console.log('Wasm instantiate response:', response);
		console.log('Wasm add response:', response.instance.exports.add(2.0, 2.0));
	};

	let displayWelcomeMessage = !localStorage.getItem("hideWelcomeMessage");

	const hideWelcomeMessage = () => {
		localStorage.setItem("hideWelcomeMessage", true);
		displayWelcomeMessage = false;
	}
</script>

<main>
	{#if displayWelcomeMessage}
		<div class="welcomeMessage">
			<h3>Welcome to CrunchKey!</h3>

			<br />

			To get started, you can enter any expression in the field below.<br />
			CrunchKey will instantly calculate and display the result!<br /><br />

			You can use any of the following standard mathematical symbols:<br /><br />

			+ - * / e ^ ln() log() sqrt()<br /><br />

			<button on:click={hideWelcomeMessage}>Hide This Message</button>
		</div>
	{/if}

	<input class="expression" placeholder="Expression..." />
</main>

<style>
	main {
		max-width: 400px;
		text-align: center;

		margin-left: auto;
		margin-right: auto;

		padding: 1rem;
	}

	.welcomeMessage {
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	.expression {
		width: 100%;
		padding: 1rem;
	}
</style>
