import { StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import { Invention } from "@ui/Landing/InventionInfo/InventionInfo";
import { useTranslation } from 'react-i18next';

// Create a function to get translated stats
export const getTranslatedStats = () => {
	const { t } = useTranslation('tto');
	return {
		a: { name: t('stats.totalPatents'), value: 650 },
		b: { name: t('stats.internationalPatents'), value: 108 },
		c: { name: t('stats.researchContracts'), value: 66 },
		d: { name: t('stats.goldMedals'), value: 3 },
	};
};

// Keep the original stats data for reference
const statsData: StatsItemsType = {
	a: { name: "Total Patents Filed", value: 650 },
	b: { name: "International Patents", value: 108 },
	c: { name: "Research Contracts", value: 66 },
	d: { name: "Gold Medals", value: 3 },
};



import royaume from "./images/partners/royaume.png";
import cdg from './images/partners/cdg.jpg'
import dxg from './images/partners/dxg.png'
import innovation_genva from './images/partners/innovation_genva.png'
import stellants from './images/partners/stellants.png'
import ingelec from './images/partners/ingelec.png'
import autm from './images/partners/autm.png'


const partners = [
	{
		logo: royaume,
		name: "Royaume of Morocco",
		link: ""
	},
	{
		logo: cdg,
		name: "CDG",
		link: ""
	},
	{
		logo: dxg,
		name: "DXG",
		link: "https://dxc.com/"
	},
	{
		logo: innovation_genva,
		name: "Innovation Gen",
		link: ""
	},
	{
		logo: stellants,
		name: "Stellants",
		link: ""
	},
	{
		logo: ingelec,
		name: "INGELEC",
		link: "https://www.ingelec.ma/"
	},
	{
		logo: autm,
		name: "autym",
		link: ""
	}
]



import ma63830 from './images/inventions/ma63830.jpg'
import ma47040 from './images/inventions/ma47040.png'
import ma52677 from './images/inventions/ma52677.png'
import ma36470 from './images/inventions/ma36470.png'
import ma39538 from './images/inventions/ma39538.png'
import ma37414 from './images/inventions/ma37414.jpg'

const inventionCardData: Invention[] = [
	{
		title: "Hybrid Renewable Energy Generator",
		problem: "Portable solar generators often lack sufficient power or reliability, while hybrid solutions remain rare and inaccessible.",
		solution: "This kit combines solar panels and a micro wind turbine in a lightweight, foldable, and durable structure. It enables autonomous renewable energy production in remote areas or while on the move.",
		impact: "The solution reduces carbon footprint, enhances energy autonomy, and enables new use cases in fields such as exploration, temporary housing, and emergency response.",
		image: ma63830,
		nationalId: "MA63830",
	},
	{
		title: "OxCharger",
		problem: "Users face poorly optimized chargers: energy loss, overheating, lack of control, and incompatibility with fast charging standards or new ports.",
		solution: "OxCharger is a next-generation charger featuring a control chip that adjusts energy in real time, an optimized data cable, and both Micro-B and Type-C ports compatible with QC 3.0 technology.",
		impact: "OxCharger extends battery life, reduces energy loss, and provides better device protection — offering a concrete response to user needs and energy efficiency challenges.",
		image: ma47040,
		nationalId: "MA47040",
		internationalId: "WO2021071349A1",
	},
	{
		title: "Hybrid Gravity Energy Storage",
		image: ma52677,
		nationalId: "MA52677",
		internationalId: "PCT/MA2021/050028",
		problem: "Current energy storage solutions often fail to meet criteria for durability, scalability, and low environmental impact.",
		solution: "HyGES is a hybrid gravity-based storage system combining pulleys, weights, and hydromechanics. It stores electricity by lifting masses using hydraulic pumps, then releases it through turbines. Compact, modular, and free from rare metal dependency, it's ideal for local or decentralized installations",
		impact: "HyGES reduces the ecological footprint of energy storage, extends the lifespan of infrastructure, and integrates easily into remote or industrial environments.",
	},
	{
		title: "Dessalement thermique",
		image: ma36470,
		nationalId: "MA36470",
		internationalId: "WO2015076647A1",
		problem: "Rural communities and isolated areas lack viable solutions for access to safe drinking water. Current desalination technologies are expensive, poorly suited for small-scale use, and heavily reliant on continuous energy supply.",
		solution: "A solar-powered desalination unit based on MED (Multi-Effect Distillation) technology tailored to local needs. The project develops a pilot unit capable of producing 7,000 L/day (within 6 hours), combining falling film evaporators, an intelligent network of heat exchangers, a thermal storage system, and power supplied by vacuum tube solar panels.",
		impact: "This solution reduces dependence on electric grids, lowers operational costs, and provides a sustainable answer to the challenges of climate change and water security."
	},
	{
		title: "Éclairage public intelligent INARA",
		image: ma39538, 
		nationalId: "MA39538", 
		internationalId: "WO2018117779A1", 
		problem: "Current public lighting suffers from high costs, lack of remote control, limited performance, and outdated technology. This is compounded by rising energy prices and the global energy crisis.",
		solution: "INARA integrates optimized LED components, an intelligent dimming system based on ambient light, a communication module, and a locally developed control board. This setup enables remote monitoring and precise management of standard streetlights.",
		impact: "INARA achieves measurable reductions in energy consumption and maintenance costs, while contributing directly to sustainability goals. It also positions Morocco strategically as a regional player in the smart city sector."
	},
	{
		title: "Concentrateur solaire Taqa PRO",
		image: ma37414,
		nationalId: "MA37414",
		internationalId: "WO2016056880A1",
		problem: "In Morocco, rising petroleum product prices severely affect industrial competitiveness. Existing solar solutions often fail to meet specific temperature requirements and continuous operation needs.",
		solution: "Taqa PRO develops a nano cylindrical-parabolic solar concentrator capable of producing hot water and steam between 60°C and 250°C, cutting fuel consumption in industrial boilers by up to 80%.",
		impact: "By offering a local, cost-effective, and eco-friendly alternative, Taqa PRO supports the decarbonization of national industries and positions Morocco as an innovative player in solar energy efficiency."
	  }
	  ,
];

import { FaHandshake, FaFileSignature, FaBullhorn } from "react-icons/fa";

const servicesData = [
	{
		icon: <FaHandshake />,
		title: "Assistance with the Transfer",
		description: "Support and guidance in the transfer of technology and knowledge to relevant industries or institutions."
	},
	{
		icon: <FaFileSignature />,
		title: "Patent and IP Protection Drafting",
		description: "Drafting support for patent applications and protection of intellectual property."
	},
	{
		icon: <FaBullhorn />,
		title: "IP Awareness and Innovation Marketing",
		description: "Promotion of IP awareness and strategic marketing of innovative solutions."
	}
];



import avatar from "@pages/landing/our_team/images/avatar.jpg"

const contactData: ContactPerson[] = [
    {
        name: "John Doe",
        role: "Technical Lead",
        image: avatar, 
        social: {
            phone: "+212XXXXXXXXX",
            email: "john.doe@example.com"
        }
    },
    {
        name: "John Doe",
        role: "Technical Lead",
        image: avatar, 
        social: {
            phone: "+212XXXXXXXXX",
            email: "john.doe@example.com"
        }
    },
    {
        name: "John Doe",
        role: "Technical Lead",
        image: avatar, 
        social: {
            phone: "+212XXXXXXXXX",
            email: "john.doe@example.com"
        }
    },
];

interface Profile {
	name: string;
	image: string;
	role?: string;
}


import ahmed_zouggar from "./images/inventors/ahmed_zouggar.jpeg";
import maouena_fongbedgi from './images/inventors/maouena_fongbedgi.jpeg'
import abdellatif_benabdellah from './images/inventors/abdellatif_benabdellah.jpeg'
import { ContactPerson } from "@ui/Landing/Contact/Contact";

const profileData: Profile[] = [
	{
		name: "Abdellatif BENABDELLAH",
		role: "full professor",
		image: abdellatif_benabdellah,
	},
	{
		name: "Maouena FONGBEDGI",
		role: "PhD, M.Eng",
		image: maouena_fongbedgi,
	},
	{
		name: "Ahmed ZOUGGAR",
		role: "Expert",
		image: ahmed_zouggar,
	},
	{
		name: "Mohammed OUAHABI",
		role: "Prototyping Manager",
		image: avatar,
	}
];


export {statsData, partners, inventionCardData, servicesData, profileData, contactData}