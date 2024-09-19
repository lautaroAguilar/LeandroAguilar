"use client";
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { fontTitle } from "@/app/font";
import { useAppContext } from "../../../context/AppContext.jsx";
import { HiOutlineMail, HiOutlinePhoneIncoming } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
export default function Footer() {
  const { goToReview } = useAppContext();
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.container_contactAndLinks}>
          <div className={styles.links}>
            <h3 className={fontTitle.className}>LINKS</h3>
            <ul>
              <li>
                <Link
                  href="/quienes-somos"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  ¿POR QUÉ ELEGIRNOS?
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  PROMOCIONES
                </Link>
              </li>
              <li>
                <Link
                  href="#review"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  RESEÑAS
                </Link>
              </li>
              <li
                onClick={goToReview}
                className={`${fontTitle.className} ${styles.footer_links}`}
              >
                DEJAR UNA RESEÑA
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3 className={`${fontTitle.className} ${styles.title}`}>
              CONTACTOS
            </h3>
            <div className={styles.iconsContainer}>
              <Link
                href={"https://api.whatsapp.com/send?phone=5491123231563"}
                target="_blank"
              >
                <BsWhatsapp size={24} />
              </Link>
              <Link
                href={
                  "mailto:yorojo2424@gmail.com?subject=Contacto desde la página web de Leandro Aguilar &body=Escriba su mensaje aquí"
                }
                target="_blank"
              >
                <HiOutlineMail size={24} />
              </Link>
              <Link href={"tel:5491123231563"} target="_blank">
                <HiOutlinePhoneIncoming size={24} />
              </Link>
            </div>
          </div>
          <div className={styles.links}>
            <h3 className={fontTitle.className}>VEHICULOS</h3>
            <ul>
              <li>
                <Link
                  href="/vehiculos/6"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  TORO
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos/5"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  STRADA
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos/1"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  CRONOS
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos/0"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  FASTBACK
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos/4"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  PULSE
                </Link>
              </li>
              <li>
                <Link
                  href="/vehiculos/3"
                  className={`${fontTitle.className} ${styles.footer_links}`}
                >
                  MOBI
                </Link>
              </li>
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
