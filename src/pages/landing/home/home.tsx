import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import "./home.css";
import tto_logo from "./images/tto.svg";
import industrial_logo from "./images/industrial.svg";
import incubator_logo from "./images/incubator.svg";
import tech_center_logo from "./images/tech_center.svg";
import arrow from '../../../assets/icons/arrow.svg';
import p1 from '../../../assets/partners/1.png';
import p2 from '../../../assets/partners/2.png';
import p3 from '../../../assets/partners/3.png';
import p4 from '../../../assets/partners/4.png';
import p5 from '../../../assets/partners/5.png';
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";


const statsData:StatsItemsType = {
	a: { name: "Innovation & Patents", value: 644 },
	b: { name: "International Patents", value: 117 },
	c: { name: "Gold Medals", value: 2 },
};

const heroProps: HeroProps = {
	heroTitle: <>From Idea to Market <br/>— Bridging Innovation <br/>————— and Industry</>,
	heroDescription: "We are glad to have you here. Explore our features and services.",
	heroImage: "/side_pic.png",
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
	return (
		<LandingLayout heroProps={heroProps}>
				<Introduction 
					title="The Centre for Innovation and Entrepreneurship"
					description="The Centre for Innovation and Entrepreneurship is dedicated to protecting and promoting the University's research and innovation, as well as encouraging entrepreneurship and technology transfer to the industrial sector."
					image="/home/1.svg"	
				/>
				<VisionAndMission 
					mission="Multiplying the impact of RDI in the service of industrial and territorial competitiveness, through The valorization of research results, the promotion of entrepreneurship and the solid partnership with socioeconomic actors "
					vision="UIR's leadership as a University promoting innovation and entrepreneurship at the national and African levels."
				/>
				<div className="Home3rdSection">
				</div>
				<div className="Home4thSection">
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
				<div className="Home6thSection">
					<h2>Our Partners</h2>
					<div className="Home6thSectionLogos">
						<img src={p1} alt="" />
						<img src={p2} alt="" />
						<img src={p3} alt="" />
						<img src={p4} alt="" />
						<img src={p5} alt="" />
					</div>
				</div>
				<div className="Home5thSection">
					<form className="HomeContactUs">
						<div className="HomeContactUsHeader">
							<h2>Let’s Get In Touch</h2>
							<div className="HomeContactUsRadios">
								<div>
									<label htmlFor="isInventor">Inventor</label>
									<input type="radio" name="isInventor" id="isInventor" />
								</div>
								<div>
									<label htmlFor="isCompany">Company</label>
									<input type="radio" name="isCompany" id="isCompany" />
								</div>
							</div>
						</div>
						<div className="HomeContactUsInputs">
							<input type="text" name="name" id="name" placeholder="Name"/>
							<div className="email_and_phone">
								<input type="email" name="email" id="email" placeholder="Email" />
								<input type="tel" name="phone" id="phone" placeholder="Phone" />
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