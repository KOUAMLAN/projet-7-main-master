import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "../sass/houseDetails.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Collapsible from "../components/Collapsible";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const HouseDetails = () => {
    const location = useLocation();
    const house = location.state.props.house;
    const pictures = house.pictures;

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrow = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleRightArrow = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div className="container">
                {/* <Header /> SUPPRIMÉ */}
                <div className={styles.housePhotos}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className={styles.icon}
                        onClick={handleLeftArrow}
                    />
                    <img
                        className={styles.coverImg}
                        src={pictures[currentIndex]}
                        alt={house.title}
                    />
                    <span className={styles.imgsNbr}>
                        {`${currentIndex + 1}/${house.pictures.length}`}
                    </span>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className={styles.icon}
                        onClick={handleRightArrow}
                    />
                </div>
                <h1 className={styles.title}>{house.title}</h1>
                <div className={styles.box}>
                    <div>
                        <h3 className={styles.subTitle}>{house.location}</h3>
                        <div className={styles.tags}>
                            {house.tags.map((element, index) => (
                                <span key={index} className={styles.tag}>
                                    {element}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.profileRating}>
                        <Profile
                            picture={house.host.picture}
                            name={house.host.name}
                        />
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className={
                                        index < house.rating
                                            ? styles.filledStarIcon
                                            : styles.starIcon
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.panel}>
                    <div className={styles.test}>
                        <Collapsible title="Description">
                            <p>{house.description}</p>
                        </Collapsible>
                    </div>
                    <div className={styles.test}>
                        <Collapsible title="Équipements">
                            {house.equipments.map((element, index) => (
                                <p key={index} className={styles.equipment}>
                                    {element}
                                </p>
                            ))}
                        </Collapsible>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HouseDetails;
