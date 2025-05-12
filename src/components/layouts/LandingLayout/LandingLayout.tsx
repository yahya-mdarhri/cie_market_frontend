import { ReactNode } from "react";
import "./LandingLayout.css";
import NavBar from "../../ui/Landing/NavBar/NavBar";
import Hero from "../../ui/Landing/Hero/Hero";
import Stats from "../../ui/Landing/Stats/Stats";


interface LandingLayoutProps {
	children?: ReactNode;
	heroTitle?: string;
	heroDescription?: string;
	heroImage?: string;
}

export const landingLayoutContext = 

function LandingLayout({ children }: LandingLayoutProps) {
	return (
		<div className="layout-container">
			<div className="hero-bg"></div>
			<div className="hero-bg2"></div>
			<NavBar />
			<main>
				<Hero />
				<Stats />
				{children}
			</main>

			{/* <Footer /> ill add it later */}
		</div>
	);
}

export default LandingLayout;
