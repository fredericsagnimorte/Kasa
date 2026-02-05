import Banner from "../../components/Banner/Banner";
import data from "../../assets/data/logements.json";
import { Link } from "react-router-dom";

const bannerImg = "./src/assets/images/banner.png";

function Home() {
    return (
        <section id="home">
            <Banner
                bannerImg={bannerImg}
                bannerText="Chez vous, partout et ailleurs"
            />
            <div className="cardsContainer">
                {data.map((logement) => {
                    return (
                        <Link to={`/logement/${logement.id}`}>
                            <div className="card">
                                <img
                                    className="card__img"
                                    src={logement.cover}
                                    alt="Photo du logement"
                                />
                                <p className="card__title">{logement.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default Home;
