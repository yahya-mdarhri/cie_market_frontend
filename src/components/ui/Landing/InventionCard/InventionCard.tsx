import './InventionCard.css'

import blueArrow from './images/arrow.svg'

interface InventionCardProps {
	key: number; // for map key
	title: string; // Invention title
	image: string; // Invention image
	description: string; // invention description -could be change later-
}

function InventionCard({ title, description, image, key}: InventionCardProps) {
	return (
		<div className="InventionCard" key={key}>
			<img src={image} alt="InventionImage" className='InventionImg'/>
			{/* <img src={blueArrow} alt="blueArrow" className="blueArrow" /> */}
			<div className="InventionCardContent">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default InventionCard