import type { PageServerLoad } from './$types.js';
import { data } from './data';

export const load: PageServerLoad = () => {
    return data;
};
