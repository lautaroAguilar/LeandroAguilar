import React from "react";
import Image from "next/image";
import image from "../../../../public/leandro1.png";
import Button from "@/components/Button/Button";
import { fontTitle } from "../../../app/font";
import styles from "./Landing.module.css";
export default function landing() {
  return (
    <div className={styles.container}>
      <div className={styles.container_info}>
        <div className={styles.containerTexts}>
          <div className={styles.texts}>
            <h2 className={`${styles.title} ${fontTitle.className}`}>
              Nueva FIAT <span className={styles.span}>Fastback</span>
            </h2>
            <h4 className={styles.subtitle}>Tenela antes que nadie.</h4>
          </div>
          <p className={styles.paragraph}>
            Contactá ahora a nuestro asesor y obtené un test drive el dia que
            quieras.
          </p>
        </div>
        <div className={styles.container_button}>
          <Button href={"/catalogo"} text={"Financiar"} />
        </div>
      </div>
    </div>
  );
}
