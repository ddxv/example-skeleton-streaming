<script lang="ts">
	import type { PageData } from '../$types';
	
	export let data: PageData;
</script>

<div class='p-8'>

	<h1>Test: Hello show immediately, World after delay.</h1>
		<div class='p-8'>
			<div>{data.first}</div>

			{#await data.second}
				Loading...
			{:then comments}
					<p>{comments}</p>
			{:catch error}
				<p>error loading message: {error.message}</p>
			{/await}
		</div>

</div>