<script lang="ts">
	import type { PageData } from "./$types";
    export let data:PageData;
    console.log(data);
</script>

<h1>{data.countryData.name}</h1>
{data.countryData.code}
{#each data.countryData.regions as region}
    <a href={`${data.countryData.name}/${region.name}`} >{region.name}</a>
{/each}


