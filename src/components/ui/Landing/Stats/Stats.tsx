import { StatsItemsType } from "../../../layouts/LandingLayout/LandingLayout";
import "./Stats.css";

function Stats({statsData}: {statsData: StatsItemsType}) { // i will pass the stats as props later
	return (
		<div className="info-cards">
			<div className="info_center">
				<div className="info-card">
					<h2>{statsData['a'].value}</h2>
					<p>{statsData['a'].name}</p>
				</div>
				<div className="info-card">
					<h2>{statsData['b'].value}</h2>
					<p>{statsData['b'].name}</p>
				</div>
				<div className="info-card">
					<h2>{statsData['c'].value}</h2>
					<p>{statsData['c'].name}</p>
				</div>
			</div>
		</div>
	);
}

export default Stats;
