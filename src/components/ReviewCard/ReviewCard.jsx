"use client";
import { useAppContext } from "../../context/AppContext";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./ReviewCard.module.css";

export default function ReviewCard() {
  const { getReviews, reviews } = useAppContext();

  useEffect(() => {
    getReviews();
  }, []);
  return (
    <>
      {reviews.map((review, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.userInfo}>
            <div className={styles.imgContainer}>
              <img src={review.photo} width={36} height={36} />
            </div>
            <div className={styles.texts}>
              <h3>{review.userName}</h3>
              <p>{review.email}</p>
            </div>
          </div>
          <div className={styles.userOpinion}>
            <p>{review.review}</p>
          </div>
        </div>
      ))}
    </>
  );
}
