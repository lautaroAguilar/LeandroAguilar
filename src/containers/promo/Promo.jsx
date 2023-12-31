"use client"
import Card from "@/components/Card/Card";
import styles from "./Promo.module.css" 
import { fontTitle } from "@/app/font";
export default function Promo() {
  
  return (
    <>
      <div className={styles.promoContainer} id="promo">
        <h2 className={fontTitle.className}>Promociones</h2>
        <div className={styles.cardContainer}>
          <Card/>
        </div>
      </div>
    </>
  );
}
