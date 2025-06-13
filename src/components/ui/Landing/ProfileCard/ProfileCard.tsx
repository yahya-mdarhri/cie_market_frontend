import './ProfileCard.css';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export interface SocialLinks {
	linkedin?: string;
	twitter?: string;
	email?: string;
}

interface ProfileCardProps {
	name: string;
	image: string;
	role?: string;
	social?: SocialLinks;
	className?: string;
}

function ProfileCard({ name, image, role, social, className = '' }: ProfileCardProps) {
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
							{social.linkedin && (
								<a 
									href={social.linkedin} 
									target="_blank" 
									rel="noopener noreferrer"
									className="socialLink"
									aria-label={`${name}'s LinkedIn`}
								>
									<FaLinkedin />
								</a>
							)}
							{social.twitter && (
								<a 
									href={social.twitter} 
									target="_blank" 
									rel="noopener noreferrer"
									className="socialLink"
									aria-label={`${name}'s Twitter`}
								>
									<FaTwitter />
								</a>
							)}
							{social.email && (
								<a 
									href={`mailto:${social.email}`}
									className="socialLink"
									aria-label={`Email ${name}`}
								>
									<FaEnvelope />
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