import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import "./NavBar.css";

function NavBar({isFullWidth}:{isFullWidth?:boolean}) {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);
	const [currentLang, setCurrentLang] = useState('en');
	const [isAboutOpen, setIsAboutOpen] = useState(false);

	const languages = [
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'fr', name: 'Français', flag: '🇫🇷' }
	];

	const handleLanguageSelect = (langCode: string) => {
		setCurrentLang(langCode);
		setIsLanguageOpen(false);
	};

	return (
		<header className={`navbar ${isFullWidth ? 'w-full rounded-none m-none p-none' : ' mt-[5px] ml-[5%] mr-[5%] rounded-[8px]'}`}>
			<div className="logo">
				<Link to="/" className="logo">
					<img src="/navbar_logo.svg" alt="Logo" />
				</Link>
			</div>
			<nav className="nav">
				<Link 
					to="/" 
					className={`nav-link ${isActive('/') ? 'active' : ''}`}
				>
					Home
				</Link>
				<Link 
					to="/tto" 
					className={`nav-link ${isActive('/tto') ? 'active' : ''}`}
				>
					Technology Transfer Office
				</Link>
				<Link 
					to="/incubator" 
					className={`nav-link ${isActive('/incubator') ? 'active' : ''}`}
				>
					Incubator
				</Link>
				<Link 
					to="/industrial" 
					className={`nav-link ${isActive('/industrial') ? 'active' : ''}`}
				>
					Industrial
				</Link>
				<Link 
					to="/tech_center" 
					className={`nav-link ${isActive('/tech_center') ? 'active' : ''}`}
				>
					Tech Center
				</Link>
				<div className="dropdown-container">
					<button 
						className={`nav-link dropdown-button ${isAboutOpen ? 'active' : ''}`}
						onClick={() => setIsAboutOpen(!isAboutOpen)}
					>
						About
						<span className="dropdown-arrow">▼</span>
					</button>
					{isAboutOpen && (
						<div className="dropdown-menu">
							<Link 
								to="/faq" 
								className={`dropdown-item ${isActive('/faq') ? 'active' : ''}`}
								onClick={() => setIsAboutOpen(false)}
							>
								FAQ
							</Link>
							<Link 
								to="/our-team" 
								className={`dropdown-item ${isActive('/our-team') ? 'active' : ''}`}
								onClick={() => setIsAboutOpen(false)}
							>
								Our Team
							</Link>
						</div>
					)}
				</div>
			</nav>
			<div className="nav-right">
				<Link 
					to="/invention-disclosure" 
					className={`nav-link ${isActive('/invention-disclosure') ? 'active' : ''}`}
				>
					Invention Disclosure
				</Link>
				<div className="language-selector">
					<button 
						className="language-button"
						onClick={() => setIsLanguageOpen(!isLanguageOpen)}
					>
						<span className="language-flag">
							{languages.find(lang => lang.code === currentLang)?.flag}
						</span>
						{/* <span className="language-name">
							{languages.find(lang => lang.code === currentLang)?.name}
						</span> */}
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
		</header>
	);
}

export default NavBar;
