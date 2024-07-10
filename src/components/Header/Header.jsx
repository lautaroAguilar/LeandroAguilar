import React from "react";
import styles from "./Header.module.css";
import fiatGiama from "../../../public/fiatGiama.svg";
import { fontTitle } from "@/app/font";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";

export default function Header() {
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
            <Link
              href={"/quienes-somos"}
              className={`${styles.nav_options} ${fontTitle.className}`}
            >
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className={`${styles.nav_options} ${fontTitle.className}`}
            >
              Cotizar
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className={`${styles.nav_options} ${fontTitle.className}`}
            >
              Contactar Asesor
            </Link>
          </li>
          <li>
            <Link
              href={"/catalogo"}
              className={`${styles.nav_options} ${fontTitle.className}`}
            >
              Catálogo
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container_cta}>
        <Button text={"Contactar"} />
      </div>
    </header>
  );
}
