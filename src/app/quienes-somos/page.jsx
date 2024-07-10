import { fontTitle } from "@/app/font";
import illustration from "../../../public/300mil.jpg";
import styles from "./quienesSomos.module.css";
import Image from "next/image";
export default function quienesSomos() {
  return (
    <>
      <div id="about" className={styles.aboutContainer}>
        <div className={styles.texts}>
          <h2 className={fontTitle.className}>¿Por qué elegirnos?</h2>
          <div className={styles.paragraphs}>
            <p>
              ¿No estás cansado de que siempre te lleguen promociones y nunca
              cumplan? ¿Que cada vez se te haga más difícil elegir entre un buen
              asesoramiento o una estafa?
            </p>
            <p>
              Si sigues buscando ese tipo de "ofertas", vas a tener los mismos
              resultados. Fiat Giama es la empresa NÚMERO 1 en PATENTAMIENTO a
              nivel país, contamos con las mejores condiciones de compra por ser
              la agencia First Class con la mayor cantidad de autos entregados.
            </p>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image
            src={illustration}
            width={2800}
            height={500}
            alt="Ilustración de un vendedor"
            className={styles.image}
          />
        </div>
      </div>
    </>
  );
}
