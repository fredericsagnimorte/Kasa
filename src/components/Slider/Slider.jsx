import { useState } from "react";

function Slider({ dataLogement }) {
    const [compteur, updateCompteur] = useState(0);
    return (
        <>
            <div className="sliderContainer">
                <div
                    className="slider"
                    style={{
                        transform: `translateX(-${compteur * 100}%)`,
                    }}
                >
                    {dataLogement.pictures.map((image, index) => {
                        return (
                            <div key={index} className="slider__img">
                                <img src={image} alt={`Photo n°${index + 1}`} />
                            </div>
                        );
                    })}
                </div>
                {dataLogement.pictures.length > 1 && (
                    <>
                        <button
                            className="arrow left"
                            aria-label="Image précédente"
                            onClick={() => {
                                compteur > 0
                                    ? updateCompteur(compteur - 1)
                                    : updateCompteur(
                                          dataLogement.pictures.length - 1,
                                      );
                            }}
                        >
                            <img src="../src/assets/images/left_arrow.png" />
                        </button>
                        <button
                            className="arrow right"
                            aria-label="Image suivante"
                            onClick={() => {
                                compteur < dataLogement.pictures.length - 1
                                    ? updateCompteur(compteur + 1)
                                    : updateCompteur(0);
                            }}
                        >
                            <img src="../src/assets/images/right_arrow.png" />{" "}
                        </button>
                        <p className="nbrImages">{`${compteur + 1}/${dataLogement.pictures.length}`}</p>
                    </>
                )}
            </div>
        </>
    );
}

export default Slider;
