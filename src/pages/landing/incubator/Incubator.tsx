import "./Incubator.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import image2 from "./images/incubator2.png";
import linkup_africa from "./images/progrmas/linkup_africa.png";
import enactus from "./images/progrmas/enactus.svg";
import ram from "./images/progrmas/RAM.svg";
import etoufoula from "./images/progrmas/etoufoula.png";

import enabel from "./images/partners/enabel.png";
import cdgInvest from "./images/partners/CDG_Invest.png";
import founders from "./images/partners/212_founders.png";

import Partners from "@ui/Landing/Partners/Partners";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import {
	FaGlobeAmericas,
	FaRocket,
	FaChalkboardTeacher,
	FaUserTie,
	FaSeedling
  } from "react-icons/fa";
import Services from "@ui/Landing/Services/Services";
  
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
  

const statsData:StatsItemsType = {
	a: { name: "Incubated Startups", value: 50 },
	b: { name: "Success Rate", value: 85 },
	c: { name: "Investment Attracted (M DHS)", value: 25 },
	d: { name: "Strategic Partners", value: 15 },
};

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

const heroProps: HeroProps = {
	heroTitle: <>Incubator 360º</>,
	heroDescription: "We provide the tools, mentorship, and environment to turn ideas into saleable ventures",
	firstAction: "Submit A Patent",
	stats: statsData,
};

interface StartupCardProps {
	logo: string;
	name: string;
	key: any;
	description: string;
	link?: string;
}

function StartupCard({logo, name, description, link, key}:StartupCardProps) {
	return(
		<div className="startupCard" key={key} onClick={
			() => {
				if (link) {
					window.open(link, "_blank");
				}
			}
		}>
			<div className="startupCardImage">
				<img src={logo} alt={name} />
			</div>
			<div className="startupCardContent">
				<h3>{name}</h3>
				<p>{description}</p>
				{/* <div className="startupCardTags">
					<span>Tech</span>
					<span>Innovation</span>
				</div> */}
			</div>
		</div>
	)
}

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

function Startups(){
	return(
		<section className="startups">
			<div className="startupsHeader">
				<h2>Our Startups</h2>
				<p>Discover the innovative ventures we've helped launch and grow</p>
			</div>
			<div className="startupCards">
			{				programs.map((program, index) => (
				<StartupCard
					key={index}
					logo={program.image}
					name={program.name}
					link={program.link}
					description={program.description}
				/>
			))}

			</div>
			
		</section>
	)
}

function Incubator() {
	useDocumentTitle('Incubator 360º | Centre for Innovation and Entrepreneurship');
	return (
		<LandingLayout heroProps={heroProps}>
				<Introduction 
					title="Incubator 360º"
					description="The Incubator 360° at UIR supports entrepreneurs in transforming innovative ideas into successful startups. It provides a complete journey—from early-stage concept development to product-market fit and business scaling. With expert coaching, technical resources, access to funding, and strategic partnerships, the incubator empowers creators to build real-world solutions and bring them to market."
					image={image2}
				/>
				<VisionAndMission 
					mission="support the Made @UIR towards the Go to Market and the association with investors."
					vision="Accelerating the ROI of Made @UIR = Invention x Commercialization"
				/>
				<Services services={servicesData} />
				<Startups/>
				<Partners partners={partners} />
		</LandingLayout>
	);
}

export default Incubator;