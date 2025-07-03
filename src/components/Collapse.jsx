import PropTypes from "prop-types";
import styles from "../sass/collapse.module.scss";

function Collapse({ title, children, isOpen, onClick }) {
  return (
    <div className={styles.collapse}>
      <button
        className={styles.collapseHeader}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${title}`}
        type="button"
      >
        <span className={styles.collapseTitle}>{title}</span>
        <span className={`${styles.collapseIcon} ${isOpen ? styles.rotated : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 10l5 5 5-5" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div
          className={styles.collapseContent}
          id={`collapse-content-${title}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Collapse;
