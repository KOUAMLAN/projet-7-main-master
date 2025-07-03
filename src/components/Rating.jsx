import PropTypes from "prop-types";
import styles from "../sass/rating.module.scss";

function Rating({ rating }) {
  const safeRating = Math.max(0, Math.min(5, Math.floor(Number(rating) || 0)));
  return (
    <div className={styles.rating} aria-label={`Note : ${safeRating} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < safeRating ? styles.starActive : styles.star}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Rating;