import React from "react";
import Image from "next/image";
import image from "../../../public/leandro1.png";
import Button from "../../components/Button/Button";
export default function landing() {
  return (
    <div id="landingContainer">
      <div className="imgContainer">
        <Image
          src={image}
          width={315}
          height={486}
          alt="Foto de Leandro Aguilar"
        />
      </div>

      <div className="texts">
        <h1 className="texts_title">LEANDRO AGUILAR</h1>
        <p>
          Incidunt adipisci odio delectus consequatur dolore explicabo aperiam
          nisi quas porro maxime laborum fuga voluptates distinctio est sapiente
          nobis debitis, iste corporis! Nihil, quos voluptatum!
        </p>
      </div>
      <div className="buttons">
        <Button text="Ir a promociones" />
        <Button text="Dejar una reseña" />
      </div>
    </div>
  );
}
