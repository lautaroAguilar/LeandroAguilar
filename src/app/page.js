"use client"
import styles from "./page.module.css";
import background from "../../public/Fastback.jpg";
import backgroundMobile from "../../public/fastback.jpeg";
import Landing from "../components/containers/Landing/Landing";
import Review from "@/components/containers/Review/Review";
import leandro from "../../public/leandro1.png";
import Image from "next/image";
import { fontTitle } from "./font";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { isMobile } = useAppContext();
  return (
    <main className={styles.main} id="root">
      <Landing />
      <div className={styles.miniAbout}>
        <h2 className={fontTitle.className}>SOBRE MI</h2>
        <div className={styles.container_texts}>
          <div className={styles.containerParagraph}>
            <p>
              Me llamo Leandro Aguilar, soy vendedor profesional. Hace mas de 10
              años asesoro con el mismo ánimo y entusiasmo a familias o
              empresas.
            </p>
            <p>
              Ya sea en su primer 0 KM o la renovación de unidad, busco la mejor
              opción de compra para cada caso, soy un representante comercial
              que busca un buen negocio para ambas partes.
            </p>
          </div>
          <Image
            src={leandro}
            alt="Leandro Aguilar"
            className={styles.cronistas}
          />
        </div>
      </div>
      <Review />
      <Image
        className={styles.background}
        src={isMobile ? backgroundMobile : background}
        alt="background iamge"
      />
    </main>
  );
}
