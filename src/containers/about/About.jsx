import { fontTitle } from "@/app/font";
import illustration from "../../../public/undraw1.png";
import styles from "./About.module.css"
import Image from "next/image";
export default function about() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.texts}>
          <h2 className={fontTitle.className}>¿Quién soy?</h2>
          <div className={styles.paragraphs}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, doloremque consectetur. Atque sint, earum sed eius
              nam doloribus autem error reprehenderit accusantium molestias illo
              obcaecati fuga voluptatibus explicabo excepturi eum.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, doloremque consectetur. Atque sint, earum sed eius
              nam doloribus autem error reprehenderit accusantium molestias illo
              obcaecati fuga voluptatibus explicabo excepturi eum.
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
