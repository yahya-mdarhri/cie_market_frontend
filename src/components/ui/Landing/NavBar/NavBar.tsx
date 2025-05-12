import "./NavBar.css";

function NavBar() {
	return (
		<header className="navbar">
			<div className="logo">
				<img src="/navbar_logo.svg" alt="Logo" />
			</div>
			<nav className="nav">
				<a href="#">Home</a>
				<a href="#">TTO</a>
				<a href="#">Incubator</a>
				<a href="#">Industrial</a>
				<a href="#">Contact</a>
				<a href="#">About</a>
			</nav>
		</header>
	);
}

export default NavBar;
