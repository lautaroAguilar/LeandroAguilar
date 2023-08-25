"use client";
import Image from "next/image";
import Button from "../../components/Button/Button";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";

export default function ReviewModal() {
  const { reseña, reviewChange, submitReview, currentUser, getReviews, reviews } =
    useAppContext();
  useEffect(() => {
    getReviews();
    reviewAlreadySend();
  }, []);

  const reviewAlreadySend = () => {
  };

  const send = reviews.some( review => review.email === currentUser.email);
  console.log(send);
  

  return (
    <div className="reviewModal_Container">
      <div className="userInfo">
        <div className="imgContainer">
          <Image />
        </div>
        <p>Bienvenido {currentUser.displayName}, buenos dias</p>
        <p>Se mostrará públicamente</p>
      </div>
      <div className="starRatio"></div>
      <form onSubmit={submitReview}>
        <label htmlFor="opinion">Deja tu opinión:</label>
        <textarea
          required
          id="opinion"
          name="opinion"
          value={reseña}
          onChange={reviewChange}
        ></textarea>
        {send && <p>Ya enviaste una reseña con esta cuenta</p>}
        <div className="buttons">
          <Button text="Cancelar" href="/" />
          {send ? <Button type="submit" text="no publicar" /> : <Button type="submit" text="Publicar" />}
        </div>
      </form>
    </div>
  );
}
