import { Link, useLocation } from 'react-router-dom';
import "./NavBar.css";

function NavBar({isFullWidth}:{isFullWidth?:boolean}) {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;

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
				<Link 
					to="/faq" 
					className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
				>
					FAQ
				</Link>
				<Link 
						to="/about" 
						className={`nav-link ${isActive('/about') ? 'active' : ''}`}
					>
						About
					</Link>
			</nav>
		</header>
	);
}

export default NavBar;
