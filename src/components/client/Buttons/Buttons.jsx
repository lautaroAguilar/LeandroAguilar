"use client"
import Button from "@/components/Button/Button";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";

export default function Buttons() {
  
  const { isLoggedIn , logOut} = useAppContext();
  
  
  const goTo = ()=>{
    /* ASDAS */
  }
  return (
    <>
      <div className="buttons">
        <a href="#promo">Ir a promociones</a>
        <Button text="Iniciar sesión" onClick={isLoggedIn} />
        <Button text="cerrar sesión con Google" onClick={logOut} />
      </div>
    </>
  );
}
