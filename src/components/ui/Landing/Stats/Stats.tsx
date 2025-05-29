import { StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import "./Stats.css";

function Stats({ statsData }: { statsData: StatsItemsType }) { // i will pass the stats as props later
	return (
		<div className="hero-stats">
			{Object.entries(statsData).map(([key, stat]) => (
				<div key={key} className="stat-card">
					<div className="stat-value">{stat.value}</div>
					<div className="stat-label">{stat.name}</div>
				</div>
			))}
		</div>
	);
}

export default Stats;
