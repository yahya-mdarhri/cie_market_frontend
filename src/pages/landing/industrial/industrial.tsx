import "./industrial.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import image2 from "./images/industrial2.png";

import { useDocumentTitle } from "@hooks/useDocumentTitle";
import Services from "@ui/Landing/Services/Services";

import {
	FaTools,
	FaIndustry,
	FaLightbulb
  } from "react-icons/fa";
import DepartmentHeadSection from "@ui/Landing/DepartmentHeadSection/DepartmentHeadSection";
import Partners from "@ui/Landing/Partners/Partners";

import headImg from "./images/bertrand_denise.jpeg";

import madaef_golf from "./images/partners/madaef_golfs.png";	

const clients = [
	{
		logo: madaef_golf,
		name: "madaef golf",
		link: "https://www.madaefgolfs.com/"
	},
]
const servicesData = [
	{
	  icon: <FaTools />,
	  title: "Solutions to Industrial Problems",
	  description: "We provide practical solutions to real-world industrial challenges by leveraging research expertise."
	},
	{
	  icon: <FaIndustry />,
	  title: "Pilot Line Construction",
	  description: "Support in building preindustrialization pilot lines to scale up innovative products and processes."
	},
	{
	  icon: <FaLightbulb />,
	  title: "IP Awareness & Innovation Marketing",
	  description: "Raise awareness about intellectual property and promote innovations through strategic marketing."
	}
  ];
  

const statsData:StatsItemsType = {
	a: { name: "Scientific Publications", value: 1800 },
	b: { name: "National & International Awards", value: 10 },
	c: { name: "Co-development Projects", value: 40 },
	d: { name: "Industry Partnerships", value: 25 },
};

const heroProps: HeroProps = {
	heroTitle: <>Industrial Clinic</>,
	heroDescription: "Solving Real-World Challenges Through Academic–Industry Collaboration",
	firstAction: "Submit A Patent",
	// secondAction: "Submit A Patent",
	stats: statsData,
};

function Industrial() {
	useDocumentTitle('Industrial Clinic | Centre for Innovation and Entrepreneurship');
	return (
		<LandingLayout heroProps={heroProps}>
				<Introduction 
					title="Industrial Clinic"
					description="The Industrial Clinic at UIR is a dynamic collaboration space where academic expertise meets industrial challenges. Through co-development projects, prototype creation, and technology integration, we deliver tailor-made solutions for businesses, cities, and public institutions. From smart solar infrastructure to urban beautification and energy-efficient systems, the clinic drives innovation with real-world impact."
					image={image2}
				/>
				<VisionAndMission 
					mission="support Made @UIR innovation projects to meet the specific needs of industry and territories"
					vision="Transform the CIE into an effective Business Unit serving industry and the territories"
				/>
				<DepartmentHeadSection
					name="Bertrand DENIS"
					role="Head of industrial Clinic"
					imageUrl={headImg}
				/>
				<Services services={servicesData} />

				<Partners partners={clients} areCLients/>
		</LandingLayout>
	);
}

export default Industrial;