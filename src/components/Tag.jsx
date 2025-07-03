import PropTypes from "prop-types";
import styles from "../sass/tag.module.scss";

function Tag({ tag }) {
  return <span className={styles.tag}>{tag}</span>;
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
