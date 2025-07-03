/* eslint-disable react/prop-types */

import styles from "../sass/houses.module.scss";
import { useNavigate } from "react-router-dom";

const RenderHouseBox = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/house/${props.house.id}`, { state: { props } });
    };

    return (
        <div className={styles.houseBox} onClick={handleClick}>
            <img src={props.house.cover} alt={props.house.title} />

            <div className={styles.overlay}></div>

            <h2 className={styles.houseTitle}>{props.house.title}</h2>
        </div>
    );
};

const Houses = ({ houses }) => {
    return (
        <div className={styles.houses}>
            {houses.map((house, index) => (
                <RenderHouseBox key={index} house={house} />
            ))}
        </div>
    );
};

export default Houses;
