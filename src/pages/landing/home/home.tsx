import LandingLayout, { HeroProps, StatsItemsType } from "../../../components/layouts/LandingLayout/LandingLayout";
import "./home.css";


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

function Home() {
	return (
		<LandingLayout heroProps={heroProps}>
			<section>
				<div className="Home1stSection">
					<h1>The Centre for Innovation and Entrepreneurship</h1>
					<div className="sectionContent">
						<div>
							<img src="/public/home/1.svg" alt="" />
						</div>
						<div className="sectionText">
						The Centre for Innovation and Entrepreneurship is 
						dedicated to protecting and promoting the University's
						research and innovation, as well as encouraging entrepreneurship
						and technology transfer to the industrial sector.
						</div>
					</div>
				</div>
			</section>
		</LandingLayout>
	);
}

export default Home;