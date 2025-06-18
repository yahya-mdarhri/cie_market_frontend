import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import "./NavBar.css";
import { useIsActive } from '@hooks/useIsActive';
import { useWindowWidth } from '@hooks/useWindowWidth';
import { MEDIA_QUERY } from '@constants/media';

function NavActions({ closeMobileMenu }: { closeMobileMenu: () => void }) {
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);
	const languageSelectorRef = useRef<HTMLDivElement>(null);
	const { t, i18n } = useTranslation('navbar');

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target as Node)) {
				setIsLanguageOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const languages = [
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'fr', name: 'Français', flag: '🇫🇷' }
	];

	const handleLanguageSelect = (langCode: string) => {
		i18n.changeLanguage(langCode);
		setIsLanguageOpen(false);
	};

	return (
		<div className="nav-actions">
			<Link 
				to="/audit-innovation" 
				className={`nav-link action-link ${useIsActive('/audit-innovation') ? 'active' : ''}`}
				onClick={closeMobileMenu}
			>
				{t('inventionDiagnosis')}
			</Link>
			<div className="language-selector" ref={languageSelectorRef}>
				<button 
					className="language-button"
					onClick={() => setIsLanguageOpen(!isLanguageOpen)}
				>
					<span className="language-flag">
						{languages.find(lang => lang.code === i18n.language)?.flag || languages[0].flag}
					</span>
					<span className="language-name">
						{languages.find(lang => lang.code === i18n.language)?.name || languages[0].name}
					</span>
					<span className="language-arrow">▼</span>
				</button>
				{isLanguageOpen && (
					<div className="language-dropdown">
						{languages.map((lang) => (
							<button
								key={lang.code}
								className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
								onClick={() => handleLanguageSelect(lang.code)}
							>
								<span className="language-flag">{lang.flag}</span>
								<span className="language-name">{lang.name}</span>
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
}	

function NavLinks({ closeMobileMenu, isMobile }: { closeMobileMenu: () => void, isMobile: boolean }) {
	const { t } = useTranslation('navbar');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="nav-main">
			<Link 
				to="/" 
				className={`nav-link ${useIsActive('/') ? 'active' : ''}`}
				onClick={closeMobileMenu}
			>
				{t('home')}
			</Link>
			<Link 
				to="/tto" 
				className={`nav-link ${useIsActive('/tto') ? 'active' : ''}`}
				onClick={closeMobileMenu}
			>
				{t('technologyTransferOffice')}
			</Link>
			<Link 
				to="/incubator" 
				className={`nav-link ${useIsActive('/incubator') ? 'active' : ''}`}
				onClick={closeMobileMenu}
			>
				{t('incubator')}
			</Link>
			<Link 
				to="/industrial" 
				className={`nav-link ${useIsActive('/industrial') ? 'active' : ''}`}
				onClick={closeMobileMenu}
			>
				{t('industrialClinic')}
			</Link>
			<Link 
				to="/tech-center" 
				className={`nav-link ${useIsActive('/tech-center') ? 'active' : ''}`}
				onClick={closeMobileMenu}
			>
				{t('techCenter')}
			</Link>
			{isMobile ? (
				<>
				<Link 
						to="/licensing-process" 
						className={`nav-link ${useIsActive('/licensing-process') ? 'active' : ''}`}
						onClick={closeMobileMenu}
					>
						{t('licensingProcess')}
					</Link>
					<Link 
						to="/our-team" 
						className={`nav-link ${useIsActive('/our-team') ? 'active' : ''}`}
						onClick={closeMobileMenu}
					>
						{t('ourTeam')}
					</Link>
					<Link 
						to="https://uir-recrutement.ma/" 
						className="nav-link"
						onClick={closeMobileMenu}
					>
						{t('careerOpportunities')}
					</Link>
					<Link 
						to="/impact" 
						className="nav-link"
						onClick={closeMobileMenu}
					>
						{t('impact')}
					</Link>
					<Link 
						to="/join-our-mailing-list" 
						className={`nav-link ${useIsActive('/join-our-mailing-list') ? 'active' : ''}`}
						onClick={closeMobileMenu}
					>
						{t('joinMailingList')}
					</Link>
					<Link 
						to="/faq" 
						className={`nav-link ${useIsActive('/faq') ? 'active' : ''}`}
						onClick={closeMobileMenu}
					>
						{t('faq')}
					</Link>
				</>
			) : (
				<>
					<div className="dropdown-container" ref={dropdownRef}>
						<button 
							className={`dropdown-button ${isDropdownOpen ? 'active' : ''}`}
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						>
							{t('about')}
							<span className="dropdown-arrow">▼</span>
						</button>
						{isDropdownOpen && (
							<div className="dropdown-menu">
								<Link 
									to="/licensing-process" 
									className={`dropdown-item ${useIsActive('/licensing-process') ? 'active' : ''}`}
									onClick={closeMobileMenu}
								>
									{t('licensingProcess')}
								</Link>
								<Link 
									to="/our-team" 
									className={`dropdown-item ${useIsActive('/our-team') ? 'active' : ''}`}
									onClick={closeMobileMenu}
								>
									{t('ourTeam')}
								</Link>
								<Link 
									to="https://uir-recrutement.ma/" 
									className="dropdown-item"
									onClick={closeMobileMenu}
								>
									{t('careerOpportunities')}
								</Link>
								<Link 
									to="/impact" 
									className="dropdown-item"
									onClick={closeMobileMenu}
								>
									{t('impact')}
								</Link>
								<Link 
									to="/join-our-mailing-list" 
									className={`dropdown-item ${useIsActive('/join-our-mailing-list') ? 'active' : ''}`}
									onClick={closeMobileMenu}
								>
									{t('joinMailingList')}
								</Link>
								<Link 
									to="/faq" 
									className={`dropdown-item ${useIsActive('/faq') ? 'active' : ''}`}
									onClick={closeMobileMenu}
								>
									{t('faq')}
								</Link>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}

function NavBar({ noHero }: { noHero: boolean }) {
	const width = useWindowWidth();
	const isMobile = width <= MEDIA_QUERY.TABLET;
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);
		};	

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className={`navbar ${isScrolled || noHero ? 'scrolled' : ''}`}>
			<div className="logo">
				<Link to="/" className="logo">
					<img src={"/small_logo.svg"} alt="Logo" />
				</Link>
			</div>
			{isMobile ? (
				<button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
					<span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
				</button>
			) : null}
			{isMobile ? (
				<nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
					<NavLinks closeMobileMenu={closeMobileMenu} isMobile={isMobile}/>
					<NavActions closeMobileMenu={closeMobileMenu} />
				</nav>
			) : (
				<>
					<nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
						<NavLinks closeMobileMenu={closeMobileMenu} isMobile={isMobile}/>
					</nav>
					<NavActions closeMobileMenu={closeMobileMenu} />
				</>
			)}
		</header>
	);
}

export default NavBar;
