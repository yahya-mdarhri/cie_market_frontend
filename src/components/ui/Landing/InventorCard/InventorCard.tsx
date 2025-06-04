import './InventorCard.css';

function InventorCard({ name, image, role }: { name: string, image: string, role?: string }) {
	return (
		<div className="inventorCard">
			<div className="inventorContent">
				<div className="inventorImageWrapper">
					<img src={image} alt={name} />
				</div>
				<div className="inventorNameBox">
					<h3>{name}</h3>
					{role && <p className="inventorRole">{role}</p>}
				</div>
			</div>
		</div>
	);
}

export default InventorCard;