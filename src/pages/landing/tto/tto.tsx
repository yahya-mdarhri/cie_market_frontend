import "./tto.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import headImg from "./images/wacim.jpeg";

import image from "./images/tto.png";
import InventionCard from "@ui/Landing/InventionCard/InventionCard";

import { useState } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import Services from "@ui/Landing/Services/Services";

import { FaHandshake, FaFileSignature, FaBullhorn } from "react-icons/fa";
import InventorCard from "@ui/Landing/InventorCard/InventorCard";
import DepartmentHeadSection from "@ui/Landing/DepartmentHeadSection/DepartmentHeadSection";
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
	d: { name: "Gold Medals", value: 2 },
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
		problem: "Problem statement for Hybrid Gravity Energy Storage MA52677.",
		solution: "Solution details for Hybrid Gravity Energy Storage MA52677.",
		impact: "Impact details for Hybrid Gravity Energy Storage MA52677.",
	},
	{
		title: "Hybrid Gravity Energy Storage",
		image: ma39538,
		nationalId: "MA39538",
		problem: "Problem statement for Hybrid Gravity Energy Storage MA39538.",
		solution: "Solution details for Hybrid Gravity Energy Storage MA39538.",
		impact: "Impact details for Hybrid Gravity Energy Storage MA39538.",
	},
	{
		title: "Hybrid Gravity Energy Storage",
		image: ma36470,
		nationalId: "MA36470",
		problem: "Problem statement for Hybrid Gravity Energy Storage MA36470.",
		solution: "Solution details for Hybrid Gravity Energy Storage MA36470.",
		impact: "Impact details for Hybrid Gravity Energy Storage MA36470.",
	},
	{
		title: "Hybrid Gravity Energy Storage",
		image: ma37414,
		nationalId: "MA37414",
		problem: "Problem statement for Hybrid Gravity Energy Storage MA37414.",
		solution: "Solution details for Hybrid Gravity Energy Storage MA37414.",
		impact: "Impact details for Hybrid Gravity Energy Storage MA37414.",
	},
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
	// {
	// 	name: "Mohammed OUAHABI",
	// 	role: "Prototyping Panager",
	// 	image: "https://i.pravatar.cc/300",
	// }
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
				<DepartmentHeadSection
					name="Wacim BEN YAHYA"
					role="Head of Technology Transfer Office"
					imageUrl={headImg}
				/>
				<Services services={servicesData} />
				<LandingInventionCards onSelectInvention={setSelectedInvention} />
				<HighlightedInventors />
				<Partners partners={partners} />
		</LandingLayout>
	);
}

export default TTO;