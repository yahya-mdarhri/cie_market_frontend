import React, { createContext, ReactNode } from "react";
import "./LandingLayout.css";
import NavBar from "../../ui/Landing/NavBar/NavBar";
import Hero from "../../ui/Landing/Hero/Hero";
import Stats from "../../ui/Landing/Stats/Stats";

interface HeroProps {
	heroTitle: React.ReactNode;
	heroDescription: string;
	heroImage: string;
	firstAction: string;
	secondAction?: string;
}

interface LandingLayoutProps {
	children?: ReactNode;
	heroProps: HeroProps;
}


function LandingLayout({ children, heroProps}: LandingLayoutProps) {
	return (
		<div className="layout-container">
			<div className="hero-bg"></div>
			<div className="hero-bg2"></div>
			<NavBar />
			<main>
				<Hero props={heroProps}/>
				<Stats />
				{children}
			</main>

			{/* <Footer /> ill add it later */}
		</div>
	);
}

export type { HeroProps };
export default LandingLayout;
