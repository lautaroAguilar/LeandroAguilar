"use client";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import styles from "./Buttons.module.css";
import { font } from "@/app/font";
export default function Buttons() {
  const { goToReview, logOut, currentUser, errorMessage } = useAppContext();

  return (
    <>
      <div className={styles.container}>
        <Link className={styles.btnSecondary} href="#promo">Ir a promociones</Link>
        {currentUser ? (
          <Button
            className={font.className}
            text="Dejar una reseña"
            onClick={goToReview}
          />
        ) : (
          ""
        )}
        <p>{errorMessage}</p>
        {!currentUser ? (
          <Button
            className={font.className}
            text="Dejar una reseña"
            href={"/signUp"}
          />
        ) : (
          ""
        )}
        {currentUser ? (
          <Button
            className={font.className}
            text="cerrar sesión con Google"
            onClick={logOut}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
/* ver el tema de botones, y ver el flow si el currentUser matchea con el review.email, sacar el boton de dejar reseña */
