import { Link } from "react-router-dom";

function Card({ logementId, logementTitle, logementCover }) {
    return (
        <Link key={logementId} to={`/logement/${logementId}`}>
            <div className="card">
                <img
                    className="card__img"
                    src={logementCover}
                    alt="Photo du logement"
                />
                <p className="card__title">{logementTitle}</p>
            </div>
        </Link>
    );
}

export default Card;
