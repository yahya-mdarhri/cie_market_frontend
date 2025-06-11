import { motion } from 'framer-motion';
import './Partners.css';

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
	return (
		<section className="partners-section">
			<h2 className="partners-title">
				{
					areCLients ? "Trusted us" : "Our Partners"
				}
			</h2>
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
