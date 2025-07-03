import logo from "../assets/imgs/logo-white.png";
import styles from "../sass/footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className={styles.footer}>
    <Link to="/" aria-label="Accueil">
      <img src={logo} alt="Logo Kasa" className={styles.logo} />
    </Link>
    <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;

