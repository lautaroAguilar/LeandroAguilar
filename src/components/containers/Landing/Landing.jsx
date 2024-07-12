import React from "react";
import Image from "next/image";
import image from "../../../../public/leandro1.png";
import Button from "@/components/Button/Button";
import { fontTitle } from "../../../app/font";
import styles from "./Landing.module.css";
export default function landing() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTexts}>
        <div className={styles.texts}>
          <h2 className={`${styles.title} ${fontTitle.className}`}>
            Nueva FIAT <span className={styles.span}>Fastback</span>
          </h2>
          <h4 className={`${styles.subtitle} ${fontTitle.className}`}>Tenela antes que nadie.</h4>
        </div>
        <Button href={"/catalogo"} text={"Financiar"} />
      </div>
    </div>
  );
}
