"use client";
import Button from "@/components/Button/Button";
import { useAppContext } from "@/context/AppContext";

export default function Buttons() {
  const { goToReview, logOut, currentUser, errorMessage } = useAppContext();

  return (
    <>
      <div className="buttons">
        <Button href="#promo" text="Ir a promociones" />
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
