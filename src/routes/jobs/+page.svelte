<script lang="ts">
	import type { PageData } from "../$types";
	import Location from "../../components/icons/Location.svelte";
	import Suitcase from "../../components/icons/Suitcase.svelte";
    export let data:PageData;
    console.log(data.jobs);
</script>

<main>
{#each data.jobs.data as job}
    <article>
        <div class="header">
            <div class="left">
                <a href={job.url} >{job.title}</a>
                <div class="line"><Location/><span>{job.location}</span></div>
                <div class="line"><Suitcase/><span>{job.company_name}</span></div>
            </div>
            <div class="grow" />
            <div class="right">
                {#each job.tags as tag}
                    <a href="/tags/{encodeURIComponent(tag)}"><span class="tag">{tag}</span></a>
                {/each}
            </div>
        </div>
    </article>
{/each}
</main>

<style>
    a {
        text-decoration: none;
    }
    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    article {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .header {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    .left {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .grow {
        flex-grow: 1;
    }
    .right {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .tag {
        background-color: #ccc;
        padding: 0.5rem;
        border-radius: 5px;
    }
    .line {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;

    }
</style>


