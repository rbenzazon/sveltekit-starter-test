import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params,fetch }) => {
    const { countryName, regionName } = params;
    const regionData = await fetch(`/api/${countryName}/${regionName}`).then((res) => res.json());
    return { countryName, regionName, regionData };
};