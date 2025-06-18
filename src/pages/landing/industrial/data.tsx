// This file contains the data for the industrial page of the landing page.

import { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import {
    FaTools,
    FaIndustry,
    FaLightbulb
} from "react-icons/fa";

import madaef_golf from "./images/partners/madaef_golfs.png";

// this array contains the data for the clients of the industrial clinic
const clients = [
    {
        logo: madaef_golf,
        name: "madaef golf",
        link: "https://www.madaefgolfs.com/"
    },
];

// Functions that take translation parameter t and return localized data
export const getServicesData = (t: any) => [
    {
        icon: <FaTools />,
        title: t('industrial.services.solutions.title'),
        description: t('industrial.services.solutions.description')
    },
    {
        icon: <FaIndustry />,
        title: t('industrial.services.pilot.title'),
        description: t('industrial.services.pilot.description')
    },
    {
        icon: <FaLightbulb />,
        title: t('industrial.services.ip.title'),
        description: t('industrial.services.ip.description')
    }
];

export const getStatsData = (t: any): StatsItemsType => ({
    a: { name: t('industrial.stats.publications'), value: 1800 },
    b: { name: t('industrial.stats.awards'), value: 10 },
    c: { name: t('industrial.stats.projects'), value: 40 },
    d: { name: t('industrial.stats.partners'), value: 25 },
});

export const getHeroProps = (t: any): HeroProps => ({
    heroTitle: t('industrial.hero.title'),
    heroDescription: t('industrial.hero.description'),
    firstAction: t('industrial.hero.firstAction'),
    stats: getStatsData(t),
});

export { clients };