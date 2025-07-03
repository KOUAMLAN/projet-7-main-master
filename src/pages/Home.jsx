import Banner from "../components/Banner";
import bannerImg from "../assets/imgs/home-tagline.png";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";
import styles from "../sass/home.module.scss";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <Banner
          image={bannerImg}
          altText="Bannière d'accueil"
          text="Chez vous, partout et ailleurs"
        />
        <CardGrid />
      </div>
      <Footer />
    </>
  );
}

export default Home;