
import type { RequestHandler } from '@sveltejs/kit';
import { countries } from './data';

export const GET:RequestHandler = () => {
    return new Response(JSON.stringify(countries));
}