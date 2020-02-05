<script lang="ts">
  import {tokenize} from './tokenizer/tokenizer';
  import {parseTokensIntoAst} from './parser/parser';

	let displayWelcomeMessage = !localStorage.getItem("hideWelcomeMessage");

	const hideWelcomeMessage = () => {
		localStorage.setItem("hideWelcomeMessage", true);
		displayWelcomeMessage = false;
	}

  window.onExpressionChange = event => {
    console.log('onExpressionChange', event);
    const expression = event.target.value;

    console.log('expression', expression);

    const tokens = tokenize(event.target.value);

    console.log('tokens', tokens);

    const ast = parseTokensIntoAst(tokens);
    
    console.log('Ayyeee', ast);
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

	<input class="expression" placeholder="Expression..." onchange="onExpressionChange(event)" />
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
