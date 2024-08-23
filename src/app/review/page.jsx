"use client";
import Button from "../../components/Button/Button";
import { useAppContext } from "../../context/AppContext.jsx";
import { useEffect } from "react";
import styles from "./review.module.css";
export default function ReviewModal() {
  const {
    reseña,
    reviewChange,
    submitReview,
    currentUser,
    getReviews,
    reviews,
  } = useAppContext();
  useEffect(() => {
    getReviews();
  }, []);

  const send = reviews.some((review) => review.email === currentUser.email);
  return (
    <div className={styles.container}>
      <div className={styles.reviewContainer}>
        <div className={styles.userInfo}>
          <div className={styles.imgContainer}>
            <img src={currentUser.photoURL} width={40} height={40} />
          </div>
          <div className={styles.texts}>
            <h3>{currentUser.displayName}</h3>
            <p>Se mostrará públicamente</p>
          </div>
        </div>
        {/* <div className="starRatio"></div> */}
        <form onSubmit={submitReview} className={styles.sendReview}>
          <div className={styles.textarea_container}>
            <label htmlFor="opinion">Dejá tu opinión:</label>
            <textarea
              required
              id="opinion"
              name="opinion"
              value={reseña}
              onChange={reviewChange}
            ></textarea>
          </div>
          <div className={styles.buttons}>
            {send && <p>Ya enviaste una reseña con esta cuenta</p>}
            {send && <p>No puedes enviar mas de una.</p>}
            {!send && <Button type="submit" text="Publicar" background={"#0c0c0c"}/>}
            <Button text="Cancelar" href="/" terciary color={"#0c0c0c"} />
          </div>
        </form>
      </div>
    </div>
  );
}
