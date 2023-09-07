"use client";
import Button from "../../components/Button/Button";
import styles from "./signUp.module.css";
import { FcGoogle } from "react-icons/fc" 
import { useAppContext } from "@/context/AppContext";
export default function Login() {
  const { logInGoogle } = useAppContext();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.texts}>
            <h3>Primero necesitas identificarte</h3>
            <p>Podés iniciar sesión con tu cuenta de Google.</p>
          </div>
          <div className={styles.buttonsContainer}>
            <a className={styles.google} onClick={logInGoogle}>
              <FcGoogle/>
              Iniciar sesión con Google
            </a>
            <Button text="Volver" href={"/"} />
          </div>
        </div>
      </div>
    </>
  );
}
