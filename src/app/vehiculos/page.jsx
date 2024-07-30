"use client";
import Card from "@/components/Card/Card";
import styles from "./vehiculos.module.css";
import { fontTitle } from "@/app/font";
import image from "../../../public/Fastback-interior.jpg";
import Image from "next/image";
export default function catalogo() {
  return (
    <>
      <div className={styles.catalogo_container}>
        <h2 className={`${styles.title} ${fontTitle.className}`}>
          Encontrá tu próximo Fiat
        </h2>
        <div className={styles.info_container}>
          <div className={styles.texts_container}>
            <p>
              Compra tu nuevo Fiat estoy listo para guiarte en cada paso del
              camino. Te ayudaré a personalizar tu nuevo Fiat y a elegir la
              opción de financiación que mejor se adapte a ti.
            </p>
            <p>
              Servicio activo de lunes a viernes de 9:00 a 19:00, sábados de
              10:00 a 18:00. Llamar al: 11-2323-1563.
            </p>
          </div>
          <Image
            src={image}
            alt="Imagen ilustrativa interior Fiat Pulse"
            className={styles.img}
          />
        </div>
        <div className={styles.cardContainer}>
          <Card />
        </div>
      </div>
    </>
  );
}
