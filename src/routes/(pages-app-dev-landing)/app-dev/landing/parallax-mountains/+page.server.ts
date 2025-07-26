import { IMG_SERVER, IMG_SERVER_MIN } from '$utils/cms.js';
import type { PageServerLoad } from './$types.js';

export interface DataProps {
    mountains1: string;
    mountains2: string;
    mountains3: string;
    background: string;
    backgroundMin: string;
    layer: string;
    layerMin: string;
}

export const load: PageServerLoad = () => {
    const imgServer = `${IMG_SERVER}/weekly-design/04`;
    const imgServerMin = `${IMG_SERVER_MIN}/weekly-design/04`;

    const data: DataProps = {
        mountains1: `${imgServer}//mountains-1.jpg`,
        mountains2: `${imgServer}/mountains-2.jpg`,
        mountains3: `${imgServer}/mountains-3.jpg`,
        background: `${imgServer}/bg.png`,
        backgroundMin: `${imgServerMin}/bg.png`,
        layer: `${imgServer}/layer.png`,
        layerMin: `${imgServerMin}/layer.png`,
    };

    return data;
};
