import './InventionCard.css'

import blueArrow from './images/arrow.svg'

interface InventionCardProps {
	title: string;
	nationalId: string;
	image: string;
	onClick?: () => void;
	key: number;
	style?: React.CSSProperties;
}

function InventionCard({ title, nationalId, image, key, onClick, style }: InventionCardProps) {
	return (
		<div 
			className="InventionCard" 
			key={key}
			onClick={onClick}
			role="button"
			tabIndex={0}
			style={style}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					onClick?.();
				}
			}}
		>
			<img src={image} alt={`${title} illustration`} className='InventionImg'/>
			<img src={blueArrow} alt="" className="blueArrow" aria-hidden="true" />
			<div className="InventionCardContent">
				<h2>{title}</h2>
				<p># {nationalId}</p>
			</div>
		</div>
	)
}


export default InventionCard