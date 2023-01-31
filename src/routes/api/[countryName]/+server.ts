import type { RequestHandler } from '@sveltejs/kit';
import { countries } from '../data';

export const GET:RequestHandler = ({ params }) => {
    const { countryName } = params;
    const country = countries.find((country) => country.name === countryName);
    if (!country) {
        return new Response('no country found', { status: 404 });
    }
    return new Response(JSON.stringify(country));
}