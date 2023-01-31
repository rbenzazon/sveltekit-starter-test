import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params,fetch }) => {
    const { countryName, regionName, cityName } = params;
    const cityData = await fetch(`/api/${countryName}/${regionName}/${cityName}`).then((res) => res.json());
    return { countryName, regionName, cityName, cityData };
};