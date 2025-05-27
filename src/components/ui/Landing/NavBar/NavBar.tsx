import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./NavBar.css";
import { useIsActive } from '@hooks/useIsActive';
import { useWindowWidth } from '@hooks/useWindowWidth';
import { MEDIA_QUERY } from '@constants/media';

function NavActions({ closeMobileMenu }: { closeMobileMenu: () => void }) {
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);
	const [currentLang, setCurrentLang] = useState('en');	const languages = [
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'fr', name: 'Français', flag: '🇫🇷' }
	];

	const handleLanguageSelect = (langCode: string) => {
		setCurrentLang(langCode);
		setIsLanguageOpen(false);
	};

	return (
		<div className="nav-actions">
		<Link 
			to="/invention-Diagnosis" 
			className={`nav-link action-link ${useIsActive('/invention-Diagnosis') ? 'active' : ''}`}
			onClick={closeMobileMenu}
		>
			Invention Diagnosis
		</Link>
		<div className="language-selector">
			<button 
				className="language-button"
				onClick={() => setIsLanguageOpen(!isLanguageOpen)}
			>
				<span className="language-flag">
					{languages.find(lang => lang.code === currentLang)?.flag}
				</span>
				<span className="language-name">
					{languages.find(lang => lang.code === currentLang)?.name}
				</span>
				<span className="language-arrow">▼</span>
			</button>
			{isLanguageOpen && (
				<div className="language-dropdown">
					{languages.map((lang) => (
						<button
							key={lang.code}
							className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
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

function NavLinks({ closeMobileMenu }: { closeMobileMenu: () => void }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<div className="nav-main">
		<Link 
			to="/" 
			className={`nav-link ${useIsActive('/') ? 'active' : ''}`}
			onClick={closeMobileMenu}
		>
			Home
		</Link>
		<Link 
			to="/tto" 
			className={`nav-link ${useIsActive('/tto') ? 'active' : ''}`}
			onClick={closeMobileMenu}
		>
			Technology Transfer Office
		</Link>
		<Link 
			to="/incubator" 
			className={`nav-link ${useIsActive('/incubator') ? 'active' : ''}`}
			onClick={closeMobileMenu}
		>
			Incubator
		</Link>
		<Link 
			to="/industrial" 
			className={`nav-link ${useIsActive('/industrial') ? 'active' : ''}`}
			onClick={closeMobileMenu}
		>
			Industrial
		</Link>
		<Link 
			to="/tech_center" 
			className={`nav-link ${useIsActive('/tech_center') ? 'active' : ''}`}
			onClick={closeMobileMenu}
		>
			Tech Center
		</Link>
		<div className="dropdown-container">
			<button 
				className={`dropdown-button ${isDropdownOpen ? 'active' : ''}`}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				About
				<span className="dropdown-arrow">▼</span>
			</button>
			{isDropdownOpen && (
				<div className="dropdown-menu">
					<Link 
						to="/our-team" 
						className={`dropdown-item ${useIsActive('/our-team') ? 'active' : ''}`}
						onClick={closeMobileMenu}
					>
						Our Team
					</Link>
					<Link 
						to="/faq" 
						className={`dropdown-item ${useIsActive('/faq') ? 'active' : ''}`}
						onClick={closeMobileMenu}
					>
						FAQ
					</Link>
				</div>
			)}
		</div>
	</div>
	);
}

function NavBar() {
	const width = useWindowWidth();
	const isMobile = width < MEDIA_QUERY.MOBILE;
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className={`navbar`}>
			<div className="logo">
				<Link to="/" className="logo">
					<img src="/navbar_logo.svg" alt="Logo" />
				</Link>
			</div>
			{isMobile ? (
			<button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
				<span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
			</button>
			) : (
				<>
				</>
			)}
			{isMobile ? (
			<nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
				<NavLinks closeMobileMenu={closeMobileMenu} />
				<NavActions closeMobileMenu={closeMobileMenu} />
			</nav>
			) : (
				<>
					<nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
						<NavLinks closeMobileMenu={closeMobileMenu} />
					</nav>
					<NavActions closeMobileMenu={closeMobileMenu} />
				</>
			)}
		</header>
	);
}

export default NavBar;
