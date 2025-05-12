import LandingLayout, { HeroProps } from "../../../components/layouts/LandingLayout/LandingLayout";

const heroProps: HeroProps = {
	heroTitle: <>From Idea to Market <br/>— Bridging Innovation <br/>————— and Industry</>,
	heroDescription: "We are glad to have you here. Explore our features and services.",
	heroImage: "/side_pic.png",
	firstAction: "Partner With Us",
	secondAction: "Submit A Patent",
};

function Home() {
	return (
		<LandingLayout heroProps={heroProps}>
			body
		</LandingLayout>
	);
}

export default Home;