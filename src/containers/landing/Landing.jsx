"use client";
import React from "react";
import Image from "next/image";
import image from "../../../public/leandro1.png";
import Buttons from "@/components/client/Buttons/Buttons";

import { useAppContext } from "@/context/AppContext";

export default function landing() {
  const { user } = useAppContext();
  console.log(user);
  return (
    <div id="landingContainer">
      {user && <p>bienvenido {user.displayName} </p>}

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
      <Buttons />
    </div>
  );
}
