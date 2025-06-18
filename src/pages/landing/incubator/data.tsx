// this file is for the incubator page of the landing page

import enabel from "./images/partners/enabel.png";
import cdgInvest from "./images/partners/CDG_Invest.png";
import founders from "./images/partners/212_founders.png";
import { HeroProps, StatsItemsType } from "@components/layouts/LandingLayout/LandingLayout";
import {
	FaGlobeAmericas,
	FaRocket,
	FaChalkboardTeacher,
	FaUserTie,
	FaSeedling
} from "react-icons/fa";

import linkup_africa from "./images/progrmas/linkup_africa.png";
import enactus from "./images/progrmas/enactus.svg";
import ram from "./images/progrmas/RAM.svg";
import etoufoula from "./images/progrmas/etoufoula.png";

// this array contains the data for the partners of the incubator
const partners = [
	{
		logo: cdgInvest,
		name: "cdg invest",
		link: "https://www.linkedin.com/company/cdg-invest/"
	},
	{
		logo: enabel,
		name: "Enabel",
		link: "https://www.enabel.be/"
	},
	{
		logo: founders,
		name: "212 Founders",
		link: "https://www.212founders.co/",
	}
];

// Functions that take translation parameter t and return localized data
export const getServicesData = (t: any) => [
	{
		icon: <FaGlobeAmericas />,
		title: t('incubator.services.funding.title'),
		description: t('incubator.services.funding.description')
	},
	{
		icon: <FaRocket />,
		title: t('incubator.services.startup.title'),
		description: t('incubator.services.startup.description')
	},
	{
		icon: <FaChalkboardTeacher />,
		title: t('incubator.services.training.title'),
		description: t('incubator.services.training.description')
	},
	{
		icon: <FaUserTie />,
		title: t('incubator.services.mentorship.title'),
		description: t('incubator.services.mentorship.description')
	},
	{
		icon: <FaSeedling />,
		title: t('incubator.services.capital.title'),
		description: t('incubator.services.capital.description')
	}
];

export const getStatsData = (t: any): StatsItemsType => ({
	a: { name: t('incubator.stats.startups'), value: 50 },
	b: { name: t('incubator.stats.successRate'), value: 85 },
	c: { name: t('incubator.stats.investment'), value: 25 },
	d: { name: t('incubator.stats.partners'), value: 15 },
});

export const getHeroProps = (t: any): HeroProps => ({
	heroTitle: t('incubator.hero.title'),
	heroDescription: t('incubator.hero.description'),
	firstAction: t('incubator.hero.firstAction'),
	stats: getStatsData(t),
});

export const getPrograms = (t: any) => [
	{
		name: t('incubator.programs.linkup.name'),
		description: t('incubator.programs.linkup.description'),
		image: linkup_africa,
		link: "https://www.lua.ma/"
	},
	{
		name: t('incubator.programs.enactus.name'),
		description: t('incubator.programs.enactus.description'),
		image: enactus,
		link: "https://enactus-morocco.org/",
	},
	{
		name: t('incubator.programs.ram.name'),
		image: ram,
		description: t('incubator.programs.ram.description'),
		link: "https://openinnovation.royalairmaroc.com/",
	},
	{
		name: t('incubator.programs.etoufoula.name'),
		description: t('incubator.programs.etoufoula.description'),
		image: etoufoula,
		link: "https://ityhad.com"
	}
];

export { partners };


import avatar from "@pages/landing/our_team/images/avatar.jpg"
import { ContactPerson } from "@ui/Landing/Contact/Contact";

export const contactData: ContactPerson[] = [
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
