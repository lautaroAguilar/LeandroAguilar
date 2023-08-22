"use client";
import Button from "@/components/Button/Button";
import { useAppContext } from "@/context/AppContext";
import styles from "./Buttons.module.css"
export default function Buttons() {
  const { goToReview, logOut, currentUser, errorMessage } = useAppContext();

  return (
    <>
      <div className={styles.container}>
        <Button className={styles.btnPrimary} href="#promo" text="Ir a promociones" />
        {currentUser ? <Button text="Dejar una reseña" onClick={goToReview} /> : ""}
        <p>{errorMessage}</p>
        {!currentUser ? <Button text="Dejar una reseña" href={"/signUp"} /> : ""}
        {currentUser ? (
          <Button text="cerrar sesión con Google" onClick={logOut} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
/* ver el tema de botones, y ver el flow si el currentUser matchea con el review.email, sacar el boton de dejar reseña */