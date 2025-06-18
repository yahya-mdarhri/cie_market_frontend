import { motion } from 'framer-motion';
import './Partners.css';
import { useTranslation } from 'react-i18next';

interface Partner {
	logo: string;
	name: string;
	link: string;
}

interface PartnersProps {
	partners: Partner[];
	areCLients?: boolean;
}

export default function Partners({ partners, areCLients = false}: PartnersProps) {
	const { t } = useTranslation('partners');
	
	return (
		<section className="partners-section">
			<div className="contact-section-header">
				<h2>{areCLients ? t('clients.title') : t('partners.title')}</h2>
				<p>{areCLients ? t('clients.subtitle') : t('partners.subtitle')}</p>
			</div>
			<div className="partners-grid">
				{partners.map((partner, index) => (
					<motion.a
						key={index}
						href={partner.link}
						target="_blank"
						rel="noopener noreferrer"
						className="partner-card"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<img 
							src={partner.logo} 
							alt={partner.name}
							className="partner-logo"
						/>
					</motion.a>
				))}
			</div>
		</section>
	);
}
