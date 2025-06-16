import "./Incubator.css";
import LandingLayout from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import image2 from "./images/incubator2.png";


import Partners from "@ui/Landing/Partners/Partners";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import Services from "@ui/Landing/Services/Services";
import {partners, servicesData, heroProps, programs} from "./data";

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

function Startups(){
	return(
		<section className="startups">
			<div className="startupsHeader">
				<h2>Our Programs And Startups</h2>
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