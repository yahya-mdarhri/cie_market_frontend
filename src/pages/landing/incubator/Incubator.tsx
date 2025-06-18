import "./Incubator.css";
import LandingLayout from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";
import { useTranslation } from 'react-i18next';

import image2 from "./images/incubator2.png";

import Partners from "@ui/Landing/Partners/Partners";
import { useDocumentTitle } from "@hooks/useDocumentTitle";

import Services from "@ui/Landing/Services/Services";
import { partners, getServicesData, getHeroProps, getPrograms, contactData } from "./data";
import Contact from "@ui/Landing/Contact/Contact";

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
	const { t } = useTranslation('incubator');
	const programs = getPrograms(t);
	return(
		<section className="startups">
			<div className="startupsHeader">
				<h2>{t('incubator.startups.title')}</h2>
				<p>{t('incubator.startups.subtitle')}</p>
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
	const { t } = useTranslation('incubator');
	useDocumentTitle('Incubator 360º | Centre for Innovation and Entrepreneurship');
	return (
		<LandingLayout heroProps={getHeroProps(t)}>
				<Introduction 
					title={t('incubator.introduction.title')}
					description={t('incubator.introduction.description')}
					image={image2}
				/>
				<VisionAndMission 
					mission={t('incubator.visionAndMission.mission')}
					vision={t('incubator.visionAndMission.vision')}
				/>
				<Services services={getServicesData(t)} />
				<Startups/>

				<Contact
					contacts={contactData}
				/>
				<Partners partners={partners} />
		</LandingLayout>
	);
}

export default Incubator;