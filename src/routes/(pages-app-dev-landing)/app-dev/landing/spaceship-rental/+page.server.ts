import { IMG_SERVER } from '$utils/cms.js';
import type { PageServerLoad } from './$types.js';

export interface DataProps {
    landing1: string;
    landing2: string;
    landing3: string;
    brandName: string;
}

export const load: PageServerLoad = () => {
    const imgServer = `${IMG_SERVER}/weekly-design/03`;

    const data: DataProps = {
        landing1: `${imgServer}/space-ship-1.jpg`,
        landing2: `${imgServer}/space-ship-2.jpg`,
        landing3: `${imgServer}/space-ship-3.jpg`,
        brandName: "Alien Inc.",
    };

    return data;
};
