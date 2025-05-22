import "./Incubator.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import image from "./images/incubator.png";
import image2 from "./images/incubator2.png";

import p1 from "../../../assets/partners/1.png";
import p2 from "../../../assets/partners/2.png";
import p3 from "../../../assets/partners/3.png";
import p4 from "../../../assets/partners/4.png";
import p5 from "../../../assets/partners/5.png";

import Partners from "@ui/Landing/Partners/Partners";

const statsData:StatsItemsType = {
	a: { name: "Innovation & Patents", value: 644 },
	b: { name: "International Patents", value: 117 },
	c: { name: "Gold Medals", value: 2 },
};

const heroProps: HeroProps = {
	heroTitle: <>Incubator 360º</>,
	heroDescription: "We provide the tools, mentorship, and environment to turn ideas into saleable ventures",
	heroImage: image,
	firstAction: "Submit A Patent",
	// secondAction: "Submit A Patent",
	stats: statsData,
};

function ProgramCard(){
	return(
		<div className="programCard">
			<img src={image} alt="Program" />
			<div>
				<img src={image} alt="" />
				<h3>Program Name</h3>
			</div>
		</div>
	)
}

function Programs(){
	return(
		<div className="programs">
			<h2>Programs & Startups</h2>
			<div className="programCards">
				<ProgramCard/>
			</div>
		</div>
	)
}

function Incubator() {
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
				{/* <Programs/> */}
				<Partners partners={[p1, p2, p3, p4, p5]} />
		</LandingLayout>
	);
}

export default Incubator;