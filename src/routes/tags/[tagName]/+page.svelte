<script lang="ts">
	import type { PageData } from "../../$types";
    export let data:PageData;
    console.log(data.jobs);
</script>
<main>
{#each data.jobs.data as job}
    <article>
        <div class="header">
            <div class="left">
                <a href={job.url} >{job.title}</a>
                <span>{job.location}</span>
            </div>
            <div class="grow" />
            <div class="right">
                <span>{job.company_name}</span>
                {#each job.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        </div>
        <p>{@html job.description}</p>
    </article>
{/each}
</main>

<style>
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
</style>





