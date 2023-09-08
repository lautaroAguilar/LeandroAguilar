"use client";
import React from "react";
import Image from "next/image";
import image from "../../../public/leandro1.png";
import Buttons from "@/components/client/Buttons/Buttons";
import { fontTitle } from "../../app/font";
import styles from "./Landing.module.css";
import { useAppContext } from "../../context/AppContext.jsx";
import fiatGiama from "../../../public/fiatGiama.png";
export default function landing() {
  const { currentUser } = useAppContext();

  return (
    <div className={styles.container}>
      <Image
        src={fiatGiama}
        width={700}
        height={100}
        alt="logo de Fiat Giama"
        className={styles.giama}
      />
      {/* {currentUser && <p>bienvenido {currentUser.displayName} </p>} */}
      <div className={styles.imgContainer}>
        <Image
          src={image}
          width={315}
          height={486}
          alt="Foto de Leandro Aguilar"
          className={styles.image}
        />
      </div>
      <div className={styles.texts}>
        <h1 className={fontTitle.className} id={styles.title}>
          LEANDRO AGUILAR
        </h1>
        <p className={styles.p}>Asesor Comercial Senior.</p>
      </div>
      <div className={styles.texts}>
        <p className={styles.p}>
          Hace mas de 10 años asesorando con el mismo ánimo y entusiasmo a
          familias o empresas.
        </p>
      </div>
      <Buttons />
    </div>
  );
}
