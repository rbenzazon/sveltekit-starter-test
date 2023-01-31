import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params,fetch }) => {
    const { countryName } = params;
    const countryData = await fetch(`/api/${countryName}`).then((res) => res.json());
    return { countryName, countryData };
};