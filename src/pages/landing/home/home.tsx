import LandingLayout from "@layouts/LandingLayout/LandingLayout";
import "./home.css";
import DepartmentHeadSection from "@ui/Landing/DepartmentHeadSection/DepartmentHeadSection";

import arrow from '../../../assets/icons/arrow.svg';
import headImg from "./images/M-Bouya.png";

import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";
import Partners from "@ui/Landing/Partners/Partners";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Link } from 'react-router-dom';
import ContactUs from "@ui/Landing/ContactUs/ContactUs";
import { departments, heroProps, partners } from './data';

interface CIEItemProps {
	name: string;
	description: string;
	icon: React.ReactNode;
	link: string;
}

function CIEItem({name, description, icon, link}: CIEItemProps) {
	return (
		<Link to={link} className="CIEItem">
			<div>
				{icon}
			</div>
			<h3>{name}</h3>
			<p>{description}</p>
			<div className="CIEItemMore">
				learn more
				<img src={arrow} alt="" />
			</div>
		</Link>
	);
}

function Home() {
	useDocumentTitle('Home | Centre for Innovation and Entrepreneurship');

	return (
		<LandingLayout heroProps={heroProps}>
				<Introduction 
					title="The Centre for Innovation and Entrepreneurship"
					description="The Centre for Innovation and Entrepreneurship is dedicated to protecting and promoting the University's research and innovation, as well as encouraging entrepreneurship and technology transfer to the industrial sector."
					image="/home/1.svg"	
					years={10}
					inventions={600}
				/>
				<VisionAndMission 
					mission="Multiplying the impact of RDI in the service of industrial and territorial competitiveness, through The valorization of research results, the promotion of entrepreneurship and the solid partnership with socioeconomic actors "
					vision="UIR's leadership as a University promoting innovation and entrepreneurship at the national and African levels."
				/>
				<div className="Home3rdSection">
				</div>

				<DepartmentHeadSection 
					name="Mohsine BOUYA"
					role="Executive Director"
					message="We are committed to fostering a culture of innovation and entrepreneurship that drives economic growth and societal impact. Our team is dedicated to supporting researchers, inventors, and entrepreneurs in transforming their ideas into successful ventures."
					imageUrl={headImg}
				/>
				<div className="DepartmentsSection">
					<div className="DepartmentsSectionHeader">
						<h2>Our Departments</h2>
						<p>Explore our specialized units working together to drive innovation and entrepreneurship</p>
					</div>
					<div className="DepartmentsSectionContent">
						{departments.map((dept, index) => (
							<CIEItem
								key={index}
								icon={dept.icon}
								name={dept.name}
								description={dept.description}
								link={dept.link}
							/>
						))}
					</div>
				</div>
				<Partners partners={partners} />
				<div className="Home5thSection" id="contact">
					<ContactUs onSubmit={(formData) =>{}} />
				</div>
		</LandingLayout>
	);
}

export default Home;