"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import styles from "./vehiculo.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import image from "../../../../public/Fastback-interior.jpg";
export default function Page() {
  const { getVehiculoById, car } = useAppContext();
  const { vehiculo } = useParams(); /* obtiene el ID del vehículo */

  useEffect(() => {
    getVehiculoById(vehiculo);
  }, [vehiculo]);
  return (
    <div className={styles.container}>
      {car ? (
        <>
          <div className={styles.title_container}>
            <h2 className={styles.title}>{car.title.toUpperCase()}</h2>
          </div>
          <div className={styles.vehicle_detail}>
            <Image src={image} alt={car.title} className={styles.photo} />
            <div className={styles.info_container}>
              <h4>{car.subtitle.toUpperCase()}</h4>
              <div className={styles.texts_container}>
                <p>
                  La nueva Territory se destaca por su tecnología innovadora,
                  brindando una experiencia de manejo única.
                </p>
                <p>
                  Sofisticada y minimalista, la Nueva Territory se destaca por
                  la calidad de sus materiales y su amplio espacio interior.
                </p>
              </div>
              <div className={styles.price_container}>
                <p className={styles.offer}>$ 47.580.200</p>
                <p className={styles.offer_price}>$ {car.price}</p>
                <p className={styles.offer_note}>*Precio especial hasta la semana que viene. Contactá ahora a nuestro asesor.</p>
              </div>
              <div className={styles.button_container}>
                <Button text={"Financiación"} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <h5>¡Lo sentimos! Ha ocurrido un error.</h5>
      )}
    </div>
  );
}
