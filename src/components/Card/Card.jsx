import React from "react";
import Button from "../Button/Button";
import { useAppContext } from "../../context/AppContext.jsx";
import { useEffect } from "react";
import styles from "./Card.module.css";
import { useRouter } from "next/navigation";
export default function Card() {
  const router = useRouter();
  const { getPromo, catalogue } = useAppContext();
  useEffect(() => {
    getPromo();
  }, []);
  const handleSeeDetail = (vehiculoId) => {
    router.push(`/vehiculos/${vehiculoId}`);
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  };
  return (
    <>
      {catalogue.map((cata, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.imgContainer}>
            <img src={cata.img} alt="Imagen ilustrativa del vehiculo" />
          </div>
          <div className={styles.content}>
            <div className={styles.texts}>
              <h3>{cata.title.toUpperCase()}</h3>
              <p>{cata.subtitle}</p>
            </div>
            <div className={styles.buttonContainer}>
              <div>
                <p className={styles.offer}>
                  {formatCurrency(cata.price + 2000000)}
                </p>
                <p className={styles.offer_price}>{formatCurrency(cata.price)}</p>
              </div>
              <Button
                onClick={() => {
                  handleSeeDetail(cata.key);
                }}
                text={"cotizar"}
                background={"#0c0c0c"}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
