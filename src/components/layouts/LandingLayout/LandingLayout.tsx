import React, { ReactNode } from "react";
import "./LandingLayout.css";
import Footer from "@ui/Landing/Footer/Footer";
import NavBar from "@ui/Landing/NavBar/NavBar";
import Hero from "@ui/Landing/Hero/Hero";
import InventionInfo, { InventionInfoProps } from "@ui/Landing/InventionInfo/InventionInfo";

// The StatsItemsType interface defines the structure of the stats to be dynamic.
interface StatsItemsType {
	[key: string]: {name: string; value: number};
}


interface HeroProps {
	heroTitle: React.ReactNode; // The title of the hero section
	heroDescription: string; // The description of the hero section
	firstAction?: string; // The first action button text
	secondAction?: string; // The second action button text (optional)
	stats?: StatsItemsType; // The stats to be displayed in the hero section
	onFirstActionClick?: () => void; // Handler for first action button click
	onSecondActionClick?: () => void; // Handler for second action button click
}

interface LandingLayoutProps {
	children?: ReactNode; // The additional section as children
	heroProps?: HeroProps; // The hero section props
	noHero?: boolean; // Whether to hide the hero section
	noFooter?: boolean; // Whether to hide the footer section
	inventionInfoProps?: InventionInfoProps; // Props for InventionInfo modal
}

/*
 * LandingLayout is a layout component that wraps the main content of the landing page.
 * It includes a navigation bar, a hero section, statistics, and a footer.
 * The hero section is passed as props to the component.
 * The additional children can be passed to the component to render below the hero section.
*/
function LandingLayout({ children, heroProps, noFooter = false, noHero = false, inventionInfoProps}: LandingLayoutProps) {
	return (
		<div className="layout-container">
			{/* <div className="hero-bg"></div>
			<div className="hero-bg2"></div> */}
			<NavBar noHero={noHero}/>	
			<main>
				{heroProps && <Hero props={heroProps}/>}
				{children}
			</main>
			{!noFooter && <Footer/>}
			{inventionInfoProps && <InventionInfo {...inventionInfoProps} />}
		</div>
	);
}

export type { HeroProps, StatsItemsType };
export default LandingLayout;
