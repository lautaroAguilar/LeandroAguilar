"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { fontTitle } from "@/app/font";
import { useAppContext } from "../../context/AppContext.jsx";
import cronistas from "../../../public/cronistas.jpg";
import { HiOutlineMail, HiOutlinePhoneIncoming } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
export default function Footer() {
  const { goToReview } = useAppContext();
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.miniAbout}>
          <h3 className={fontTitle.className}>Sobre mí</h3>
          <div className={styles.containerParagraph}>
            <p>
              Hace mas de 10 años asesorando con el mismo ánimo y entusiasmo a
              familias o empresas.
            </p>
            <p>
              Ya sea en su primer 0 KM o la renovación de unidad, busco la mejor
              opción de compra para cada caso, soy un representante comercial
              que busca un buen negocio para ambas partes que el propio
              beneficio
            </p>
          </div>
        </div>
        <Image
          src={cronistas}
          alt="auto cronos"
          width={2000}
          height={500}
          className={styles.cronistas}
        />
        <div className={styles.container_contactAndLinks}>
          <div className={styles.contactContainer}>
            <div className={styles.title}>
              <h3 className={fontTitle.className}>
                Podés contactarme por estos medios
              </h3>
            </div>
            <div className={styles.iconsContainer}>
              <Link
                href={"https://api.whatsapp.com/send?phone=5491123231563"}
                target="_blank"
              >
                <BsWhatsapp />
              </Link>
              <Link
                href={
                  "mailto:yorojo2424@gmail.com?subject=Contacto desde la página web de Leandro Aguilar &body=Escriba su mensaje aquí"
                }
                target="_blank"
              >
                <HiOutlineMail />
              </Link>
              <Link href={"tel:5491123231563"} target="_blank">
                <HiOutlinePhoneIncoming />
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <h3 className={fontTitle.className}>Links</h3>
            <ul>
              <li>
                <Link href="#about">¿Por qué elegirnos?</Link>
              </li>
              <li>
                <Link href="#promo">Promociones</Link>
              </li>
              <li>
                <Link href="#review">Reseñas</Link>
              </li>
              <li onClick={goToReview}>Dejar una reseña</li>
            </ul>
          </div>
        </div>
        <div className={styles.copy}>
          <p>Lautaro Aguilar © 2023</p>
        </div>
      </div>
    </>
  );
}
