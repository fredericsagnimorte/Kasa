import { useParams, Navigate } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Slider from "../../components/Slider/Slider";

function Logement() {
    const { id_logement } = useParams();
    const dataLogement = data.find((element) => element.id === id_logement);

    if (!dataLogement) {
        return <Navigate to="*" replace />;
    }

    return (
        <section>
            <Slider dataLogement={dataLogement} />

            <div>
                <div>
                    <h1>{dataLogement.title}</h1>
                    <h2>{dataLogement.location}</h2>
                    <div>
                        {dataLogement.tags.map((element, index) => {
                            return <p key={index}>{element}</p>;
                        })}
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src={dataLogement.host.picture}
                            alt={`Photo de ${dataLogement.host.name}`}
                        />
                        <p>{dataLogement.host.name}</p>
                    </div>
                    <div>
                        {[...Array(5)].map((_, index) => {
                            console.log(index);
                            return (
                                <i
                                    key={index}
                                    className={`fa-solid fa-star ${
                                        index < dataLogement.rating
                                            ? "star--active"
                                            : "star"
                                    }`}
                                ></i>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <details>
                        <summary>Description</summary>
                        {dataLogement.description}
                    </details>
                    <details>
                        <summary>Équipements</summary>
                        {dataLogement.equipments.map((element, index) => {
                            return <p key={index}>{element}</p>;
                        })}
                    </details>
                </div>
            </div>
        </section>
    );
}

export default Logement;
