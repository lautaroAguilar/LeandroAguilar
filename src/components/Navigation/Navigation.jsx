import React from "react";
import Link from "next/link";
export default function Navigation() {
  return (
    <>
      <div className="Navigation">
        <ul>
          <li>
            <Link href="#aboutContainer">¿Quién soy?</Link>
          </li>
          <li>
            <Link href="#promoContainer">Promociones</Link>
          </li>
          <li>
            <Link href="#footerContainer">Contacto</Link>
          </li>
          <li>
            <Link href="#reseñaContainer">Reseña</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
