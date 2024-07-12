"use client"
import React from "react";
import styles from "./Header.module.css";
import fiatGiama from "../../../public/fiatGiama.svg";
import { fontTitle } from "@/app/font";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { useAppContext } from "@/context/AppContext";
export default function Header() {
  const { goToReview } = useAppContext();
  return (
    <header className={styles.header}>
      <div className={styles.container_logo}>
        <Link href={"/"} style={{ height: "100%", width: "auto" }}>
          <Image
            src={fiatGiama}
            alt="logo de Fiat Giama"
            className={styles.giama}
          />
        </Link>
        <div className={styles.divider}></div>
        <h1 className={`${styles.title} ${fontTitle.className}`}>
          Leandro Aguilar
        </h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/quienes-somos"} className={`${styles.nav_options} ${fontTitle.className}`}>
              QUIENES SOMOS
            </Link>
          </li>
          <li>
            <Link href={"#"} className={`${styles.nav_options} ${fontTitle.className}`}>
              COTIZAR
            </Link>
          </li>
          <li>
            <Link href={"#"} className={`${styles.nav_options} ${fontTitle.className}`}>
              CONTACTAR ASESOR
            </Link>
          </li>
          <li>
            <Link href={"/vehiculos"} className={`${styles.nav_options} ${fontTitle.className}`}>
              VEHÍCULOS
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container_cta}>
        <Button secondary text="Dejar una reseña" onClick={goToReview} />
        <Button text={"Contactar"} />
      </div>
    </header>
  );
}
