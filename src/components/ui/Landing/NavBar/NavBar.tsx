import { Link, useLocation } from 'react-router-dom';
import "./NavBar.css";

 function NavBar() {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;

	return (
		<header className="navbar">
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
					TTO
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
					to="/contact" 
					className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
				>
					Contact
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
