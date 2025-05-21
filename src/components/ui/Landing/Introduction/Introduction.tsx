import './Introduction.css'

interface IntroductionProps {
	title: string; // The title of the organization
	description: string; // The description of the organization
	image: string; // The side image of the introduction
}

// This component is used to display the introduction of the organization.
function Introduction({title, description, image}: IntroductionProps) {
	return (
		<div className="Introduction">
				<h1>{title}</h1>
				<div className="IntroductionMain">
					<div className="IntroductionMainRight">
						<img src={image} alt="" />
					</div>
					<div className="IntroductionMainLeft">
						<p>
							{description}
						</p>
					</div>
				</div>
			</div>
	)
}

export default Introduction;