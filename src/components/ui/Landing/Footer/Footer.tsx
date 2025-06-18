import './Footer.css';
import { useTranslation } from 'react-i18next';
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import youtube from "./images/youtube.svg";

function Footer() {
	const { t } = useTranslation('footer');

	return (
		<footer className="Footer">
			<div className="FooterLogo">
				<img src="/navbar_logo.svg" alt={t('logoAlt')} />
			</div>
			<div className="FooterSocialMedia">
				<a href="">
					<img src={facebook} alt={t('socialMedia.facebook')} />
				</a>
				<a href="">
					<img src={instagram} alt={t('socialMedia.instagram')} />
				</a>
				<a href="">
					<img src={twitter} alt={t('socialMedia.twitter')} />
				</a>
				<a href="">
					<img src={linkedin} alt={t('socialMedia.linkedin')} />
				</a>
				<a href="">
					<img src={youtube} alt={t('socialMedia.youtube')} />
				</a>
			</div>
			<div className="FooterCopyRight">
				{t('copyright')}
			</div>
		</footer>
	);
}

export default Footer;