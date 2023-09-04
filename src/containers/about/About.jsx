import { fontTitle } from "@/app/font";
import illustration from "../../../public/300mil.jpg";
import styles from "./About.module.css";
import Image from "next/image";
export default function about() {
  return (
    <>
      <div id="about" className={styles.aboutContainer}>
        <div className={styles.texts}>
          <h2 className={fontTitle.className}>¿Por qué elegirnos?</h2>
          <div className={styles.paragraphs}>
            <p>
              ¿No estas cansado de que siempre te lleguen promociones y nunca
              cumplan? ¿Que cada vez se te haga mas difícil, elegir entre un buen
              asesoramiento o una estafa?
            </p>
            <p>
              Si seguís buscando ese tipo de “ofertas” vas a tener los mismos
              resultados. Fiat Giama es la empresa NUMERO 1 en PATENTAMIENTO a
              nivel país, contamos con las mejores condiciones de compra por ser
              la agencia First Class con mayor cantidad de autos entregados.
            </p>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image
            src={illustration}
            width={348}
            height={209}
            alt="Ilustración de un vendedor"
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
}
