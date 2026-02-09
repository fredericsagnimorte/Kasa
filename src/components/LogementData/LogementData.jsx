import Details from "../Details/Details";

function LogementData({ dataLogement }) {
    return (
        <div className="dataContent">
            <div className="top">
                <div className="dataHeader">
                    <h1 className="dataTitle">{dataLogement.title}</h1>
                    <h2 className="dataLocation">{dataLogement.location}</h2>
                    <div className="dataTags">
                        {dataLogement.tags.map((element, index) => {
                            return (
                                <p className="dataTags__tag" key={index}>
                                    {element}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="dataBody">
                    <div className="dataHost">
                        <img
                            src={dataLogement.host.picture}
                            alt={`Photo de ${dataLogement.host.name}`}
                        />
                        <p>{dataLogement.host.name}</p>
                    </div>
                    <div className="hostRate">
                        {[...Array(5)].map((_, index) => {
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
            </div>
            <div className="bottom">
                <Details
                    summary={"Description"}
                    content={dataLogement.description}
                />
                <Details
                    summary={"Équipements"}
                    content={dataLogement.equipments.map((el, index) => (
                        <p key={index}>{el}</p>
                    ))}
                />
            </div>
        </div>
    );
}

export default LogementData;
