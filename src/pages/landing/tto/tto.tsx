import "./tto.css";
import LandingLayout, { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";
import { useNavigate } from "react-router-dom";
import Contact from "@ui/Landing/Contact/Contact";

// import headImg from "./images/wacim.jpeg";

import image from "./images/tto.png";
import InventionCard from "@ui/Landing/InventionCard/InventionCard";

import { useState } from "react";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import Services from "@ui/Landing/Services/Services";

import ProfileCard from "@ui/Landing/ProfileCard/ProfileCard";
// import DepartmentHeadSection from "@ui/Landing/DepartmentHeadSection/DepartmentHeadSection";
import { Invention } from "@ui/Landing/InventionInfo/InventionInfo";
import Partners from "@ui/Landing/Partners/Partners";

import {statsData, partners, inventionCardData, servicesData, profileData, contactData} from "./data";


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


function HighlightedProfiles() {
	return (
		<section className="highlightedProfiles">
			<div className="profilesHeader">
				<h2>Our Distinguished Profiles</h2>
				<p>Meet the brilliant minds behind our innovative breakthroughs</p>
			</div>
			<div className="profilesGrid">
				{profileData.map((profile, index) => (
					<ProfileCard key={index} {...profile} />
				))}
			</div>
		</section>
	);
}


function TTO() {
	const navigate = useNavigate();
	useDocumentTitle('Technology Transfer Office | Centre for Innovation and Entrepreneurship');

	const [selectedInvention, setSelectedInvention] = useState<Invention | null>(null);
	const heroProps: HeroProps = {
		heroTitle: <>Technology Transfer Office</>,
		heroDescription: "Protecting ideas, fostering collaborations, and bringing research to market.",
		firstAction: "Submit A Patent",
		secondAction: "Licening Process",
		stats: statsData,
		onSecondActionClick: () => navigate('/licensing-process')
	};

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
				<HighlightedProfiles />
				<Contact 
					contacts={contactData}
					title="Learn More About Our Innovations"
					description="Interested in a specific invention or technology? Contact us to learn more about our research and development projects."
				/>
				<Partners partners={partners} />
		</LandingLayout>
	);
}

export default TTO;