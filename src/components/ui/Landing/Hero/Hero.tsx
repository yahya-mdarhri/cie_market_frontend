
import "./Hero.css";

function Hero() {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<div className="hero-left">
					<h1>
						From Idea to Market
						<br/>— Bridging Innovation
						<br/>————— and Industry
					</h1>
					<p>
						UIR's Technology Transfer Office supports IP protection, innovation valorization, 
						and industrial collaboration.
					</p>
					<div className="hero-buttons">
						<button className="hero-btn">Partner With Us</button>
						<button className="hero-btn">Submit A Patent</button>
					</div>
				</div>
				<div className="hero-right">
					<img src="/side_pic.png" alt="Hero" />
				</div>
			</div>
		</section>
	);
}

export default Hero;
