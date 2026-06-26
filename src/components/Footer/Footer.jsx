import logo from "../../assets/images/footer_LOGO.svg";

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
