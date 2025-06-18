import { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import "./Hero.css";
import Stats from "@components/ui/Landing/Stats/Stats";

function Hero({props}: { props: HeroProps }) {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<div className="hero-text">
					<h1>
						{props.heroTitle}
					</h1>
					<p>
						{props.heroDescription}
					</p>
					<div className="hero-buttons">
						{props.firstAction && (
							<button 
								className="hero-btn primary" 
								onClick={props.onFirstActionClick}
							>
								{props.firstAction}
							</button>
						)}
						{props.secondAction && (
							<button 
								className="hero-btn secondary" 
								onClick={props.onSecondActionClick}
							>
								{props.secondAction}
							</button>
						)}
					</div>
				</div>
					{props.stats && (
						<Stats statsData={props.stats} />
					)}
			</div>
		</section>
	);
}

export default Hero;
