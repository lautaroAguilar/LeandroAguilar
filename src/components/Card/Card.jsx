import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";
export default function Card() {
  const { getPromo, catalogue,  } = useAppContext();

  useEffect(() => {
    getPromo();
  }, []);

  return (
    <>
      {catalogue.map((cata) => (
        <div className="Card" key={cata.key}>
          <div className="content">
            <div className="imgContainer">
              <img
                width={308}
                height={197}
                src={cata.img}
                alt="Imagen ilustrativa del vehiculo"
              />
            </div>
            <div className="title">
              <h3>{cata.title}</h3>
              <p>{cata.subtitle}</p>
            </div>
          </div>
          <Button text="Ver más" />
        </div>
      ))}
    </>
  );
}
