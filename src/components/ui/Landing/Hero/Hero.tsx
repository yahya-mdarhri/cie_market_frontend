
import { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import "./Hero.css";

function Hero({props}: { props: HeroProps }) {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<div className="hero-left">
					<h1>
						{props.heroTitle}
					</h1>
					<p>
						{props.heroDescription}
					</p>
					<div className="hero-buttons">
						<button className="hero-btn">{props.firstAction}</button>
						{props.secondAction && (
							<button className="hero-btn">{props.secondAction}</button>
						)}
					</div>
				</div>
				<div className="hero-right">
					<img src={props.heroImage} alt="Hero" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
