import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Partners.css';

interface Partner {
	logo: string;
	name: string;
	link: string;
}

interface PartnersProps {
	partners: Partner[];
}

export default function Partners({ partners }: PartnersProps) {
	const navigate = useNavigate();

	return (
		<section className="partners-section">
			<h2 className="partners-title">
				Our Trusted Partners
			</h2>
			<div className="partners-grid">
				{partners.map((partner, index) => (
					<motion.div
						key={index}
						className="partner-card"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => navigate(partner.link)}
						style={{ cursor: 'pointer' }}
					>
						<img 
							src={partner.logo} 
							alt={partner.name}
							className="partner-logo"
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
}
