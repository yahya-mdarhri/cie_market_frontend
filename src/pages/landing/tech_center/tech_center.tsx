import "./tech_center.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import service1 from "./images/service1.jpg";
import image from "./images/industrial.png";
import image2 from "./images/industrial2.png";

import p1 from "../../../assets/partners/1.png";
import p2 from "../../../assets/partners/2.png";
import p3 from "../../../assets/partners/3.png";
import p4 from "../../../assets/partners/4.png";
import p5 from "../../../assets/partners/5.png";

import { useState, useEffect } from "react";
import Partners from "@ui/Landing/Partners/Partners";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

const statsData:StatsItemsType = {
	a: { name: "Tech Centers", value: 11 },
	b: { name: "Labeled Laboratories", value: 66 },
	c: { name: "Research Centers", value: 55 },
	d: { name: "Industrial R&D Projects", value: 40 },
};

const heroProps: HeroProps = {
	heroTitle: <>Tech Center</>,
	heroDescription: "We provide the tools, mentorship, and environment to turn ideas into saleable ventures",
	heroImage: image,
	firstAction: "Submit A Patent",
	// secondAction: "Submit A Patent",
	stats: statsData,
};

function TechCenterServiceCard({title, description, image}:{title:string, description:string, image:string}){
	return (
		<div className="techCenterServiceCard">
			<img src={image} alt={title} />
			<div className="techCenterServiceCardContent">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

function TechCenter() {
	useDocumentTitle('Tech Center | Centre for Innovation and Entrepreneurship');
	return (
		<LandingLayout heroProps={heroProps}>
				<Introduction 
					title="Tech Center"
					description="The Tech Center at UIR is a dynamic collaboration space where academic expertise meets industrial challenges. Through co-development projects, prototype creation, and technology integration, we deliver tailor-made solutions for businesses, cities, and public institutions. From smart solar infrastructure to urban beautification and energy-efficient systems, the clinic drives innovation with real-world impact."
					image={image2}
				/>
				<VisionAndMission 
					mission="support Made @UIR innovation projects to meet the specific needs of industry and territories"
					vision="Transform the CIE into an effective Business Unit serving industry and the territories"
				/>
				<div className="techCenterServices">
					<div className="techCenterServicesLeft">
						<h2>Our Services</h2>
						<p>
							We connect industry with academic expertise to solve technical challenges through tailored research and innovation support
						</p>
					</div>
					<div className="techCenterServicesGrid">
					<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>
						<TechCenterServiceCard
							image={service1}
							title="Mentoring of project leaders and preincubation services"
							description="We connect industry with academic expertise to solve technical challenges through tailored research and innovation support"
						/>

					</div>
				</div>

				<Partners partners={[p1, p2, p3, p4, p5]} />
		</LandingLayout>
	);
}

export default TechCenter;