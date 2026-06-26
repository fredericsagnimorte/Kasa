import Banner from "../../components/Banner/Banner";
import data from "../../assets/data/logements.json";
import Card from "../../components/Card/Card";

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
                        <Card
                            key={logement.id}
                            logementId={logement.id}
                            logementTitle={logement.title}
                            logementCover={logement.cover}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Home;
