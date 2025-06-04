import './InventorCard.css';

function InventorCard({ name, image }: { name: string, image: string }) {
	return (
		<div className="inventorCard">
			<div className="inventorContent">
				<div className="inventorImageWrapper">
					<img src={image} alt={name} />
				</div>
				<div className="inventorNameBox">
					<h3>{name}</h3>
				</div>
			</div>
		</div>
	);
}

export default InventorCard;