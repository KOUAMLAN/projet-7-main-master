import React from "react";
import { useParams, Navigate } from "react-router-dom";
import accommodations from "../data/accommodations.json";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import styles from "../sass/accommodation.module.scss";
import collapseStyles from "../sass/collapse.module.scss";

function CollapseHeader({ title, isOpen, onClick }) {
  return (
    <button
      className={collapseStyles.collapseHeader}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`collapse-content-${title}`}
      type="button"
    >
      <span className={collapseStyles.collapseTitle}>{title}</span>
      <span className={`${collapseStyles.collapseIcon} ${isOpen ? collapseStyles.rotated : ""}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 10l5 5 5-5" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
      </span>
    </button>
  );
}

function Accommodation() {
  const { id } = useParams();
  const data = accommodations.find(item => item.id === id);

  if (!data) return <Navigate to="/error" replace />;

  const [openCollapse, setOpenCollapse] = React.useState(null);

  return (
    <main className={styles.container}>
      <Gallery pictures={data.pictures} />
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.location}>{data.location}</p>
          <div className={styles.tags}>
            {data.tags.map(tag => <Tag key={tag} tag={tag} />)}
          </div>
        </div>
        <div className={styles.hostRating}>
          <div className={styles.host}>
            <span className={styles.hostName}>{data.host.name}</span>
            <img className={styles.hostImg} src={data.host.picture} alt={data.host.name} />
          </div>
          <div className={styles.ratingBlock}>
            <Rating rating={data.rating} />
          </div>
        </div>
      </div>
      <div className={styles.collapses}>
        {/* Description Collapse */}
        <div className={collapseStyles.collapse}>
          <CollapseHeader
            title="Description"
            isOpen={openCollapse === 0}
            onClick={() => setOpenCollapse(openCollapse === 0 ? null : 0)}
          />
          {openCollapse === 0 && (
            <div
              className={collapseStyles.collapseContent}
              id="collapse-content-Description"
            >
              <p>{data.description}</p>
            </div>
          )}
        </div>
        {/* Équipements Collapse */}
        <div className={collapseStyles.collapse}>
          <CollapseHeader
            title="Équipements"
            isOpen={openCollapse === 1}
            onClick={() => setOpenCollapse(openCollapse === 1 ? null : 1)}
          />
          {openCollapse === 1 && (
            <div
              className={collapseStyles.collapseContent}
              id="collapse-content-Équipements"
            >
              <ul>
                {data.equipments.map(eq => <li key={eq}>{eq}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Accommodation;