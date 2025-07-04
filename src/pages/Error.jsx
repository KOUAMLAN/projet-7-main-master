import { Link } from "react-router-dom";
import styles from "../sass/error.module.scss";

const Error = () => (
  <div className={styles.container}>
    <div className={styles.error}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n’existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  </div>
);

export default Error;
