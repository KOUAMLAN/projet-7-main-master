import PropTypes from "prop-types";
import styles from "../sass/banner.module.scss";

function Banner({ image, altText, text }) {
  return (
    <div className={styles.banner}>
      <img src={image} alt={altText} className={styles.bannerImage} />
      <div className={styles.bannerOverlay}></div>
      {text && <h1 className={styles.bannerText}>{text}</h1>}
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
