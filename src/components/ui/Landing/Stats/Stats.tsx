import "./Stats.css";

function Stats() { // i will pass the stats as props later
	return (
		<div className="info-cards">
			<div className="info_center">
				<div className="info-card">
					<h2>644</h2>
					<p>Innovation & Patents</p>
				</div>
				<div className="info-card">
					<h2>117</h2>
					<p>International Patents</p>
				</div>
				<div className="info-card">
					<h2>2</h2>
					<p>Gold Medals</p>
				</div>
			</div>
		</div>
	);
}

export default Stats;
