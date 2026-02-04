import Banner from "../../components/Banner/Banner";
const bannerImg = "./src/assets/images/banner.png";

function Home() {
    return (
        <Banner
            bannerImg={bannerImg}
            bannerText="Chez vous, partout et ailleurs"
        />
    );
}

export default Home;
