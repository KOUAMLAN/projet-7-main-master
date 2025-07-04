import PropTypes from "prop-types";
import styles from "../sass/tagline.module.scss";

function TaglineSection({ imgSrc, text }) {
  return (
    <div className={styles.taglineSection}>
      <img src={imgSrc} alt="Bannière À propos" className={styles.taglineImg} />
      <div className={styles.overlay}></div>
      {text && (
        <div className={styles.tagline}>
          <h1>{text}</h1>
        </div>
      )}
    </div>
  );
}

TaglineSection.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default TaglineSection;
