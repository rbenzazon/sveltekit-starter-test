<script lang="ts">
	import type { PageData } from "./$types";
    export let data:PageData;
    console.log(data);
</script>

<h1>{data.regionData.name}</h1>
{data.regionData.code}
{#each data.regionData.cities as city}
    <a href={`${data.regionData.name}/${city.name}`} >{city.name}</a>
{/each}


