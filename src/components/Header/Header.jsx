import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src="./src/assets/images/LOGO.svg" alt="Logo Kasa" />
            <nav className="header__nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="a_propos"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
