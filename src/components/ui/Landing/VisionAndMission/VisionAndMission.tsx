import './VisionAndMission.css';

interface VisionAndMissionProps {
	mission: string; // The mission statement of the organization	
	vision: string; // The vision statement of the organization
}

// This component is used to display the mission and vision of the organization.
function VisionAndMission({mission, vision}: VisionAndMissionProps) {
	return (
		<div className="VisionAndMission">
			<div className="VisionAndMissionLeft">
				<h2>Mission</h2>
				<p>
					{mission}
				</p>
			</div>
			<div className="VisionAndMissionRight">
				<h2>Vision</h2>
				<p>
					{vision}
				</p>
			</div>
		</div>
	);
}

export default VisionAndMission;