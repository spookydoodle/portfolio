import type { Data } from '$lib/model.js';
import { SitePath } from '$utils/pages.js';
import type { PageServerLoad } from '../(home)/$types.js';
import { data as appDevData } from './app-dev/data.js';
import { data as threeDModelingData } from './3d/data.js';
import { data as blogData } from './blog/data.js';

export const load: PageServerLoad<Data> = ({url}) => {
    if (url.pathname.endsWith(SitePath.AppDev)) {
        return appDevData;
    }
    if (url.pathname.endsWith(SitePath.ThreeD)) {
        return threeDModelingData;
    }
    if (url.pathname.endsWith(SitePath.Blog)) {
        return blogData;
    }
    return { title: "Unknown", posts: [] };
};
