import './InventionCard.css'

import blueArrow from './images/arrow.svg'

interface InventionCardProps {
	title: string;
	description: string;
	image: string;
}

function InventionCard({ title, description, image }: InventionCardProps) {
	return (
		<div className="InventionCard">
			<img src={image} alt="" className='InventionImg'/>
			<img src={blueArrow} alt="" className="blueArrow" />
			<div className="InventionCardContent">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default InventionCard