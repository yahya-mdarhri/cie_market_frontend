import './VisionAndMission.css';

interface VisionAndMissionProps {
	mission: string; // The mission statement of the organization	
	vision: string; // The vision statement of the organization
}

// This component is used to display the mission and vision of the organization.
function VisionAndMission({mission, vision}: VisionAndMissionProps) {
	return (
		<section className="VisionAndMission" aria-labelledby="vision-mission-heading">
			<div className="VisionAndMissionLeft">
				<h2 id="mission-heading">Mission</h2>
				<p aria-labelledby="mission-heading">
					{mission}
				</p>
			</div>
			<div className="VisionAndMissionRight">
				<h2 id="vision-heading">Vision</h2>
				<p aria-labelledby="vision-heading">
					{vision}
				</p>
			</div>
		</section>
	);
}

export default VisionAndMission;