import LandingLayout from "@layouts/LandingLayout/LandingLayout";
import "./home.css";
import DepartmentHeadSection from "@ui/Landing/DepartmentHeadSection/DepartmentHeadSection";
import { useTranslation } from 'react-i18next';

import arrow from '../../../assets/icons/arrow.svg';
import headImg from "./images/M-bouya.jpg";

import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";
import Partners from "@ui/Landing/Partners/Partners";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { Link, useNavigate } from 'react-router-dom';
import ContactUs from "@ui/Landing/ContactUs/ContactUs";
import { getDepartments, getHeroProps, partners } from './data';
import axios from "axios";
import { useEffect } from "react";

interface CIEItemProps {
	name: string;
	description: string;
	icon: React.ReactNode;
	link: string;
}

function CIEItem({name, description, icon, link}: CIEItemProps) {
	const { t } = useTranslation('home');
	return (
		<Link to={link} className="CIEItem">
			<div>
				{icon}
			</div>
			<h3>{name}</h3>
			<p>{description}</p>
			<div className="CIEItemMore">
				{t('departments.learnMore')}
				<img src={arrow} alt="" />
			</div>
		</Link>
	);
}

function Home() {
	const navigator = useNavigate();
	const { t } = useTranslation('home');
	useDocumentTitle('Home | Centre for Innovation and Entrepreneurship');


	const handleContactUsSubmit = (data: any) => {
		axios.post('/api/public/contact-us/', data)
		.catch(err => console.log(err))
	}
	const heroProps = getHeroProps(t);
	heroProps.onFirstActionClick = () => { 
		const el = document.getElementById("contact");
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	}
	heroProps.onSecondActionClick = () => { navigator('/submit_patent'); }
	useEffect(() => {
		if (window.location.hash === "#contact") {
			const el = document.getElementById("contact");
			if (el) {
				el.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [window.location.hash]);
	return (
		<LandingLayout heroProps={heroProps}>
				<Introduction 
					title={t('introduction.title')}
					description={t('introduction.description')}
					image="/home/1.svg"	
					years={10}
					inventions={600}
				/>
				<VisionAndMission 
					mission={t('visionAndMission.mission')}
					vision={t('visionAndMission.vision')}
				/>
				<div className="Home3rdSection">
				</div>

				<DepartmentHeadSection 
					name="Mohsine BOUYA"
					role={t('departmentHead.role')}
					message={t('departmentHead.message')}
					imageUrl={headImg}
				/>
				<div className="DepartmentsSection">
					<div className="DepartmentsSectionHeader">
						<h2>{t('departments.title')}</h2>
						<p>{t('departments.subtitle')}</p>
					</div>
					<div className="DepartmentsSectionContent">
						{getDepartments(t).map((dept, index) => (
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
					<ContactUs 
					onSubmit={handleContactUsSubmit} />
				</div>
		</LandingLayout>
	);
}

export default Home;