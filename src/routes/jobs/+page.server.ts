import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const jobs = await fetch(`https://arbeitnow.com/api/job-board-api`).then((res) => res.json());
    return { jobs };
};