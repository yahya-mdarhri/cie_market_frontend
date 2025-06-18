import "./industrial.css";
import LandingLayout from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";
import { useTranslation } from 'react-i18next';

import image2 from "./images/industrial2.png";

import { useDocumentTitle } from "@hooks/useDocumentTitle";
import Services from "@ui/Landing/Services/Services";
import Partners from "@ui/Landing/Partners/Partners";
import { clients, getServicesData, getHeroProps, contactData } from "./data";
import Contact from "@ui/Landing/Contact/Contact";

function Industrial() {
	const { t } = useTranslation('industrial');
	useDocumentTitle('Industrial Clinic | Centre for Innovation and Entrepreneurship');
	return (
		<LandingLayout heroProps={getHeroProps(t)}>
				<Introduction 
					title={t('industrial.introduction.title')}
					description={t('industrial.introduction.description')}
					image={image2}
				/>
				<VisionAndMission 
					mission={t('industrial.visionAndMission.mission')}
					vision={t('industrial.visionAndMission.vision')}
				/>
				{/* <DepartmentHeadSection
					name="Bertrand DENIS"
					role="Head of industrial Clinic"
					imageUrl={headImg}
				/> */}
				<Services services={getServicesData(t)} />
				<Contact
					contacts={contactData}
					title={t('contact.title')}
				/>
				<Partners partners={clients} areCLients/>
		</LandingLayout>
	);
}

export default Industrial;