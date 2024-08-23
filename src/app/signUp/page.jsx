"use client";
import Button from "../../components/Button/Button";
import styles from "./signUp.module.css";
import { FcGoogle } from "react-icons/fc";
import { useAppContext } from "../../context/AppContext.jsx";
import authentication from "../../../public/authentication.svg";
import Image from "next/image";
export default function Login() {
  const { logInGoogle } = useAppContext();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.texts}>
            <h3>Primero necesitas identificarte</h3>
            <p>
              Para poder dejar una reseña, necesitamos saber quien sos. Por
              favor inicia sesión con Google para continuar.
            </p>
          </div>
          <Image
            src={authentication}
            alt="Ilustración de autenticación"
            style={{ width: "60%", height: "auto" }}
          />
          <div className={styles.buttonsContainer}>
            <Button
              text="Iniciar sesión con Google"
              onClick={logInGoogle}
              icon={<FcGoogle />}
              background={"#0c0c0c"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
