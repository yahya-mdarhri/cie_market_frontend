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


// this array contains the data for the services provided by the incubator
const servicesData = [
	{
	  icon: <FaGlobeAmericas />,
	  title: "Funding for Entrepreneurship",
	  description: "Attracting national and international funds to entrepreneurship promotion projects."
	},
	{
	  icon: <FaRocket />,
	  title: "Startup Creation & Support",
	  description: "Creation of Made@UIR startups, project setup, access to financing, and coaching."
	},
	{
	  icon: <FaChalkboardTeacher />,
	  title: "Entrepreneurship Training",
	  description: "Providing specialized entrepreneurship and innovation training."
	},
	{
	  icon: <FaUserTie />,
	  title: "Mentorship & Preincubation",
	  description: "Mentoring of project leaders and preincubation services."
	},
	{
	  icon: <FaSeedling />,
	  title: "Access to Capital",
	  description: "Support in accessing seed and acceleration capital."
	}
  ];
  
// this object contains the data for the stats displayed in the hero section
const statsData:StatsItemsType = {
	a: { name: "Incubated Startups", value: 50 },
	b: { name: "Success Rate", value: 85 },
	c: { name: "Investment Attracted (M DHS)", value: 25 },
	d: { name: "Strategic Partners", value: 15 },
};


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

// this object contains the data for the hero section of the incubator page
const heroProps: HeroProps = {
	heroTitle: <>Incubator 360º</>,
	heroDescription: "We provide the tools, mentorship, and environment to turn ideas into saleable ventures",
	firstAction: "Submit A Patent",
	stats: statsData,
};

// this array contains the data for the programs offered by the incubator 
const programs = [
	{
		name: "Linkup africa",
		description: "Empowers African youth in Morocco through entrepreneurship support.",
		image: linkup_africa,
		link: "https://www.lua.ma/"
	},
	{
		name: "Enactus",
		description: "Empowers students to create positive social and environmental impact through entrepreneurial projects",
		image: enactus,
		link: "https://enactus-morocco.org/",
	},
	{
		name: "RAM Open Innovation",
		image: ram,
		description: "Connects startups with aviation experts to develop innovative solutions for travel challenge",
		link: "https://openinnovation.royalairmaroc.com/",
	},
	{
		name: "E-Toufoula",
		description: "A platform that connects Moroccan artisans with global markets, promoting traditional crafts and cultural heritage.",
		image: etoufoula,
		link: "https://ityhad.com"
	}

]

export {partners, servicesData, heroProps, programs};