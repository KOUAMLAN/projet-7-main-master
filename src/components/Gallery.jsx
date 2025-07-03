import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../sass/gallery.module.scss";

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  if (total === 0) return null;

  const prev = () => setIndex(i => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex(i => (i === total - 1 ? 0 : i + 1));

  return (
    <div className={styles.gallery}>
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1}`}
        className={styles.galleryImg}
        draggable={false}
      />
      {total > 1 && (
        <>
          <button
            className={`${styles.galleryArrow} ${styles.galleryPrev}`}
            onClick={prev}
            aria-label="Précédent"
            type="button"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.galleryArrow} ${styles.galleryNext}`}
            onClick={next}
            aria-label="Suivant"
            type="button"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className={styles.galleryCount}>{index + 1}/{total}</span>
        </>
      )}
    </div>
  );
}

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;