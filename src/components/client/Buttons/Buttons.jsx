"use client";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useAppContext } from "../../../context/AppContext.jsx";
import styles from "./Buttons.module.css";
import { font } from "@/app/font";
import { useEffect } from "react";
export default function Buttons() {
  const { goToReview, logOut, currentUser, reviewAlreadySend,
    send} = useAppContext();

  useEffect(()=>{
    reviewAlreadySend()
  },[send])
  

  return (
    <>
      <div className={styles.container}>
        <Link className={styles.btnSecondary} href="#promo">Ir a promociones</Link>
        {currentUser && !send ? (
          <Button
            
            text="Dejar una reseña"
            onClick={goToReview}
          />
        ) : (
          ""
        )}
        {!currentUser ? (
          <Button
            
            text="Dejar una reseña"
            href={"/signUp"}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
/* ver el tema de botones, y ver el flow si el currentUser matchea con el review.email, sacar el boton de dejar reseña */
