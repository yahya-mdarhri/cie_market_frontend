import './InventionCard.css'

import blueArrow from './images/arrow.svg'

interface InventionCardProps {
	title: string; // Invention title
	image: string; // Invention image
	description: string; // invention description -could be change later-
}

function InventionCard({ title, description, image }: InventionCardProps) {
	return (
		<div className="InventionCard">
			<img src={image} alt="InventionImage" className='InventionImg'/>
			<img src={blueArrow} alt="blueArrow" className="blueArrow" />
			<div className="InventionCardContent">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default InventionCard