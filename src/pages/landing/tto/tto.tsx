import "./tto.css";
import LandingLayout, { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";

import inv_img1 from "./images/inv1.jpg";
import image from "./images/tto.png";
import InventionCard from "@ui/Landing/InventionCard/InventionCard";

import p1 from "../../../assets/partners/1.png";
import p2 from "../../../assets/partners/2.png";
import p3 from "../../../assets/partners/3.png";
import p4 from "../../../assets/partners/4.png";
import p5 from "../../../assets/partners/5.png";

import { useState } from "react";
import Partners from "@ui/Landing/Partners/Partners";

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

const inventionCardData = [
	{
		title: "hello1",
		description: "test test test tes",
		image: inv_img1,
	},
	{
		title: "hello2",
		description: "test test test tes",
		image: inv_img1,
	},
	{
		title: "hello3",
		description: "test test test tes",
		image: inv_img1,
	},
	{
		title: "hello4",
		description: "test test test tes",
		image: inv_img1,
	},
	{
		title: "hello5",
		description: "test test test tes",
		image: inv_img1,
	},
	{
		title: "hello6",
		description: "test test test tes",
		image: inv_img1,
	},
];

function LandingInventionCards() {
	const [slice, setSlice] = useState<[number, number]>([0, 3]);

	// moveLeft and moveRight will be animated later
	const moveLeft = () => {
		if (slice[0] > 0) {
			setSlice([slice[0] - 1, slice[1] - 1]);
		}
	};
	const moveRight = () => {
		if (slice[1] < inventionCardData.length) {
			setSlice([slice[0] + 1, slice[1] + 1]);
		}
	}
	return (
		<>
			<div className="HighLightSpot">
				<div className="HighLightSpotLeft">
					<h2>Inventions Spotlight</h2>
					<div>
						Highlighted technologies and innovations
					</div>
				</div>
				<div className="HighLightSpotRight">
					<div className="leftbtn" onClick={moveLeft}>{'<'}</div>
					<div className="Rightbtn" onClick={moveRight}>{'>'}</div>
				</div>
			</div>
			<div className="LandingInventionCards">
				{inventionCardData.slice(...slice).map((item, index) => (
					<InventionCard
						key={index}
						title={item.title}
						description={item.description}
						image={item.image}
					/>
				))}
			</div>
		</>
	);
}

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
				<LandingInventionCards />

				<Partners partners={[p1, p2, p3, p4, p5]} />
		</LandingLayout>
	);
}

export default TTO;