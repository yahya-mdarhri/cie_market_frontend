import './ProfileCard.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export interface SocialLinks {
	email?: string;
	phone?: string;
}

interface ProfileCardProps {
	name: string;
	image: string;
	role?: string;
	social?: SocialLinks;
	className?: string;
}

function ProfileCard({ name, image, role, social, className = '' }: ProfileCardProps) {
	const { t } = useTranslation('components.ProfileCard');

	return (
		<div className={`profileCard ${className}`}>
			<div className="profileContent">
				<div className="profileImageWrapper">
					<img src={image} alt={name} />
				</div>
				<div className="profileNameBox">
					<h3>{name}</h3>
					{role && <p className="profileRole">{role}</p>}
					{social && (
						<div className="socialLinks">
							{social.phone && (
								<a 
									href={`tel:${social.phone}`}
									className="socialLink"
									aria-label={t('contact.call', { name })}
								>
									<FaPhone />
									<span>{social.phone}</span>
								</a>
							)}
							{social.email && (
								<a 
									href={`mailto:${social.email}`}
									className="socialLink"
									aria-label={t('contact.emailPerson', { name })}
								>
									<FaEnvelope />
									<span>{social.email}</span>
								</a>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;