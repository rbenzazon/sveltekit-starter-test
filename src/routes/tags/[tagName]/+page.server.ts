import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params,fetch }) => {
    const { tagName } = params;
    console.log("tagName",tagName);
    const decodedTag = decodeURIComponent(tagName);
    
    const jobs = await fetch(`https://arbeitnow.com/api/job-board-api`).then((res) => res.json());
    console.log("tagName",tagName);
    console.log("decodedTag",decodedTag);
    
    jobs.data = jobs.data.filter((job) => job.tags.includes(decodedTag));
    return { jobs };
};