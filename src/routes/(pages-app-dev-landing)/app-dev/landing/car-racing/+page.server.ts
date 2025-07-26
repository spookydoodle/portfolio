import { IMG_SERVER, IMG_SERVER_MIN } from '$utils/cms.js';
import type { PageServerLoad } from './$types.js';

export interface Card {
    title: string;
    subtitle: string;
    body: string;
    imgPrimary: string;
    imgSecondary: string;
    inViewport: 1 | 2 | 3;
    time: string;
    location: string;
    price: string;
}

export interface DataProps {
    cards: Card[];
    landing: string;
    landingMin: string;
    footer: string;
    footerMin: string;
}

export const load: PageServerLoad = () => {
    const imgServer = `${IMG_SERVER}/weekly-design/01`;
    const imgServerMin = `${IMG_SERVER_MIN}/weekly-design/01`;
    const imgSportsCar1 = `${imgServer}/sports_car_01.jpg`;
    const imgSportsCar2 = `${imgServer}/sports_car_02.jpg`;
    const imgTrackRacing1 = `${imgServer}/track_racing_01.jpg`;
    const imgTrackRacing2 = `${imgServer}/track_racing_02.jpg`;
    const imgVintageCar1 = `${imgServer}/vintage_01.jpg`;
    const imgVintageCar2 = `${imgServer}/vintage_02.jpg`;
    const landing = `${imgServer}/landing_01.jpg`;
    const landingMin = `${imgServerMin}/landing_01.jpg`;
    const footer = `${imgServer}/footer.jpg`;
    const footerMin = `${imgServerMin}/footer.jpg`;
    const data: DataProps = {
        landing,
        landingMin,
        footer,
        footerMin,
        cards: [
            {
                title: "CITY TRIP",
                subtitle: "Sports car city drive",
                body: "Rent a real sports car and drive through your city like a boss. The cab chassis dumped the steel motor vehicle when the service body constructed the bio-fuel chassis. The contractor body drove the mechanical welder body?",
                imgPrimary: imgSportsCar1,
                imgSecondary: imgSportsCar2,
                inViewport: 1,
                time: "2h",
                location: "Spain",
                price: "€ 1,000",
            },
            {
                title: "RACE MASTER",
                subtitle: "Track racing lesson",
                body: "Drive on the legendary circuit in a super fast car. The hooklift body trucked the tough wheel. The diesel, tough upfit manufactured. The dovetail landscape throttled the durable motor?",
                imgPrimary: imgTrackRacing1,
                imgSecondary: imgTrackRacing2,
                inViewport: 2,
                time: "2h",
                location: "Italy",
                price: "€ 2,500",
            },
            {
                title: "VINTAGE EXPERIENCE",
                subtitle: "Rent a vintage car",
                body: "Travel back in time and get in that vintage vehicle. The rig developed the mechanical bumper? The dump truck upfitted the durable City Express but the heavy duty, lifted manufactured? Once the lorry totaled the seat belt? ",
                imgPrimary: imgVintageCar1,
                imgSecondary: imgVintageCar2,
                inViewport: 3,
                time: "4 - 6h",
                location: "Germany",
                price: "€ 1,500",
            },
        ],
    };

    return data;
};
