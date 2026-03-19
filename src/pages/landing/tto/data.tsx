import { StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import { Invention } from "@ui/Landing/InventionInfo/InventionInfo";
import { useTranslation } from 'react-i18next';

// Create a function to get translated stats
export const getTranslatedStats = () => {
	const { t } = useTranslation('tto');
	return {
		a: { name: t('stats.totalPatents'), value: 674 },
		b: { name: t('stats.internationalPatents'), value: 120 },
		c: { name: t('stats.transfers'), value: 7 },
		d: { name: t('stats.medals'), value: 7 },
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



import energies from './images/inventions/energies.jpg'
import ma47040 from './images/inventions/ma47040.png'
import ma52677 from './images/inventions/ma52677.png'
import ma36470 from './images/inventions/ma36470.png'
import ma39538 from './images/inventions/ma39538.png'
import ma37414 from './images/inventions/ma37414.jpg'

const getInventionCardData = (t: TFunction): Invention[] => [
	{
		title: t('inventions.invention_1.title'),
		problem: t('inventions.invention_1.problem'),
		solution: t('inventions.invention_1.solution'),
		impact: t('inventions.invention_1.impact'),
		image: energies,
		nationalId: "MA63830",
	},
	{
		title: t('inventions.invention_2.title'),
		problem: t('inventions.invention_2.problem'),
		solution: t('inventions.invention_2.solution'),
		impact: t('inventions.invention_2.impact'),
		image: ma47040,
		nationalId: "MA47040",
		internationalId: "WO2021071349A1",
	},
	{
		title: t('inventions.invention_3.title'),
		problem: t('inventions.invention_3.problem'),
		solution: t('inventions.invention_3.solution'),
		impact: t('inventions.invention_3.impact'),
		image: ma52677,
		nationalId: "MA52677",
		internationalId: "PCT/MA2021/050028",
	},
	{
		title: t('inventions.invention_4.title'),
		problem: t('inventions.invention_4.problem'),
		solution: t('inventions.invention_4.solution'),
		impact: t('inventions.invention_4.impact'),
		image: ma36470,
		nationalId: "MA36470",
		internationalId: "WO2015076647A1",
	},
	{
		title: t('inventions.invention_5.title'),
		problem: t('inventions.invention_5.problem'),
		solution: t('inventions.invention_5.solution'),
		impact: t('inventions.invention_5.impact'),
		image: ma39538,
		nationalId: "MA39538",
		internationalId: "WO2018117779A1",
	},
	{
		title: t('inventions.invention_6.title'),
		problem: t('inventions.invention_6.problem'),
		solution: t('inventions.invention_6.solution'),
		impact: t('inventions.invention_6.impact'),
		image: ma37414,
		nationalId: "MA37414",
		internationalId: "WO2016056880A1",
	}
];

import { FaHandshake, FaFileSignature, FaBullhorn } from "react-icons/fa";

const getServicesData = (t : TFunction) => [
		{
			icon: <FaHandshake />,
			title: t('services.transfer.title'),
			description: t('services.transfer.description')
		},
		{
			icon: <FaFileSignature />,
			title: t('services.patent.title'),
			description: t('services.patent.description')
		},
		{
			icon: <FaBullhorn />,
			title: t('services.marketing.title'),
			description: t('services.marketing.description')
		}
	];


import avatar from "@pages/landing/our_team/images/avatar.jpg"
import wacim from "@pages/landing/tto/images/wacim.jpeg"

const contactData: ContactPerson[] = [
    {
        name: " BENYAHYA Wacim",
        role: "Technical Lead",
        image: wacim, 
        social: {
            phone: "+212658477660",
            email: "Wacim.benyahya@uir.ac.ma"
        }
    },
];

interface Profile {
	name: string;
	image: string;
	role?: string;
}


import maouena_fongbedgi from './images/inventors/maouena_fongbedgi.jpeg'
import abdellatif_benabdellah from './images/inventors/abdellatif_benabdellah.jpeg'
import { ContactPerson } from "@ui/Landing/Contact/Contact";
import { TFunction } from "i18next";

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
		name: "Mohammed OUAHABI",
		role: "Prototyping Manager",
		image: avatar,
	}
];


export {statsData, partners, getInventionCardData, getServicesData, profileData, contactData}