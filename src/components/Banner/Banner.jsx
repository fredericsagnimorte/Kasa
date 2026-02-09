function Banner({ bannerImg, bannerText = "" }) {
    return (
        <div className="banner">
            <img
                className="banner__image"
                src={bannerImg}
                alt="Baniere paysage"
            />
            {bannerText != "" && <p className="banner__text">{bannerText}</p>}
        </div>
    );
}

export default Banner;
