import LandingLayout, { HeroProps, StatsItemsType } from "../../../components/layouts/LandingLayout/LandingLayout";

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
			body
		</LandingLayout>
	);
}

export default Home;