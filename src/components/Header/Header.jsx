import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/LOGO.svg";

function Header() {
    return (
        <header className="header">
            <img src={logoImg} alt="Logo Kasa" />
            <nav className="header__nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
