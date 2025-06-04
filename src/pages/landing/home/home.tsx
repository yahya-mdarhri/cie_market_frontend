import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import "./home.css";
import tto_logo from "./images/tto.svg";
import industrial_logo from "./images/industrial.svg";
import incubator_logo from "./images/incubator.svg";
import tech_center_logo from "./images/tech_center.svg";

import arrow from '../../../assets/icons/arrow.svg';

import cdg from './images/partners/cdg.jpg';
import cloudflare from './images/partners/cloudflare.jpeg';
import dxc from './images/partners/dxc.webp';
import safari from './images/partners/SAFARI.jpg';
import yanaHolding from './images/partners/Ynna-holding.png';
import eu from './images/partners/European_Union.webp';
import efficacity from './images/partners/Efficacity.png';

import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";
import Partners from "@ui/Landing/Partners/Partners";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { useState } from "react";

const partners = [
		{
			logo: cdg,
			name: "CDG",
			link: "https://www.cdg.ma/"
		},
		{
			logo: cloudflare,
			name: "Cloudflare",
			link: "https://www.cloudflare.com/"
		},
		{
			logo: dxc,
			name: "DXC",
			link: "https://dxc.com/"
		},
		{
			logo: safari,
			name: "SAFARI",
			link: "https://www.groupe-safari.com/"
		},
		{
			logo: yanaHolding,
			name: "Yana Holding",
			link: "https://www.ynna.ma/"
		},
		{
			name: "European Union",
			logo: eu,
			link: "https://european-union.europa.eu/"
		},
		{
			name: "Efficacity",
			logo: efficacity,
			link: "https://efficacity.com/",
		}
]

const statsData:StatsItemsType = {
	a: { name: "Innovation & Patents", value: 644 },
	b: { name: "International Patents", value: 117 },
	c: { name: "Gold Medals", value: 2 },
};

const heroProps: HeroProps = {
	heroTitle: <>From Idea to Market Bridging Innovation and Industry</>,
	heroDescription: "We are glad to have you here. Explore our features and services.",
	firstAction: "Partner With Us",
	secondAction: "Submit A Patent",
	stats: statsData,
};

interface CIEItemProps {
	name: string;
	description: string;
	image: string;
}

function CIEItem({name, description, image}: CIEItemProps) {
	return (
		<div className="CIEItem">
			<div>
				<img src={image} alt="" />
			</div>
			<h3>{name}</h3>
			<p>{description}</p>
			<div className="CIEItemMore">
				learn more
				<img src={arrow} alt="" />
			</div>
		</div>
	);
}

function Home() {
	useDocumentTitle('Home | Centre for Innovation and Entrepreneurship');
	const [contactType, setContactType] = useState('inventor');

	const handleContactTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContactType(e.target.value);
		const companyFields = document.getElementById('companyFields');
		if (companyFields) {
			companyFields.style.display = e.target.value === 'company' ? 'flex' : 'none';
		}
	};

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
				<div className="DepartmentsSection">
					<div className="DepartmentsSectionHeader">
						<h2>Our Departments</h2>
						<p>Explore our specialized units working together to drive innovation and entrepreneurship</p>
					</div>
					<div className="DepartmentsSectionContent">
						<CIEItem
							image={tto_logo}
							name="Technology Transfer Office"
							description="Bridging Innovation and Industry through Research Commercialization"/>
						<CIEItem
							image={industrial_logo}
							name="Industrial Clinic"
							description="Solving Real-World Challenges Through Academic–Industry Collaboration"/>
						<CIEItem
							image={incubator_logo}
							name="Incubator"
							description="Empowering Startups to Transform Ideas into Impact"/>
						<CIEItem
							image={tech_center_logo}
							name="Tech Center"
							description="Driving Innovation with Cutting-Edge Tools, Talent, and Infrastructure"/>
					</div>
				</div>
				<Partners partners={partners} />
				<div className="Home5thSection" id="contact">
					<form className="HomeContactUs">
						<div className="HomeContactUsHeader">
							<h2>Let's Get In Touch</h2>
							<div className="HomeContactUsRadios">
								<div>
									<label htmlFor="isInventor">Inventor</label>
									<input 
										type="radio" 
										name="contactType" 
										id="isInventor" 
										value="inventor"
										checked={contactType === 'inventor'}
										onChange={handleContactTypeChange}
									/>
								</div>
								<div>
									<label htmlFor="isCompany">Company</label>
									<input 
										type="radio" 
										name="contactType" 
										id="isCompany" 
										value="company"
										checked={contactType === 'company'}
										onChange={handleContactTypeChange}
									/>
								</div>
							</div>
						</div>
						<div className="HomeContactUsInputs">
							<input type="text" name="name" id="name" placeholder="Full Name"/>
							<div className="email_and_phone">
								<input type="email" name="email" id="email" placeholder="Email" />
								<input type="tel" name="phone" id="phone" placeholder="Phone" />
							</div>
							<div className="company_fields" id="companyFields" style={{ display: 'none' }}>
								<input type="text" name="companyName" id="companyName" placeholder="Company Name"/>
								<input type="text" name="position" id="position" placeholder="Your Position"/>
							</div>
							<input type="text" name="subject" id="subject" placeholder="Subject"/>
							<textarea name="message" id="message" placeholder="Message"/>
						</div>
						<div className="HomeContactUsSubmit">
							<button type="submit">Send Message</button>
						</div>
					</form>
				</div>

			{/* </section> */}
		</LandingLayout>
	);
}

export default Home;