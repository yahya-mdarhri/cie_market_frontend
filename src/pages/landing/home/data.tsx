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
export const statsData: StatsItemsType = {
    a: { name: "Innovation & Patents", value: 644 },
    b: { name: "International Patents", value: 117 },
    c: { name: "Gold Medals", value: 2 },
};

// this object contains the data for the hero section
export const heroProps: HeroProps = {
    heroTitle: <>From Idea to Market Bridging Innovation and Industry</>,
    heroDescription: "We are glad to have you here. Explore our features and services.",
    firstAction: "Partner With Us",
    secondAction: "Submit A Patent",
    stats: statsData,
};

// this array contains the departments data for the home page
export const departments = [
    {
        icon: <FaHandshake size={40} color="var(--primary-color)" />,
        name: "Technology Transfer Office",
        description: "Bridging Innovation and Industry through Research Commercialization",
        link: "/tto"
    },
    {
        icon: <FaIndustry size={40} color="var(--primary-color)" />,
        name: "Industrial Clinic",
        description: "Solving Real-World Challenges Through Academic–Industry Collaboration",
        link: "/industrial"
    },
    {
        icon: <FaLightbulb size={40} color="var(--primary-color)" />,
        name: "Incubator",
        description: "Empowering Startups to Transform Ideas into Impact",
        link: "/incubator"
    },
    {
        icon: <FaTools size={40} color="var(--primary-color)" />,
        name: "Tech Center",
        description: "Driving Innovation with Cutting-Edge Tools, Talent, and Infrastructure",
        link: "/tech-center"
    }
];
