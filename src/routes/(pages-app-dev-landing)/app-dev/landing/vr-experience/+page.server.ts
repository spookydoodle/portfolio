import { IMG_SERVER } from '$utils/cms.js';
import type { PageServerLoad } from './$types.js';

export interface DataProps {
    landing: string;
}

export const load: PageServerLoad = () => {
    const imgServer = `${IMG_SERVER}/weekly-design/02`;
    const landing = `${imgServer}/5.jpg`;

    return { landing };
};
