import "./tto.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

// import headImg from "./images/wacim.jpeg";

import image from "./images/tto.png";
import InventionCard from "@ui/Landing/InventionCard/InventionCard";

import { useState } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import Services from "@ui/Landing/Services/Services";

import { FaHandshake, FaFileSignature, FaBullhorn } from "react-icons/fa";
import InventorCard from "@ui/Landing/InventorCard/InventorCard";
// import DepartmentHeadSection from "@ui/Landing/DepartmentHeadSection/DepartmentHeadSection";
import { Invention } from "@ui/Landing/InventionInfo/InventionInfo";

import ahmed_zouggar from "./images/inventors/ahmed_zouggar.jpeg";
import maouena_fongbedgi from './images/inventors/maouena_fongbedgi.jpeg'
import abdellatif_benabdellah from './images/inventors/abdellatif_benabdellah.jpeg'
import Partners from "@ui/Landing/Partners/Partners";

import royaume from "./images/partners/royaume.png";
import cdg from './images/partners/cdg.jpg'
import dxg from './images/partners/dxg.png'
import innovation_genva from './images/partners/innovation_genva.png'
import stellants from './images/partners/stellants.png'
import ingelec from './images/partners/ingelec.png'
import autm from './images/partners/autm.png'

import ma63830 from './images/inventions/ma63830.jpg'
import ma47040 from './images/inventions/ma47040.png'
import ma52677 from './images/inventions/ma52677.png'
import ma36470 from './images/inventions/ma36470.png'
import ma39538 from './images/inventions/ma39538.png'
import ma37414 from './images/inventions/ma37414.jpg'


const statsData:StatsItemsType = {
	a: { name: "Total Patents Filed", value: 650 },
	b: { name: "International Patents", value: 108 },
	c: { name: "Research Contracts (M DHS)", value: 66 },
	d: { name: "Gold Medals", value: 3 },
};

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

const heroProps: HeroProps = {
	heroTitle: <>Technology Transfer Office</>,
	heroDescription: "Protecting ideas, fostering collaborations, and bringing research to market.",
	firstAction: "Submit A Patent",
	secondAction: "Licening Process",
	stats: statsData,
};

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





function LandingInventionCards({
	onSelectInvention
}: { 
	onSelectInvention: (invention: Invention) => void 
}) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const cardsPerView = 3;

	const moveLeft = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const moveRight = () => {
		if (currentIndex < inventionCardData.length - cardsPerView) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const getTranslateValue = () => {
		const cardWidth = 100 / cardsPerView;
		const gapWidth = 1.5;
		return -(currentIndex * (cardWidth + gapWidth));
	};

	const handleInventionClick = (invention: Invention) => {
		onSelectInvention(invention);
	};

	return (
		<>
			<div className="HighLightSpot">
				<div className="HighLightSpotLeft">
					<h2>Inventions Spotlight</h2>
					<div>
						Highlighted technologies and innovations
					</div>
				</div>
				<div className="HighLightSpotRight">
					<div 
						className="leftbtn" 
						onClick={moveLeft}
						style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
						role="button"
						tabIndex={0}
						onKeyDown={(e) => e.key === 'Enter' && moveLeft()}
						aria-disabled={currentIndex === 0}
					>
						{'<'}
					</div>
					<div 
						className="Rightbtn" 
						onClick={moveRight}
						style={{ 
							opacity: currentIndex >= inventionCardData.length - cardsPerView ? 0.5 : 1 
						}}
						role="button"
						tabIndex={0}
						onKeyDown={(e) => e.key === 'Enter' && moveRight()}
						aria-disabled={currentIndex >= inventionCardData.length - cardsPerView}
					>
						{'>'}
					</div>
				</div>
			</div>
			<div className="LandingInventionCards">
				<div 
					className="inventionCardsContainer"
					style={{ 
						transform: `translateX(${getTranslateValue()}%)`,
					}}
				>
					{inventionCardData.map((item, index) => (
						<div 
							key={index} 
							className="inventionCardWrapper"
							style={{
								opacity: index >= currentIndex && index < currentIndex + cardsPerView ? 1 : 0.3
							}}
							onClick={() => handleInventionClick(item)}
						>
							<InventionCard
								key={index}
								title={item.title}
								nationalId={item.nationalId}
								image={item.image}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

interface Inventor {
	name: string;
	image: string;
	role?: string;
}

import avatar from "@pages/landing/our_team/images/avatar.jpg"

const inventorData: Inventor[] = [
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

function HighlightedInventors() {
	return (
		<section className="highlightedInventors">
			<div className="inventorsHeader">
				<h2>Our Distinguished Inventors</h2>
				<p>Meet the brilliant minds behind our innovative breakthroughs</p>
			</div>
			<div className="inventorsGrid">
				{inventorData.map((inventor, index) => (
					<InventorCard key={index} {...inventor} />
				))}
			</div>
		</section>
	);
}


function TTO() {
	useDocumentTitle('Technology Transfer Office | Centre for Innovation and Entrepreneurship');

	const [selectedInvention, setSelectedInvention] = useState<Invention | null>(null);

	return (
		<LandingLayout heroProps={heroProps} inventionInfoProps={{
			isOpen: !!selectedInvention,
			onClose: () => setSelectedInvention(null),
			invention: selectedInvention ? {
				image: selectedInvention.image,
				title: selectedInvention.title,
				internationalId: selectedInvention.internationalId,
				nationalId: selectedInvention.nationalId,
				problem: selectedInvention.problem,
				solution: selectedInvention.solution,
				impact: selectedInvention.impact
			} : null	
		}}>
				<Introduction 
					title="Technology Transfer Office"
					description="The UIR has created the first Technology Transfer Office (TTO) according to international standards to carry out technology transfer and support economic development at the regional and national levels. The TTO operates on several levels to support research activities and to improve the implementation of the innovative product value chain."
					image={image}
				/>
				<VisionAndMission 
					mission="Facilitate the exploitation of the results of scientific research, Open Innovation and its opening up to the market"
					vision="Transform the TTO into a springboard for innovation at the UIR and make its activity profitable"
				/>
				{/* <DepartmentHeadSection
					name="Wacim BEN YAHYA"
					role="Head of Technology Transfer Office"
					imageUrl={headImg}
				/> */}
				<Services services={servicesData} />
				<LandingInventionCards onSelectInvention={setSelectedInvention} />
				<HighlightedInventors />
				<Partners partners={partners} />
		</LandingLayout>
	);
}

export default TTO;