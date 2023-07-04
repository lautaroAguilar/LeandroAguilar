import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

export default function Card() {
  return (
    <>
      <div className="Card">
        <div className="content">
          <div className="imgContainer">
            <Image
              width={308}
              height={197}
              src={img}
              alt="Imagen ilustrativa del vehiculo"
            />
          </div>
          <div className="title">
            <h3>titulo de la card</h3>
          </div>
        </div>
        <Button text="Ver más" />
      </div>
    </>
  );
}
