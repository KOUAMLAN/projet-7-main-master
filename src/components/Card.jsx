import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../sass/card.module.scss";

function Card({ accommodation }) {
  return (
    <Link to={`/accommodation/${accommodation.id}`} className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img
          src={accommodation.cover}
          alt={accommodation.title}
          className={styles.cardImg}
        />
        <div className={styles.cardOverlay}></div>
        <div className={styles.cardTitleOverlay}>{accommodation.title}</div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  accommodation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;