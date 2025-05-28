
import { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import "./Hero.css";

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
						<button className="hero-btn primary">{props.firstAction}</button>
						{props.secondAction && (
							<button className="hero-btn secondary">{props.secondAction}</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
