<script>
	export let data
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if !data.session}
	<form method="POST" action="?/login">
		<label>
			Email
			<input name="email" type="email" />
		</label>
		<label>
			Password
			<input name="password" type="password" />
		</label>
		<button formaction="/auth?/login">Login</button>

		<button formaction="/auth?/discord&provider=discord">Login with Discord</button>
	</form>
{:else}
	<form method="POST" action="?/login">
		You are logged in!
		<button formaction="/auth?/logout">Logout</button>
	</form>
{/if}
