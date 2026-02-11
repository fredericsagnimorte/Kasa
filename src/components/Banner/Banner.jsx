function Banner({ bannerImg, bannerText = "" }) {
    const [firstPart, secondPart] = bannerText.split(",");

    return (
        <div className="banner">
            <img
                className="banner__img"
                src={bannerImg}
                alt="Baniere paysage"
            />
            {bannerText != "" && (
                <p className="banner__text">
                    {firstPart},
                    <span className="mobile-break">{secondPart}</span>
                </p>
            )}
        </div>
    );
}

export default Banner;
