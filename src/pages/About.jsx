import React from "react";
import TaglineSection from "../components/Tagline";
import aboutTaglineImg from "../assets/imgs/about-tagline.png";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import styles from "../sass/about.module.scss";

const data = [
  { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
  { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
  { title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
  { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services." },
];

const About = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <>
      <div className={styles.container}>
        <TaglineSection imgSrc={aboutTaglineImg} />
        <section className={styles.collapses}>
          {data.map((item, idx) => (
            <Collapse
              key={item.title}
              title={item.title}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <p>{item.content}</p>
            </Collapse>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;