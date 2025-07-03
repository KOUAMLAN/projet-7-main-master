import data from "../data/accommodations.json";
import Card from "./Card";
import styles from "../sass/cardGrid.module.scss";

function CardGrid() {
  return (
    <section className={styles.cardGrid}>
      {data.map((accommodation) => (
        <Card key={accommodation.id} accommodation={accommodation} />
      ))}
    </section>
  );
}

export default CardGrid;