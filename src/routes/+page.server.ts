import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ fetch }) => {
    try{
        const worldData = await fetch(`/api`).then((res) => res.json());
        return { worldData };
    }catch(e){
        return { worldData:[] };
    }
    
};