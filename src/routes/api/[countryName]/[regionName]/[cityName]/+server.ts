import type { RequestHandler } from '@sveltejs/kit';
import { countries } from '../../../data';

export const GET:RequestHandler = ({ params }) => {
    const { countryName, regionName, cityName } = params;
    const country = countries.find((country) => country.name === countryName);
    if (!country) {
        return new Response('no country found', { status: 404 });
    }
    const region = country.regions.find((region) => region.name === regionName);
    if (!region) {
        return new Response('no region found', { status: 404 });
    }
    const city = region.cities.find((city) => city.name === cityName);
    if (!city) {
        return new Response('no city found', { status: 404 });
    }
    return new Response(JSON.stringify(city));
}