import "./tto.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import inv_img1 from "./images/inv1.jpg";
import image from "./images/tto.png";
import InventionCard from "@ui/Landing/InventionCard/InventionCard";

const statsData:StatsItemsType = {
	a: { name: "Innovation & Patents", value: 644 },
	b: { name: "International Patents", value: 117 },
	c: { name: "Gold Medals", value: 2 },
};

const heroProps: HeroProps = {
	heroTitle: <>Technology Transfer Office</>,
	heroDescription: "Protecting ideas, fostering collaborations, and bringing research to market.",
	heroImage: image,
	firstAction: "Submit A Patent",
	// secondAction: "Submit A Patent",
	stats: statsData,
};

function TTO() {
	return (
		<LandingLayout heroProps={heroProps}>
				<Introduction 
					title="Technology Transfer Office"
					description="The UIR has created the first Technology Transfer Office (TTO) according to international standards to carry out technology transfer and support economic development at the regional and national levels. The TTO operates on several levels to support research activities and to improve the implementation of the innovative product value chain."
					image={image}
				/>
				<VisionAndMission 
					mission="Facilitate the exploitation of the results of scientific research, Open Innovation and its opening up to the market"
					vision="Transform the TTO into a springboard for innovation at the UIR and make its activity profitable"
				/>
				<div className="ttoServices">
					<div className="ttoServicesLeft">
						<h2>Our Services</h2>
						<p>
							We help protect innovations, build industry partnerships, and bring research to market
						</p>
					</div>
					<div className="ttoServicesRight">
						<div className="ttoServicesRight1">
							<div className=" ttoServiceCard">Assistance with the transfer</div>
						</div>
						<div className="ttoServicesRight2">
							<div className=" ttoServiceCard">Patent and IP Protection Drafting</div>
							<div className=" ttoServiceCard">IP Awareness and Innovation Marketing</div>
						</div>
					</div>
				</div>
				<div className="HighLightSpot">
					<div className="HighLightSpotLeft">
						<h2>Inventions Spotlight</h2>
						<div>
							Highlighted technologies and innovations
						</div>
					</div>
					<div className="HighLightSpotRight">
						<div className="leftbtn">{'<'}</div>
						<div className="Rightbtn">{'>'}</div>
					</div>
				</div>
				<div className="LandingInventionCards">
					<InventionCard
						title="hello"
						description="test test test tes"
						image={inv_img1}
						/>
					<InventionCard
						title="hello"
						description="test test test tes"
						image={inv_img1}
						/>
					<InventionCard
						title="hello"
						description="test test test tes"
						image={inv_img1}
						/>
				</div>
		</LandingLayout>
	);
}

export default TTO;