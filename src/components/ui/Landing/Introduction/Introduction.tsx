import './Introduction.css'
import { motion } from 'framer-motion';

interface IntroductionProps {
	title: string;
	description: string;
	image: string;
	years?: number;
	inventions?: number;
}

function Introduction({title, description, image, years, inventions}: IntroductionProps) {
	return (
		<section className="Introduction">
			<div className="IntroductionGrid">
				<div className="IntroductionText">
					<motion.div 
						className="IntroductionContent"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="IntroductionTitle">
							<h1>{title}</h1>
						</div>
						<p>{description}</p>
						
						{(years || inventions) && (
							<div className="IntroductionMetrics">
								{years && (
									<div className="Metric">
										<div className="MetricNumber">{years}+</div>
										<div className="MetricLabel">Years of experience</div>
									</div>
								)}
								{inventions && (
									<div className="Metric">
										<div className="MetricNumber">{inventions}+</div>
										<div className="MetricLabel">Inventions disclosed</div>
									</div>
								)}
							</div>
						)}
					</motion.div>
				</div>

				<motion.div 
					className="IntroductionVisual"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<div className="VisualContainer">
						<img src={image} alt="Introduction" />
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Introduction;