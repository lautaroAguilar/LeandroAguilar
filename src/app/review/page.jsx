"use client";
import Image from "next/image";
import Button from "../../components/Button/Button";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";

export default function ReviewModal() {
  const { review, reviewChange, submitReview, user } = useAppContext();
  
  return (
    <div className="reviewModal_Container">
      <div className="userInfo">
        <div className="imgContainer">
          <Image />
        </div>
        <h3>Hola {user.displayName} ¿querés dejar tu reseña?</h3>
        <p>Se mostrará públicamente</p>
      </div>
      <div className="starRatio"></div>
      <form onSubmit={submitReview}>
        <label htmlFor="opinion">Deja tu opinión:</label>
        <textarea
          required
          id="opinion"
          name="opinion"
          value={review.reseña}
          onChange={reviewChange}
        ></textarea>
        <div className="buttons">
          <Button text="Cancelar" href="/" />
          <Button type="submit" text="Publicar" onClick={submitReview}/>
        </div>
      </form>
    </div>
  );
}
