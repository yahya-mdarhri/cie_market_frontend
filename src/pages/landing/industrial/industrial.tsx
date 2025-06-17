import "./industrial.css";
import LandingLayout from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import image2 from "./images/industrial2.png";

import { useDocumentTitle } from "@hooks/useDocumentTitle";
import Services from "@ui/Landing/Services/Services";
import Partners from "@ui/Landing/Partners/Partners";
import { heroProps, servicesData, clients} from "./data";

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
				{/* <DepartmentHeadSection
					name="Bertrand DENIS"
					role="Head of industrial Clinic"
					imageUrl={headImg}
				/> */}
				<Services services={servicesData} />

				<Partners partners={clients} areCLients/>
		</LandingLayout>
	);
}

export default Industrial;