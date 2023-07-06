import Image from "next/image";
import { useState } from "react";
import Button from "../Button/Button";
export default function ReviewModal() {
  const [reseña, setReseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las acciones que desees con los datos del formulario
    console.log("reseña:", reseña);
  };
  return (
    <>
      <div className="reviewModal_Container">
        <div className="userInfo">
          <div className="imgContainer">
            <Image />
          </div>
          <h3>userName</h3>
          <p>Se mostrará públicamente</p>
        </div>
        <div className="starRatio"></div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="review">Reseña:</label>
          <textarea
            id="review"
            name="textarea"
            rows="10"
            cols="50"
            value={reseña}
            onChange={(e) => setReseña(e.target.value)}
          >
            Escriba su reseña
          </textarea>
          <div className="buttons">
            <Button text="Cancelar" />
            <Button type="submit" text="Publicar" />
          </div>
        </form>
      </div>
    </>
  );
}
