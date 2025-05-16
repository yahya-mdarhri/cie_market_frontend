import './VisionAndMission.css';

interface VisionAndMissionProps {
	mission: string;
	vision: string;
}

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