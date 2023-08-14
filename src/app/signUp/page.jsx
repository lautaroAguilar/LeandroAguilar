"use client"
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";

import { useAppContext } from "@/context/AppContext";
export default function Login() {
  
  
  const { logInGoogle, logInFacebook } = useAppContext();
  
  return (
    <>
     
        <div className="Login">
          <div className="texts">
            <h3>Primero necesitas identificarte</h3>
            <p>
              Podés iniciar sesión con tu cuenta de Google.
            </p>
          </div>
          <Button text="Iniciar sesión con Google" onClick={logInGoogle} />
          <Button text="Volver" href={"/"} />
        </div>
      
    </>
  );
} 
