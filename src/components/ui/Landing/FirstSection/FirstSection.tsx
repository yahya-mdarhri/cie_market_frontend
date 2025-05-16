import './FirstSection.css'

interface FirstSectionProps {
	title: string;
	description: string;
	image: string;
}

function FirstSection({title, description, image}: FirstSectionProps) {
	return (
		<div className="FirstSection">
				<h1>{title}</h1>
				<div className="FirstSectionMain">
					<div className="FirstSectionMainLeft">
						<p>
							{description}
						</p>
					</div>
					<div className="FirstSectionMainRight">
						<img src={image} alt="" />
					</div>
				</div>
			</div>
	)
}

export default FirstSection;