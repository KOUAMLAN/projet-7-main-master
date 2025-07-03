/* eslint-disable react/prop-types */
import styles from '../sass/profile.module.scss';

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <p>{props.name}</p>
            <img src={props.picture} alt="Profile" />
        </div>
    );
};

export default Profile;
