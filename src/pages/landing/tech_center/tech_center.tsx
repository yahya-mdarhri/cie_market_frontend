import "./tech_center.css";
import LandingLayout from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";
import { useTranslation } from 'react-i18next';

import service1 from "./images/service1.jpg";
import image2 from "./images/industrial2.png";

import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { useTechCenterData } from "./data";

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
	const { t } = useTranslation('techCenter');
	const { heroProps, servicesData } = useTechCenterData();

	useDocumentTitle('Tech Center | Centre for Innovation and Entrepreneurship');
	return (
		<LandingLayout heroProps={heroProps}>
				<Introduction 
					title={t('introduction.title')}
					description={t('introduction.description')}
					image={image2}
				/>
				<VisionAndMission 
					mission={t('visionAndMission.mission')}
					vision={t('visionAndMission.vision')}
				/>
				<div className="techCenterServices">
					<div className="techCenterServicesLeft">
						<h2>{t('services.title')}</h2>
						<p>{t('services.description')}</p>
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