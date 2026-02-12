import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="errorMessage">
            <p>
                <span className="errorMessage__404">404</span>
            </p>
            <p className="errorMessage__pageDoNotExist">
                Oups! La page que{" "}
                <span className="mobile-break">
                    vous demandez n'existe pas.
                </span>
            </p>
            <Link className="errorMessage__backHome" to="/">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default Error;
