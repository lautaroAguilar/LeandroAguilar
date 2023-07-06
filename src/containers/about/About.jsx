import illustration from "../../../public/undraw1.png";
import Image from "next/image";
export default function about() {
  return (
    <>
      <div id="aboutContainer">
        <div className="texts">
          <h2>¿Quién soy?</h2>
          <div>
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
        <div className="illustration">
          <Image
            src={illustration}
            width={348}
            height={209}
            alt="Ilustración de un vendedor"
          />
        </div>
      </div>
    </>
  );
}
