<script lang="ts">
	import type { PageData } from "./$types";
    export let data:PageData;
</script>

<h1>world</h1>
{#each data.worldData as country}
    <a href="/{country.name}" >{country.name}</a>
{/each}