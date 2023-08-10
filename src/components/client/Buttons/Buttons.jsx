"use client";
import Button from "@/components/Button/Button";
import { useAppContext } from "@/context/AppContext";

export default function Buttons() {
  const { goToReview, logOut, user, errorMessage } = useAppContext();

  return (
    <>
      <div className="buttons">
        <Button href="#promo" text="Ir a promociones" />
        {user ? <Button text="Dejar una reseña" onClick={goToReview} /> : ""}
        <p>{errorMessage}</p>
        {!user ? <Button text="Dejar una reseña" href={"/signUp"} /> : ""}
        {user ? (
          <Button text="cerrar sesión con Google" onClick={logOut} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
