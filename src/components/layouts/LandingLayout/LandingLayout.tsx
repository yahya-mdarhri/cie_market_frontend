import React, { createContext, ReactNode } from "react";
import "./LandingLayout.css";
import Footer from "../../ui/Landing/Footer/Footer";
import NavBar from "../../ui/Landing/NavBar/NavBar";
import Hero from "../../ui/Landing/Hero/Hero";
import Stats from "../../ui/Landing/Stats/Stats";

interface StatsItemsType {
	[key: string]: {name: string; value: number};
}

interface HeroProps {
	heroTitle: React.ReactNode;
	heroDescription: string;
	heroImage: string;
	firstAction: string;
	secondAction?: string;
	stats: StatsItemsType;
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
				<Stats statsData={heroProps.stats}/>
				{children}
			</main>
			<Footer/>
			{/* <Footer /> ill add it later */}
		</div>
	);
}

export type { HeroProps, StatsItemsType };
export default LandingLayout;
