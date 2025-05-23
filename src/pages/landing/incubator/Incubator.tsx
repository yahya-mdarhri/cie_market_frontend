import "./Incubator.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import image from "./images/incubator.png";
import image2 from "./images/incubator2.png";
import startup1 from "./images/startup1.png";
import program1 from "./images/program1.png";


import enabel from "./images/partners/enabel.png";
import cdgInvest from "./images/partners/CDG_Invest.png";


import Partners from "@ui/Landing/Partners/Partners";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

const statsData:StatsItemsType = {
	a: { name: "Innovation & Patents", value: 644 },
	b: { name: "International Patents", value: 117 },
	c: { name: "Gold Medals", value: 2 },
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
];

const heroProps: HeroProps = {
	heroTitle: <>Incubator 360º</>,
	heroDescription: "We provide the tools, mentorship, and environment to turn ideas into saleable ventures",
	heroImage: image,
	firstAction: "Submit A Patent",
	// secondAction: "Submit A Patent",
	stats: statsData,
};

function StartupCard({logo, name, description}:{logo:string, name:string, description:string}){
	return(
		<div className="startupCard">
			<div className="startupCardImage">
				<img src={logo} alt={name} />
			</div>
			<div className="startupCardContent">
				<h3>{name}</h3>
				<p>{description}</p>
				<div className="startupCardTags">
					<span>Tech</span>
					<span>Innovation</span>
				</div>
			</div>
		</div>
	)
}

function Startups(){
	return(
		<section className="startups">
			<div className="startupsHeader">
				<h2>Our Startups</h2>
				<p>Discover the innovative ventures we've helped launch and grow</p>
			</div>
			<div className="startupCards">
			<StartupCard 
					logo={startup1} 
					name="TESTname" 
					description="this is a sample tescription for this card"
				/>
				<StartupCard 
					logo={startup1} 
					name="TESTname" 
					description="this is a sample tescription for this card"
				/>
				<StartupCard 
					logo={startup1} 
					name="TESTname" 
					description="this is a sample tescription for this card"
				/>
				<StartupCard 
					logo={startup1} 
					name="TESTname" 
					description="this is a sample tescription for this card"
				/>
				<StartupCard 
					logo={startup1} 
					name="TESTname" 
					description="this is a sample tescription for this card"
				/>
				<StartupCard 
					logo={startup1} 
					name="TESTname" 
					description="this is a sample tescription for this card"
				/>

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
				<div className="ttoServices">
					<div className="ttoServicesLeft">
						<h2>Our Services</h2>
						<p>
						We connect industry with academic expertise to solve technical challenges through tailored research and innovation support
						</p>
					</div>
					<div className="ttoServicesRight">
						<div className="ttoServicesRight1">
							<div className=" ttoServiceCard">Attracting national and international funds to entrepreneurship promotion projects</div>
							<div className=" ttoServiceCard">Creation of Made@UIR startups, Project set-up, access to financing, coaching</div>
						</div>
						<div className="ttoServicesRight2">
							<div className=" ttoServiceCard">Entrepreneurship and innovation training</div>
							<div className=" ttoServiceCard">Mentoring of project leaders and preincubation services</div>
							<div className=" ttoServiceCard">Access to seed and acceleration capital</div>
						</div>
					</div>
				</div>
				<Startups/>
				<Partners partners={partners} />
		</LandingLayout>
	);
}

export default Incubator;