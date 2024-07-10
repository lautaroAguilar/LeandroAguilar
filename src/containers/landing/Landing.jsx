"use client";
import React from "react";
import Image from "next/image";
import image from "../../../public/leandro1.png";
import Buttons from "@/components/client/Buttons/Buttons";
import { fontTitle } from "../../app/font";
import styles from "./Landing.module.css";
import { useAppContext } from "../../context/AppContext.jsx";
export default function landing() {
  const { currentUser } = useAppContext();

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
        <Buttons />
      </div>
    </div>
  );
}
