import { useParams } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Slider from "../../components/Slider/Slider";

function Logement() {
    const { id_logement } = useParams();
    const dataLogement = data.find((element) => element.id === id_logement);

    return (
        <section>
            <Slider dataLogement={dataLogement} />
        </section>
    );
}

export default Logement;
