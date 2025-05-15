import './Footer.css';
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import youtube from "./images/youtube.svg";


function Footer() {
	return (
		<footer className="Footer">
			<div className="FooterLogo">
				<img src="/navbar_logo.svg" alt="Logo" />
			</div>
			<div className="FooterSocialMedia">
				<a href="">
					<img src={facebook} alt="fb" />
				</a>
				<a href="">
					<img src={instagram} alt="ig" />
				</a>
				<a href="">
					<img src={twitter} alt="tw" />
				</a>
				<a href="">
					<img src={linkedin} alt="li" />
				</a>
				<a href="">
					<img src={youtube} alt="logo" />
				</a>
			</div>
			<div className="FooterCopyRight">
				© 2025, All rights reserved
			</div>
		</footer>
	);
}

export default Footer;