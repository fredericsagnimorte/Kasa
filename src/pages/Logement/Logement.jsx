import { useParams, Navigate } from "react-router-dom";
import data from "../../assets/data/logements.json";
import Slider from "../../components/Slider/Slider";
import LogementData from "../../components/LogementData/LogementData";

function Logement() {
    const { id_logement } = useParams();
    const dataLogement = data.find((element) => element.id === id_logement);

    if (!dataLogement) {
        return <Navigate to="*" replace />;
    }

    return (
        <section>
            <Slider dataLogement={dataLogement} />
            <LogementData dataLogement={dataLogement} />
        </section>
    );
}

export default Logement;
