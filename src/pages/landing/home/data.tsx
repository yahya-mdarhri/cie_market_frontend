// This file contains the data for the home page of the landing page.

import { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import { FaHandshake, FaIndustry, FaLightbulb, FaTools } from 'react-icons/fa';

import cdg from './images/partners/cdg.jpg';
import cloudflare from './images/partners/cloudflare.jpeg';
import dxc from './images/partners/dxc.webp';
import safari from './images/partners/SAFARI.jpg';
import yanaHolding from './images/partners/Ynna-holding.png';
import eu from './images/partners/European_Union.webp';
import efficacity from './images/partners/Efficacity.png';


// this array contains the partners logos and links
export const partners = [
    {
        logo: cdg,
        name: "CDG",
        link: "https://www.cdg.ma/"
    },
    {
        logo: cloudflare,
        name: "Cloudflare",
        link: "https://www.cloudflare.com/"
    },
    {
        logo: dxc,
        name: "DXC",
        link: "https://dxc.com/"
    },
    {
        logo: safari,
        name: "SAFARI",
        link: "https://www.groupe-safari.com/"
    },
    {
        logo: yanaHolding,
        name: "Yana Holding",
        link: "https://www.ynna.ma/"
    },
    {
        name: "European Union",
        logo: eu,
        link: "https://european-union.europa.eu/"
    },
    {
        name: "Efficacity",
        logo: efficacity,
        link: "https://efficacity.com/",
    }
];


// this array contains the stats data for the hero section
export const getStatsData = (t: any): StatsItemsType => {
    return {
        a: { name: t('stats.innovationPatents'), value: 674 },
        b: { name: t('stats.internationalPatents'), value: 120 },
        c: { name: t('stats.goldMedals'), value: 7 },
    };
}

// this object contains the data for the hero section
export const getHeroProps = (t: any): HeroProps => {
    return {
        heroTitle: t('hero.title'),
        heroDescription: t('hero.description'),
        firstAction: t('hero.firstAction'),
        secondAction: t('hero.secondAction'),
        stats: getStatsData(t),
    };
};

// this array contains the departments data for the home page
export const getDepartments = (t: any) => [
    {
        icon: <FaHandshake size={40} color="var(--primary-color)" />,
        name: t('departments.tto.name'),
        description: t('departments.tto.description'),
        link: "/tto"
    },
    {
        icon: <FaIndustry size={40} color="var(--primary-color)" />,
        name: t('departments.industrial.name'),
        description: t('departments.industrial.description'),
        link: "/industrial"
    },
    {
        icon: <FaLightbulb size={40} color="var(--primary-color)" />,
        name: t('departments.incubator.name'),
        description: t('departments.incubator.description'),
        link: "/incubator"
    },
    {
        icon: <FaTools size={40} color="var(--primary-color)" />,
        name: t('departments.techCenter.name'),
        description: t('departments.techCenter.description'),
        link: "/tech-center"
    }
];
