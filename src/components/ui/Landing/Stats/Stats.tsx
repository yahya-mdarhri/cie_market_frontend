import { StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import "./Stats.css";

function Stats({statsData}: {statsData: StatsItemsType}) { // i will pass the stats as props later
	return (
		<div className="info-cards">
			<div className="info_center">
				{Object.keys(statsData).map((key) => (
				<div className="info-card">
					<h2>{statsData[key].value}</h2>
					<p>{statsData[key].name}</p>
				</div>
				))}
			</div>
		</div>
	);
}

export default Stats;
