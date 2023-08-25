import React from "react";
import Button from "../Button/Button";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";
import styles from "./Card.module.css";
export default function Card() {
  const { getPromo, catalogue } = useAppContext();

  useEffect(() => {
    getPromo();
  }, []);

  return (
    <>
      {catalogue.map((cata, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <img
                src={cata.img}
                alt="Imagen ilustrativa del vehiculo"
              />
            </div>
            <div className={styles.texts}>
              <h3>{cata.title}</h3>
              <p>{cata.subtitle}</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button text="Ver más" />
          </div>
        </div>
      ))}
    </>
  );
}
