import styles from "../sass/header.module.scss";
import logo from "../assets/imgs/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className={styles.header}>
    <NavLink to="/" className={styles.logo} aria-label="Accueil">
      <img src={logo} alt="Logo Kasa" />
    </NavLink>
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.activeLink : ""}`
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.activeLink : ""}`
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;