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

// this array contains the data for the services provided by the industrial clinic
const servicesData = [
    {
        icon: <FaTools />,
        title: "Solutions to Industrial Problems",
        description: "We provide practical solutions to real-world industrial challenges by leveraging research expertise."
    },
    {
        icon: <FaIndustry />,
        title: "Pilot Line Construction",
        description: "Support in building preindustrialization pilot lines to scale up innovative products and processes."
    },
    {
        icon: <FaLightbulb />,
        title: "IP Awareness & Innovation Marketing",
        description: "Raise awareness about intellectual property and promote innovations through strategic marketing."
    }
];

// this object contains the data for the stats displayed in the hero section
const statsData: StatsItemsType = {
    a: { name: "Scientific Publications", value: 1800 },
    b: { name: "National & International Awards", value: 10 },
    c: { name: "Co-development Projects", value: 40 },
    d: { name: "Industry Partnerships", value: 25 },
};

// this object contains the data for the hero section
const heroProps: HeroProps = {
    heroTitle: <>Industrial Clinic</>,
    heroDescription: "Solving Real-World Challenges Through Academic–Industry Collaboration",
    firstAction: "Submit A Patent",
    stats: statsData,
}; 


export {clients, servicesData, heroProps}