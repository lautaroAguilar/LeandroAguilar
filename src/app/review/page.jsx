"use client"
import Image from "next/image";
import Button from "../../components/Button/Button";
import { useAppContext } from "@/context/AppContext";

export default function ReviewModal() {
  const { review, reviewChange, submitReview,  } = useAppContext();

  
  
  return (
    
        <div className="reviewModal_Container">
          <div className="userInfo">
            <div className="imgContainer">
              <Image />
            </div>
            <h3>userName</h3>
            <p>Se mostrará públicamente</p>
          </div>
          <div className="starRatio"></div>
          <form onSubmit={submitReview}>
          <label htmlFor="opinion">Deja tu opinión:</label>
          <textarea
            id="opinion"
            name="opinion"
            value={review.reseña}
            onChange={reviewChange}
            required
          ></textarea>
            <div className="buttons">
              <Button text="Cancelar" />
              <Button type="submit" text="Publicar" />
            </div>
          </form>
        </div>
     
    
  );
}
