import "./tech_center.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import service1 from "./images/service1.jpg";
import image2 from "./images/industrial2.png";

import { useDocumentTitle } from "@hooks/useDocumentTitle";
import DepartmentHeadSection from "@ui/Landing/DepartmentHeadSection/DepartmentHeadSection";

const statsData:StatsItemsType = {
	a: { name: "Tech Centers", value: 11 },
	b: { name: "Labeled Laboratories", value: 66 },
	c: { name: "Research Centers", value: 55 },
	d: { name: "Industrial R&D Projects", value: 40 },
};

const servicesData = [
	{
	  title: "Accelerating Product Innovation",
	  description:
		"The Techcenter helps companies enhance their innovation pipeline by offering access to rapid prototyping tools and skilled support. With state-of-the-art equipment and resources, the center assists in turning ideas into tangible products faster.",
	},
	{
	  title: "Small Batch Production for Specific Industry Needs",
	  description:
		"For certain niche sectors of industries, the center enables quick production of customized parts using precise methods that meet high precision and speed needs.",
	},
	{
	  title: "Integrating Advanced Manufacturing Technologies",
	  description:
		"We help companies gain access to new digital tools and advanced manufacturing processes. This includes integrating sensors, robotics, and 3D printing into existing production flows to improve efficiency and production feasibility.",
	},
	{
	  title: "Functional Prototyping for Critical Sectors",
	  description:
		"The Techcenter specializes in functional prototyping for high-demand research and industrial uses. These include sectors such as healthcare, energy, and telecommunications, which require specific standards of these industries.",
	},
	{
	  title: "Industrial Process Improvement",
	  description:
		"Developed in collaboration with our industrial partners, we analyze and improve production chains through process simulation, data analysis, and custom software tools to provide tailored solutions.",
	},
	{
	  title: "Prototyping Solutions for the Automotive Industry",
	  description:
		"The Techcenter supports the automotive industry by designing and developing advanced prototypes for new products and components, helping businesses remain innovative in a rapidly evolving market.",
	},
	{
	  title: "Technical Support for Student Projects",
	  description:
		"As a technological training center, the Techcenter provides resources and expertise to assist students in designing, prototyping, and testing their engineering projects. This guidance helps them in realizing their academic projects.",
	},
	{
	  title: "Research and Development for Industrial Innovation",
	  description:
		"Objective: The Techcenter collaborates with industrial firms to turn R&D research into real-world solutions. We provide the necessary resources and know-how for every stage of product development, from initial idea to real-world validation.",
	},
	{
	  title: "Maintenance and Enhancement of Industrial Equipment",
	  description:
		"The Techcenter offers maintenance services for industrial machines and systems. This includes hardware repair, performance enhancement, and real-time condition-based diagnostics to optimize machine performance.",
	},
	{
	  title: "Custom Industrial Solutions",
	  description:
		"We work directly with industries to tailor design custom solutions tailored to their needs. From initial specifications to final product implementation, we provide complete support to ensure projects progress from concepts to implementation.",
	},
  ];

const heroProps: HeroProps = {
	heroTitle: <>Tech Center</>,
	heroDescription: "We provide the tools, mentorship, and environment to turn ideas into saleable ventures",
	firstAction: "Submit A Patent",
	stats: statsData,
};

function TechCenterServiceCard({title, description, image, key}:{title:string, description:string, image:string, key: number}){
	return (
		<div className="techCenterServiceCard" key={key}>
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
				<DepartmentHeadSection
					name="Omar JABBOURI"
					role="Head of Tech Center"
					// imageUrl={headImg}
				/>
				<div className="techCenterServices">
					<div className="techCenterServicesLeft">
						<h2>Our Services</h2>
						<p>
							We connect industry with academic expertise to solve technical challenges through tailored research and innovation support
						</p>
					</div>
					<div className="techCenterServicesGrid">
						{servicesData.map((service, index) => (
							<TechCenterServiceCard 
								key={index}
								title={service.title}
								description={service.description}
								image={service1}
							/>
						))}

					</div>
				</div>
		</LandingLayout>
	);
}

export default TechCenter;