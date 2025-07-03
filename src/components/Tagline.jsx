/* eslint-disable react/prop-types */
import styles from "../sass/tagline.module.scss";

const TaglineSection = (props) => {
    return (
        <div className={styles.taglineSection}>
            <img
                src={props.imgSrc}
                alt="tagline"
                className={styles.taglineImg}
            />
            <div className={styles.overlay}></div>

            <div className={styles.tagline}>
                <h1>{props.text}</h1>
            </div>
        </div>
    );
};

export default TaglineSection;
