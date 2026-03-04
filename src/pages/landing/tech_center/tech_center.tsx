import "./tech_center.css";
import LandingLayout from "@layouts/LandingLayout/LandingLayout";
import Introduction from "@ui/Landing/Introduction/Introduction";
import VisionAndMission from "@ui/Landing/VisionAndMission/VisionAndMission";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaRedo, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import service1 from "./images/service1.jpg";
import image2 from "./images/industrial2.png";

import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { contactData, useTechCenterData } from "./data";
import Contact from "@ui/Landing/Contact/Contact";
// import Services from "@ui/Landing/Services/Services";
const videoSrc = new URL("./videos/tech_center.mp4", import.meta.url).href;

function TechCenterServiceCard({title, description, image, key}:{title:string, description:string, image:string, key: number}){
	return (
		<div className="techCenterServiceCard" key={key}>
			<img src={image} alt={title} />
			<div className="techCenterServiceCardContent">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

function TechCenter() {
	const { t } = useTranslation('techCenter');
	const { heroProps, servicesData } = useTechCenterData();

	useDocumentTitle('Tech Center | Centre for Innovation and Entrepreneurship');
	return (
		<LandingLayout heroProps={heroProps}>
				{/* Under-hero embedded video card */}
				<section className="techCenterUnderHero" aria-label="Tech Center intro video">
					<EmbeddedVideoCard src={videoSrc} />
				</section>

				<Introduction 
					title={t('introduction.title')}
					description={t('introduction.description')}
					image={image2}
				/>
				<VisionAndMission 
					mission={t('visionAndMission.mission')}
					vision={t('visionAndMission.vision')}
				/>
				<div className="techCenterServices">
					<div className="techCenterServicesLeft">
						<h2>{t('services.title')}</h2>
						<p>{t('services.description')}</p>
					</div>
					<div className="techCenterServicesGrid">
						{servicesData.map((service, index) => (
							<TechCenterServiceCard 
								key={index}
								title={service.title}
								description={service.description}
								image={service1}
							/>
						))}
					</div>
				</div>
				<Contact
					contacts={contactData}
				/>
			{/* <Services services={servicesData} /> */}
		</LandingLayout>
	);
}

function EmbeddedVideoCard({ src }:{ src: string }){
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [hasEnded, setHasEnded] = useState(false);
	const [inView, setInView] = useState(false);
	const userPausedRef = useRef(false);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = false; // attempt sound on by default
		}
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		const onEnded = () => { setHasEnded(true); setIsPlaying(false); };
		const onPlay = () => { setHasEnded(false); setIsPlaying(true); };
		const onPause = () => setIsPlaying(false);
		video.addEventListener('ended', onEnded);
		video.addEventListener('play', onPlay);
		video.addEventListener('pause', onPause);
		return () => {
			video.removeEventListener('ended', onEnded);
			video.removeEventListener('play', onPlay);
			video.removeEventListener('pause', onPause);
		};
	}, []);

	// Play when card is in view; pause when scrolled away
	useEffect(() => {
		const container = containerRef.current;
		const video = videoRef.current;
		if (!container || !video) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// Delay the visual animation until more of the card is visible
				setInView(entry.isIntersecting && entry.intersectionRatio > 0.7);
				if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
					if (!userPausedRef.current) {
						const tryPlay = async () => {
							try {
								await video.play();
							} catch {
								// Autoplay with sound may be blocked; fallback to muted autoplay
								video.muted = true;
								setIsMuted(true);
								try { await video.play(); } catch { /* noop */ }
							}
						};
						tryPlay();
					}
				} else {
					video.pause();
				}
			});
		}, { threshold: [0, 0.25, 0.5, 0.7, 0.85, 1] });
		observer.observe(container);
		return () => observer.disconnect();
	}, []);


	
	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;
		if (hasEnded) {
			video.currentTime = 0;
			video.play();
			return;
		}
		if (video.paused) { video.play(); userPausedRef.current = false; } else { video.pause(); userPausedRef.current = true; }
	};

	const toggleMute = () => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = !video.muted;
		setIsMuted(video.muted);
	};

	const replay = () => {
		const video = videoRef.current;
		if (!video) return;
		video.currentTime = 0;
		video.play();
	};

	return (
		<div ref={containerRef} className={`videoCard ${inView ? 'videoCard-inView' : ''} ${isPlaying ? 'videoCard-playing' : ''}`}>
			<video
				ref={videoRef}
				src={src}
				className="videoCardVideo"
				playsInline
				preload="metadata"
				muted
				poster={undefined}
			/>
			{/* Center overlay removed as requested */}
			<div className="videoCardControls" role="group" aria-label="Video controls">
				<button className="videoCtrl" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
					{isPlaying ? <FaPause /> : <FaPlay />}
				</button>
				<button className="videoCtrl" onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
					{isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
				</button>
				<button className="videoCtrl" onClick={replay} aria-label="Restart">
					<FaRedo />
				</button>
			</div>
		</div>
	);
}

export default TechCenter;