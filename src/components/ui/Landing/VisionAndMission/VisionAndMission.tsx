import './VisionAndMission.css';
import { useTranslation } from 'react-i18next';

interface VisionAndMissionProps {
	mission: string; // The mission statement of the organization	
	vision: string; // The vision statement of the organization
}

// This component is used to display the mission and vision of the organization.
function VisionAndMission({mission, vision}: VisionAndMissionProps) {
	const { t } = useTranslation('visionAndMission');

	return (
		<section className="VisionAndMission" aria-labelledby="vision-mission-heading">
			<div className="VisionAndMissionLeft">
				<h2 id="mission-heading">{t('mission')}</h2>
				<p aria-labelledby="mission-heading">
					{mission}
				</p>
			</div>
			<div className="VisionAndMissionRight">
				<h2 id="vision-heading">{t('vision')}</h2>
				<p aria-labelledby="vision-heading">
					{vision}
				</p>
			</div>
		</section>
	);
}

export default VisionAndMission;